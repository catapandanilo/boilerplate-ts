import { PostgresUsersRepository } from '../../repositories/implementations/users-implementation-repository'
import { MailtrapMailProvider } from '../../providers/implementations/mailtrap-mail-provider'
import { CreateUserUseCase } from './create-user-usecase'
import { CreateUserController } from './create-user-controller'

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
