const connect = require('../app/database');

class TypeService {
  async list() {
    const statement = `
      SELECT id, label, description, createAt, updateAt from type;
    `;
    const [result] = await connect.execute(statement);
    return result;
  }
}

module.exports = new TypeService();
