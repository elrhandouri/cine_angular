var mdb = require('moviedb')('5192eb6331a3db50b6b388ae8941edc6');
var express = require('express');
var compress = require('compression');

var app = express();

app.use(compress());

app.use(express.static('' + __dirname + '/../dist'));   // '/../dist' is the Final App


app.all('*', function(req, res, next) {
    
    // ****** Needed For Bypassing The Same Origin Policy (SOP) ******
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});


// To retrieve the "Popular" Movies
app.get('/popular', function(req, res){
    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({page: page}, function(err, data){
        data.totalPages = data.total_pages;
        data.totalResults = data.total_results;
        res.send(data)
    });
});


// To "Search" for the Movies with similar name "q"
app.get('/search', function (req, res) {
    var query = req.query["q"];
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: query, page: page}, function(err, data){
        data.totalPages = data.total_pages;
        data.totalResults = data.total_results;
        res.send(data)
    });
})

// To fetch for the Movies with similar genra than "id"
app.get("/similar/:id", function(req, res){
   var id = req.params.id;
   var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({id: id, page: page}, function(err, data){
        data.totalPages = data.total_pages;
        data.totalResults = data.total_results;
        res.send(data);
    });
});

// To fetch all the "Infos" for the Movie with the "id"
app.get('/info/:id', function (req, res) {
    var id = req.params.id;
    mdb.movieInfo({id: id}, function(err, data){
        res.send(data);
    });
});

app.listen(3000, function () {
    console.log("Listening 3000...");
});