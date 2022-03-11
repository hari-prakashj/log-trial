const express = require("express");
const logg = require('./logger')

const app = express();
let port = 1111;

app.get("/home",(req,res)=>{
    if(err){
        
    }
    logg.logger.info("finished")
    logg.logger.error("done")

    res.send("server running");
});

app.listen(port,()=>{
    logg.logger.info("sucess")
    logg.logger.error("completed")
});