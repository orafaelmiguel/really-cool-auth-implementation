import { hashPassword } from "../../utils/password-utils";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class RegisterService {
  constructor(private userRepository: UserRepository) {}

  async register(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await hashPassword(password)

    const user = new User(
      crypto.randomUUID(),
      name,
      email,
      hashedPassword
    )

    return this.userRepository.register(user)
  }
}