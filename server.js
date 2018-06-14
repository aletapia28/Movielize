 const express = require ('express');
 const app = express();

 //Variables
 var PORT_NUMBER = 8080;
 var filename = "./movies.json";



 var years = [];
 for (var year = 1900; year < 2017; year++)
   years.push(year);


   /*
app.listen(PORT_NUMBER,function(){
    console.log('Cantidad de annos');
});*/

app.use (require('./routes'));
const read= require('./read');
"**prueba/*.js"

var datafile = read.ReadToArray(filename);
 
var title = "";
var year= 2015 - 2016 ; TODO: "Añadir la busqueda por rango"
 var director= "";
 var cast= "";
 var genre= "";
 var notes= "";


read.GlobalSearch(datafile,title ,year, director,cast,genre,notes);







