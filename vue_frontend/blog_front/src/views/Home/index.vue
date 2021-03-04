<template>
  <div>
    <el-row >
      <el-col :span="2"><div class="grid-content bg-purple">左间隔</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">右布局</div></el-col>
      <el-col :span="14"><div>gg</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">右间隔</div></el-col>
    </el-row>
  </div>
</template>


// <script>
// export default {
//   data() {
//     return {
//       essayList: []
//     };
//   }
//   }
// </script>


<style scoped>
.el-row {
    margin-bottom: 20px;
    height: 1500px;
  }
  .el-col {
    height: 1500px;
    border-radius: 4px;
  }
</style>