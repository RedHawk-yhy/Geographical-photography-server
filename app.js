const fs = require('fs')
const express = require('express')
const iconv = require('iconv-lite')
const mongoose = require('mongoose')
const Skills = require('./models/skills')
const Strategy = require('./models/strategy')
const Award = require('./models/award')
const Finds = require('./models/find')
const app = express()

//解析请求体中传递的rul编码的数据
app.use(express.urlencoded()) //使用中间件
app.use(express.json())

app.use('/api/v1/skills',require('./routes/skills/skills'))
app.use('/api/v1/strategy',require('./routes/strategy/strategy'))
app.use('/api/v1/award',require('./routes/award/award'))
app.use('/api/v1/find',require('./routes/find/find'))



mongoose.connect('mongodb://localhost:27017')
  .then(()=>{
    console.log('数据库连接成功')
    // loadFindData()
    // loadSkillsData()
    // loadStrategyData()
    // loadAwardData()
  })
  .catch(err=>console.log(err))
//  摄影图片数据填充
function loadFindData(){
  const dataList = JSON.parse(fs.readFileSync('./static/findList.json'))
  // console.log(dataList);
  Finds.insertMany(dataList).then(()=>console.log('插入数据成功'))
}

//  摄影技巧数据填充
function loadSkillsData(){
  const dataList = JSON.parse(fs.readFileSync('./static/skillsList.json'))
  // console.log(dataList);
  Skills.insertMany(dataList).then(()=>console.log('插入数据成功'))
}
//  旅游攻略数据填充
function loadStrategyData(){
  const dataList = JSON.parse(fs.readFileSync('./static/strategyList.json'))
  // console.log(dataList);
  Strategy.insertMany(dataList).then(()=>console.log('插入数据成功'))
}
//  获奖作品数据填充
function loadAwardData() { 
  const dataBuffer = fs.readFileSync('./static/awardList.json')
  const data = iconv.decode(dataBuffer,'utf-8')
  // console.log(data);
  Award.insertMany(data).then(() => console.log('插入数据成功'))
}

app.listen(8088,() => {
  console.log('服务器启动在8088端口。。。')
})
