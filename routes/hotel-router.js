const proHttp = require("./../utility/proHttp");
const config = require("./../server-config");
const services = require("./../services/hotels/");
const routeName = '/hotels';
const Router = function (app, express) {
    app.get(routeName, function (req, res, next) {
        proHttp.success(res, 'not found');
    });
    app.post(routeName+"/getPopularCities", function (req, res, next) {
        services.searchService.popularCities(req, res, next);
    });
    app.get(routeName + "/search/searchId/:searchId", function (req, res, next) {
        services.searchService.searchQuery(req, res, next);
    });
}

module.exports = Router; 