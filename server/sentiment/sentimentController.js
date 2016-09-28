var Sequelize = require('sequelize');
var db = require('../config/database');
var request = require('request');
var Promise = require('bluebird');
var auth = require('../config/config');


module.exports = {
  get: (req,res) => {
    res.send('request served.')
  },

  post: (req, res) => {

    var params = JSON.stringify({
      api_key: auth.apiKey,
      data: 'Their fture belongs to those who believe in the beauty of their dreams.',
      threshold: 0.05
    });

    // Request for emotion
    // request( {
    //   method: 'POST',
    //   uri: 'https://apiv2.indico.io/emotion',
    //   contentType: "application/json; charset=utf-8",
    //   body: params
    // }, function(err, response, body) {
    //   if (err) {
    //     console.error(err);
    //     res.status(500).send('Post error.')
    //   } else {
    //     res.send(JSON.parse(body).results);
    //   }
    // } );

    // Request for personality
    request( {
      method: 'POST',
      uri: 'https://apiv2.indico.io/personality',
      contentType: "application/json; charset=utf-8",
      body: params
    }, function(err, response, body) {
      if (err) {
        console.error(err);
        res.status(500).send('Post error.')
      } else {
        res.send(JSON.parse(body).results);
      }
    } );


  }
}
