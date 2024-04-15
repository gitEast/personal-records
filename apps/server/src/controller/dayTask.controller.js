const { list } = require('../service/dayTask.service');

class DayTaskController {
  async list(ctx) {
    const data = await list();
    ctx.body = {
      code: 0,
      data: data,
      message: '查询成功'
    };
  }
}

module.exports = new DayTaskController();
