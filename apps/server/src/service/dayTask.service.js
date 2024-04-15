const connect = require('../app/database');

class DayTaskService {
  async list() {
    const statement = `
      SELECT
        d.id, d.taskId, d.done, d.dueDate, d.completeDate, d.createAt, d.updateAt,
        m.content, m.progress
        from day_task d
        LEFT JOIN main_task m ON d.taskId = m.id;
    `;
    const [result] = await connect.execute(statement);
    return result;
  }
}

module.exports = new DayTaskService();
