import { PostgresUsersRepository } from '../../repositories/implementations/users-implementation-repository'
import { MailtrapMailProvider } from '../../providers/mail/implementations/mailtrap-mail-provider'
import { ValidateProvider } from '../../providers/validators/implementations/validate-provider'
import { CreateUserUseCase } from './create-user-usecase'
import { CreateUserController } from './create-user-controller'

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()
const validateProvider = new ValidateProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
  validateProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
