<template>
  <div class="container">
    <div class="row">
      <div class="finishpage">
        <!--顶部步骤条-->
        <app-steps3></app-steps3>
        <div class="Oconfirm">
          <br>
          <center><h2>您的订单支付成功，</h2>
            <h2>请在18点前入住！</h2></center>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps3 from '../steps/Steps3.vue'
    export default {
        name: "Finish",
      components:{
        'app-steps3':Steps3
      }
    }
</script>

<style scoped>
  .finishpage{
    margin-top: 60px;
  }
  .Oconfirm{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  h2{
    color:#FF666A
  }
</style>
