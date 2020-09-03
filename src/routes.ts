import { Router } from 'express'
import { createUserController } from './usecases/create-user'

const router = Router()

router.post('/users', async (request, response) => {
  return await createUserController.handle(request, response)
})

export { router }
