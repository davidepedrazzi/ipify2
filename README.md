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
ipify.ipv6().then(ipv6 => console.log(ipv6)).catch(err => console.log(err));
```

or

```js
(async() => {
    // try {} catch (err) {}
    console.log(await ipify.ipv4());
    console.log(await ipify.ipv6());
})();
```

## License

ISC © Davide Pedrazzi