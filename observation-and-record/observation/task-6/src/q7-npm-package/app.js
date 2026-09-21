const _ = require("lodash");

const numbers = [10, 20, 30, 40, 50];

const total = _.sum(numbers);
const maximum = _.max(numbers);
const minimum = _.min(numbers);

const student = {
    name: "Bhuvan",
    department: "CSE-AIML",
    skills: ["Python", "JavaScript", "Node.js"]
};

console.log("===== NPM PACKAGE DEMONSTRATION =====");

console.log("\nNumbers:", numbers);
console.log("Sum:", total);
console.log("Maximum:", maximum);
console.log("Minimum:", minimum);

console.log("\nOriginal Student Object:");
console.log(student);

const copiedStudent = _.cloneDeep(student);

copiedStudent.skills.push("Express.js");

console.log("\nCopied Student Object:");
console.log(copiedStudent);

console.log("\nLodash package executed successfully.");