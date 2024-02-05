import { APIGatewayProxyEvent } from "aws-lambda";
import { JsonError } from "./validator";
import { randomUUID } from "crypto";

export function parseJson(arg: string) {
  try {
    return JSON.parse(arg);
  } catch (error) {
    throw new JsonError(error.message);
  }
}

export function createRandomId() {
  return randomUUID();
}

export function belongsToAdminsGroup(event: APIGatewayProxyEvent) {
  const groups = event.requestContext.authorizer?.claims["cognito:groups"];
  if (groups) {
    return (groups as string).includes("admins");
  }
  return false;
}
