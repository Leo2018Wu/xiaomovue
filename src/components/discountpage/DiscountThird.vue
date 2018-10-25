<template>
  <div>
    <div class="discount-right col-xs-8 col-xs-push-1">
      <h1>优惠政策三</h1>
      <p><span>优惠群体：</span>全体旅游爱好者</p>
      <p><span>优惠条件：</span>分享自己的邀请码，成功邀请朋友注册为本网站的用户。</p>
      <p><span>优惠政策：</span>每成功邀请1位朋友注册，你们均可获得300元住房基金。</p>
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
