class UserService {
  async createUser(params) {
    // 写入数据库
    return {
      code: 200,
      mes: '写入成功',
      data: {
        list: [],
        page: {

        }
      }
    }
  }
}

module.exports = new UserService();
