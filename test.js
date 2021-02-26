const ipify = require('./index.js');

ipify.ipv4().then(ipv4 => console.log(ipv4)).catch(err => console.log(err));
ipify.ipv64().then(ipv64 => console.log(ipv64)).catch(err => console.log(err));

(async() => {
    // try {} catch (err) {}
    console.log(await ipify.ipv4());
    console.log(await ipify.ipv64());
})();

