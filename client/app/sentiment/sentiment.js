angular.module('narrative.sentiment', ['narrative.text'])
.factory('Sentiment', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'api/sentiment' //????
    })
  };
  var postOne = function(text) {
    return $http({
      method: 'POST',
      url: 'api/sentiment',
      data: text
    })
    .then(function (resp) {
      console.log('RESP:',resp)
      return resp.data;
    });
  };

  return {
    getAll: getAll,
    postOne: postOne
  };
})

.controller('SentimentCtrl', function($scope, $window, $location) {
  // $scope.data = {};
  // Sentiment.getAll()

  // $scope.sentiment = {};
  // $scope.generate = function() {
  //   $scope.loading = true;
  //   Sentiment.getAll
  // }

})
