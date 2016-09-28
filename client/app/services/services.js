angular.module('narrative.services', ['narrative.text', 'narrative.sentiment'])

.factory('Sentiment', function($http) {

  var results;

  var displayResults = function(data) {
    results = data;
  };
  var getResults = function() {

    return results;
  };

// Pulls data from database on server
  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'api/sentiment'
    })
    .then(function(resp) {
      return resp.data;
    })
  };
  var postOne = function(text) {

    return $http({
      method: 'POST',
      url: 'api/sentiment',
      data: { text: text }
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function(err) {
      console.log('Error in post',err)
    });
  };

  return {
    getResults: getResults,
    getAll: getAll,
    displayResults: displayResults,
    postOne: postOne
  };
})
