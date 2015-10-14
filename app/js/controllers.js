'use strict';

/* Controllers */

var ticTacToeControllers = angular.module('ticTacToeControllers', []);

ticTacToeControllers.controller('StartController', ['$scope', 'Data',
    function($scope, Data) {

      $scope.$watch('player1Name', function (newVal, oldVal) {
        if (newVal !== oldVal) Data.setPlayer1Name(newVal);
      });
 
      $scope.$watch('player2Name', function (newVal, oldVal) {
        if (newVal !== oldVal) Data.setPlayer2Name(newVal);
      });
    }]);

ticTacToeControllers.controller('GameController', ['$scope', 'Data',
    function($scope, Data) {
      $scope.player1Name = Data.getPlayer1Name();
      $scope.player2Name = Data.getPlayer2Name();

      $scope.$watch(function () { return Data.getPlayer1Name(); }, function (newVal, oldVal) {
        if (newVal !== oldVal) $scope.player1Name = newVal;
      });
 
      $scope.$watch(function () { return Data.getPlayer2Name(); }, function (newVal, oldVal) {
        if (newVal !== oldVal) $scope.player2Name = newVal;
      });
    }]);

ticTacToeControllers.controller('ResultsController', ['$scope', 'playerService',
    function($scope, playerService) {
    
    }]);

