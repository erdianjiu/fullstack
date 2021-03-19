<template>
  <el-card class="box-card" shadow="hover">
    <div class="clearfix">
      <div class="title" @click="blogdetail" >{{ blog.title }}</div>
      <span class="info"
        ><i class="el-icon-time"></i>{{ blog.date.slice(0, 10) }}</span
      >
      <span class="info"
        ><i class="el-icon-collection"></i>{{ blog.target }}</span
      >
      <!-- <hr /> -->
    </div>
    <div>
      <markdown-it-vue-light class="md-body" :content="blog.abstract" />
    </div>
    <div class='more' @click="blogdetail">
      查看全文<i class="el-icon-arrow-right"></i>
    </div>
  </el-card>
</template>

<script>
import { setStore, getStore} from "./../utils/storage"
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";
export default {
  components: {
    MarkdownItVueLight,
  },
  props: ["blog"],
  methods:{
    blogdetail(){
      // 编程式导航
      // let data = JSON.stringify(this.blog)
      setStore('blogdata', this.blog);
      this.$router.push({
        path: 'blogdetail',
        query: {data: this.blog._id}
      });
    }
  }
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 55vw;
  margin-bottom: 7px;
  background-color: #fafafa;
  padding: -30px;
  position: relative;
}

.title {
  font-size: 22px;
  font-weight: 700;
  color: #409eff;
}
.info {
  margin-right: 10px;
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
}
hr {
  background-color: #ccc;
  height: 1px;
  margin: 5px 0px;
  border: none;
}
.more{
  position: absolute;
  right: 0;
  bottom: 0;
  color: #409eff;
  cursor:default;
}

.router-link,
a {
  text-decoration: none !important;
  color: #409eff;
}
.router-link-active {
  text-decoration: none;
}
</style>