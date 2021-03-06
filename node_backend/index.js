const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const cors = require('koa2-cors')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

app.use(cors());


app.use(bodyparser())
    // 引入user.js
let user = require('./appApi/login.js')
let valid = require('./appApi/validate.js')
let add = require('./appApi/addblog.js')
let showblog = require('./appApi/showblog.js')
    //装载子路由
let router = new Router();
router.use('/login', user.routes())
router.use('/validate', valid.routes())
router.use('/addblog', add.routes())
router.use('/showblog', showblog.routes())
    //加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())


// 立即执行函数
;
(async() => {
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({ userName: '', password: '' })

    oneUser.save().then(() => {
        console.log('插入成功')

    })
    let users = await User.findOne({}).exec()

    console.log('------------------')
    console.log(users)
    console.log('------------------')
})()


app.listen(3000, () => {
    console.log('[Server] starting at port 3000')
})