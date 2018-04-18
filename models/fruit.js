var mongoose = require('mongoose');

var FruitSchema = new mongoose.Schema({
  name: String,
  color: String,
});

var Fruit = mongoose.model('Fruit', BookSchema);

module.exports = Fruit;
