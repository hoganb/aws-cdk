import * as cdk from "aws-cdk-lib";
import {
  RestApi,
  LambdaIntegration,
  LambdaIntegrationOptions,
} from "aws-cdk-lib/aws-apigateway";
import { Function, Runtime, Code } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create Lambda function
    const handler = new Function(this, "HelloWorldHandler", {
      runtime: Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: Code.fromInline(
        'exports.handler = async () => { return { statusCode: 200, body: "Hello, world!" }; };'
      ),
    });

    // Create REST API with Lambda integration
    const restApi = new RestApi(this, "HelloWorldAPI");
    const lambdaIntegrationOptions: LambdaIntegrationOptions = {
      proxy: true,
    };
    restApi.root.addMethod(
      "GET",
      new LambdaIntegration(handler, lambdaIntegrationOptions)
    );
  }
}
