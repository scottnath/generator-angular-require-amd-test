/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'directives/menu', 'controllers/page2', 'controllers/page1']/*deps*/, function (angular, MainCtrl, AboutCtrl, MenuDirective, Page2Ctrl, Page1Ctrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name genAngTest2App
   * @description
   * # genAngTest2App
   *
   * Main module of the application.
   */
  return angular
    .module('genAngTest2App', ['genAngTest2App.controllers.MainCtrl',
'genAngTest2App.controllers.AboutCtrl',
'genAngTest2App.directives.Menu',
'genAngTest2App.controllers.Page2Ctrl',
'genAngTest2App.controllers.Page1Ctrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/page2', {
          templateUrl: 'views/page2.html',
          controller: 'Page2Ctrl'
        })
        .when('/page2', {
          templateUrl: 'views/page2.html',
          controller: 'Page2Ctrl'
        })
        .when('/page1', {
          templateUrl: 'views/page1.html',
          controller: 'Page1Ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
