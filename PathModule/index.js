const path = require('path');
console.log(path.basename('/home/wadmin/Desktop/Project/NodeJsProject/PathModule/index.js'));
console.log(path.dirname('/home/wadmin/Desktop/Project/NodeJsProject/PathModule/index.js'));
console.log(path.extname('/home/wadmin/Desktop/Project/NodeJsProject/PathModule/index.js'));
const mydir = path.parse('/home/wadmin/Desktop/Project/NodeJsProject/PathModule/index.js');
// console.log(mydir.name);
console.log(mydir.ext);

console.log(path.isAbsolute('/home/wadmin/Desktop/Project'));