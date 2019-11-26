module.exports = (option) => {
    /**
     * 异常处理中间件
     * @author hl
     * @param cxt
     * @param next
     * @return {Promise<void>}
     */
    return async function (ctx, next) {
        try {
            await next(option);
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;

            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error_msg = status === 500 && ctx.app.config.env === 'prod'
                ? '服务器错误'
                : err.message;
            console.log(err);
            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = {
                code: status,
                message: error_msg,
                data: {},
                success: false
            };
            ctx.status = status;
        }
    };
};