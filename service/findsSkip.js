const { findBySkip } = require('../dao/findsSkip')
const Finds = require('../models/find')

module.exports = {
  async findAll(page, size) {
    page = (page - 1) * size;
    const total = await Finds.countDocuments({});
    const res = await findBySkip(page, size);
    // 判断是否查找到
    if (res.length > 0) {
      return { success: res, msg: '查询成功' ,pagination:{ page,size,total }}
    } else {
      return { success: false, msg: '查询失败' }
    }
  }
}
