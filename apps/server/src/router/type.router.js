const KoaRouter = require('@koa/router');
const { list } = require('../controller/type.controller');

const typeRouter = new KoaRouter({ prefix: '/type' });

typeRouter.get('/list', list);

module.exports = typeRouter;
