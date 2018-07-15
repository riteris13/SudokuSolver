var express = require('express');

var router = express.Router();

var gridTableRows = [];
var gridTableCol = [];

var i;
var k;

for (i = 0; i < 9; i++) {
    for (k = 0; k < 9; k++) {
        gridTableCol[k] = k+1;
    }
    gridTableRows[i] = gridTableCol;
}

router.get('/', function (req, res, next) {
    res.render('pages/grid', { title: 'Grid', gridTableRows: gridTableRows });
});

module.exports = router;

//// Load the SDK for JavaScript
//var AWS = require('aws-sdk');

//AWS.config.update({ region: 'eu-west-1' });

//// Create DynamoDB document client
//var dynamoDb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });


//router.get('/', function (req, res, next) {
//    dynamoDb.scan({ TableName: 'allusers' }, function (err, data) {
//        if (err) {
//            res.status("500").send(err);
//        } else {
//            res.status("200").send(data);
//        }
//    });
//});

//router.put('/', function (req, res, next) {
//    dynamoDb.put({
//        TableName: 'allusers',
//        Item: { userid: '124', name: 'deadpool' }
//    }, function (err, data) {
//        if (err) {
//            res.status("500").send(err);
//        } else {
//            res.status("200").send(data);
//        }
//    });
//});
