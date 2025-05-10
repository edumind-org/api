export const Permissions = {
    'manage-users': 'Allow to create, update, delete, and read users.'
} as const

export type PermissionSlugs = keyof typeof Permissions;
