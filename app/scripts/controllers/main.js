define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name genAngTest2App.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the genAngTest2App
   */
  angular.module('genAngTest2App.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
