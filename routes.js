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

router.get('/search',(req,res)=>{
    {
        res.render( '/client.hmtl' );
    }
});

module.exports= router;

