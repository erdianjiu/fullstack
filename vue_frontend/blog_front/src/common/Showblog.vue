<template>
  <div>
    <div id='blog'>
      <blogcard v-for="blog in bloglist" :key="blog.title" :blog="blog"></blogcard>
    </div>
  </div>
</template>

<script>
import url from "@/serviceAPI.config.js";
import axios from "axios";
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";
import Blogcard from "./Blogcard"
export default {
  components: {
    MarkdownItVueLight,
    Blogcard,
  },
  data() {
    return {
      bloglist: [],
    };
  },
  methods: {
    getdata() {
      axios({
        url: url.showblog,
        method: "post",
      })
        .then((response) => {
          //将response获得的数据进行处理
          // console.log(response.data.data[0]["title"]);
          this.bloglist = response.data.data;
          // this.content = response.data;
        })
        .catch((error) => {
          console.log(error);
          // ！！！出现错误怎么优化，暂时用刷新
          location.reload();
        });
    },
  },
  created: function () {
    this.getdata();
  },
};
</script>

<style scoped>
</style>