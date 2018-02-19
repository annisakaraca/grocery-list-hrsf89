const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocerylist');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to db!')
});

var itemSchema = mongoose.Schema({
  description: String,
  quantity: Number
});

var Item = mongoose.model('Item', itemSchema);

var save = function(itemObj, callback) {
  var newItem = new Item({
    description: itemObj.description,
    quantity: itemObj.quantity
  });

  newItem.save(function (err, item) {
    if (err) return console.error(err);
    console.log('saved item to list');
    callback();
  })
};

var findList = function(callback) {
  Item.find(function (err, items) {
    if (err) return console.error(err);
    callback(items);
  })
}

module.exports.save = save;
module.exports.findList = findList;
