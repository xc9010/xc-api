const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = {
    code: 200,
    message: 'push success'
  }
});


module.exports = router;
