const mongoose =require('mongoose')
const modelSchema = new mongoose.Schema(
  {
    nickName:{
      type:String,
      required:true //必填
    },
    autograph:{
      type:String,
      required:true
    },
  },
  {
    timestamps:true //  为数据库中的每一条记录添加一个创建和修改时间
  }
)

const MyUsers = mongoose.model('myUsers',modelSchema)
module.exports = MyUsers