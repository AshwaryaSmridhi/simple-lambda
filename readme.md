Steps for setup: 
- AWS account
- Setup aws cli
- Setup aws profiles
- Install serverless globally 
- Follow these steps to enable API Gateway Logs: https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/
- Create a slack app https://api.slack.com/messaging/webhooks 

Autheticate into aws account
 - export AWS_PROFILE='ndo-general'
 OR (Recommended)
 - cat ~/.aws/config //to see what profiles you have
 - sls deploy --aws-profile <profile-name>

Steps to deploy: 
sls package
sls deploy

Postman: 
- add access and id tokens (aws)

Note: 
- Get rid of volta
- Acknowledgement of traditional owners of the land

https://dzone.com/articles/send-cloudwatch-alarms-to-slack-with-aws-lambda
https://forum.serverless.com/t/cloudwatch-alarm-for-notifying-lambda-errors/3906/3
https://api.slack.com/start/building
- Install @slack/webhook npm package https://slack.dev/node-slack-sdk/webhook


To do:
- Create SNS by click ops
- Integrate with slack

Notes section: 
Create encrypted parameter
```
aws ssm put-parameter \
    --profile <PROFILE_NAME>
    --name "<NAME>" \
    --value "<VALUE>" \
    --type "SecureString"
```

Update encrypted parameter
```
aws ssm put-parameter \
    --profile <PROFILE_NAME>
    --name "<NAME>" \
    --value "<VALUE>" \
    --type "SecureString"
    --override
```

List parameters 
```
aws ssm describe-parameters --profile <PROFILE_NAME>
```