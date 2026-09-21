const os = require("os");
const path = require("path");
const fs = require("fs");

console.log("===== NODE.JS BUILT-IN MODULES =====");

console.log("\n1. OS MODULE");
console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", Math.round(os.totalmem() / 1024 / 1024 / 1024), "GB");
console.log("Home Directory:", os.homedir());

console.log("\n2. PATH MODULE");

const folderPath = path.join(__dirname, "data");
const filePath = path.join(folderPath, "module-info.txt");

console.log("Folder Path:", folderPath);
console.log("File Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));

console.log("\n3. FS MODULE");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

fs.writeFileSync(
    filePath,
    "This file was created using the Node.js File System module."
);

const content = fs.readFileSync(filePath, "utf8");

console.log("File Content:", content);

fs.appendFileSync(
    filePath,
    "\nThe fs module can create, read and append files."
);

const finalContent = fs.readFileSync(filePath, "utf8");

console.log("\nFinal File Content:");
console.log(finalContent);

console.log("\nAll three Node.js modules executed successfully.");