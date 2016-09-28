angular.module('narrative.text', ['narrative.services'])


.controller('TextCtrl', function($scope, $location, Sentiment) { //injecting factory
  $scope.sentiment = {};
  // will look like: { title: 'xyz', text: 'string', text: 'text to analyze here'}

  $scope.generate = function(title, text) {
    // $scope.loading = true;
    Sentiment.postOne($scope.sentiment.text)
      .then(function(tones) {
        $scope.sentiment.tones = tones;
        Sentiment.displayResults($scope.sentiment);
        //$scope.sentiment: [Object] {text: "TESTING!!!!!", title: "asdf", tones: Object}
        $location.path('/sentiment');
      })
  };
})
