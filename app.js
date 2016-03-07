var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var filePath = __dirname + '/data/subscribers.json';

app.post('/v1/subscribers', (req, res) => {
    var subscriber = {
        "email": req.body.email
    };
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        var subscribers = JSON.parse(data);
        subscribers.push(subscriber);
        fs.writeFile(filePath, JSON.stringify(subscribers), (err) => {
            if (err)  throw err;
            res.status(201).json(subscriber);
        });
    });
});

app.get('/v1/subscribers', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        var subscribers = JSON.parse(data);
        res.status(200).json(subscribers);
    });
});

app.listen(9001);