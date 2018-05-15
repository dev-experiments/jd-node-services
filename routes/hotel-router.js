const proHttp = require("./../utility/proHttp");
const config = require("./../server-config");
const searchService = require("./../services/hotels/search-service");
const routeName = '/hotels';
const Router = function (app, express) {
    app.get(routeName, function (req, res, next) {
        proHttp.success(res, 'not found');
    });
    app.post(routeName + "/getPopularCities", function (req, res, next) {
        const service = new searchService.PopularCities(req, res, next);
        service.fetchCities();

    });
    app.post(routeName + "/destinationSearch", function (req, res, next) {
        const service = new searchService.DestinationSearch(req, res, next);
        service.find();
    });
    app.get(routeName + "/search/searchId/:searchId", function (req, res, next) {
        searchService.searchQuery(req, res, next);
    });
}

module.exports = Router; 