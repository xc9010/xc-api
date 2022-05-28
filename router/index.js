const router = require('koa-router');
const getRamdon = require('./getramdon');
const getHooksFromGitee = require('./getHooksFromGitee');
const { register, login } = require('../controller/user.controller');

const userRouter = new router({ prefix: '/xc-api' });

userRouter.use('/getramdon', getRamdon.routes());

userRouter.use('/getHooksFromGitee', getHooksFromGitee.routes());



userRouter.get('/', async ctx => {
  ctx.body = 'hello xc 123'
});

userRouter.post('/register', register);


userRouter.post('/login', login);




module.exports = userRouter;
