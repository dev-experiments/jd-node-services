const proHttp = require("./../../../utility/proHttp");
const constants = require("./../constants");


class PopularCities {
    constructor(req, res, next) {
        this.res = res;
        this.req = req;
        this.next = next;
    }

    fetchCities() {
        const context = 'FETCHED-DATA';
        const data = constants.city_list;
        const output = proHttp.successResponse()
            .setData(data)
            .setMessage('success')
            .setContext(context).output();

        proHttp.success(this.res, output);

    }

}

module.exports = PopularCities;