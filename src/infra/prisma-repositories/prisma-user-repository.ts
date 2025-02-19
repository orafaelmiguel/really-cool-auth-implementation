import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import prisma from "../database/prisma";

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      return user ? new User(user.id, user.name, user.email, user.password) : null
  }

  async register(user: User): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    })

    return new User(createdUser.id, createdUser.name, createdUser.email, createdUser.password)
  }
}