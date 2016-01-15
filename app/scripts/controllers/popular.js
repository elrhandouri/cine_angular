'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineAngularApp
 */


angular.module('cineAngularApp')
  .controller('PopularCtrl', function ($scope, $log, serviceAjax) {

        $scope.totalPages = 0;
    
        //ng-model : Current page number. First page is 1.
        $scope.currentPage = 1;
        //total-items : Total number of items in all pages.
        $scope.totalItems = 20*10;
        //items-per-page (Defaults: 10) : Maximum number of items per page. A value less than one indicates all items on one page.
        $scope.itemsPerPage = 20;
        //max-size (Defaults: null) : Limit number for pagination size.
        $scope.maxSize = 5;

        var loadMovies = function(){
            
            $scope.loading = true;
            
            serviceAjax.popular($scope.currentPage).then(function(data){
                data = data.data;//Object promesse : {data: Object, status: 200, headers: function, config: Object, statusText: 'OK'}
                $scope.movies = data.results;
                $scope.totalPages = data.totalPages;
                $scope.loading = false;
            });
        };

        $scope.pageChanged = function(){
            loadMovies();
        };
    
        $scope.pageChangedLog = function(){
            $log.log('Page changed to: ' + $scope.currentPage);
        };
    
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
    
        //var loadNewPage= function (newValue, oldValue, scope){
        var loadNewPage= function (){
            loadMovies();
        };
    
        $scope.currentPageNumber = function(){
            return $scope.currentPage;
        };
    
        $scope.$watch($scope.currentPageNumber, loadNewPage);
    
        $scope.predicate = '';
        $scope.reverse = false;
    
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
  });


