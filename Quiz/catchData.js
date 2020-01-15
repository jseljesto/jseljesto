let fs = require('fs');
let retrievedData = fs.readFileSync('./data.json');
let parsedData = JSON.parse(retrievedData);
console.log(parsedData);

let http = require('http');
http.createServer(function (req,res) {
    fs.readFile("quiz.html", function(err,data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);