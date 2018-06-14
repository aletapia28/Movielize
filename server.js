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

// Read Movies.json
var fs = require("fs");
/*
fs.readFile(filename, 'utf-8', (err,data) =>
{
    if(err) {
        console.log('error: ', err);
      } else {
        console.log("data is rigth");
      } 

});
*/







const read= require('./read');


var datafile= read.ReadToArray(filename);


var objects=[];
for (var i in datafile) {

  if (datafile[i].title == " .45"){
    console.log(datafile[i].year+datafile[i].title);

  }
      

}
//var js=JSON.parse(datafile);
//console.log(SearchMovie(datafile,"director","Jeremy Leven"));
//console.log(datafile[1]);

//console.log(datafile.key);


/*
 var map = new Map();
 map.set("1",fs.data);

 map.get("1");
 console.log( map.get("1"));*/










