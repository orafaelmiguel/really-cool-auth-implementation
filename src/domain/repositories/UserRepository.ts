import { User } from '../entities/User'

export interface UserRepository {
  register(user: User): Promise<User>
}