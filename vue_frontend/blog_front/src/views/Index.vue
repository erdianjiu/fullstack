
<template>
  <div>
    <m-header></m-header>
    <!-- 子路由的出口-->
    <div class='mainshow'><router-view></router-view></div>
  </div>
</template>

<script>
import MHeader from "@/common/MHeader";
export default {
  components: {
    MHeader,
  },
  
};
</script>

<style scoped>
.mainshow{
  margin-top: 68px;
}
</style>