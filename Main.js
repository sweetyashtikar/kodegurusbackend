const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

//database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myapp'
});

db.connect(function (err) {
    if (err) {
        console.log('DB error')
        throw err;
        return false;
    }
});

const sessionStore = new MySQLStore({
    expiration:(1825 * 86400 * 1000),
    endConnectionClose:false
}, db);

app.use(session({
    key:'',
    secret:'',
    store:sessionStore,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:(1825 * 86400 * 1000),
        httpOnly:false
    }
}));

new Router(app, db);

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000);