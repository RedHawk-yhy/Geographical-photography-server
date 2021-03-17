const Goods = require('../models/goods')


module.exports = {
  // 设计一个函数，用来获取数据
  async findBySkip(page, size) {
    // mongoose连接数据库API方法都是异步方法
    // skip()表示从那条数据开始  limit表示每次返回多少条
    const listBySkip = await Goods.find().skip(page).limit(size);
    return listBySkip;
  }
}
