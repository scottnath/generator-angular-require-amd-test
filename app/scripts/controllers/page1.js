define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name genAngTest2App.controller:Page1Ctrl
   * @description
   * # Page1Ctrl
   * Controller of the genAngTest2App
   */
  angular.module('genAngTest2App.controllers.Page1Ctrl', [])
    .controller('Page1Ctrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
