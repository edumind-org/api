import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Permission from '#models/permission'
import { Permissions } from '#enums/permission'

export default class extends BaseSeeder {
  async run() {
    const uniqueKey = 'slug'
    const allPermissions = Object.entries(Permissions).map(([slug, description]) => ({
      slug,
      description,
    }))

    await Permission.updateOrCreateMany(uniqueKey, allPermissions)
  }
}