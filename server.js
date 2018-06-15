 const express = require ('express');
 const app = express();

 //Variables
 var PORT_NUMBER = 8080;
 var filename = "./movies.json";




   /*
app.listen(PORT_NUMBER,function(){
    console.log('Cantidad de annos');
});*/

app.use (require('./routes'));
const read= require('./read');
"**prueba/*.js"

// app.get('/myform', function(req, res){ 
//     var myText = req.query.mytext; //mytext is the name of your input box
//     res.send('Your Text:' +myText); 

// });
//app.listen(3000)

var datafile = read.ReadToArray(filename);
 
var title ="How to Make a Fat Wife Out of Two Lean Ones";
var year ="3"; 
 var director= "";
 var cast= "";
 var genre= "Comedy";
 var notes= "";

 //TODO: "Añadir la busqueda por rango"

//read.GlobalSearch(datafile,title ,year, director,cast,genre,notes)
read.searchTitle(datafile,title)

TODO: 'Ver como se envian los datos'

TODO: "Generar el cuadro de texto predeterminado"

/*
var years = [];
for (var year = 1900; year < 2017; year++)
  years.push(year);

var async = require('async');

async.mapSeries(years, scrapeMoviesForYear, function(err, results) {
    var movies = [];
    results.forEach(function(movies_for_year) {
      movies = movies.concat(movies_for_year);
    });

var complete_movie_list = []; // JSON.parse(fs.readFileSync('movies.json')); // read in the JSON file if you want to append to it
complete_movie_list = complete_movie_list.concat(movies);
fs.writeFileSync('movies.json', JSON.stringify(complete_movie_list), {encoding: 'utf8'});
});
*/