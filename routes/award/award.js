const { json } = require('express')
const { model } = require('mongoose')

const router = require('express').Router()
const Award = require('../../models/award')

//  查找
router.get('/',async (req,res) => {
  const data = await Award.find()
  res.json(data)
})
//  通过id查找
router.get('/:id',async (req,res) => {
  const data = await Award.findById(req.params.id)
  res.json(data)
})

module.exports = router