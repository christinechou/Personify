// var sentimentCtrl = require('./sentimentController.js');  //dont need yet
var sentimentRouter = require('express').Router();
var request = require('request');
var auth = require('../config/config');

// sentimentRouter.get('/', function(req, res) {
//   res.send('response');
// })

sentimentRouter.get('/sentiment', function(req, res) {
  res.send('response');
})

sentimentRouter.post('/sentiment', function(req, res) {
  request({
    method: 'POST', 
    uri: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-18&sentences=false',
    auth: auth, 
    json: {
      text: 'Hello world.'
    }
  }, function(err, response, body) {
    if (err) {
      console.error(err);
      res.status(500).send('Post error.')
    } else {
      var tones = body.document_tone.tone_categories
      res.send([tones[0].tones, tones[1].tones, tones[2].tones]);
    }
  });
});

// sentimentRouter.get('/sentiment/:id', function(req, res) {
//   var id = req.params.id;
//   res.send(sentiment[id]); 
// }


module.exports = sentimentRouter;