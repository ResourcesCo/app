import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const users = () => {
  requireAuth()
  return db.user.findMany()
}

export const User = {
  actions: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).actions(),
}
