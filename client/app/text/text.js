angular.module('narrative.text', ['narrative.sentiment'])


.controller('TextCtrl', function($scope, Sentiment) { //injecting factory
  $scope.sentiment = {};
  $scope.generate = function(title, text) {
    console.log('generate working')
    // $scope.loading = true;
    Sentiment.postOne($scope.sentiment.text)
      .then(function() {
        console.log('success in posting text: ',title, text)
      })
  }
})