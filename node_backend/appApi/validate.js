const Router = require('koa-router')
const jwt = require('jsonwebtoken')

let router = new Router()
    // 登录持久化验证接口 访问这个接口的时候 一定要访问token（前端页面每切换一次，就访问一下这个接口，问一下我有没有登录/登陆过期）
    // 先访问登录接口，得到token，在访问这个，看是否成功
router.post('/', async(ctx) => {
    let token = ctx.headers.authorization;
    // 验证token合法性 对token进行解码
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