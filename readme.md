Steps for setup: 
- AWS account
- Setup aws cli
- Setup aws profiles
- Install serverless globally 

Note: 
- Get rid of volta
- http endpoint - Post man install, hit on the browser 

Postman: 
- add access and id tokens (aws)

Autheticate into aws account
 - export AWS_PROFILE='nd-train-general'
 OR (Recommended)
 - sls deploy --aws-profile <profile-name>

Steps to deploy: 
sls package
sls deploy