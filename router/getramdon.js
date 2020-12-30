const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
  ctx.body = {
    code: 200,
    body: {
      data: 'exmaples router test'
    }
  }
});


module.exports = router;
