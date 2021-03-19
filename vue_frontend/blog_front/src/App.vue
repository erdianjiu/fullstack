<template>
  <div id="app">
    <router-view class="mainshow"></router-view>
  </div>
</template>

<style>
/* 样式初始化 */
@import "assets/style/base.css";
#app {
  height: 100%;
}

/* 禁用markdown样式 */
.octicon,
.octicon-link {
  display: none !important;
}

::-webkit-scrollbar {
  display: none; /*ChromeSafari*/
}
</style>
