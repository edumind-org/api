import User from '#models/user'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.firstOrCreate({
      email: 'mbiaggi@edumind.com',
      identifier: 'maxime.biaggi',
    }, {
      email: 'mbiaggi@edumind.com',
      password: 'test1234',
      identifier: 'maxime.biaggi',
      firstName: 'Maxime',
      lastName: 'Biaggi',
    })

    logger.info("The user " + user.identifier + " was created!")
    
    await user.related('roles').attach([1])

    logger.info("The user " + user.identifier + " was assigned to the admin role!")
  }
}