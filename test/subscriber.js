var request = require('request');

var options = {
    url: 'http://127.0.0.1:9001/v1/subscribers',
    method: 'POST',
    json: true,
    body: {
        email: "494168224@qq.com"
    }
};

request(options, (err, res, data) => {
    console.log('done');
});