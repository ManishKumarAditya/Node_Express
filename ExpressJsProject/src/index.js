const express = require("express");

const path = require("path");
const hbs = require("hbs");
const app = express();

//absolute
// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));
// console.log(path.join(__dirname, "../templates"));
console.log(path.join(__dirname, '../templates/partials'));

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// buitl in middleware in express js 
// app.use(express.static(staticPath));

// middleware in express js for web page show
app.get("/", (req, res) => {
    res.render("index", { channelName : "Nitish"});
});

app.get("/about", (req, res) => {
    res.render("about");
});

// app.get("/", (req, res) => {
//     res.send("<h1>hello world from the express, <br> this is new world for me and you make <br> a new things!</h2>");
// });

// app.get("/about", (req, res) => {
//     res.status(200).send("hello this is from my side && I am a developer!");
// });

// app.get("/services", (req, res) => {
//     res.status(200).send("hello this is the new servies page ");
// });

app.listen(8000, () => {
    console.log("listing to the node 8000 server");
});