'use strict';

/**
 * @ngdoc service
 * @name cineAngularApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineAngularApp.
 */

angular.module('cineAngularApp')
  .factory('serviceAjax', function serviceAjax($http) {

    return{

        popular: function(page){

            return $http.get('http://localhost:3000/popular?page=' + page);
        },
        
        search: function(page, q){

            return $http.get('http://localhost:3000/search?page=' + page + '&q=' + q);
        },
    
        similar: function(page){

            return $http.get('http://localhost:3000/similar/:id?page=' + page);
        },
    
        info: function(id){

            return $http.get('http://localhost:3000/info/' + id);
        }
    };
  });


/* Server */

/*
app.get('/popular', function(req, res){
    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({page: page}, function(err, data){
        data.totalPages = 1000;
        res.send(data)
    });
});

app.get('/search', function (req, res) {
    var query = req.query["q"];
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: query, page: page}, function(err, data){
        res.send(data)
    });
})

app.get("/similar/:id", function(req, res){
   var id = req.params.id;
   var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({id: id, page: page}, function(err, data){
        res.send(data);
    });
});

app.get('/info/:id', function (req, res) {
    var id = req.params.id;
    mdb.movieInfo({id: id}, function(err, data){
        res.send(data);
    });
});
//*/