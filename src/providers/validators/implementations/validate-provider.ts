import { ValidatorProvider } from '../validator-provider'
import { validate, ValidationError } from 'class-validator'

export class ValidateProvider implements ValidatorProvider {
  async isValid (data: any): Promise<ValidationError[]> {
    return await validate(data)
  }
}
