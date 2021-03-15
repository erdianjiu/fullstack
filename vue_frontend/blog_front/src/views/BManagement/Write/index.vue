<template>
  <div class="blogeditor">
    <el-input
      v-model="blogtitle"
      placeholder="请输入标题"
      class="distance"
    ></el-input>
     <el-input
      v-model="target"
      placeholder="请输入标签"
      class="distance"
    ></el-input>

    <el-input
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 30 }"
      placeholder="请输入内容"
      v-model="blogcontent"
      class="distance"
    ></el-input>
    <el-button type="primary" @click="axiosaddblog">发布博客</el-button>
    <el-button type="primary" >图片上传</el-button>
  </div>
</template>

<script>
import url from '@/serviceAPI.config.js'
import axios from 'axios'
export default {
  data() {
    return {
      blogtitle: "",
      blogcontent: "",
      target: "",
    };
  },
  methods:{
      axiosaddblog(){
          axios({
          url: url.addblog,
          method: 'post',
          data:{
              title: this.blogtitle,
              body: this.blogcontent,
              target: this.target
          }
      }).then(Response=>{
        //   console.log(Response)
          if(Response.data.code == 100){
              alert("发布成功");
          }else{
              alert("发布失败，状态码错误");
          }
      })
      .catch((error) => {
          alert("发布失败error");
      })
    }
  }
};
</script>

<style scoped>
.blogeditor {
  padding: 30px;
}
.distance {
  margin: 10px auto;
}
</style>