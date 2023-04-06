var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Ci ammazziamo di pipeline!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Andrea Rognetta!aaaaaaaaa" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Wow!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
