const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flightbookingsystem',
insecureAuth : true
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all flight
app.get('/api/flight',(req, res) => {
  let sql = "SELECT * FROM flight";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single product
app.get('/api/flight/:id',(req, res) => {
  let sql = "SELECT * FROM flight_details,flight WHERE flight_details.flight_id = '"+req.params.id+"' && flight.flight_name = '"+req.params.id+"'";

  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

app.get('/api/users/:id',(req, res) => {
  let sql = "SELECT * FROM user WHERE user_name = '"+req.params.id+"'";

  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
// app.post('/api/flight',(req, res) => {
//   let data = {flight_id: req.body.flight_id, product_price: req.body.product_price};
//   let sql = "INSERT INTO flight SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//update product
// app.put('/api/flight/:id',(req, res) => {
//   let sql = "UPDATE flight SET flight_id='"+req.body.flight_id+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//Delete product
app.delete('/api/flight/:id',(req, res) => {
  let sql = "DELETE FROM flight WHERE flight_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(8124, "127.0.0.1",() =>{
  console.log('Server started on port 3000...');
});