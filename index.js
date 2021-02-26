'use strict';

const axios = require('axios');

function get(url) {
    return axios.get(url).then(res => res.data);
}

module.exports = {
    ipv4() {
        return get('https://api.ipify.org');
    },

    ipv64() {
        return get('https://api64.ipify.org');
    }
}
