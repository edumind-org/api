import User from '#models/user'
import { LoginValidator } from '#validators/auth/login'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
    public async login({request, response, auth}: HttpContext) {
        const payload = await request.validateUsing(LoginValidator)

        const user = await User.verifyCredentials(payload.identifier, payload.password)

        const token = await auth.use('api').createToken(user)

        response.ok(token)
    }
}