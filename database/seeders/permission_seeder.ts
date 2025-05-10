import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Permission from '#models/permission'
import { Permissions } from '#enums/permission'
import logger from '@adonisjs/core/services/logger'

export default class extends BaseSeeder {
  async run() {
    const uniqueKey = 'slug'
    const allPermissions = Object.entries(Permissions).map(([slug, description]) => ({
      slug,
      description,
    }))

    allPermissions.forEach(async (permission) => {
      const p = await Permission.firstOrCreate({ slug: permission.slug }, { ...permission, name: permission.slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") })
      logger.info("The permission " + p.slug + " was created!")
    })
  }
}