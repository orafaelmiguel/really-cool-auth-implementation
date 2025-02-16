import { User } from '../entities/User'

export interface UserRepository {
  register(name: string, email:string, password: string): Promise<User>
}