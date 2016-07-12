var bodyparser = require('body-parser');
var morgan = require('morgan');
var express = require('express')

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyparser.json());
  app.use(express.static(__dirname + '/../../client'));
}