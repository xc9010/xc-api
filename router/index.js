const router = require('koa-router')();
const getRamdon = require('./getramdon');
const getHooksFromGitee = require('./getHooksFromGitee');

router.use('/getramdon', getRamdon.routes());

router.use('/getHooksFromGitee', getHooksFromGitee.routes());



router.get('/', async ctx => {
  ctx.body = 'hello xc'
});





module.exports = router;
