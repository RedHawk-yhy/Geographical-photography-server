const { json } = require('express')
const { model } = require('mongoose')

const router = require('express').Router()
const Strategy = require('../../models/strategy')

//  查找
router.get('/',async (req,res) => {
  const data = await Strategy.find()
  res.json(data)
})
//  通过id查找
router.get('/:id',async (req,res) => {
  const data = await Strategy.findById(req.params.id)
  res.json(data)
})

//  新增
router.post('/',async (req,res) => {
  const m = new Strategy(req.body);
  await m.save()
  res.json({
    code:1,
    msg:'保存成功'
  })
})

//  删除
router.delete('/:id',async (req,res) => {
  const data = await Strategy.findOneAndDelete(req.params.id)
  res.json({
    code:1,
    msg:'删除成功'
  })
})

module.exports = router