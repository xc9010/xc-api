const { createUser } = require('../service/userService');

class UserController {
  async register(ctx, next) {
    console.log('ctx', ctx.request.body)
    //1获取数据
    const {name, pwd} = ctx.request.body;
    //2操作数据库
    const res = await createUser({name, pwd})
    console.log('res', res)
    //3返回结果
    ctx.body = res;
  }

  async login(ctx, next) {
    ctx.body = '登陆成功'
  }
}

module.exports = new UserController();
