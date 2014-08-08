define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name genAngTest2App.directive:menu
   * @description
   * # menu
   */
  angular.module('genAngTest2App.directives.Menu', [])
    .directive('menu', function () {
      return {
        templateUrl: 'views/menu.html',
        restrict: 'E'
      };
    });
});
