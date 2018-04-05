
const apiSource = require('./api-source');
const rsvnInfo = function () {
    const host = apiSource.webservices.host;
    const method = apiSource.webservices.methods.rsvnInfo;
    return host+method;
}

module.exports = {
    rsvnInfo: rsvnInfo
}