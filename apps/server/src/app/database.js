const mysql = require('mysql2');

const connectPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'private_notes',
  user: 'root',
  password: 'Chen.010163'
});

connectPool.getConnection((err, connection) => {
  if (err) {
    console.log('获取连接失败：', err);
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.log('和数据库交互失败：', err);
    } else {
      console.log('数据库连接成功，可以进行操作');
    }
  });
});

const connect = connectPool.promise();

module.exports = connect;
