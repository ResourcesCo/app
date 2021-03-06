import { db } from 'src/lib/db'

export const getUser = async (currentUser) => {
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
