<template>
  <div>
    <markdown-it-vue-light class="md-body" :content="content" />
  </div>
</template>

<script>
import axios from "axios";
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";
export default {
  components: {
    MarkdownItVueLight,
  },
  data() {
    return {
      content: "# your markdown content",
    };
  },
  methods: {
    showblog() {
      axios({
        url: url.showblog,
        method: "post",
        // data: {
        //   title: "",
        //   target: "",
        //   body: "",
        // },
      }).then(response => {
         this.content = response.data
    })
    .catch((error) => {   
        console.log('loading blogs failed')  
    })
    },
  },
};
</script>