const path = require('path');

const filePath = '/users/john/documents/report.txt';

console.log("Directory Name:", path.dirname(filePath));

console.log("File Name:", path.basename(filePath));

console.log("File Extension:", path.extname(filePath));

const newPath = path.join(__dirname, 'data', 'config.json');

console.log("Joined Path:", newPath);