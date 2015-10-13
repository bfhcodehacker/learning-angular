'use strict';

/* App Module */

var myTicTacToe = angular.module('myTicTacToe', [
    'ngRoute',
    'playerService',
    'ticTacToeControllers'
]);

myTicTacToe.config(function($routeProvider) {
  $routeProvider
    .when('/start', {
      templateUrl: 'views/start.html',
      controller: 'StartController',
      controllerAs: 'start'
    })
    .when('/game', {
      templateUrl: 'views/game.html',
      controller: 'GameController',
      controllerAs: 'game'
    })
    .when('/results', {
      templateUrl: 'views/results.html',
      controller: 'ResultsController',
      controllerAs: 'results'
    })
    .otherwise({
      redirectTo: '/start'
    });
});
