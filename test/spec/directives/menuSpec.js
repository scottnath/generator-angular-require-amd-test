/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: menu', function () {

    // load the directive's module
    beforeEach(module('genAngTest2App.directives.Menu'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<menu></menu>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the menu directive');
    }));
  });
});
