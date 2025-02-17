import { InvalidCredentialsError } from "../../infra/errors/invalid-credentials";
import { comparePassword } from "../../utils/password-utils";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class LoginService {
  constructor(private userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email)

    if (!user || !(await comparePassword(password, user.password))) {
      throw new InvalidCredentialsError()
    }

    return user
  }
}