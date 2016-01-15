'use strict';

/*
describe('Controller: PopularCtrl', function () {

  // load the controller's module
  beforeEach(module('cineAngularApp'));

  var PopularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PopularCtrl = $controller('PopularCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PopularCtrl.awesomeThings.length).toBe(3);
  });
});
*/

describe('Controller: PopularCtrl', function () {

    // load the controller's module
    beforeEach(module('cineAngularApp'));

    var PopularCtrl,
        scope,
        serviceAjax;    // place here mocked dependencies xxx

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {// place here mocked dependencies xxx
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;// place here mocked dependencies xxx

        PopularCtrl = $controller('PopularCtrl', {
            $scope: scope,
            serviceAjax: serviceAjax// place here mocked dependencies xxx
        });

    }));
    
    //*
    it('should set $scope.movies and $scope.total_pages when calling $scope.loadMovies', function () {
        spyOn(serviceAjax, 'popular').and.callFake(function () {
            return{
                success: function (callback) {
                    return callback({'results': [{}], 'totalPages': 10});
                }
            };
        });

        //when calling $scope.loadMovies
        scope.loadMovies();

        //should set $scope.movies and $scope.total_pages
        expect(scope.totalPages).toEqual(10);
        expect(scope.movies).toEqual([{}]);
    });
    
    it('should call loadMovies function when calling pageChanged function', function () {
        spyOn(scope, 'loadMovies');

        //when calling pageChanged function
        scope.pageChanged();

        //should call loadMovies function
        expect(scope.loadMovies).toHaveBeenCalled();
    });
    //*/
    
    it('should set $scope.orderByReverse and $scope.orderByPredicate when calling $scope.clickPredicateName function', function () {
        scope.reverse = true;
        
        scope.order('title');
        scope.order('title');

        expect(scope.predicate).toBe('title');
        expect(scope.reverse).toBe(true);
    });

    it('should set $scope.orderByReverse and $scope.orderByPredicate when calling $scope.clickPredicateRate function', function () {
        scope.reverse = true;

        scope.order('vote_average');

        expect(scope.predicate).toBe('vote_average');
        expect(scope.reverse).toBe(false);
    });
});