import { Router } from 'express'
import { RegisterController } from '../../app/controllers/register-controller'

export const router = Router()

const registerController = new RegisterController()

router.post('/register', registerController.register.bind(registerController))