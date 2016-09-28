var Sequelize = require('sequelize');
var db = require('../config/database');
var request = require('request');
var Promise = require('bluebird');
var auth = require('../config/config');


/**
 * Sort personas by score in decreasing value
 * @param {object} object containing values to sort
 * @returns {Array} array of sorted items in [[key,value],[key,value],...] format.
 */
var sortPersonas = function(personas) {
  var items = [];
  var image = {
    mediator: '../../styles/assets/infp-mediator.png',
    campaigner: '../../styles/assets/enfp-campaigner.png',
    commander: '../../styles/assets/entj-commander.png',
    debater: '../../styles/assets/entp-debater.png',
    executive: '../../styles/assets/estj-executive.png',
    entrepreneur: '../../styles/assets/estp-entrepreneur.png',
    architect: '../../styles/assets/intj-architect.png',
    virtuoso: '../../styles/assets/istp-virtuoso.png',
    advocate: '../../styles/assets/infj-advocate.png',
    adventurer: '../../styles/assets/isfp-adventurer.png',
    protagonist: '../../styles/assets/enfj-protagonist.png',
    entertainer: '../../styles/assets/esfp-entertainer.png',
    defender: '../../styles/assets/isfj-defender.png',
    logistician: '../../styles/assets/intp-logistician.png',
    consul: '../../styles/assets/esfj-consul.png',

  }
  for (var key in personas) {
    if (personas.hasOwnProperty(key)) {
      items.push([key, personas[key], image[key]]);
    }
  }
  // [['adventurer', 0.0523], ['entrepreneur', 0.4325], ...]
  items.sort((a,b) => {
    return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
  });
  return items;
}




module.exports = {
  get: (req,res) => {
    res.send('request served.')
  },

  post: (req, res) => {

    var getPersona = function() {
      var paramsPersona = JSON.stringify({
        api_key: auth.apiKey,
        data: req.body.text,
        threshold: 0.05,
        persona: true
      });
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          uri: 'https://apiv2.indico.io/personality',
          contentType: "application/json; charset=utf-8",
          body: paramsPersona
        }, (err, response, body) => {
          if (err) {
            reject('Post error:',err)
          } else {
            resolve(JSON.parse(body).results)
          }
        });
      })
    };

    var getPersonality = function() {
      var params = JSON.stringify({
        api_key: auth.apiKey,
        data: req.body.text,
        threshold: 0.05
      });
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          uri: 'https://apiv2.indico.io/personality',
          contentType: "application/json; charset=utf-8",
          body: params
        }, function(err, response, body) {
          if (err) {
            console.error(err);
            reject('Post error.',err)
          } else {
            resolve(JSON.parse(body).results);
          }
        });
      });
    };

    var result = {};

    getPersona()
    .then((data1) => {
      result['persona'] = sortPersonas(data1);
      return getPersonality();
    })
    .then((data2) => {
      result['personality'] = data2;
      console.log('Sending final results:',result)
      res.send(result)
    })
    .catch((err) => {
      console.log('Promise chain failed:',err)
    })
    // Request for persona
    // request( {
    //   method: 'POST',
    //   uri: 'https://apiv2.indico.io/personality',
    //   contentType: "application/json; charset=utf-8",
    //   body: paramsPersona
    // }, function(err, response, body) {
    //   if (err) {
    //     console.error(err);
    //     res.status(500).send('Post error.')
    //   } else {
    //     res.send(JSON.parse(body).results);
    //   }
    // } );

    // Request for personality
    // request( {
    //   method: 'POST',
    //   uri: 'https://apiv2.indico.io/personality',
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


  }
}
