import { Request, Response } from "express";
import { LoginAppUseCase } from "../use-cases/login-app-use-case";

export class LoginController {
  private loginAppUseCase: LoginAppUseCase

  constructor() {
    this.loginAppUseCase = new LoginAppUseCase()
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const loggedUser = await this.loginAppUseCase.login(email, password)

      res.status(200).json(loggedUser)
    } catch (err) {
      if (err instanceof Error) {
        res.status(401).json({ error: err.message })
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' })
      }
    }
  }
}