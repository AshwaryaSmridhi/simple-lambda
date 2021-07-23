Steps for setup: 
- AWS account
- Setup aws cli
- Setup aws profiles
- Install serverless globally 
- Follow these steps to enable API Gateway Logs: https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/

Autheticate into aws account
 - export AWS_PROFILE='nd-train-general'
 OR (Recommended)
 - sls deploy --aws-profile <profile-name>

Steps to deploy: 
sls package
sls deploy

Postman: 
- add access and id tokens (aws)

Note: 
- Get rid of volta
- Acknowledgement of traditional owners of the land




To do:
- Create SNS by click ops
- Integrate with slack