<template>
  <div id="home_div" style="height:100%;">
    <el-container>
      <el-header style="font-size: 12px">
        <div style="float: left;">
          <!-- 荔驾学车 -->
          <img src="../assets/img/ljxc.png"  height="60" alt="">
          <div style="font-size: 30px;color:#ffffff;display: block;top: 0;position: absolute;margin-left: 100px;font-weight: bold;">荔驾学车后台系统</div>
        </div>
        <div style="float: right;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: #323232;border:0;">
          <el-menu background-color="#323232" text-color="#fff"  :router='true' :default-active="$router.path" active-text-color="#ffd04b">
             <el-menu-item index="editorPage">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
            <!-- <el-submenu index="3">
  <template slot="title"><i class="el-icon-setting"></i>导航三</template>
  <el-menu-item index="3-1">选项1</el-menu-item>
  <el-menu-item index="3-2">选项2</el-menu-item>
</el-submenu> -->

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'home_div',
  data() {

    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      editor: "",
      testDemo: "",
      tableData: Array(20).fill(item)
    }
  },
  components: {

  },
  filters: {},
  mounted: function() {

  },
   computed: {
        
    },
  watch: {

  },
  methods: {

  }
}

</script>
<style lang="less">
@import '../assets/less/common.less';

#home_div {
  border: 0;

  >.el-container {
    min-height: 100%;
    height: auto;
    border: 0;

    .el-menu {
      border-color: #323232;
    }
  }
}

.el-header {
  background-color: #323232;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #fff;
}

</style>
