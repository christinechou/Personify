angular.module('narrative.services', ['narrative.text', 'narrative.sentiment'])

.factory('Sentiment', function($http) {

  var results;
  
  var displayResults = function(data) {
    results = data;
  };
  var getResults = function() {
    console.log('results',results)
    return results;
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'api/sentiment' 
    })
    .then(function(resp) {
      console.log('success on get');
      return resp.data;
    })
  };
  var postOne = function(text) {
    console.log('postOne function working with input text:',text)
    return $http({
      method: 'POST',
      url: 'api/sentiment',
      data: { text: text }
    })
    .then(function (resp) {
      console.log('RESP:',resp.data)
      return resp.data;
    });
  };

  return {
    getResults: getResults,
    getAll: getAll,
    displayResults: displayResults,
    postOne: postOne
  };
})





// Sample data:
// score  0.101207
// tone_id  "anger"
// tone_name  "Anger"

// score  0.1655
// tone_id  "disgust"
// tone_name  "Disgust"

// score  0.111166
// tone_id  "fear"
// tone_name  "Fear"

// score  0.611201
// tone_id  "joy"
// tone_name  "Joy"

// score  0.216097
// tone_id  "sadness"
// tone_name  "Sadness"
//////////////////////////////////
// donald trump speech
// score  0.169956 | 19.4
// tone_id  "anger"
// tone_name  "Anger"

// score  0.251335 | 25.
// tone_id  "disgust"
// tone_name  "Disgust"

// score  0.214344
// tone_id  "fear"
// tone_name  "Fear"

// score  0.296852
// tone_id  "joy"
// tone_name  "Joy"

// score  0.26575
// tone_id  "sadness"
// tone_name  "Sadness"


// score  0.546
// tone_id  "openness_big5"
// tone_name  "Openness"

// score  0.571
// tone_id  "conscientiousness_big5"
// tone_name  "Conscientiousness"

// score  0.967
// tone_id  "extraversion_big5"
// tone_name  "Extraversion"

// score  0.743
// tone_id  "agreeableness_big5"
// tone_name  "Agreeableness"

// score  0.401
// tone_id  "emotional_range_big5"
// tone_name  "Emotional Range"