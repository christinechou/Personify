var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sentimentSchema = new Schema({
  title: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  emotion: { type: Array },
  language: { type: Array },
  social: { type: Array }
});

var Sentiment = mongoose.model('Sentiment', sentimentSchema);

// Controller
var allSentiment = function(req, res, next) {
  console.log('all sentiment running')
}




module.exports = Sentiment;