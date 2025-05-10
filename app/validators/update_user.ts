import vine from '@vinejs/vine'

export const UpdateUserValidator = vine.compile(vine.object({    
    firstName: vine.string().trim().minLength(2).maxLength(255).optional(),
    lastName: vine.string().trim().minLength(2).maxLength(255).optional(),
    email: vine.string().trim().minLength(2).maxLength(255).optional(),
    password: vine.string().trim().minLength(2).maxLength(255).optional(),
    role: vine.number().min(1).max(255).optional(),
    identifier: vine.string().trim().minLength(2).maxLength(255).optional(),
}))
