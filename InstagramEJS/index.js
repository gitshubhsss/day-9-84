const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"/views")));

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
});

let folowers=["shubham","pavan","ashish","bhumi"];

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username,folowers});
})
