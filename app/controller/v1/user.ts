import BaseController from "../../core/base_controller";

const loginParam = {
  userName: { type: "email", required: true },
  passWord: { type: "password", min: 6, max: 30, required: true },
};
const userSave = {
  id: { type: "int", required: false },
  companyId: { type: "int", required: true },
  departmentId: { type: "int", required: true },
  userName: { type: "email", required: true },
  userPassword: { type: "password", min: 6, max: 30, required: true },
  realName: { type: "string", max: 20, required: true },
  userTelephone: { type: "int", required: true, min: 1, max: 20 },
  status: { type: "enum", values: [1, 0] },
};
// const userDelete = {
//   id: { type: "int", required: true },
// };
// const userDeatil = {
//   id: { type: "int", required: true },
// };
export default class User extends BaseController {
  // 验证登录并且生成 token
  public async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    this.validate(loginParam, data);
    ctx.model.User.findOne({
      where: {
        user_name: data.userName,
      },
      raw: true,
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    // 进行验证 data 数据 登录是否成功
    // .........
    //成功过后进行一下操作

    //生成 token 的方式
    const token = app.jwt.sign(
      {
        username: data.username, //需要存储的 token 数据
        //......
      },
      app.config.jwt.secret
    );
    // 生成的token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NjAzNDY5MDN9.B95GqH-fdRpyZIE5g_T0l8RgzNyWOyXepkLiynWqrJg

    // 返回 token 到前端
    ctx.body = token;
  }

  public async register() {
    const { ctx } = this;
    // , app
    const contentBody = ctx.request.body;
    this.validate(userSave, contentBody);
    if (contentBody.id) {
      await ctx.service.user.updateUser(contentBody);
    } else {
      await ctx.service.user.register(contentBody);
    }
  }
}
