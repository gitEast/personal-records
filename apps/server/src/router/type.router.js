const KoaRouter = require('@koa/router');
const { getTypes } = require('../controller/type.controller');

const typeRouter = new KoaRouter({ prefix: '/type' });

typeRouter.get('/list', getTypes);

module.exports = typeRouter;
