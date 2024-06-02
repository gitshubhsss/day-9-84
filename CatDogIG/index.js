const express=require("express");
const app=express();
const port=8080;

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
})
app.set("view engine","ejs");




app.get("/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data (1).json");
    const data=instaData[username]
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.send("wrong url");
    }
})