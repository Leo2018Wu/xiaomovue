<template>

    <div class="knowho col-xs-8" >
      <div style="height:200px;">
      <div style="margin-left:10%;position:absolute;top:30px;border-bottom:2px solid #eaeaea;height:170px;width:80%;">
        <h2 style="font-size:25px;color:#afafaf;">押金及其他费用</h2>
        <p style="margin-top:20px;">押金： 888元</p>
        <p  >加客：￥0/人，最多加客3人，加客费用线下收取。</p>
        <p  > 其他额外费用：每天免30度电，超出1元1℃，为了节约，不是为了收钱 </p>
      </div>
      </div>
      <div style="width:100%;height:150px; ">
       <div style="margin-left:10%;border-bottom:2px solid #eaeaea;height:150px;width:80%;">
        <h2 style="font-size:25px;color:#afafaf;">预订方式</h2>
        <p style="margin-top:20px;">下单即可入住，无需房东确认。</p>
        <p >订单确认后，在线支付总房款的100%。</p>
        <p >额外的服务费用不包含在总房租内，由房东线下收取。 </p>
      </div>
      </div>
      <div style=" width:100%;">
        <h2 style="font-size:25px;color:#afafaf;margin-left:10%;  ">退订规则</h2>
        <el-steps :active="2" align-center>
          <el-step title="预定成功" description="如取消订单，定金全部退还"></el-step>
          <el-step title="入住前5天14:00前" description="如取消订单，扣除前5天定金"></el-step>
          <el-step title="入住当天14:00前" description="如提前退房，扣除之后的5天定金"></el-step>
          <el-step title="退房当天12:00前" description=" "></el-step>
        </el-steps>
        <div style="margin:40px 10%;line-height:25px;">根据房东设置的交易规则未早于入住日14：00 5天退订视为有责取消 ，
        应扣除取消订单时间点后 5天订金作为违约金，剩余钱款将被原路退还 </div>
      </div>



  </div>
</template>

<script>
    export default {
        name: "knowho"
    }
</script>

<style scoped>

  .knowho{
     margin-left:2%;
    margin-top:10px;

    background-color: #fff;
  }
  p{
    line-height:16px;
  }
  @media (max-width:1200px) {
    .knowho {
      width: 90%;
      margin-left: 5%;

    }
  }

</style>
