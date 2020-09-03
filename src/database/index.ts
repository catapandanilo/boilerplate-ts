import { createConnection } from 'typeorm'

createConnection()
  .then(async connection => {
    console.log('🏃 Database type:', connection.options.type)
  })
  .catch(console.error)
