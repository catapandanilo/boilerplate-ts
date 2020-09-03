import { UsersRepository } from '../users-repository'
import { User } from './../../entities/user'

export class PostgresUsersRepository implements UsersRepository {
  private readonly users: User[] = []

  async findByEmail (email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)
    return user as User
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
