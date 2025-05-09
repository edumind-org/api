import vine from '@vinejs/vine'

export const LoginValidator = vine.compile(
    vine.object({
        identifier: vine.string().trim().maxLength(255),
        password: vine.string().trim().minLength(8).maxLength(255),
    })
)
