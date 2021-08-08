function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Jon Kristian");

console.log(module);

const path = require("path");

let pathObject = path.parse(__filename);
console.log(pathObject);

const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require("fs");

fs.readdir("./", function (err, files) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Result', files);
    }
});

const EventEmitter = require("events");

const Logger = require("./logger.js");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", function (arg) {
    console.log("Listener called", arg);
});


logger.log("message");

const http = require("http");
const server = http.createServer(function(req, res) {
    if(req.url === "/") {
        res.write("Hello world");
        res.end();
    }

    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

/*server.on("connection", function(socket) {
    console.log("New connection");
}); */
server.listen(3000);

console.log('Listening on port 3000...');