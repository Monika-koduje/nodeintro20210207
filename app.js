const express = require("express");
const port = 3000;

const app = express();

app.get("/", function (req,res){
    res.send("Hello World");
})
app.get("/about", function (req,res){
    res.send("Strona o nas");
})

app.listen(port,()=>{
    console.log(`Apka działa na porcie ${port}`)
})

