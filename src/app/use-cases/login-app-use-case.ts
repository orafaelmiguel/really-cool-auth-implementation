import { LoginService } from "../../domain/services/login-service";
import { PrismaUserRepository } from "../../infra/prisma-repositories/prisma-user-repository";
import { generateToken } from "../../utils/jwt-utils";

export class LoginAppUseCase {
  private loginService: LoginService

  constructor() {
    const userRepository = new PrismaUserRepository()
    this.loginService = new LoginService(userRepository)
  }

  async login(email: string, password: string) {
    const user = await this.loginService.login(email, password)
    const token = generateToken(user.id)
    
    return { user, token }
  }
}