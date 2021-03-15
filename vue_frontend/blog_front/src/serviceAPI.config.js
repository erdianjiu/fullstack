// const BASEURL = "www.baidu.com"
const LOCALURL = "http://localhost:3000/"
const URL = {
    login: LOCALURL + 'login', //登录接口
    validate: LOCALURL + 'validate', //token校验接口
    addblog: LOCALURL + 'addblog', //发布博客接口
    showblog: LOCALURL + 'showblog', //读取博客内容
}

module.exports = URL