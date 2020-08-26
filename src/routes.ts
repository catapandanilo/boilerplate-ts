import { Router } from 'express'

const router = Router()

router.post('/catapan', (request, response) => {
  return response.status(201).send()
})

export { router }
