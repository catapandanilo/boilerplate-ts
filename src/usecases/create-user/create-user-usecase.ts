import { UsersRepository } from '../../repositories/users-repository'
import { MailProvider } from '../../providers/mail-provider'
import { User } from '../../entities/user'
import { CreateUserRequestDTO } from './create-user-dto'
import { getRepository } from 'typeorm'
import { validate } from 'class-validator'

export class CreateUserUseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly mailProvider: MailProvider
  ) {}

  async execute (data: CreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const repo = getRepository(User)

    const user = repo.create(data)

    const errors = await validate(user)

    if (errors.length === 0) {
      console.log('danilo errors.length === 0', user)
    }

    console.log('danilo', user)
  }
}
