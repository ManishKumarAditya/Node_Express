// import http from  "http";
// import fs from "fs";

const http = require("http");
const fs = require("fs");

// import { error } from "console";

const server = http.createServer();

server.on('request', (req, res) => {
//  var fs = require("fs");

    // form the read file 
    // fs.readFile("serverdata.txt", "utf-8", (error, data) => {
    //     // if(error) {
    //     //     return console.log(error);
    //     // }
    //     console.log(data);

    //     res.end(data);
    // });

    const rstream = fs.createReadStream("serverdata.txt");

    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    //     // console.log(chunkdata);
    // });

    // rstream.on('end', () => {
    //     res.end();
    // });

    rstream.pipe(res);
});

server.listen(8000, '127.0.0.1');