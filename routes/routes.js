const config = require("./../server-config");
const proHttp = require("./../utility/proHttp");
const hotelRouter = require("./hotel-router");

const Router = function (app, express) {
    app.get("/", function (req, res, next) {
        http.success(res, config);
    });
    hotelRouter(app, express);
}

module.exports = Router; 