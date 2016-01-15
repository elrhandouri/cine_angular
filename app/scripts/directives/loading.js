'use strict';

/**
 * @ngdoc directive
 * @name cineAngularApp.directive:loading
 * @description
 * # loading
 */
/*
angular.module('cineAngularApp')
  .directive('loading', function () {
    return {
      template: '<div></div>',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        element.text('this is the loading directive');
      }
    };
  });
*/


angular.module('cineAngularApp')
    .directive('loading', function () {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            scope:{
                load: '=loading'
            },
            template: '<div><div ng-show="load" class="loading-container"></div><div ng-hide="load" ng-transclude></div></div>',
            //compile: function compile(element, attrs){
            compile: function compile(element){
                
            var opts = {
                lines: 13, // The number of lines to draw
                length: 28, // The length of each line
                width: 14, // The line thickness
                radius: 42, // The radius of the inner circle
                scale: 0.75, // Scales overall size of the spinner
                corners: 1, // Corner roundness (0..1)
                color: '#a7a7a7', // #rgb or #rrggbb or array of colors
                opacity: 0.3, // Opacity of the lines
            };
            
            var spinner = new window.Spinner(opts).spin();
            var target = element.find('.loading-container')[0];
            //OR
            //var target = document.getElementsByClassName('loading-container')[0];
            target.appendChild(spinner.el);
        }
    };
  });
