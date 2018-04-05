const version = 1.0;
const Response = function (data, msg, code, context, error) {
    this.version = version;
    this.code = code;
    this.message = msg;
    this.data = data;
    this.context = context;
    this.error = error || new Error('','',[]);
}
const Error = function (cd, msg, details) {
    this.code = cd;
    this.message = msg;
    this.details = details || [];
}
const SuccessResponse = function (data, msg, code, context) {
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
}

module.exports = {
    ErrorResponse: ErrorResponse,
    SuccessResponse: SuccessResponse
};