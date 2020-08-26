import { app } from './app'
import 'reflect-metadata'
import './database'

app.listen(5050, () => {
  console.log('🏃 Running Server')
})
