import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subscriptions from "aws-cdk-lib/aws-sns-subscriptions";
import { Construct } from "constructs";

export class CdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const inputBucket = new s3.Bucket(this, "cdk-app-input-bucket", {
      bucketName: "cdk-app-input-bucket",
    });

    const outputBucket = new s3.Bucket(this, "cdk-app-output-bucket", {
      bucketName: "cdk-app-output-bucket",
    });

    const emailTopic = new sns.Topic(this, "Topic", {
      topicName: "cdk-app-topic",
    });

    const email = "yu1434soccer@gmail.com";
    emailTopic.addSubscription(new subscriptions.EmailSubscription(email));
  }
}
