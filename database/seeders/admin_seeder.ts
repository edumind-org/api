import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.firstOrCreate({
      email: 'mbiaggi@edumind.com',
      password: 'test1234',
      identifier: 'maxime.biaggi',
      firstName: 'Maxime',
      lastName: 'Biaggi',
    })

    await user.related('roles').attach([1])
  }
}