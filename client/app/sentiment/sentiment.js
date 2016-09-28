angular.module('narrative.sentiment', ['narrative.services', 'narrative.text'])

.controller('SentimentCtrl', function($scope, $window, $location, Sentiment) {
  // $scope.sentiment = TextCtrl.sentiment;
  $scope.data = {}

  $scope.initializeResults = function() {
    var x = Sentiment.getResults();
    var persona = x.tones.persona;
    var personality = x.tones.personality;

    for (var i = 0; i < persona.length; i++) {

      var newValue = Math.round(persona[i][1]*100) + '%';
      persona[i][1] = newValue;
    };

    for (var key in x.tones.personality) {
      var newValue = Math.round(personality[key]*100) + '%';
      personality[key] = newValue;
    }
    $scope.data = x;
  }

})
