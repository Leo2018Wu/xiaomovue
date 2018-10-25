<template>
  <div>
    <div class="discount-right col-xs-8 col-xs-push-1">
      <h1>优惠政策二</h1>
      <p><span>优惠群体：</span>大学生毕业旅行</p>
      <p><span>优惠条件：</span>毕业证发放日期距今30天以内，并能在入住当天提供证件。</p>
      <p><span>优惠政策：</span>满足优惠条件的用户，均可享受在本网站内住房享受九五折优惠。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DiscountFirst"
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .discount-right{
    margin-top: 50px;
    padding-bottom:60px;
    background-color: #d4c2b8;
  }
  .discount-right h1{
    color: #ff666a;
    margin: 80px 30px 40px;
  }
  .discount-right span{
    font-size: 24px;
    color: #ff666a;
  }
  .discount-right p{
    font-size: 20px;
    margin: 15px 30px;
  }
</style>
