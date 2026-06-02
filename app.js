import express from 'express';
import config from './config.js';

const app = express()

app.get('/', (req, res)=>{
        res.send({
            message: "Hello there..!"
        }, {status: 200})
});



app.listen(config.PORT, ()=>{
    console.log(`Sever is running on ${config.PORT}...`);
})