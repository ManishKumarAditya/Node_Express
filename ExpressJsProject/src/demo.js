const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    // res.send("<h1>Nothing to do only for  testing </h2>");

    res.write("<h1>hello world from the express, this is new world for me</h1>");
    res.write("<h1> this is new space</h1>");
    
    res.send();
});

app.get("/temp", (req, res) => {

    // res.send([
    //     {
    //         id : 1,
    //         name : null
    //     },
    //     {
    //         id : 2,
    //         name : "nitish"
    //     },
    //     {
    //         id : 3,
    //         name : "Mukesh"
    //     }
    // ]);

    res.json([
        {
            id : 1,
            name : null
        },
        {
            id : 2,
            name : "nitish"
        },
        {
            id : 3,
            name : "Mukesh"
        }
    ]);
});

app.get("/about", (req, res) => {
    res.status(200).send("hello this is from my side && I am a developer!");
});



app.listen(PORT, () => {
    console.log(`listing to the server ${PORT}`);
});