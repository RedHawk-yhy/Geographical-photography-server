const { json } = require('express')
const { model } = require('mongoose')
const { find } = require('../../models/user')

const router = require('express').Router()
const MyUsers = require('../../models/user')

//  查找
router.get('/',async function (req,res) { 

  const val = await MyUsers.find()
  //将数据返回给浏览器
  res.json(val)
})
//  通过id查找
router.get('/:id',async (req,res) => {
  const data = await MyUsers.findById(req.params.id)
  res.json(data)
})

//  新增
router.post('/',async (req,res) => {
  const m = new MyUsers(req.body);
  await m.save()
  res.json({
    code:1,
    msg:'保存成功'
  })
})

//  删除
router.delete('/:id',async (req,res) => {
  const data = await MyUsers.findOneAndDelete(req.params.id)
  res.json({
    code:1,
    msg:'删除成功'
  })
})

router.post('/updateMark',async (req,res) => {
  await MyUsers.findOneAndUpdate({ nickName: req.query.nickName },{ $set: { autograph: req.body.autograph } },{ },(err, data) => {
    if(err) {
      console.log('数据库发生错误')
    }
    else if(!data) {
      console.log('未查找到相关数据')
    }
    else if(data){
      console.log('修改数据成功')
    }
  })
  res.json({
    code:1,
    msg:"修改成功"
  })
})

module.exports = router