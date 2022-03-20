import { PinpointEmail } from 'aws-sdk'
import dynamodb from '../dynamodb'

export default async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName:
    string, role: ('admin' | 'basic')
) {
  try {
    const res = await dynamodb.putItem({
      Item: {
        'email': {
          S: email
        },
        'password': {
          S: password
        },
        'firstName': {
          S: firstName
        },
        'lastName': {
          S: lastName
        },
        'role': {
          S: role
        }
      },
      TableName: "users"
    }).promise()
  } catch (err) {
    return err
  }
}