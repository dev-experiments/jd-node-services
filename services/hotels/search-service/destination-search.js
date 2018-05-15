const proHttp = require("./../../../utility/proHttp");
const autosuggest = require("./../../global/Autosuggest");

class DestinationSearch {
    constructor(req, res, next) {
        this.res = res;
        this.req = req;
        this.next = next;
    }

    find() {
        let data = {};
        data.act = 'hotelint';
        data.search = this.req.body.search;
        data.city = this.req.body.city;
        data.country = this.req.body.country;
        this.autosuggestApi(autosuggest.hotelsAutosuggest(), data);
    }

    autosuggestApi(source, data) {
        const context = 'HTTP-AUTO-SUGGEST';
        const result = proHttp.get(source, data).then((response) => {
            //proHttp.success(res, req.body);
            if (response.data) {
                const output = proHttp.successResponse()
                    .setData(response.data.results)
                    .setMessage('success')
                    .setContext(context).output();
                console.log('this', this);
                proHttp.success(this.res, output);
                // proHttp.debugPromise(response, res);
            } else {
                throw new Error(response.data.error.msg);
            }
        }).catch((err) => {
            const output = proHttp.errorResponse()
                .setMessage(err.message)
                .setContext(context).output();
            //console.log(err.message, err);
            proHttp.error(this.res, output);
        });
    }
}

module.exports = DestinationSearch;