const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const Skills = require('./models/skills')
const Strategy = require('./models/strategy')
const app = express()

//解析请求体中传递的rul编码的数据
app.use(express.urlencoded()) //使用中间件
app.use(express.json())

app.use('/api/v1/skills',require('./routes/skills/skills'))
app.use('/api/v1/strategy',require('./routes/strategy/strategy'))

mongoose.connect('mongodb://localhost:27017')
  .then(()=>{
    console.log('数据库连接成功')
    // loadData()
    // loadStrategyData()
  })
  .catch(err=>console.log(err))

//  摄影技巧数据填充
function loadSkillsData(){
  const dataList = JSON.parse(fs.readFileSync('./static/skillsList.json'))
  console.log(dataList);
  Skills.insertMany(dataList).then(()=>console.log('插入数据成功'))
}
//  旅游攻略数据填充
function loadStrategyData(){
  const dataList = JSON.parse(fs.readFileSync('./static/strategyList.json'))
  console.log(dataList);
  Strategy.insertMany(dataList).then(()=>console.log('插入数据成功'))
}

// 删除多条数据
  // function deleteManyData(){
  //   const dataList = JSON.parse(fs.readFileSync('./static/skillsList.json'))
  //   Skills.deleteMany({image: {$in: dataList}}).then(()=>console.log('删除成功'))
  // }
app.listen(8088,() => {
  console.log('服务器启动在8088端口。。。')
})
