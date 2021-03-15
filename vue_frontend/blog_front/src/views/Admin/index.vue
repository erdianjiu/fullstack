<template>
  <div>
    <el-col :span="24"><div class="navhead"></div></el-col>
    <el-row>
      <el-col :span="5" class="leftside">
        <div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-notebook-1"></i>
                <span>博客</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-edit-outline"></i><router-link class="rlink" to="/admin/write">编辑</router-link>
                  </el-menu-item>
              <el-menu-item index="1-2">
                  <i class="el-icon-notebook-2"></i><router-link class="rlink" to="/admin/summary">归档</router-link>
                  </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-s-management"></i>
              <span slot="title">效率</span>
            </el-menu-item>
          </el-menu>
        </div></el-col>
      <el-col :span="19"> <div id="routerpart"><router-view></router-view></div></el-col>
    </el-row>
  </div>
</template>

<style>
.navhead {
  background-color: rgb(84, 92, 100);
  height: 2vh;
}
.leftside {
  height: 98vh;
  background-color: rgb(84, 92, 100);
}
.rlink{
  color: #fff;
}
 /* .navhead, */
#routerpart{
  overflow: auto;
  height: 98vh;
  width: 100%;
}
</style>