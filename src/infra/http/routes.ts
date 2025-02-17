import { Router } from 'express'
import { RegisterController } from '../../app/controllers/register-controller'
import { LoginController } from '../../app/controllers/login-controller'

export const router = Router()

const registerController = new RegisterController()
const loginController = new LoginController()

router.post('/register', registerController.register.bind(registerController))
router.post('/login', loginController.login.bind(loginController))