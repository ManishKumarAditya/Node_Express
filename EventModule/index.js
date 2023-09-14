const EventEmitter = require("events");

const event = new EventEmitter();

// event.on('sayMyName' , () => {
//     console.log("my name is manish kumar");
// });

event.on('checkPage', (sc, msg) => {
    console.log(`yes file is exists and status code is ${sc} and page is ${msg}`);  
});




// event.emit('sayMyName');

event.emit('checkPage', 200, "ok");