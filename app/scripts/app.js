'use strict';

/**
 * @ngdoc overview
 * @name cineAngularApp
 * @description
 * # cineAngularApp
 *
 * Main module of the application.
 */
angular
  .module('cineAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    /*
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    */
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/popular', {
        //templateUrl: 'views/popular.html',
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/search/:query', {
        //templateUrl: 'views/search.html',
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
