// const http = require('http');
import { error } from "console";
import fs  from "fs";

// const fs = require('fs');
import http from "http";

var server = http.createServer(function (req, res) {   // 2 - creating server
    //handle incomming requests here..
    // req.end("jhkj");
    // console.log(req.url);
 

    if(req.url == '/about') {
        res.write("<h1>hello this is the about section page</h2>");
        res.end();

    }else if(req.url == '/contact') {
        res.write("<h1>hello this is the new contact page</h2>");
        res.end();

    }else if(req.url == '/userapi') {
        
        fs.readFile("userApi/userapi.json", "utf-8", (error, data) => {
            // console.log("jkhjhk");
            console.log(data);
            // res.write(data);

            res.end(data);
        })
    }
    else{
        res.writeHead(400, { 'Content-type' : 'text/html'});
        res.end("<h1>404 pages error in browser</h2>");
    }

    // res.write('<h1>Hello World no any change ! </h1>'); //write a response to the client
    // res.end(); //end the response
    return;
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the port 8000');
});