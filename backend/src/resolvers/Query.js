const { forwardTo } = require('prisma-binding')

const Query = {
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    )
  },
  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in')
    }
    return ctx.request.db.query.users({}, info)
  }
}

module.exports = Query
