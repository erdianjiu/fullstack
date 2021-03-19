const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

let router = new Router()
    // 登录持久化验证接口 访问这个接口的时候 一定要访问token（前端页面每切换一次，就访问一下这个接口，问一下我有没有登录/登陆过期）
    // 先访问登录接口，得到token，在访问这个，看是否成功
router.post('/', async(ctx) => {
    let token = ctx.headers.authorization;
    let blogdata = ctx.request.body
    console.log(blogdata)
        // 验证token合法性 对token进行解码
    jwt.verify(token, 'smc@zhq', function(err, decode) {
        if (err) {
            ctx.body = {
                msg: '当前用户未登录',
                code: 500
            }
        } else {
            // token合法
            const Blog = mongoose.model('Blog')
            let oneBlog = new Blog({ title: blogdata.title, target: blogdata.target, body: blogdata.body, abstract: blogdata.abstract, personal: blogdata.personal })
            oneBlog.save().then(() => {
                console.log('博客插入成功')
            })
            ctx.body = {
                msg: '博客发布成功',
                code: 100
            }
        }
    })
})
module.exports = router;