<template>
  <div>
    <el-row>
      <el-col :span="1"><div>左间隔</div></el-col>
      <el-col :span="8"><div class="blogContent"></div></el-col>
      <el-col :span="14">
        <div class="blogContent">
          <showblog></showblog>
        </div>
      </el-col>
      <el-col :span="1">
        <div>右间隔</div>
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