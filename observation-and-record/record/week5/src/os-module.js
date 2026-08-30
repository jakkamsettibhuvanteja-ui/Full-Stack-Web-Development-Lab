const os = require('os');

console.log("OS Platform:", os.platform());

console.log("CPU Architecture:", os.arch());

console.log("Total Memory:", os.totalmem(), "bytes");

console.log("Free Memory:", os.freemem(), "bytes");

console.log("User Information:", os.userInfo());