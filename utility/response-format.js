const Response = function () {
    let version = '1.0';
    let _code = '';
    let _message = '';
    let _data = {};
    let _context = 'No Information';
    let _error = new Error('', '', []);
    output = {};

    this.setData = function (data) {
        output.data = data || _data;
        return this;
    }
    this.setMessage = function (msg) {
        output.message = msg || _message;
        return this;
    }
    this.setCode = function (cd) {
        output.code = cd || _code;
        return this;
    }
    this.setContext = function (cnx) {
        output.context = cnx || _context;
        return this;
    }
    this.setError = function (code, msg, details ) {
        output.error = new Error(code, msg, details);
        return this;
    }
    let setOutput = function () {
        this.setCode();
        this.setMessage('');
        this.setData();
        this.setContext('');
        this.setError('', '', []);
    }
    this.output = function () {
        return output;
    }
    setOutput.call(this);
    return this;
}
const Error = function (cd, msg, details) {
    this.code = cd || '';
    this.message = msg || '';
    this.details = details || [];
}
const SuccessResponse = function (data, msg, code, context) {
    let response = new Response();
    response.setData(data);
    response.setMessage(msg || 'SUCCESS');
    response.setCode(code || 200);
    response.setContext(context);
    response.setError();
    return response;
}
const ErrorResponse = function (data, messge, code, context, details) {
    let response = new Response();
    response.setData(data);
    response.setMessage('ERROR');
    response.setCode(400);
    response.setContext(context);
    const err = new Error(code, messge, details);
    response.setError(err);
    return response;
}


/* const SuccessResponse = function (data, msg, code, context) {
    this.result = new Result({}, 'SUCCESS', 200);
    const cd = code || 200;
    const cnxt = context || '';
    const mg = msg || 'SUCCESS';
    let result = {};
    try {
        result = new Response(data, mg, cd, cnxt);
    } catch (e) {
        console.log('Something missing ', e);
    }
    return result;
}
const ErrorResponse = function (data, messge, code, context, details) {
    const cd = 400;
    const cnxt = context || '';
    const dt = data || {};
    const msg = 'ERROR';
    messge = messge || msg;
    code = code || cd;
    const edetails = new Error(code, messge, details);
    let result = {};
    try {
        result = new Response(dt, msg, cd, cnxt, edetails);
    } catch (e) {
        console.log('Something missing ', e);
    }
    return result;
} */

module.exports = {
    ErrorResponse: ErrorResponse,
    SuccessResponse: SuccessResponse
};