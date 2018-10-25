<template>
  <div class="container">
    <div class="row">
      <div class="steps1">
          <ul class="nav nav-pills">
            <li><p class="p1">填写订单</p ></li>
            <li><span>>></span></li>
            <li><p>支付订单</p ></li>
            <li><span>>></span></li>
            <li><p>完成预定</p ></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Steps1"
    }
</script>

<style scoped>
  .p1{
    color:#FF666A;
  }
  ul{
    font-size: 22px;
  }
  .steps1{
    margin: 0 auto;
  }
</style>
