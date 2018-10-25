<template>
  <div class="container">
    <div class="row">
      <div class="steps3">
        <ul class="nav nav-pills">
          <li><p>填写订单</p ></li>
          <li><span>>></span></li>
          <li><p>支付订单</p ></li>
          <li><span>>></span></li>
          <li class="p3"><p>完成预定</p ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Steps3"
    }
</script>

<style scoped>
  .p3{
    color:#FF666A;
  }
  ul{
    font-size: 22px;
  }
  .steps3{
    margin: 0 auto;
  }
</style>
