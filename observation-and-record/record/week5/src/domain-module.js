const domain = require('domain');

const myDomain = domain.create();

myDomain.on('error', (err) => {
    console.log('Domain caught error:', err.message);
});

myDomain.run(() => {

    throw new Error('This is a test error');

});