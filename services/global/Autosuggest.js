const apiSource = require('./../../server-config/api-source');
class Autosuggest {
    constructor(source) {
        this.host = source.host;
    }
    
    hotelsAutosuggest() {
        return this.host + 'auto.php?';
    }
}

module.exports = new Autosuggest(apiSource.autosuggest);