'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });
    
    it('should simulate promise', inject(function($q, $rootScope) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var resolvedValue;

      promise.then(function(value) { resolvedValue = value; });
      expect(resolvedValue).toBeUndefined();

      // Simulate resolving of promise
      deferred.resolve(123);
      // Note that the 'then' function does not get called synchronously.
      // This is because we want the promise API to always be async, whether or not
      // it got called synchronously or asynchronously.
      expect(resolvedValue).toBeUndefined();

      // Propagate promise resolution to 'then' functions using $apply().
      $rootScope.$apply();
      expect(resolvedValue).toEqual(123);
    }));
});
