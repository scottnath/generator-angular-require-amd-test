define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name genAngTest2App.controller:Page2Ctrl
   * @description
   * # Page2Ctrl
   * Controller of the genAngTest2App
   */
  angular.module('genAngTest2App.controllers.Page2Ctrl', [])
    .controller('Page2Ctrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
