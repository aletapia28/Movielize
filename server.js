 const express = require ('express');
 const app = express();
 var http = require ('http');
 var fs = require('fs');
var bodyParser = require('body-parser');

 //Variables
 //var PORT_NUMBER = 8080;
 var filename = "./movies.json";

 var server = http.createServer(function(req,res){
  console.log('Solicutud por ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/client.html','utf-8' );
  myReadStream.pipe(res);

});

server.listen(8080, 'localhost');
console.log("Servidor Iniciado...");




   /*
app.listen(PORT_NUMBER,function(){
    console.log('Cantidad de annos');
});*/

// app.use (require('./routes'));
// const read= require('./read');
"**prueba/*.js"

// app.get('/myform', function(req, res){ 
//     var myText = req.query.mytext; //mytext is the name of your input box
//     res.send('Your Text:' +myText); 

// });
//app.listen(3000)

//var datafile = read.ReadToArray(filename);











 
var title ="How to Make a Fat Wife Out of Two Lean Ones";
var year ="3"; 
 var director= "";
 var cast= "";
 var genre= "Comedy";
 var notes= "";

 //TODO: "Añadir la busqueda por rango"

//read.GlobalSearch(datafile,title ,year, director,cast,genre,notes)
//read.searchTitle(datafile,title)

TODO: 'Ver como se envian los datos'

TODO: "Generar el cuadro de texto predeterminado"

