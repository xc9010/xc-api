const router = require('koa-router')();
const getRamdon = require('./getramdon');

router.use('/getramdon', getRamdon.routes());



router.get('/', async ctx => {
  ctx.body = 'hello xc'
});





module.exports = router;
