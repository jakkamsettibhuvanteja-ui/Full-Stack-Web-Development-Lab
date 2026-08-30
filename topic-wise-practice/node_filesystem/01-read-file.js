const fs = require('fs');

fs.readFile('task.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
    console.log('File read successfully!');
});