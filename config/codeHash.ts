const errors = require('egg-errors');
module.exports = {
    hash: {
        100: {code: 100, message: 'Continue'},
        200: {code: 200, message: 'OK'},
        201: {code: 201, message: 'Created'},
        204: {code: 204, message: 'No Content'},
        301: {code: 301, message: 'Moved Permanently'},
        302: {code: 302, message: 'Found'},
        304: {code: 304, message: 'Not Modified'},
        400: {code: 400, message: 'Bad Request', error: errors.E400},
        401: {code: 401, message: '未授权', error: errors.E401},
        403: {code: 403, message: 'Forbidden', error: errors.E403},
        404: {code: 404, message: 'Not Found', error: errors.E404},
        409: {code: 409, message: 'Conflict', error: errors.E409},
        422: {code: 422, message: '参数有误', error: errors.E422},
        500: {code: 500, message: '服务器错误', error: errors.E500},
        502: {code: 502, message: 'Bad Gateway', error: errors.E502},
        errors
    },
    get(code: Number, msg?: String, data?: Any) {
        let errObj = this.hash[code];
        if (errObj) {
            if (errObj.error) {
                throw new errObj.error(msg)
            } else {
                return {
                    code: errObj.code,
                    message: msg ? `${errObj.message},${msg}` : errObj.message,
                    data: data || {}
                }
            }
        } else {
            throw new errors.E500('不存在该枚举值');
        }
    }
};