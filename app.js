const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const Picture = require('./models/skills')
const app = express()

//解析请求体中传递的rul编码的数据
app.use(express.urlencoded()) //使用中间件
app.use(express.json())

app.use('/api/v1/p',require('./routes/skills/skills'))

mongoose.connect('mongodb://localhost:27017')
  .then(()=>{
    console.log('数据库连接成功')
    // loadData()
    deleteManyData()
  })
  .catch(err=>console.log(err))

// function loadData(){
//   const dataList = JSON.parse(fs.readFileSync('./static/skillsList.json'))
//   console.log(dataList);
//   Picture.insertMany(dataList).then(()=>console.log('插入数据成功'))
// }


// 删除多条数据
  function deleteManyData(){
    const dataList = JSON.parse(fs.readFileSync('./static/skillsList.json'))
    Picture.deleteMany({image: {$in: dataList}}).then(()=>console.log('删除成功'))
  }
app.listen(8088,() => {
  console.log('服务器启动在8088端口。。。')
})
