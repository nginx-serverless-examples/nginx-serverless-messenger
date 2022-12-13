const AWS = require('aws-sdk');


exports.handler = async event => {
  var docClient = new AWS.DynamoDB.DocumentClient();
  // Delete connection Id once web socket is disconnected.
  var params = {
    TableName: 'chatapp-userlist',
    Key: {
      connection_id: event.requestContext.connectionId
    }
  };
  await docClient.delete(params).promise();
  return "Disconnected";
};