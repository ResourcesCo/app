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

export const createPage = async (
  { input: { title, body } },
  { context: { currentUser } }
) => {
  requireAuth()
  let user = await db.user.findUnique({
    where: { authId: currentUser.sub },
  })
  if (!user) {
    user = await db.user.findFirst({
      where: { email: currentUser.email, authProvider: 'unknown' },
    })
    const userUpdate = {
      authId: currentUser.sub,
      authProvider: 'netlify-identity',
    }
    await db.user.update({ where: { id: user.id }, data: userUpdate })
    user = { ...user, ...userUpdate }
  }
  if (!user) {
    user = await db.user.create({
      data: {
        name: currentUser.email,
        authId: currentUser.sub,
        authProvider: 'netlify-identity',
        email: currentUser.email || currentUser.sub,
        bot: false,
      },
    })
  }

  const pageProps = {
    name: title,
    body,
    metadata: {},
    computed: {},
  }

  let path = slugify(title)
  let page
  try {
    page = await db.page.create({
      data: {
        ...pageProps,
        path,
      },
    })
  } catch (e) {
    if (e.code === 'P2002') {
      path += `-${nanoid(7)}`
      page = await db.page.create({
        data: {
          ...pageProps,
          path,
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
      path,
      type: 'create',
    },
  })
  return page
}

export const page = async ({ path }) => {
  requireAuth()
  const page = db.page.findUnique({ where: { path } })
  return page
}
