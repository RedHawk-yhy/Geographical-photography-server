const mongoose =require('mongoose')
const modelSchema = new mongoose.Schema(
  {
    image:{
      type:String,
      required:true //必填
    },
    content:{
      type:String
    },
    author:{
      type:String
    },
    title:{
      type:String
    },
  },
  {
    timestamps:true //  为数据库中的每一条记录添加一个创建和修改时间
  }
)

const Finds = mongoose.model('finds',modelSchema)
module.exports = Finds