# ipify2

An unofficial client library for ipify: A Simple Public IP Address API.

## Install

```
$ npm i ipify2
```

## Usage

```js
const ipify = require('ipify2');

ipify.ipv4().then(ipv4 => console.log(ipv4)).catch(err => console.log(err));
ipify.ipv64().then(ipv64 => console.log(ipv64)).catch(err => console.log(err));
```

or

```js
(async() => {
    // try {} catch (err) {}
    console.log(await ipify.ipv4());
    console.log(await ipify.ipv64());
})();
```

## License

ISC © Davide Pedrazzi
