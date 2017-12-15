const express = require("express");
const fetch = require("node-fetch");
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
})
const app = express();

app.get("/playlist",(req,res)=>{
  fetch("https://demo8219381.mockable.io/playlist",{ agent })
  .then((res)=>res.json())
  .then((data)=> {res.send(data)
})
.catch((err)=>{
    res.writeHead(500);
    res.end("Failed to load data:"+err);
});
})

app.listen(8080);