var config = require('../config/database');
var db = config.db;
var Sentiment = config.Sentiment;


var resultsEmotion = {
  "anger": 0.0819374472,
  "joy": 0.2908755541,
  "sadness": 0.32404971120000003,
  "fear": 0.0875410214,
  "surprise": 0.2155962586
};

var resultsPersonality = {
  "openness": 0.5466192699,
  "extraversion": 0.5412140125,
  "agreeableness": 0.5064872848,
  "conscientiousness": 0.4777866979
}

Sentiment.findAll()  //FINDALL
  .then(function(tone) {

    // if (tone.length === 0) {
    //   Sentiment.create({
    //     title: 'Trump Speech',
    //     emotion: tone.document_tone.tone_categories[0].tones,
    //     language: tone.document_tone.tone_categories[1].tones,
    //     social: tone.document_tone.tone_categories[2].tones,
    // })
      // .then(function() {
      //   console.log('Survey data created')
      // })
    // }
  });
