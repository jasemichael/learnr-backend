import dynamodb from '../dynamodb'
import unmarshall from '../unmarshall'

export default async function getUsers() {
  try {
    const res = await dynamodb.scan({
      TableName: 'users'
    }).promise()
    return res.Items.map(item => unmarshall(item))
  } catch (err) {
    throw new Error('Couldn\'t retrieve user!')
  }
}