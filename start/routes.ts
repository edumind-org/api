/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const LoginController = () => import('#controllers/auth/login_controller')

router.group(() => {
  router.post('/login', [LoginController, 'login'])
}).prefix('auth')
