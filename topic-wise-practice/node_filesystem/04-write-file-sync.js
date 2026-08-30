const fs = require('fs');

try {
    fs.writeFileSync(
        'syncfile.txt',
        'This file was created synchronously.'
    );

    console.log('File saved synchronously.');
} catch (err) {
    console.error(err);
}