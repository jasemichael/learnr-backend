import express from 'express'
import { userRouter, authRouter } from './routers'

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/auth', authRouter)
app.use('/users', userRouter)

app.listen(process.env.APP_PORT, () => {
  console.log(`learnr app listening on port ${process.env.APP_PORT}`)
})