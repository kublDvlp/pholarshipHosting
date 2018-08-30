const functions = require('firebase-functions');

const express = require("express");

const app1 = express();

app1.set('view engine', 'ejs');
app1.engine('ejs', require('ejs').__express);

app1.get("/hello", (request, response) => {
    response.send("Hello from Express on Firebase!");
});

app1.use('/board3', require('./board3'));

exports.app1 = functions.https.onRequest(app1);
/*
const api1 = functions.https.onRequest(app1);

module.exports = {
    api1
};
*/
