'use strict';

/* Controllers */

var ticTacToeControllers = angular.module('ticTacToeControllers', ['playerService']);

ticTacToeControllers.controller('StartController', ['$scope', 'playerService',
    function($scope, playerService) {
      $scope.player1Name = playerService.player1Name;
      $scope.player2Name = playerService.player2Name;
      $scope.player1Wins = 0;
      $scope.player2Wins = 0;
    }]);

ticTacToeControllers.controller('GameController', ['$scope', 'playerService',
    function($scope, playerService) {
        $scope.player1Name = playerService.player1Name;
        $scope.player2Name = playerService.player2Name;
       
    }]);

ticTacToeControllers.controller('ResultsController', ['$scope', 'playerService',
    function($scope, playerService) {
    
    }]);

