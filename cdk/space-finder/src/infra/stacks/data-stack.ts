import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { getPrefixFromStack } from "../utils";

export class DataStack extends Stack {
  public readonly spacesTable: ITable;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const prefix = getPrefixFromStack(this);

    this.spacesTable = new Table(this, "SpacesTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: `spaces-table-${prefix}`,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
