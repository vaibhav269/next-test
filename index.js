const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const app = next({dev});

const handle = app.getRequestHandler();

app.prepare().then(()=>{
    
    const server = express();
    
    server.get('*',(req,res)=>{
        return handle(req,res);
    });

    server.listen(port,err=>{
        if(err){
            throw err;
        }else{
            console.log(`listening on port: ${port}`);
        }
    })
})