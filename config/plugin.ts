import {EggPlugin} from "egg";

const plugin: EggPlugin = {
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
    validate: {
        enable: true,
        package: "egg-validate",
        // convert: false,
        // validateRoot: false,
    },
    routerPlus: {
        enable: true,
        package: "egg-router-plus",
    },
    sequelize: {
        enable: true,
        package: "egg-sequelize",
    },
    jwt: {
        enable: true,
        package: "egg-jwt",
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    }
};

export default plugin;
