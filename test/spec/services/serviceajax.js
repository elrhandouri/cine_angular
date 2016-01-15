'use strict';

/*
describe('Service: serviceAjax', function () {

  // load the service's module
  beforeEach(module('cineAngularApp'));

  // instantiate service
  var serviceAjax;
  beforeEach(inject(function (_serviceAjax_) {
    serviceAjax = _serviceAjax_;
  }));

  it('should do something', function () {
    expect(!!serviceAjax).toBe(true);
  });

});
*/

describe('Service: serviceAjax', function () {

    // load the service's module
    beforeEach(module('cineAngularApp'));

    // instantiate service
    var serviceAjax,
        httpBackend;
        //popularRequest;

    beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {

        serviceAjax = _serviceAjax_;
        httpBackend = _$httpBackend_;
    }));


    it('should make a request to the right URL when callling popular function', function () {

        //when callling popular function
        serviceAjax.popular(1);

        //should make a request to the right URL
        httpBackend.expectGET('http://localhost:3000/popular?page=1').respond({});
        
        httpBackend.flush();
    });
    
    it('should make a request to the right URL when callling search function', function () {

        //when callling search function
        serviceAjax.search(1, 'Django');

        //should make a request to the right URL
        httpBackend.expectGET('http://localhost:3000/search?page=1&q=Django').respond({});
        
        httpBackend.flush();
    });
    
    it('should make a request to the right URL when callling info function', function () {
        //when callling info function
        serviceAjax.info(68718); //Django id

        //should make a request to the right URL
        httpBackend.expectGET('http://localhost:3000/info/68718').respond({});

        httpBackend.flush();

    });
});
