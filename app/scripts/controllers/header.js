'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the cineAngularApp
 */

angular.module('cineAngularApp')
    .controller('HeaderCtrl', function ($scope, $location) {
    
        this.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        $scope.query = '';

        $scope.searchAction = function(){

            $location.path('/search/' + $scope.query);

        };
    });