const apiSource = require('./../../server-config/api-source');
const common = require('./../../server-config/common-source-service');

const rsvnInfo = function () {
    return common.rsvnInfo();
}

module.exports = {
    rsvnInfo: rsvnInfo
}