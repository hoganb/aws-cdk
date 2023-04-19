# aws-cdk

Deploy serverless hello world app to AWS using AWS CDK, API Gateway and Lambda (Node.js + TypeScript).

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## AWS services used
* AWS Free Tier
* AWS CDK
* AWS CloudFormation
* AWS S3
* AWS DynamoDB
* AWS ECR
* AWS SSM
* AWS API Gateway
* AWS Lambda (Node.js)
* AWS SDK for JavaScript
* AWS IAM

## Steps taken
* Created IAM user with user group that has full access permissions for CloudFormation, API Gateway, Lambda and DynamoDB
* Configured MFA on the IAM user
* Installed AWS CLI tool (MSI installer)
* Installed AWS CDK CLI tool (`npm i -g aws-cdk`)
* Init a CDK app using `cdk init app --language typescript`
* Create a hello world Lambda API Gateway
* Extended user group permissions to include full access to IAM, ECR, S3 and SSM
* Run `cdk bootstrap` to prepare AWS account to deploy CDK apps, it sets up an S3 bucket and a DynamoDB table that the CDK uses to store and manage your deployment assets and state (see CloudFormation > CDKToolkit stack)
* Deploy stack to AWS using `cdk deploy`
* Test using postman
* Destroy stack from AWS using `cdk destroy`

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
