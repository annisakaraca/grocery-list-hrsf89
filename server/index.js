var express = require('express');
var app = express();
// var exampleData = require('../database/data.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/list', function(req, res) {
  let exampleData = [
    {id: 1, quantity: 5, description: "frozen pizza"},
    {id: 2, quantity: 10, description: "greek yogurt"},
    {id: 3, quantity: 2, description: "wine"},
    {id: 4, quantity: 1, description: "iced coffee"}
  ];
  res.send(exampleData);
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

