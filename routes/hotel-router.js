
const config = require("./../server-config");
const services = require("./../services/hotels/");
const Router = function (app, express) {
    app.get("/hotels", function (req, res, next) {

        //  http.file(res, config.module.source)
    });
    app.get("/hotels/search/searchId/:searchId", function (req, res, next) {
        
        services.searchModel.searchQuery(req, res, next);
    });
}

module.exports = Router; 