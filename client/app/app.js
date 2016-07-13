angular.module('narrative', [
  'narrative.services',
  'narrative.text',
  'narrative.sentiment',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/sentiment', {
    templateUrl: 'app/sentiment/sentiment.html',
    controller: 'SentimentCtrl'
  })
  .when('/', {
    templateUrl: 'app/text/text.html',
    controller: 'TextCtrl'
  })
  .otherwise('/')
})

.controller('NarrativeCtrl', function($scope) {
  //this will contain the three dimensions of tone:
  $scope.collection = {};
  $scope.message = 'hello';
  $scope.updateMsg = function(newMsg) {
    $scope.message = newMsg;
  }
})