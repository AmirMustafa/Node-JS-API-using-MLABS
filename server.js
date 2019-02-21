// server.js
const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
var   db          = require('./config/db');

var app = express();
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());


// DB Credentials: amir, Admin@123
/*1.Account name - PriyankaAPI
 2.Username - Priyanka Yadav
3.Email - priyanka.virasat@gmail.com
4.Password - mongodbmlab1.com
DB - crud_amir_mongodb */

MongoClient.connect(db.url,{useNewUrlParser: true}, (err, database) => {
    if(err) return console.log(err);
    db = database.db("priyankadb");
    // db = database.db("crud_amir_mongodb");
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('Successfully connected on ' + port);
    });
});