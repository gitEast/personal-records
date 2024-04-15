const { list } = require('../service/mainTask.service');

class MainTaskController {
  async list(ctx) {
    const data = await list();
    ctx.body = {
      code: 0,
      data,
      message: '查询成功'
    };
  }
}

module.exports = new MainTaskController();
