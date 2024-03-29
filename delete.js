const AWS = require("aws-sdk")
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.delete = (event, context, callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: event.pathParameters.id,
        },
    }
    dynamoDb.delete(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error)
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {
                    "Content-Type": "text/plain"
                },
                body: "Couldn't remove the todo item.",
            })
            return
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(params),
        }
        callback(null, response)
    })
}