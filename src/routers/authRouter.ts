import express from 'express'
import { signJWT } from '../middleware'
import { createUser, getUser } from '../database'

const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {
  try {
    const user = await getUser(req.body.email)
    const token = signJWT(user)
    res.send(token)
  } catch (err) {
    res.send("Email or password is incorrect!")
  }
})

authRouter.post('/register', async (req, res) => {
  try {
    await getUser(req.body.email)
    res.send('Email already taken!')
  } catch (err) {
    try {
      await createUser(
        req.body.email,
        req.body.password,
        req.body.firstName,
        req.body.lastName,
        'basic'
      )
      res.send('register successful')
    } catch (err) {
      res.send('error occurred!')
    }
  }
})

authRouter.post('/logout', (req, res) => {
  res.send('logout')
})

export default authRouter