<template>
    <div class="row">
<div class="all-fifth col-xs-12">
  <div class="fifth-header">
    <h1>世间所有的相遇都是久别重逢</h1>
    <p>房客和房东都在彼此感动着</p>
  </div>
  <div class="row">
    <div class="fifth-left">
      <app-home-fifth-left></app-home-fifth-left>
    </div>
    <div class="fifth-right">
      <app-home-fifth-right></app-home-fifth-right>
    </div>
  </div>
</div>
    </div>
</template>

<script>
  import HomeFifthLeft from './HomeFifthLeft.vue'
  import HomeFifthRight from './HomeFifthRight.vue'
    export default {
        name: "HomeFifth",
      components:{
          'app-home-fifth-left':HomeFifthLeft,
          'app-home-fifth-right':HomeFifthRight,
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  img{
    width: 100%;
  }
.all-fifth{
  margin-top: 100px;
  padding: 20px 0;
  background: url("../../assets/footer-img.png") no-repeat;
}
  .fifth-header h1{
    padding-top:20px;
    color: white;
    text-align: center;
  }
  .fifth-header p{
    margin-top:20px;
    color: white;
    text-align: center;
  }
  @media (max-width: 768px) {
    .fifth-header h1{
      font-size:28px;
    }
    .fifth-header p{
      font-size:14px;
    }
  }
  @media (max-width: 992px) {
    .fifth-header h1{
      font-size:32px;
    }
    .fifth-header p{
      font-size:16px;
    }

  }
  @media (max-width: 1220px) {
    .fifth-header h1{
      font-size:36px;
    }
    .fifth-header p{
      font-size:18px;
    }

  }
  @media (min-width: 1220px) {
    .fifth-header h1{
      font-size:40px;
    }
    .fifth-header p{
      font-size:20px;
    }
  }
</style>
