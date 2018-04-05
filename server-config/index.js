const service = require('./server-services');
const path = require('path');

process.env.NODE_ENV = "development";
process.env.PORT = 8000;
const hostname = (process.env.NODE_ENV == 'development')
    ? "http://localhost:8000/"
    : "http://t.justdial.com/verticals/";

let server = {};
server.hostname = hostname;

let config = {
    server: server,
    serverServices: service,
}
module.exports = config;