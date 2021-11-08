const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.post('/createOrder', function(req, res) {
    console.log(req.body);
    res.status(200).send({"message": "Order recieved!"});
})

app.listen(PORT, function() {
    console.log("Server running on localhost " + PORT);
})

module.exports = app;

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'orderList'
});

dbConn.connect(); 

app.get('/orderList', function (req, res) {
    dbConn.query('SELECT * FROM orderList', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'order list.' });
    });
});

app.post('/createOrder', function (req, res) {
 
    let user = req.body.order;
 
    if (!order) {
        return res.status(400).send({ error:true, message: 'Please provide order' });
    }
 
    dbConn.query("INSERT INTO orders SET ? ", { order: order }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New order has been created successfully.' });
    });
});