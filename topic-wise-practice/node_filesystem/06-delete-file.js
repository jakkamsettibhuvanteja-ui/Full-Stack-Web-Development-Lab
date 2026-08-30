const fs = require('fs');

fs.unlink('newfile.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File was deleted.');
});