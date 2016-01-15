'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */

//*
angular.module('cineAngularApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax, $log) {
    
        var id = $routeParams.id;
        //$scope.id = 68718; //Django Test
    
        $scope.infoMovie = function(){
            
            $scope.loading = true;
            
            serviceAjax.info(id).success(function(data){
                $scope.movie = data;
                $scope.loading = false;
            });
        };

        $scope.pageChanged = function(){
            $scope.infoMovie();
            $log.log('Page changed to: ' + $scope.currentPage);
        };
    
        $scope.infoMovie();
    });
//*/

//OR

/*
//not easily testable
angular.module('cineAngularApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
        var id = $routeParams.id;
        serviceAjax.info(id).success(function(data){
            $scope.movie = data;
        })
  });
//*/