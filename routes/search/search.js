const router = require('express').Router()
// const Finds = require('../../models/find')
const { findByName } = require('../../service/findsSkip')



router.get('/',async (req,res) => {
  console.log(req.query);
  const name = req.query.name || '世界'
  const val = await findByName(name)
  res.json(val)
})

module.exports = router