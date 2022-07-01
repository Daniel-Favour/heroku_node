const express = require("express");
const path = require("path");


const app = express();

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine","hbs");

app.get("/", (req, res)=> {
    res.render("index");
    
})
app.get("/about", (req, res)=> {
    res.render("about");
    
})
app.get("/blog", (req, res)=> {
    res.render("blog");
    
})
app.get("/contact", (req, res)=> {
    res.render("contact");
    
})
app.get("/course", (req, res)=> {
    res.render("course");
    
})


app.listen(5000, ()=>{
    console.log("Server started on Port 5000");

});