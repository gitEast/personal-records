const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
const registerRouters = require('../router');

const app = new Koa();
// app.use(bodyParser);
// app.on('error');
registerRouters(app);

module.exports = app;
