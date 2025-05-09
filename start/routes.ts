/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = () => import('#controllers/users_controller')
const LoginController = () => import('#controllers/auth/login_controller')

router.group(() => {
  router.post('/login', [LoginController, 'login'])
}).prefix('auth')
router.resource('users', UsersController).apiOnly().use("*", [middleware.auth(), middleware.can('manage-users')])
