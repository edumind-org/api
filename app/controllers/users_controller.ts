import Role from '#models/role'
import User from '#models/user'
import { CreateUserValidator } from '#validators/create_user'
import { UpdateUserValidator } from '#validators/update_user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(CreateUserValidator)
    const role = await Role.query().where('slug', payload.role).first()

    if (!role) {
      return response.badRequest({ message: 'Role not found' })
    }

    const user = await User.create({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      identifier: payload.identifier,
      password: payload.password,
    })

    await user.related('roles').attach([role.id])

    return response.created(user)
  }

  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    return response.ok(user)
  }

  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(UpdateUserValidator)
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }
    
    user.merge(payload)
    await user.save()

    return response.ok(user)
  }

  async destroy({ params, response }: HttpContext) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }
    
    await user.delete()

    return response.ok({ message: 'User deleted successfully' })
  }
}