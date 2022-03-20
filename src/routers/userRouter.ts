import express from 'express'
import { verifyJWT } from '../middleware'
import { getUsers } from '../database'

const userRouter = express.Router()

//userRouter.use(verifyJWT)

userRouter.get('/', async (req, res) => {
  try {
    const users = await getUsers()
    res.send(users)
  } catch (err) {
    res.send('Couldn\'t get users')
  }
})

userRouter.post('/', async (req, res) => {
  res.send('create user')
})

userRouter.get('/:userId', (req, res) => {
  res.send('get user')
})

userRouter.put('/:userId', (req, res) => {
  res.send('put user')
})

userRouter.delete('/:userId', (req, res) => {
  res.send('delete user')
})

export default userRouter