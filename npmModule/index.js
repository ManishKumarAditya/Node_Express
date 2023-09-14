import chalk from "chalk";
import validator from "validator";

import fs from "fs";
// import { error } from "console";
// const {chalk} = require('chalk');

// console.log(chalk.blue.underline.inverse('Hello world!'));
// console.log(chalk.green.underline.inverse('success'));

// console.log(chalk.red.underline.inverse('false'));
// console.log(chalk.bgGray('Hello world!'));

const email =  validator.isEmail('manish.kumar@weavers-web.com');

// console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email));

const bioData = {
    name: "manish",
    age : 25,
    channel : "manish_kumar.com"
}

// console.log(bioData);

const jsonData = JSON.stringify(bioData);

// create a json file form 
// fs.writeFile('json1.json', jsonData, (error) => {
//     console.log("json file is created");
// });

fs.readFile('json1.json', 'utf-8', (error, data) => {
    console.log(data);
});

// fs.appendFile("");

// fs.appendFile()

const objData =  JSON.parse(jsonData);

console.log(jsonData);


