angular.module('shortly.sentiment', [])
.factory('Links', function($http) {
  //refactor and move out to own folder
  
})

.controller('SentimentCtrl', function($scope, $window, $location) {
  $scope.data = {};
  Sentiment.getAll()
})
