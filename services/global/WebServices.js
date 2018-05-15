const apiSource = require('./../../server-config/api-source');
class WebServices {
    constructor(source) {
        this.host = source.host;
    }
    
    rsvnInfo() {
        return this.host + 'web_services/web_services/rsvnInfo.php';
    }
}

module.exports = new WebServices(apiSource.webServices);