var bodyparser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyparser.json());
}