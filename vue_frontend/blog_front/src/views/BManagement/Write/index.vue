<template>
  <div class="blogeditor">
   
  <el-switch
  v-model="personal"
  active-text="隐私"
  inactive-text="公开">
</el-switch>



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
      :rows="2"
      v-model="abstract"
      placeholder="请输入简介"
      class="distance"
    ></el-input>

    <div class="mavonEditor">
      <mavon-editor :toolbars="markdownOption" v-model="blogcontent" />
    </div>
    <el-button type="primary" @click="axiosaddblog">发布博客</el-button>
    <el-button type="primary">图片上传</el-button>
  </div>
</template>

<script>
import url from "@/serviceAPI.config.js";
import axios from "axios";
export default {
  data() {
    return {
      personal: false,
      blogtitle: "",
      blogcontent: "",
      target: "",
      abstract:'',
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  methods: {
    axiosaddblog() {
      axios({
        url: url.addblog,
        method: "post",
        data: {
          title: this.blogtitle,
          body: this.blogcontent,
          target: this.target,
          abstract: this.abstract,
          personal: this.personal,
        },
      })
        .then((Response) => {
          //   console.log(Response)
          if (Response.data.code == 100) {
            alert("发布成功");
          } else {
            alert("发布失败，状态码错误");
          }
        })
        .catch((error) => {
          alert("发布失败error");
        });
    },
  },
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