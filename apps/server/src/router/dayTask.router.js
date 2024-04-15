const KoaRouter = require('@koa/router');
const { list } = require('../controller/dayTask.controller');

const dayTaskRouter = new KoaRouter({ prefix: '/dayTask' });

dayTaskRouter.get('/list', list);

module.exports = dayTaskRouter;
