import {EggAppConfig, EggAppInfo, PowerPartial} from "egg";

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1572743733376_3365";

    // add your egg config in here
    config.middleware = ["errorHandler"];
    config.errorHandler = {
        match: '/api',
    }
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
    };
    config.cors = {
        origin: "*",
        allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    };
    config.jwt = {
        secret: "auth_system", //自定义 token 的加密条件字符串
    };
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    config.sequelize = {
        dialect: "mysql",
        host: "49.233.202.147",
        port: 3306,
        database: "research_sys_dev",
        username: "huliang",
        password: "hu2100159",
        timezone: "+08:00"
    };
    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
