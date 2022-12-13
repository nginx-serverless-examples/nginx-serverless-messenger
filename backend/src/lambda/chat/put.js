const AWS = require('aws-sdk');
var moment = require('moment');
exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const inputObject = JSON.parse(event.body);

    // Get list of users who connected in the chatting room.
    var params = {
        TableName: 'chatapp-userlist',
        IndexName: 'room_id-user_id-index',
        KeyConditionExpression: '#HashKey = :hkey',
        ExpressionAttributeNames: { '#HashKey': 'room_id' },
        ExpressionAttributeValues: {
            ':hkey': inputObject.room_id
        }
    };
    const result = await docClient.query(params).promise();
    const now = moment().valueOf();

    // Store chatting in DB.
    const item = {
        room_id: inputObject.room_id,
        timestamp: now,
        message: inputObject.text,
        user_id: inputObject.user_id,
        name: inputObject.name,
    };
    var params = {
        TableName: 'chatapp-chat-messages',
        Item: item
    };
    await docClient.put(params).promise();

    // Send chatting message to the users who connected into the room.
    const apigwManagementApi = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `${process.env.socket_api_gateway_id}.execute-api.us-east-2.amazonaws.com/dev`
    });
    if (result.Items) {
        const postCalls = result.Items.map(async ({ connection_id }) => {
            const dt = { ConnectionId: connection_id, Data: JSON.stringify(item) };
            try {
                await apigwManagementApi.postToConnection(dt).promise();
            } catch (e) {
                console.log(e);
                // Delete the connection Id if it is disconnected.
                if (e.statusCode === 410) {
                    console.log(`Found stale connection, deleting ${connection_id}`);
                    var params = {
                        TableName: 'chatapp-userlist',
                        Key: {
                            connection_id: connection_id
                        }
                    };
                    await docClient.delete(params).promise();
                }
            }
        });
        try {
            await Promise.all(postCalls);
        } catch (e) {
            return { statusCode: 500, body: e.stack };
        }
    }
    let response = {
        isBase64Encoded: true,
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Expose-Headers": "*",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(result.Items)
    };
    return response
};