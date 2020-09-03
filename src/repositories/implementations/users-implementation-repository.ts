import { User } from './../../entities/user'
import { EntityRepository, Repository, getCustomRepository, getRepository } from 'typeorm'
import { UsersRepository } from '../users-repository'

@EntityRepository(User)
export class PostgresUsersRepository extends Repository<User> implements UsersRepository {
  async findByEmail (email: string): Promise<User> {
    const user: User | undefined = await this.findOne({
      where: {
        email
      }
    })
    return user as User
  }

  getCustomRepository (): PostgresUsersRepository {
    return getCustomRepository(PostgresUsersRepository)
  }

  getRepository (): Repository<User> {
    return getRepository(User)
  }
}
