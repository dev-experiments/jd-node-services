const axios = require('axios');

const config = {};
let instance = axios.create(config);
instance.defaults.headers.common['source'] = 'NODE-API-SERVER';

instance.defaults.params = {};
instance.defaults.params['source'] = 'NODE-API-SERVER';

module.exports = instance;