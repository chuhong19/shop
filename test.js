var jwt = require('jsonwebtoken');

var data = { 
    name: 'giabao'
};
var secret = '123';
var secret2 = '456';
//var token = jwt.sign(data, secret);
var token2 = jwt.sign(data, secret2);
//code = token;
//code2 = token2;
var code = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ2lhYmFvIiwic2VjcmV0IjoiY2h1YmVob25nIiwiaWF0IjoxNjcyMTE4MzkyfQ.gVIP3GI17bKFxmcdT7kULsIAMQiJLe4HzqqB1d2iuWA';
var code2 = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ2lhYmFvIiwiaWF0IjoxNjcyMTE5MDkyfQ.1M8Z2GQIn16k2bX6DqvUciQPjVaYFuYf95gwYIsnp5M';
var data_back = jwt.verify(code, secret);
var data_back2 = jwt.verify(code2, secret2);
console.log('data 1: ',data_back);
console.log('data 2: ',data_back2);