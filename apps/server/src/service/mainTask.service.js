const connect = require('../app/database');

class MainTaskService {
  async list() {
    const statement = `
      SELECT id, content, progress, done, frequency importance, urgency, createAt, updateAt from main_task WHERE done = FALSE;
    `;
    const [result] = await connect.execute(statement);
    return result;
  }
}

module.exports = new MainTaskService();
