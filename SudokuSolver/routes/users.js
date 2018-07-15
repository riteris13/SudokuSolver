var express = require('express');

var router = express.Router();


// Load the SDK for JavaScript
var AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });

// Create DynamoDB document client
var dynamoDb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });


router.get('/', function (req, res, next) {
    dynamoDb.scan({ TableName: 'allusers' }, function (err, data) {
        if (err) {
            res.status("500").send(err);
        } else {
            res.status("200").send(data);
        }
    });
});

router.put('/', function (req, res, next) {
    dynamoDb.put({
        TableName: 'allusers',
        Item: { userid: '124', name: 'deadpool' }
    }, function (err, data) {
        if (err) {
            res.status("500").send(err);
        } else {
            res.status("200").send(data);
        }
    });
});

module.exports = router;