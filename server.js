 const express = require ('express');

 const app = express();



 var years = [];
 for (var year = 1900; year < 2017; year++)
   years.push(year);
 
app.listen(8080,function(){
    console.log('Cantidad de annos');
});

app.use (require('./routes'));

// Read Movies.json
var fs = require("fs");
var filename = "./movies.json";

fs.readFile(filename, 'utf-8', (err,data) =>
{
    if(err) {
        console.log('error: ', err);
      } else {
        console.log(data);
      } 
});



