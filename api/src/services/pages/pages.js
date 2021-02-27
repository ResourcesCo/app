import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import slugify from 'slugify'
import { nanoid } from 'nanoid'

export const pages = () => {
  requireAuth()
  return db.page.findMany()
}

export const Page = {
  actions: (_obj, { root }) =>
    db.page.findUnique({ where: { id: root.id } }).actions(),
}

const getUser = async (currentUser) => {
  if (!currentUser.sub) {
    console.log(
      'Made it past requireAuth with no currentUser subject. currentUser:',
      currentUser
    )
  }

  if (currentUser.id && currentUser.authId) {
    return currentUser
  }

  let user = await db.user.findFirst({
    where: { authId: currentUser.sub, authProvider: 'unknown' },
  })
  if (user) {
    const userUpdate = {
      authId: currentUser.sub,
      authProvider: 'netlify-identity',
    }
    await db.user.update({ where: { id: user.id }, data: userUpdate })
    return { ...user, ...userUpdate }
  }

  user = await db.user.create({
    data: {
      name: currentUser.email,
      authId: currentUser.sub,
      authProvider: 'netlify-identity',
      email: currentUser.email || currentUser.sub,
      bot: false,
    },
  })
  return user
}

export const createPage = async (
  { input: { title, body } },
  { context: { currentUser } }
) => {
  requireAuth()
  const user = await getUser(currentUser)

  const pageProps = {
    title,
    body,
    computed: {},
  }

  let name = slugify(title)
  let folder = ''
  let page
  try {
    page = await db.page.create({
      data: {
        ...pageProps,
        name,
        folder,
      },
    })
  } catch (e) {
    if (e.code === 'P2002') {
      name += `-${nanoid(7)}`
      page = await db.page.create({
        data: {
          ...pageProps,
          name,
          folder,
        },
      })
    } else {
      throw e
    }
  }
  await db.action.create({
    data: {
      userId: user.id,
      pageId: page.id,
      ...pageProps,
      name,
      folder,
      type: 'create',
    },
  })
  return page
}

export const editPage = async (
  { input: { name, folder, title, body } },
  { context: { currentUser } }
) => {
  requireAuth()
  const user = await getUser(currentUser)

  const pageProps = {
    title,
    body,
    computed: {},
  }

  let page
  page = await db.page.update({
    where: { folder_name: { folder, name } },
    data: {
      ...pageProps,
    },
  })
  await db.action.create({
    data: {
      userId: user.id,
      pageId: page.id,
      ...pageProps,
      name,
      folder,
      type: 'edit',
    },
  })
  return page
}

export const page = async ({ folder, name }) => {
  requireAuth()
  const page = db.page.findUnique({ where: { folder_name: { folder, name } } })
  return page
}
