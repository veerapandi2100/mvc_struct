var express = require('express');
var app = express();

var pathRoute = require('./routes/app');
var middlware = require('./middlware/auth');

app.use(middlware.auth)

app.use('/api', pathRoute);

app.listen(3000, ()=>{
    console.log('The Port is running : 3000');
})