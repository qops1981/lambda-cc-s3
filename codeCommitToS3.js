#!/usr/bin/env node

var fils = require("fs"),			// FileSystem
    path = require("path"),			// Path
    sgit = require("simple-git")(),	// Git Interface
    tloc = '/tmp/wrd-resume-site/',	// Repo Local Store
	repo = 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/wrd-resume-site';	// Git Repo Location

sgit.clone(repo, tloc).then(function(){

	fils.readdir(tloc, function (err, files) {
		if (err) {
        throw err;
    	}

	    files.map(function (file) {
	        return path.join(tloc, file);
	    }).filter(function (file) {
	        return fils.statSync(file).isFile();
	    }).forEach(function (file) {
	        console.log("%s (%s)", file, path.extname(file));
	    });
	});

});


