import { User } from '@src/entities/user'
import { CreateUserRequestDTO } from './create-user-dto'
import { UsersRepository } from '@src/repositories/users-repository'
import { ValidatorProvider } from '@src/providers/validators/validator-provider'
import { MailProvider } from '@src/providers/mail/mail-provider'

export class CreateUserUseCase {
  constructor (
    private readonly usersRepository: UsersRepository,
    private readonly mailProvider: MailProvider,
    private readonly validator: ValidatorProvider
  ) { }

  async execute (data: CreateUserRequestDTO): Promise<void> {
    const isUserAlreadyExists = await this.isUserAlreadyExists(data.email)
    if (isUserAlreadyExists) {
      throw new Error('User already exists.')
    }

    const repository = this.usersRepository.getRepository()

    const user = repository.create(data)

    const validationErrors = await this.validator.isValid(user)

    if (validationErrors.length > 0) {
      throw new Error(`[CreateUser] ${validationErrors.map(error => JSON.stringify(error.constraints))}`)
    }

    await repository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'CSH - Solutions',
        email: 'catapan@csh.com'
      },
      subject: 'Welcome to the platform',
      body: '<p>You can now login to our platform.</p>'
    })
  }

  private async isUserAlreadyExists (email: string): Promise<User> {
    const customRepository = this.usersRepository.getCustomRepository()
    return await customRepository.findByEmail(email)
  }
}
