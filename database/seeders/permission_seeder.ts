import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Permission from '#models/permission'
import Role from '#models/role'

export default class extends BaseSeeder {
  async run() {
    const uniqueKey = 'slug'
    const permission = await Permission.updateOrCreate({ slug: uniqueKey }, {
      slug: 'manage-users',
      name: 'Manage Users',
      description: 'Allow to create, read, update and delete users',
    })

    const admin = await Role.query().where('slug', 'admin').firstOrFail()
    await admin.related('permissions').attach([permission.id])
  }
}