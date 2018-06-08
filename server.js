 const a = require ('express');

 const app = a();



app.use (require('./routes'));

 app.listen(8080,function(){
     console.log('servidor funcionando');
 });


 var years = [];
 for (var year = 1900; year < 2017; year++)
   years.push(year);
 
app.listen(8082,function(){
    console.log('Cantidad de annos'+years);
});

app.use (require('./routes'));

