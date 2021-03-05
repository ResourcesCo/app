import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import slugify from 'slugify'
import { nanoid } from 'nanoid'

let roles

const getRole = async (name) => {
  if (roles && roles[name]) {
    return roles[name]
  } else {
    roles = {}
    for (const role of await db.role.findMany()) {
      roles[role.name] = role.id
    }
    return roles[name]
  }
}

const getPageLocation = (name, folder) => {
  return folder + (folder === '' ? '' : '/') + name
}

const getPageLocations = (name, folder) => {
  const primaryLocation = getPageLocation(name, folder)
  const locations =
    primaryLocation.toLowerCase() === primaryLocation
      ? [primaryLocation]
      : [primaryLocation, primaryLocation.toLowerCase()]
  return {
    create: locations.map((location) => ({
      location,
    })),
  }
}

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
  const roleId = await getRole('admin')

  let pageData = {
    ...pageProps,
    name,
    folder,
    roles: { create: [{ userId: user.id, roleId }] },
    locations: getPageLocations(name, folder),
    actions: {
      create: [
        {
          userId: user.id,
          ...pageProps,
          name,
          folder,
          type: 'create',
        },
      ],
    },
  }
  try {
    page = await db.page.create({
      data: pageData,
    })
  } catch (e) {
    console.log('Caught error with code', e.code)
    if (e.code === 'P2002') {
      name += `-${nanoid(7)}`
      const primaryLocation = getPageLocation(name, folder)
      const locations =
        primaryLocation.toLowerCase() === primaryLocation
          ? [primaryLocation]
          : [primaryLocation, primaryLocation.toLowerCase()]
      pageData = {
        ...pageData,
        name,
        locations: getPageLocations(name, folder),
      }
      page = await db.page.create({
        data: pageData,
      })
    } else {
      throw e
    }
  }
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
  let page = await db.page.findUnique({
    where: { folder_name: { folder, name } },
  })
  console.log({ page })
  if (!page) {
    console.log('again', { page }, getPageLocation(name, folder).toLowerCase())
    const location = await db.pageLocation.findUnique({
      where: { location: getPageLocation(name, folder).toLowerCase() },
      include: { page: true },
    })
    console.log({ location })
    if (location) {
      page = location.page
    }
  }
  return page
}
