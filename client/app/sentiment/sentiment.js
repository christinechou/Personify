angular.module('narrative.sentiment', ['narrative.services', 'narrative.text'])

.controller('SentimentCtrl', function($scope, $window, $location, Sentiment) {
  // $scope.sentiment = TextCtrl.sentiment;
  $scope.data = {}

  $scope.initializeResults = function() {
    var x = Sentiment.getResults();
    console.log('x.tones',x.tones)
    var percents = x.tones.map(function(obj) {
      return obj.map(function(val) {
          return {
            score: Math.round(val.score*10) + '%',
            tone_id: val.tone_id,
            tone_name: val.tone_name
          }
        });
      });
    console.log("percents,",percents)
    x.tones = percents;
    $scope.data = x;
    console.log('scope data',$scope.data)
  }
  // $scope.initializeResults();

})
