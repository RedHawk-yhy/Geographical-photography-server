const { json } = require('express')
const { model } = require('mongoose')

const router = require('express').Router()
const Finds = require('../../models/find')
const { findAll } = require('../../service/findsSkip')

//  查找
router.get('/',async function (req,res) { 
  const obj = req.query;
  const page = obj.page || 1;
  const size = obj.size || 5;
  const val = await findAll(parseInt(page), parseInt(size));
  //将数据返回给浏览器
  res.json(val)
})
//  通过id查找
router.get('/:id',async (req,res) => {
  const data = await Finds.findById(req.params.id)
  res.json(data)
})

//  新增
router.post('/',async (req,res) => {
  const m = new Finds(req.body);
  await m.save()
  res.json({
    code:1,
    msg:'保存成功'
  })
})
//  删除
router.delete('/:id',async (req,res) => {
  const data = await Finds.findOneAndDelete(req.params.id)
  res.json({
    code:1,
    msg:'删除成功'
  })
})

router.post('/search',async (req,res) => {
  const data = await Finds.find({'name':'世界'})
  console.log(data);
  res.json(data)
})


module.exports = router