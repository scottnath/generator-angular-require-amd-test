define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name genAngTest2App.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the genAngTest2App
   */
  angular.module('genAngTest2App.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
