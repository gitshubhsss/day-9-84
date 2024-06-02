const express = require("express");
const app = express();
const port = 8080;
const path=require("path")
app.listen(port, () => {
  console.log("app is listening on the port 8080");
});
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("this is home directory");
})

// app.get("/:username", (req, res) => {
//   let { username } = req.params;
//   res.render("index.ejs", { username });
// });

app.get("/rolldice",(req,res)=>{
    let randNum=Math.floor(Math.random()*6)+1;

    res.render("rollDice.ejs",{randNum})
})





