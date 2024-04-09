const { list } = require('../service/type.service');

class TypeController {
  async getTypes(ctx) {
    const data = await list();
    ctx.body = {
      code: 0,
      data: data,
      message: '查询成功'
    };
  }
}

module.exports = new TypeController();
