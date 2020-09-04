import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
  constructor (
    private readonly createUserUseCase: CreateUserUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body

    const httpResponse = await this.createUserUseCase.execute({
      name,
      email,
      password
    })

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
