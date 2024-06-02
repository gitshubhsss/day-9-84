const express=require("express");
const app=express();
const port =8080;
const path=require("path");

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log("Your App is listening on the port 8080");
});
let instaData=require("./data (1).json");
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let data=instaData[username];
    res.render("insta.ejs",{data});
})