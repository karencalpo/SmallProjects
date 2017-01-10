var http = require('http');
var fs = require('fs');

var success = {};
var failure = {};

var myHandler = function(req,res) {
    console.log(req.headers);
    console.log(req.url);
    fs.readFile('./greet.txt', 'utf-8', function(err,data){
        
        if(err){
            res.writeHead(503, 'Something terrible happened', {"content-type":"application.json"});
            res.end(JSON.stringify(failure));
        } else {
            res.writeHead(200, 'All Good', {"content-type":"application/json"});
            success.message = data;
            res.end(JSON.stringify(success));
        }
    })
};

var server = http.createServer(myHandler);
server.listen(4001);
console.log("We are talking !!!!!");