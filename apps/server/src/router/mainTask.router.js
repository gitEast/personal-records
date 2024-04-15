const KoaRouter = require('@koa/router');
const { list } = require('../controller/mainTask.controller');

const mainTaskRouter = new KoaRouter({ prefix: '/mainTask' });

mainTaskRouter.get('/list', list);

module.exports = mainTaskRouter;
