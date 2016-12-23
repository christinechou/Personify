// var sentimentCtrl = require('./sentimentController.js');  //dont need yet
var sentimentRouter = require('express').Router();
var sentimentModel= require('./sentimentModel');
var sentimentController= require('./sentimentController');
var sentimentRouter = require('express').Router();
var request = require('request');
var auth = require('../config/config');

sentimentRouter.get('/', sentimentController.get);
sentimentRouter.post('/', sentimentController.post);


module.exports = sentimentRouter;
