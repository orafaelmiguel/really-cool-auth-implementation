import { RegisterService } from "../../domain/services/register-service";
import { PrismaUserRepository } from "../../infra/prisma-repositories/prisma-user-repository";
import { generateToken } from "../../utils/jwt-utils";

export class RegisterAppUseCase {
  private authService: RegisterService

  constructor() {
    const userRepository = new PrismaUserRepository()
    this.authService = new RegisterService(userRepository)
  }

  async register(name: string, email: string, password: string) {
    const user = await this.authService.register(name, email, password)
    const token = generateToken(user.id)

    return { user, token }
  }
}