import { omitBy, isUndefined } from 'lodash'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { getUser } from 'src/lib/utils/user'

export const users = () => {
  requireAuth()
  return db.user.findMany()
}

export const User = {
  actions: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).actions(),
}

export const updateCurrentUser = async (
  { name, username },
  { context: { currentUser } }
) => {
  const user = await getUser(currentUser)
  const updatedUser = await db.user.update({
    where: { id: user.id },
    data: omitBy({ name, username }, isUndefined),
  })
  return {
    id: updatedUser.id,
    name: updatedUser.name,
    username: updatedUser.username,
  }
}
