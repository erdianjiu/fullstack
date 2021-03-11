<template>
  <div class="myheader">
    <div class="left-nav">
      <router-link to="/" title="我的博客">
        <img class="logo" src="../assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="right-nav">
      <div class="nav-list">
        <ul>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/summary">归档</router-link></li>
          <li><router-link to="/efficiency">效率</router-link></li>
          <li><router-link to="/music">音乐</router-link></li>
        </ul>
        <el-input
          class="searchbar"
          placeholder="找什么..."
          suffix-icon="el-icon-search"
          minlength="1"
          maxlength="100"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>


<style scoped>
.myheader {
  background-color: #ededed;
  height: 61px;
  overflow: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
/* .myheader::-webkit-scrollbar {
        display: none;/*隐藏滚动条*/

/* 左半部分导航 */
.left-nav {
  height: 50px;
  width: 60px;
  margin: 5px 0px;
  padding-left: 10%;
  float: left;
}
.logo {
  height: 100%;
  margin: 0 auto;
}

/* 右半部分导航 */
.right-nav {
  height: 60px;
  width: 65%;
  padding-right: 10%;
  float: right;
}
.searchbar {
  width: 40%;
  margin: 12px;
  float: right;
}

.nav-list ul li {
  list-style: none;
  padding-left: 10px;
  padding-right: 10px;
  margin: 1px;
  width: 6%;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  float: right;
}

.nav-list ul li:hover {
  background-color: #fff;
}
a {
  text-decoration: none;
  color: black;
}
</style>