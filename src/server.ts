import dotenv from 'dotenv'
import { app } from './app'
import 'reflect-metadata'
import './database'

dotenv.config()

app.listen(5050, () => {
  console.log('🏃 Running Server')
})
