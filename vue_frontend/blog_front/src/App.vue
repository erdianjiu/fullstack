<template>
  <div id="app">
    <router-view class="mainshow"></router-view>
  </div>
</template>

<style>
/* 样式初始化 */
@import 'assets/style/base.css';
#app {
  height: 100%;
}
.mainshow{
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

</style>
