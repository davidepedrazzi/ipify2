'use strict';

const axios = require('axios');

function get(url) {
    return axios.get(url).then(res => res.data);
}

module.exports = {
    ipv4() {
        return get('https://api.ipify.org');
    },

    ipv6() {
        return get('https://api6.ipify.org');
    }
}
