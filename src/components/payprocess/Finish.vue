<template>
  <div class="container">
    <div class="row">
      <div class="finishpage">
        <!--顶部步骤条-->
        <app-steps3></app-steps3>
        <br>
        <!--下方文字-->
        <div class="Oconfirm">
          <br>
          <center>
            <h2><img src="../../assets/smile.png" alt="">&nbsp;您的订单支付成功</h2>
          </center>
          <br>
        </div>
        <br>
        <!--订单详情-->
        <div class="Ordnum">
          <h4 class="Oh4">订单详情</h4><br>
          <div class="infornums">
            <div class="t2">
              姓名：{{susername}}<br><br>
              身份证号：{{sidentity}}<br><br>
              手机号：{{suserphone}}<br>
            </div>
            <br>
            <div class="t1">
              入住时段：{{start_date}}&nbsp;&nbsp;~&nbsp;&nbsp;{{end_date}}&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br>
            <div class="t4">
              房租：￥{{((Date.parse(end_date)-Date.parse(start_date))/1000/60/60/24)*shouseprice}}&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
            </div>
            <h6>友情提醒：请在入住当天18点前携带身份证到柜台办理手续</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps3 from '../steps/Steps3.vue'
  export default {
    name: "Finish",
    data(){
      return{
        susername:sessionStorage.getItem('susername'),
        suserphone:sessionStorage.getItem('suserphone'),
        sidentity:sessionStorage.getItem('sidentity'),
        shouseprice:sessionStorage.getItem('shouseprice'),
        start_date:sessionStorage.getItem('start_date'),
        end_date:sessionStorage.getItem('end_date'),
      }
    },
    components:{
      'app-steps3':Steps3
    }
  }
</script>

<style scoped>
  .finishpage{
    margin-top: 80px;
  }
  .Oconfirm,.Ordnum{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .t1,.t2,.t4,.Oh4,h6{
    margin-left: 1%;
  }
  h2{
    color:#FF666A
  }
</style>
