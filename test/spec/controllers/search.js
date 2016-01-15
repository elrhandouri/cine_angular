'use strict';
/*
describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchCtrl.awesomeThings.length).toBe(3);
  });
});
*/

describe('Controller: SearchCtrl', function () {

    // load the controller's module
    beforeEach(module('cineAngularApp'));

    var SearchCtrl,
        scope,
        serviceAjax;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;
        SearchCtrl = $controller('SearchCtrl', {
            $scope: scope,
            serviceAjax: serviceAjax
        });
    }));
    
    //$scope.loadMovies = function(){...}
    //$scope.movies = data.results;
    //$scope.totalItems = data.totalResults;

    it('should set $scope.movies and $scope.total_pages when calling $scope.loadMovies', function () {
        spyOn(serviceAjax, 'search').and.callFake(function () {
            return{
                success: function (callback) {
                    callback({'results': [{}], 'totalResults': 10});
                }
            };
        });

        scope.loadMovies();

        expect(scope.totalItems).toEqual(10);
        expect(scope.movies).toEqual([{}]);
    });
    
    it('should call loadMovies function when calling pageChanged function', function () {
        spyOn(scope, 'loadMovies');

        scope.pageChanged();

        expect(scope.loadMovies).toHaveBeenCalled();
    });
});