const { json } = require('express')
const { model } = require('mongoose')

const router = require('express').Router()
const Strategy = require('../../models/strategy')
const { findAllSkill } = require('../../service/strategySkip')
//  查找
router.get('/',async function(req,res){
  const obj = req.query;
  const page = obj.page || 1;
  const size = obj.size || 5;
  const val = await findAllSkill(parseInt(page), parseInt(size));
  res.json(val)
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