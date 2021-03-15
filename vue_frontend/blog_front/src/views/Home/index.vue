<template>
  <div>
    <el-row >
      <el-col :span="1"><div>左间隔</div></el-col>
      <el-col :span="8"><div class="blogContent"></div></el-col>
      <el-col :span="14"><div class="blogContent"></div></el-col>
      <el-col :span="1"><div>右间隔</div></el-col>
    </el-row>
  </div>
</template>


<script>

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
    margin-top: 4px;
  }
  /* markdown */
  .mavonEditor {
  width: 100%;
  height: 100%;
}
</style>