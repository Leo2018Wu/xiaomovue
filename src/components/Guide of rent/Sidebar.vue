<template>
  <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        @select="handleSelect" router
        background-color="transparent">
        <!--text-color="#3B3939"-->
        <!--active-text-color="#ffd04b">-->
        <el-menu-item index="/guide">
          <span slot="title">独特的房间和预定</span>
        </el-menu-item>
        <el-menu-item index="/guide/guideb">
          <span slot="title">入住、评价和分享</span>
        </el-menu-item>
        <el-menu-item index="/guide/guidec">
          <span slot="title">安全完备的保障</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: "Sider",
    data: function () {
      return {}
    },
    computed: {
      activeIndex() {
        return this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>

<style scoped>
  span{
    font-size: 17px;
  }
  .el-menu-item {
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    width: 180px;
  }
</style>


