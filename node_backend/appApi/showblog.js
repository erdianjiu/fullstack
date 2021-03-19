const Router = require('koa-router')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

let router = new Router()
router.post('/', async(ctx) => {
    //给前端传递数据
    //引入Blog的model
    var state;
    let token = ctx.headers.authorization;
    const Blog = mongoose.model('Blog');
    //查找用户名是否存在，如果存在开始比对密码
    jwt.verify(token, 'smc@zhq', async function(err, decode) {
        if (err) {

            state = false
            console.log(state)
        } else {
            // token合法
            state = true
            console.log(state)
        }
    })
    if (state) {
        await Blog.find({}, (err, docs) => {
            if (err) {
                console.log(err)

            } else {
                ctx.body = {
                    data: docs.reverse()
                }
            }
        })
    } else {
        await Blog.find({ 'personal': false }, (err, docs) => {
            if (err) {
                console.log(err)
            } else {
                ctx.body = {
                    data: docs.reverse()
                }
            }
        })
    }

})

module.exports = router;