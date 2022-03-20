import dynamodb from '../dynamodb'
import AWS from 'aws-sdk'
import unmarshall from '../unmarshall'

export default async function getUser(email: string) {
  try {
    const res = await dynamodb.getItem({
      Key: {
        "email": {
          S: email
        }
      },
      TableName: "users"
    }).promise()
    return unmarshall(res.Item)
  } catch (err) {
    throw new Error('Couldn\'t retrieve user!')
  }
}