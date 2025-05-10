import vine from '@vinejs/vine'

export const CreateUserValidator = vine.compile(vine.object({    
    firstName: vine.string().trim().minLength(2).maxLength(255),
    lastName: vine.string().trim().minLength(2).maxLength(255),
    email: vine.string().trim().minLength(2).maxLength(255),
    password: vine.string().trim().minLength(2).maxLength(255),
    role: vine.string().trim().minLength(2).maxLength(255),
    identifier: vine.string().trim().minLength(2).maxLength(255),
}))
