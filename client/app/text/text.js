angular.module('narrative.text', ['narrative.sentiment'])


.controller('TextCtrl', function($scope, Sentiment) { //injecting factory
  $scope.sentiment = {};
  $scope.generate = function() {
    $scope.loading = true;
    Sentiment.postOne($scope.sentiment.text);
  }
})