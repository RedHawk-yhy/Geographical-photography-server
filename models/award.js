const mongoose =require('mongoose')
const modelSchema = new mongoose.Schema(
  {
    html:{
      type:String
    }
  },
  {
    timestamps:true //  为数据库中的每一条记录添加一个创建和修改时间
  }
)

const Award = mongoose.model('award',modelSchema)
module.exports = Award