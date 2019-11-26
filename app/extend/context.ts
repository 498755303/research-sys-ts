import errCode from "./err_code";

module.exports = {
    /**
     * 驼峰转下划线
     * @param obj // 转换对象
     * @return newObj // 返回转换完成的新对象
     */
    humpToUnderline(obj) {
        let newKey = Object.keys(obj)
        let newObj = {};
        let humpReg = /([A-Z])/g;

        newKey.forEach(item => {
            newObj[item.replace(humpReg, "_$1").toLowerCase()] = obj[item];
        });
        return newObj;
    },
    /**
     * 下划线转驼峰
     * @param obj // 转换对象
     * @return newObj // 返回转换完成的新对象
     */
    lineTotoHump(obj) {
        let newKey = Object.keys(obj)
        let newObj = {};
        let humpReg = /\_(\w)/g;
        newKey.forEach(item => {
            newObj[item.replace(humpReg, "_$1").toUpperCase()] = obj[item];
        });
        return newObj;
    },
    toInt(str) {
        if (typeof str === "number") return str;
        if (!str) return str;
        return parseInt(str, 10) || 0;
    },
    // 请求成功返回值
    success(msg: string, data) {
        this.ctx.body = {
            code: 200,
            msg: msg,
            data,
        };
    },
    // 请求失败返回值
    error(code: number, msg?: string, data?: object) {
        console.log(this, this.ctx);
        // 加入日志记录
        this.ctx.body = {
            code,
            data,
            msg: msg ? msg : errCode[code],
        };
    },
};
