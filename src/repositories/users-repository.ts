import { User } from '@src/entities/user'
import { PostgresUsersRepository } from './implementations/users-implementation-repository'
import { Repository } from 'typeorm'

export interface UsersRepository {
  findByEmail: (email: string) => Promise<User>
  save: (user: User) => Promise<void>

  getCustomRepository: () => PostgresUsersRepository
  getRepository: () => Repository<User>
}
