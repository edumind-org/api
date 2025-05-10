import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Role from '#models/role'
import logger from '@adonisjs/core/services/logger'

export default class extends BaseSeeder {
  async run() {
    const user = await User.firstOrCreate({
      email: 'jdoe@edumind.com',
      identifier: 'john.doe',
    }, {
      email: 'jdoe@edumind.com',
      password: 'test1234',
      identifier: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
    })

    const role = await Role.query().where('slug', 'student').first()

    if (!role) {
      return logger.error('The ro le "student" was not found!')
    }

    await user.related('roles').attach([role.id])
    logger.info("The user " + user.identifier + " was created and assigned to the student role!")
  }
}