'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
    .controller('SearchCtrl', function ($scope, $location, $routeParams, serviceAjax, $log) {
    
        $scope.query = $routeParams.query;
    
        //ng-model : Current page number. First page is 1.
        //$scope.currentPage = 1;
        //total-items : Total number of items in all pages.
        //$scope.totalItems = 20*10;
        //items-per-page (Defaults: 10) : Maximum number of items per page. A value less than one indicates all items on one page.
        $scope.itemsPerPage = 20;
        //max-size (Defaults: null) : Limit number for pagination size.
        $scope.maxSize = 5;

        $scope.loadMovies = function(){
            
            $scope.loading = true;
            
            serviceAjax.search($scope.currentPage, $scope.query).success(function(data){
                //query:'jango', totalResults:77, totalPages:4
                $scope.movies = data.results;
                $scope.totalItems = data.totalResults;
                $scope.loading = false;
            });
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };
    
        $scope.pageChangedLog = function(){
            $log.log('Page changed to: ' + $scope.currentPage);
        };
    
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
    
        //var loadNewPage= function (newValue, oldValue, scope){
        var loadNewPage= function (){
            $scope.loadMovies();
        };
    
        $scope.currentPageNumber = function(){
            return $scope.currentPage;
        };
    
        $scope.$watch($scope.currentPageNumber, loadNewPage);

    });