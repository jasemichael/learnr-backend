import dynamodb from '../dynamodb'

export default function createUsersTable() {
  dynamodb.createTable({
    AttributeDefinitions: [
      {
        AttributeName: "email",
        AttributeType: "S"
      }
    ],
    KeySchema: [
      {
        AttributeName: "email",
        KeyType: "HASH"
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    },
    TableName: "users"
  }).promise()
}