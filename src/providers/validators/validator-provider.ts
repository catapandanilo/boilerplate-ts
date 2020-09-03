import { ValidationError } from 'class-validator'

export interface ValidatorProvider {
  isValid: (data: any) => Promise<ValidationError[]>
}
