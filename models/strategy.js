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
    title:{
      type:String
    }
  },
  {
    timestamps:true //  为数据库中的每一条记录添加一个创建和修改时间
  }
)

const Skills = mongoose.model('skills',modelSchema)
module.exports = Skills