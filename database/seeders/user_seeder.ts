import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Role from '#models/role'

export default class extends BaseSeeder {
  async run() {
    const user = await User.firstOrCreate({
      email: 'jdoe@edumind.com',
      password: 'test1234',
      identifier: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
    })

    const role = await Role.query().where('slug', 'student').firstOrFail()

    await user.related('roles').attach([role.id])
  }
}