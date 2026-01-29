const express = require('express')
const mysql = require('mysql');
const app = express()
const path = require('path')
require('dotenv').config();
<<<<<<< HEAD:apps/app.js
const PORT = process.env.PORT;
=======
>>>>>>> 5c20c67d60b4f2e9bcd1399862f74d33567630e3:app.js

// Import Middleware
const logger = require('./middleware/logger')
app.use(logger)
const connection = require('./middleware/db_connect');

app.disable("x-powered-by")
// Dashboard
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/app1', (req, res) => {
  res.send('Hello this Apps 1!')
});

app.get('/app2', (req, res) => {
  res.send('Hello this App 2!')
});

app.get('/users', (req, res, next) => {
  const sql = "SELECT * FROM tb_data ORDER BY id desc"
  connection.query(sql,(error, fields) => {
    res.send(fields)
  })
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`)
})

module.exports = app