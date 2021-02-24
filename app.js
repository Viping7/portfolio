const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8081
app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.listen(port,function(){
    console.log("App Listening to", port)
})