const { findBySkip } = require('../dao/strategySkip')
const Strategy = require('../models/strategy')

module.exports = {
  async findAllSkill(page, size) {
    page = (page - 1) * size;
    const total = await Strategy.countDocuments({});
    const res = await findBySkip(page, size);
    // 判断是否查找到
    if (res.length > 0) {
      return { success: res, msg: '查询成功' ,pagination:{ page,size,total }}
    } else {
      return { success: false, msg: '查询失败' }
    }
  }
}