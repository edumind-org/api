import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const uniqueKey = 'slug'
    await Role.updateOrCreateMany(uniqueKey, [
      { name: 'Administrator', slug: 'admin', description: 'The administrator role can perform any action.' },
      { name: 'Student', slug: 'student', description: 'The student role can only perform actions related to their studies.' },
      { name: 'Teacher', slug: 'teacher', description: 'The teacher role can perform actions related to teaching.' },
      { name: 'Parent', slug: 'parent', description: 'The parent role can perform actions related to their children.' },
    ])
  }
}