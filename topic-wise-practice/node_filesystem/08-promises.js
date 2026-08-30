const fs = require('fs').promises;

async function writeFileAsync() {
    try {
        await fs.writeFile(
            'promise.txt',
            'Hello from the Promises API!'
        );

        console.log('File saved.');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

writeFileAsync();