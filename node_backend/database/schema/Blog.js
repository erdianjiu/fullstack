const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
let ObjectId = Schema.Types.ObjectId //声明Object类型

//创建博客Schema
const blogSchema = new Schema({
    blogId: ObjectId,
    target: String,
    title: { unique: true, type: String },
    body: String,
    date: { type: Date, default: Date.now },
}, {
    collection: 'blog'
})


//发布模型
mongoose.model('Blog', blogSchema)