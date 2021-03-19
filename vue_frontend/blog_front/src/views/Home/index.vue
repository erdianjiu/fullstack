<template>
  <div>
    <el-row class='mainshow'>
      <el-col :span="2">
        <!-- 左间隔 -->
      </el-col>
      <el-col :span="6"><div class="blogContent"></div></el-col>
      <el-col :span="16">
        
          <showblog></showblog>
  
      </el-col>
      <el-col :span="2">
        <!-- 右间隔 -->
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Showblog from "@/common/Showblog";

export default {
  components: {
    Showblog,
  },
};
</script>


<style scoped>
/* .mainshow{
  margin-top: 68px;
} */
.el-row {
  margin-bottom: 20px;
  height: 1500px;
}
.el-col {
  height: 1500px;
  border-radius: 4px;
}
.blogContent {
  margin: 4px auto;
}

</style>