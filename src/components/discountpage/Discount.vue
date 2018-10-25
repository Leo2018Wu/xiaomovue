<template>
  <div class="row">
    <div class="discount-img col-sm-12"><img src="../../assets/navigation.jpg" alt=""></div>
<div class="row">
  <div class="discount-left col-xs-3">
    <ul class="discount-ul">
      <router-link tag="li" to="/discount/discountfirst">优惠政策一</router-link>
      <router-link tag="li" to="/discount/discountsecond">优惠政策二</router-link>
      <router-link tag="li" to="/discount/discountthird">优惠政策三</router-link>
    </ul>
  </div>
  <div>
<router-view></router-view>
  </div>
</div>
  </div>
</template>

<script>
    export default {
        name: "Discount"
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  img{
    margin-top: 60px;
    width: 100%;
  }
  .discount-ul{
    list-style: none;
    margin-top: 50px;
    background-color: #eee;
  }
  .discount-ul li{
    padding:20px;
    text-align: center;
    font-size: 20px;
    color: #ff666a;
  }
  .discount-ul li:hover{
    color: white;
    background-color: #ff666a;
  }
</style>
