<template>
  <div class="container">
    <div class="row">
      <div class="steps2">
        <ul class="nav nav-pills">
          <li><p>填写订单</p ></li>
          <li><span>>></span></li>
          <li class="p2"><p>支付订单</p ></li>
          <li><span>>></span></li>
          <li><p>完成预定</p ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Steps2"
    }
</script>

<style scoped>
  .p2{
    color:#FF666A;
  }
  ul{
    font-size: 22px;
  }
  .steps2{
    margin: 0 auto;
  }
</style>
