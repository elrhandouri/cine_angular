'use strict';

describe('Controller: InfoCtrl', function () {

    // load the controller's module
    beforeEach(module('cineAngularApp'));

    var InfoCtrl,
        scope,
        serviceAjax;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;
        
        InfoCtrl = $controller('InfoCtrl', {
            $scope: scope,
            // place here mocked dependencies
            serviceAjax: serviceAjax
        });
    }));
    
    it('should set $scope.movie when calling $scope.infoMovie', function () {
        spyOn(serviceAjax, 'info').and.callFake(function () {
            return{
                success: function (callback) {
                    callback({'original_title' : 'Django', 'id' : 68718, 'etc' : '...'});
                }
            };
        });

        scope.infoMovie();
        expect(scope.movie).toEqual({'original_title' : 'Django', 'id' : 68718, 'etc' : '...'});
    });
});
