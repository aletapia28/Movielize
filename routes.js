const express = require('express');
const router = express.Router();




router.get('/',(req,res) =>{
    {
        res.end("Hello World");
    }

});

router.get('/years',(req,res)=>{
    {
        res.end('Cantidad de annos/n');
    }
});


module.exports= router;