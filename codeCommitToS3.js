// Require nodegit
var Git = require("nodegit");

// Your CodeCommit Repo
var myCodeCommitRepo = 'https://github.com/qops1981/lambda-cc-s3.git';

// Pointer to the tmp path
var tmpPath = '/tmp/lambda-cc-s3';

Git.Clone("myCodeCommitRepo", "tmpPath");

// Lambda Function Handeler
/*exports.codeCommitToS3 = function(event, context, callback) {
   console.log(localPath); 
}*/