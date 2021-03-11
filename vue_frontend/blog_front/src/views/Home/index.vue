<template>
  <div>
    <el-row >
      <el-col :span="1"><div>左间隔</div></el-col>
      <el-col :span="8"><div><el-transfer v-model="value" :data="data"></el-transfer></div></el-col>
      <el-col :span="14"><div>gg</div></el-col>
      <el-col :span="1"><div>右间隔</div></el-col>
    </el-row>
  </div>
</template>


<script>
export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
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
</style>