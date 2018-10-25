<template>
  <!--<div>-->
    <div class="row">
      <div class="home-third-header">
        <h1>身在四海，如在家！</h1>
        <p>属于我们的故事</p>
      </div>
    <div>
      <el-carousel :interval="2000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    </div>
</template>

<script>
    export default {
        name: "HomeThird"
    }
</script>

<style scoped>
  *{margin: 0;padding:0;}
  img{
    width: 80%;
    display:block
  }
  .home-third-header{
    margin: 70px auto;
  }
  .home-third-header h1{
    margin-bottom: 20px;
    text-align: center;
  }
  .home-third-header P{
    color: #696969;
    text-align: center;
  }
  @media (max-width: 768px) {
    .home-third-header h1{
      font-size:32px;
    }
    .home-third-header p{
      font-size:14px;
    }
  }
  @media (max-width: 992px) {
    .home-third-header h1{
      font-size:34px;
    }
    .home-third-header p{
      font-size:16px;
    }
  }
  @media (max-width: 1220px) {
    .home-third-header h1{
      font-size:36px;
    }
    .home-third-header p{
      font-size:18px;
    }

  }
  @media (min-width: 1220px) {
    .home-third-header h1{
      font-size:40px;
    }
    .home-third-header p{
      font-size:20px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-of-type(1) {
    background-image: url("../../assets/fengjing-01.jpg");
  }
  .el-carousel__item:nth-of-type(2) {
    background-image: url("../../assets/fengjing-02.jpg");
  }
  .el-carousel__item:nth-of-type(3) {
    background-image: url("../../assets/fengjing-03.jpg");
  }
  .el-carousel__item:nth-of-type(4) {
    background-image: url("../../assets/fengjing-04.jpg");
  }
  .el-carousel__item:nth-of-type(5) {
    background-image: url("../../assets/fengjing-05.jpg");
  }
  .el-carousel__item:nth-of-type(6) {
    background-image: url("../../assets/fengjing-06.jpg");
  }
</style>
