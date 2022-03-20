import jwt from 'jsonwebtoken'

export default function signJWT(payload: {}) {
  return jwt.sign(payload, process.env.JWT_SECRET)
}