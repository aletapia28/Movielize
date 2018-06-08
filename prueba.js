const http = require('http');
 http.createServer((req,res)=>{
     res.end("Hello World");

 }).listen(3000);



 const a = require ('express');

 const app = a();
app.get('/',(req,res) =>{
    {
        res.end("Hello World");
    }

});

 app.listen(3001,function(){
     console.log('servidor funcionando');
 });
