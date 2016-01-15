'use strict';

describe('Controller: HeaderCtrl', function () {

    // load the controller's module
    beforeEach(module('cineAngularApp'));

    var HeaderCtrl,
        scope,
        location;   // xxx

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $location) {   //xxx location
        scope = $rootScope.$new();
        location = $location;   //xxx

        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope,
            // place here mocked dependencies
            location: location  //xxx
        });
    }));
    
    it('should attach a list of awesomeThings to the scope', function () {
        expect(HeaderCtrl.awesomeThings.length).toBe(3);
    });

    it('should call $location.path when calling searchAction function', function () {
        spyOn(location, 'path');

        scope.query = 'test';
        scope.searchAction();   //run

        expect(location.path).toHaveBeenCalledWith('/search/test');
    });
});