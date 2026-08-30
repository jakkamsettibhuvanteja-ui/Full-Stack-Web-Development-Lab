const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {

    if (err) {
        console.error("Error:", err);
        return;
    }

    console.log("IP Address for google.com:", address);

    console.log("IP Family:", family);
});

dns.resolve4('google.com', (err, addresses) => {

    if (err) {
        console.error("Error:", err);
        return;
    }

    console.log("All IPv4 addresses for google.com:", addresses);
});