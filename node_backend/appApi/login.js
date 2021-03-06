const Router = require('koa-router')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

let router = new Router()
router.post('/', async(ctx) => {
    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
        //引入User的model
    const User = mongoose.model('User')
        //查找用户名是否存在，如果存在开始比对密码
    await User.findOne({ userName: userName }).exec().then(async(result) => {
        if (result) {
            //console.log(User)
            //当用户名存在时，开始比对密码
            let newUser = new User() //因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password, result.password)
                .then((isMatch) => {
                    //返回比对结果
                    if (isMatch) {
                        ctx.body = {
                            code: 200,
                            message: isMatch,
                            // sign 参数一：加密的对象 参数二：加密的规则 参数三：对象
                            token: jwt.sign({ userName: userName }, 'smc@zhq', {
                                // 过期时间
                                expiresIn: "3000s"
                            })
                        }
                    } else {
                        ctx.body = {
                            code: 200,
                            message: isMatch
                        }
                    }

                })
                .catch(error => {
                    //出现异常，返回异常
                    console.log(error)
                    ctx.body = { code: 500, message: error }
                })
        } else {
            ctx.body = { code: 500, message: '用户名不存在' }
        }

    }).catch(error => {
        console.log(error)
        ctx.body = { code: 500, message: error }
    })
})

module.exports = router;