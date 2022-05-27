const router = require('koa-router');
const getRamdon = require('./getramdon');
const getHooksFromGitee = require('./getHooksFromGitee');

const userRouter = new router({ prefix: '/xc-api' });

userRouter.use('/getramdon', getRamdon.routes());

userRouter.use('/getHooksFromGitee', getHooksFromGitee.routes());



userRouter.get('/', async ctx => {
  ctx.body = 'hello xc 123'
});





module.exports = userRouter;
