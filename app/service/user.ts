import { Service } from "egg";
const moment = require("moment");
moment.locale("zh-cn");
interface RegisterParams {
  companyId: number;
  departmentId: number;
  userName: string;
  passWord: string;
  userTelephone?: number;
  realName?: string;
  status: number;
}
interface updateParam extends RegisterParams {
  id: number;
}
export default class User extends Service {
  /**
   * 根据用户名，查找用户
   * @param {String} userName 邮箱地址
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  public async getUserByName(userName: string) {
    return this.ctx.model.User.findOne({
      where: {
        user_name: userName,
      },
    });
  }
  /**
   * 根据userId查找用户
   * @param {String} userId 用户ID
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  public async getUserByUserId(userId) {
    return this.ctx.model.User.findOne({
      where: { userId: userId },
    });
  }
  /**
   * 是否注册
   * @param  userName // 用户名
   */
  private async hasRegister(userName) {
    // 查询用户名
    const userInfo = await this.getUserByName(userName);

    if (userInfo) {
      return true;
    }

    return false;
  }
  /**
   * 新增用户
   * @interface RegisterParams - 注册/保存参数
   */
  public async register(user: RegisterParams) {
    const { ctx } = this;

    // 是否可以查询到
    const queryResult = await this.hasRegister(user.userName);
    if (queryResult) {
      ctx.error(10001);
      return;
    }
    const userModel = ctx.humpToUnderline(user);
    console.log(userModel, "68行", JSON.stringify(userModel));
    userModel.created_time = moment().format("YYYY-MM-DD HH:MM:SS");
    console.log(userModel, "68行", JSON.stringify(userModel));
    // await this.ctx.model.User.create(userModel);
    console.log("成功");
    ctx.success("注册成功");
  }
  /**
   * 更新用户信息
   * @interface RegisterParams - 注册/保存参数
   */
  public async updateUser(user: updateParam) {
    const { ctx } = this;
    const userModel = ctx.humpToUnderline(user);
    "id" in userModel && delete userModel["id"];
    userModel.updated_time = moment().format("YYYY-MM-DD HH:MM:SS");
    this.ctx.model.User.update(userModel, {
      where: {
        id: user.id,
      },
    })
      .then(() => {
        ctx.success(200);
      })
      .catch(() => {
        ctx.error(500);
      });
  }
}
