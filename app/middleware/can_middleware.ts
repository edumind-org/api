import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class CanMiddleware {
  async handle(ctx: HttpContext, next: NextFn, slug: string) {
    await ctx.auth.use('api').authenticate()
    const user = ctx.auth.user

    if (!user) {
      return ctx.response.unauthorized()
    }

    if (await User.hasPermission(user, slug)) {
      return next()
    }

    return ctx.response.forbidden()
  }
}