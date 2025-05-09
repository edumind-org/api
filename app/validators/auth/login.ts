import vine from '@vinejs/vine'

export const LoginValidator = vine.compile(
    vine.object({
        identifier: vine.string().trim().maxLength(255).unique({
            table: 'users',
            column: 'identifier'
        }),
        password: vine.string().trim().minLength(8).maxLength(255),
    })
)
