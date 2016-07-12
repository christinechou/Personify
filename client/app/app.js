angular.module('narrative', [
  'narrative.sentiment',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/sentiment', {
    templateUrl: 'app/sentiment/sentiment.html',
    controller: 'SentimentCtrl'
  })
  .otherwise('/')
})