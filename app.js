const express = require("express");
const path = require("path");


const app = express();

const {
    PORT = 5400,
    NODE_ENV = 'development',
} = process.env;

const IN_PROD = NODE_ENV === 'production';

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


app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`);

});