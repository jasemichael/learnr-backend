import AWS from 'aws-sdk'

export default function unmarshall(item) {
  return AWS.DynamoDB.Converter.unmarshall(item);
}