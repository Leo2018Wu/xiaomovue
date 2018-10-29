<template>
  <div>

  <el-tabs v-model="activeName2" type="border-card">
    <!--<el-tab-pane label="全部订单" name="first"><all-order></all-order></el-tab-pane>-->
    <el-tab-pane label="支付成功" name="first"><pay-success></pay-success></el-tab-pane>
    <el-tab-pane label="待支付" name="second"><pay-wait></pay-wait></el-tab-pane>
    <el-tab-pane label="订单完成" name="third"><finish-order></finish-order></el-tab-pane>
    <el-tab-pane label="订单已取消" name="fourth"><cancel-order></cancel-order></el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  import CancelOrder from './CancelOrder.vue'
  import Paysuccess from './Paysuccess.vue'
  import Paywait from './Paywait.vue'
  import Finishorder from './Finishorder.vue'
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
  components:{
    'cancel-order':CancelOrder,
      'pay-success':Paysuccess,
      'pay-wait':Paywait,
    'finish-order':Finishorder,
  }
  };
</script>
<style scoped>
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #ff666a;
  }
</style>
