const fs = require("fs");
// fs.writeFileSync('read.txt', 'this is the my enviroment');

// fs.writeFile('web.txt', 'this is for web content', (error) => {
//     console.log('txt is completed');

// });

// fs.appendFile('read.txt', ' this is only for testing', (error) => {
//     console.log("completed");
// });

// fs.mkdir('PathModule', (error) => {
//     console.log("folder is created");
// });

fs.mkdir('PathModule', (error) => {
    console.log("folder is created");
});

fs.mkdir('OsModule', (error) => {
    console.log("folder is created");
});

// fs.writeFile('PathModule/index.js', 'This is the new one index js file', (error) => {
//     console.log('file is created')
// });

fs.writeFile('OsModule/os.js', '',  (error) => {
    console.log('file is created');
});

// fs.readFile('reading.txt', 'utf-8' , (error, data) => {
//     console.log(data);
// });

// fs.rename('read.txt', 'reading.txt', (error) => {
//     console.log("rename successfully");
// });

// fs.unlink('reading.txt', (error, data) =>  {
//     console.log('file deleted');
// })

// console.log("read file ");

