const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()
router.post('/', async(ctx) => {
    //给前端传递数据
    let loginUser = ctx.request.body
        //引入Blog的model
    const Blog = mongoose.model('Blog')
        //查找用户名是否存在，如果存在开始比对密码
    await Blog.find({}, (err, docs) => {
        if (err) {
            console.log(err)
        } else {
            ctx.body = {
                data: docs.reverse()
            }
        }
    })
})

module.exports = router;