'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('AboutCtrl', function ($scope, $q) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
    var promiseCount = 0;

    $scope.testPromise = function testPromise(run) {
        
        if(!run) {return;}
        
        var thisPromiseCount = ++promiseCount;

        var log = document.getElementById('log');
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') Started (<small>Sync code started</small>)<br/>');

        // We make a new promise: we promise the string 'result' (after waiting 3s)
        var p1 = new Promise(
            // The resolver function is called with the ability to resolve or
            // reject the promise
            function(resolve, reject) {
                log.insertAdjacentHTML('beforeend', thisPromiseCount +
                    ') Promise started (<small>Async code started</small>)<br/>');
                // This is only an example to create asynchronism
                window.setTimeout(
                    function() {
                        // We fulfill the promise !
                        
                        if(run){
                            resolve(thisPromiseCount);}
                        else{
                            reject(thisPromiseCount);}
                        
                    }, Math.random() * 2000 + 1000);
            });

        // We define what to do when the promise is resolved/fulfilled with the then() call,
        // and the catch() method defines what to do if the promise is rejected.
        p1.then(
            // Log the fulfillment value
            function(val) {
                log.insertAdjacentHTML('beforeend', val +
                    ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
            })
        .catch(
            // Log the rejection reason
            function(reason) {
                console.log('Handle rejected promise ('+reason+') here.');
            });

        log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') Promise made (<small>Sync code terminated</small>)<br/>');
    };

    $scope.testPromise(false);
    
   
    //________________________________________________________________________________________
        
    var log2 = document.getElementById('log2');
    
    function okToGreet(name) {
            name += ' Hood';
            if(Math.random()>=0.5){
                return true;
            }
                return false;
        }
    
    //________________________________________________________________________________________
    
    //ES6 style
    
    (function ($q, okToGreet, log) {
        
        function asyncGreet(name) {
            // perform some asynchronous operation, resolve or reject the promise when appropriate.
            return $q(function(resolve, reject) {
                setTimeout(function() {
                    if (okToGreet(name)) {
                        resolve('Hello, ' + name + '!');
                    } else {
                        reject('Greeting ' + name + ' is not allowed.');
                    }
                }, 1000);
            });
        }

        var promise = asyncGreet('Robin');

        promise.then(function(greeting) {
            //window.alert('Success: ' + greeting);
            log.insertAdjacentHTML('beforeend', '2.Success: ' + greeting + '<br/>');
        }, function(reason) {
            //window.alert('Failed: ' + reason);
            log.insertAdjacentHTML('beforeend', '2.Failed: ' + reason + '<br/>');
        });
        
    })($q, okToGreet, log2);

  

    //________________________________________________________________________________________

    //CommonJS-style

    (function ($q, okToGreet, log) {

        function asyncGreet(name) {
            
        var deferred = $q.defer();
            
        setTimeout(function() {
            deferred.notify('About to greet ' + name + '.');

            if (okToGreet(name)) {
                deferred.resolve('Hello, ' + name + '!');
            } else {
                deferred.reject('Greeting ' + name + ' is not allowed.');
            }
        }, 1000);

            return deferred.promise;
        }

        var promise = asyncGreet('Robin Hood');
        
        promise.then(function(greeting) {
            
            log.insertAdjacentHTML('beforeend', '3.Success: ' + greeting + '<br/>');
            
        }, function(reason) {
            
            log.insertAdjacentHTML('beforeend', '3.Failed: ' + reason + '<br/>');
            
        }, function(update) {
            
            log.insertAdjacentHTML('beforeend', '3.Got notification: ' + update + '<br/>');
            
        });
        
    })($q, okToGreet, log2);
    
    
    
    
    
    
    
    
    
    
    
 });