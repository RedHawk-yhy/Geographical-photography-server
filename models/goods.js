const mongoose =require('mongoose')
const modelSchema = new mongoose.Schema(
  {
    image:{
      type:String,
      required:true //必填
    },
    title:{
      type:String,
      required:true
    },
    desc:{
      type:String,
      required:true
    },
    price:{
      type:String,
      required:true
    },
    originPrice:{
      type:String
    },
    num:{
      type:Number
    }
  },
  {
    timestamps:true //  为数据库中的每一条记录添加一个创建和修改时间
  }
)

const Goods = mongoose.model('goods',modelSchema)
module.exports = Goods