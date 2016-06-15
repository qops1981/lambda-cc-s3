# lambda-cc-s3
Lambda function to push AWS CodeCommit Repo on trigger (push) to a select AWS S3 Bucket

The goal is to have this lambda function trigger on git push to codecommit master branch. The lambda function should copy the production files of the master branch to an identified S3 Bucket as fast as possible since Lambda charges based on time.

I am writing this function in NodeJS 4.2 as that is what version on NodeJS Lambda supports. I am not using python as I am using this as an opertunity to learn more NodeJS.

Concept:
- Static Variables
- Event Handeler
- - Git Clone to /tmp/
- - AWS S3 Sync /tmp/repo /bucket
- End