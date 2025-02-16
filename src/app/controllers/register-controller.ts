import { Request, Response } from "express";
import { RegisterAppUseCase } from "../use-cases/register-app-use-case";

export class RegisterController {
  private registerAppUseCase: RegisterAppUseCase

  constructor() {
    this.registerAppUseCase = new RegisterAppUseCase()
  }

  async register(req: Request, res: Response): Promise<any> {
    try {
      const { name, email, password } = req.body

      const createdUser = await this.registerAppUseCase.register(name, email, password)

      return res.status(200).json(createdUser)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}