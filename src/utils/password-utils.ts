import bcrypt from 'bcrypt'

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 6)
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}