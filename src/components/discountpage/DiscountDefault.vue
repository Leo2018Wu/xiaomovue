<template>
    <div class="discount-right col-xs-8 col-xs-push-1">
      <h1>小沫短租</h1>
      <p>蜜月出行新选择</p>
      <h2>更多优惠，等你来拿</h2>
    </div>
</template>

<script>
    export default {
        name: "DiscountDefault"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .discount-right{
    /*height: 300px;*/
    margin-top: 50px;
    background-color: #d4c2b8;
  }
  .discount-right h1{
    color: white;
    font-weight: bold;
    margin: 80px 40px 20px;
  }
  .discount-right p{
    color: white;
    font-size: 34px;
    font-weight: bold;
    margin: 40px;
  }
  .discount-right h2{
    color: white;
    text-align: center;
    margin-bottom: 100px;
  }
</style>
