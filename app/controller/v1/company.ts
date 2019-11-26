import BaseController from '../../core/base_controller';

const listGet = {  
  pageNo: { type: 'int', default: 1, min: 1 },
  pageSize: { type: 'int', defualt: 20, min: 1, max: 1000 }
};

export default class Company extends BaseController {
  /** 公司列表
   * @query:listGet
   */
  public async get() {
    this.validate(listGet, this.ctx.query);
    this.ctx.success('成功', this.ctx.query);
  }
}
