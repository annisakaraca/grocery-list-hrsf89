var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('../database/index.js')
// var exampleData = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

let exampleData = [
  {id: 1, quantity: 5, description: "frozen pizza"},
  {id: 2, quantity: 10, description: "greek yogurt"},
  {id: 3, quantity: 2, description: "wine"},
  {id: 4, quantity: 1, description: "iced coffee"}
];

app.get('/list', function(req, res) {
  db.findList((data) => res.send(data))
  
})

app.post('/list', function(req, res){
  // exampleData.push({
  //   id: req.body.id,
  //   quantity: req.body.quantity,
  //   description: req.body.description
  // })
  db.save(req.body, (data) => {
    res.send(data);
  })
})


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

