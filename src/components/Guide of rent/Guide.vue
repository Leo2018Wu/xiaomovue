<template>
  <div class="guid">
    <el-row>
      <el-col :span="8":offset="16">
        <div class="grid-content bg-purple-dark">
          <h3 style="font-weight: bold;font-family: Bell MT">房客指南   User Guide</h3>
        <p style="line-height: 24px;">分享自己闲置的房房屋或者房间既能赚钱，
          又能结识新朋友旅行时，选择当地的人家，
          不仅价格实惠，而且居住自由，可以做饭和洗衣服，设施和用品也更有“家”的感觉。</p>
      </div>
      </el-col>
    </el-row>

    <el-row class="tac">
      <el-col :span="3":offset="2" ><div class="grid-content bg-purple  side"><app-side></app-side></div></el-col>
      <el-col :span="16":offset="2"><div class="grid-content bg-purple-light count"> <router-view></router-view></div></el-col>
      <el-col :span="1"><div class="grid-content bg-purple-light count"> </div></el-col>
    </el-row>
  </div>
</template>

<script>
  import Side from '../Guide of rent/Sidebar.vue'
  export default {
    name: "Company",
    components: {
      'app-side': Side,
    },

  }
</script>
<style scoped>
  .guid{
    height:855px;
    margin-top: 60px;
    background-image: url("../../assets/Pguide.png");
    background-position:-50px -100px ;
  }
  .count,.side{
    margin-top: 100px;
  }

</style>
