const config = require("./../server-config");
const http = require("http");
const httpClient = require("./http-client");
const resFormat = require("./response-format");


const success = function (res, data) {
    res.status(200).json(data);
}
const error = function (res, data) {
    res.status(400).json(data);
}

const get = function (api, data) {
    return httpClient.get(api, {
        params: data
    });

}
const debugPromise = function (promise, res) {
    const ob = {
        status: promise.status,
        statusText: promise.statusText,
        headers: promise.headers,
        config: promise.config,
        //request: promise.request,
    }
    if (res) {
        success(res, this.debugPromise(promise));
    } else {
        return ob;
    }
}

const successResponse = function () {
    let res = new resFormat.SuccessResponse();
    return res;
}
const errorResponse = function () {
    let res = new resFormat.ErrorResponse();
    return res;
}

module.exports = {
    success: success,
    error: error,
    get: get,
    debugPromise: debugPromise,
    successResponse: successResponse,
    errorResponse: errorResponse

};