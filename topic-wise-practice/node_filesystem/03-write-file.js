const fs = require('fs');

const content = 'This content was written using Node.js.';

fs.writeFile('newfile.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File has been saved!');
});