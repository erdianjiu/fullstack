const Router = require('koa-router')
const jwt = require('jsonwebtoken')
let router = new Router()

router.post('/', async(ctx) => {
    let token = ctx.headers.authorization;
    // 验证token合法性
    jwt.verify(token, 'smc@zhq', function(err, decode) {
        if (err) {
            ctx.body = {
                msg: '当前用户未登录'
            }
        } else {
            // 证明用户已经登录
            ctx.body = {
                token: jwt.sign({ userName: decode.userName }, 'smc@zhq', {
                    // 过期时间
                    expiresIn: "3000s"
                }),
                userName: decode.userName,
                msg: '已登录',
                state: 200,
            }
        }
    })
})
module.exports = router;