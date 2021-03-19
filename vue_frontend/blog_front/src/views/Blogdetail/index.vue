<template>
  <div class="content">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>#{{ data.target }}</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item></el-breadcrumb
      >
    </div>
    <div class="title center">{{ data.title }}</div>
    <div class="info center">
      <span> <i class="el-icon-time"></i></span>
      <span>{{ data.date.slice(0, 10) }}</span>
    </div>
    <div>
      <markdown-it-vue-light class="md-body" :content="data.body" />
    </div>
  </div>
</template>

<script>
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";
import { getStore } from "../../utils/storage";
export default {
    components: {
    MarkdownItVueLight,
  },
  data() {
    return {
      data: {},
    };
  },
  // methods: {
  //     saveData(){
  //         const data = getStore('data');
  //         console.log('ll')
  //         if(data != null){
  //             this.getData = data;
  //             console.log('2')
  //         }else{
  //             setStore('data', this.$route.query.data);
  //             console.log('3')
  //         };
  //         this.getData = getStore('data');
  //     }
  // },
  created: function () {
    this.data = JSON.parse(getStore("blogdata"));
  },
};
</script>

<style scoped>
.content {
  background-color: #fafafa;
  width: 60vw;
  margin: 0px auto;
  padding: 0 5vw;
  margin-bottom: 20vh;
}
.title {
  font-size: 30px;
  font-weight: 700;
  color: #409eff;
  margin: 0px auto;
}
.info {
margin-left: -20px !important;
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
}
.center {
  text-align: center;
  margin: 0px auto;
}
</style>