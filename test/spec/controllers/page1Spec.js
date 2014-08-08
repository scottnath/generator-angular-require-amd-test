/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: Page1Ctrl', function () {

    // load the controller's module
    beforeEach(module('genAngTest2App.controllers.Page1Ctrl'));

    var Page1Ctrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      Page1Ctrl = $controller('Page1Ctrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
