angular.module('narrative', [
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
  $scope.message = 'HelloooooooOoooOOOOoo ';
  $scope.updateMsg = function(newMsg) {
    $scope.message = newMsg;
  }
})