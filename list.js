import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib.js";

export async function main(event, context, callback){
    // Request body is passed in as a JSON embedded string in 'event.body'
    const params = {
        TableName: "notes",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        callback(null, success(result.Items));
    } catch(e){
        console.log(e);
        callback(null, failure({status: false}));        
    }
}