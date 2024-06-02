const express=require("express");

const app=express();
const port=8080;

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
})

// app.use((req,res)=>{
//     console.log("request recevied");
//     // res.send("This request has been sent using use method");
//     res.send({
//         name:"shubham",
//         sirname:"ranjane"
//     })
// })

app.get("/home",(req,res)=>{
    res.send("you are on the root path")
})

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let html=`<h1>Welcome to the page of @${username}</h1>`;
    res.send(html)
})
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("nothing search");
    }
    res.send(`<h1>your have search for : ${q}</h1>`);
})

