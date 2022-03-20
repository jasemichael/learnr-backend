import { DynamoDB } from 'aws-sdk'

export default new DynamoDB({
  endpoint: process.env.DB_HOST,
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})