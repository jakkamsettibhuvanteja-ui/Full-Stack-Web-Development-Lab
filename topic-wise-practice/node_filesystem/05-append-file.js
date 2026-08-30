const fs = require('fs');

fs.appendFile(
    'task.txt',
    '\nThis line was appended using Node.js.',
    (err) => {

        if (err) {
            console.error(err);
            return;
        }

        console.log('Content appended!');
    }
);