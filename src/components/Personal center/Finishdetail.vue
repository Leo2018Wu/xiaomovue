<template>
  <div class="paypage">
    <br>
    <!--中间订单页面-->
    <div class="Ordnum">
      <h3 class="Oh3">订单详情</h3><br>
      <div class="infornums">
        <div class="t1">
          <span class="label label-info">入住信息</span><br><br>
          房源信息：{{mydatas[0].hName}}<br><br>
          入住时段：{{mydatas[0].arrvialDate}}-{{mydatas[0].leaveDate}}<br>
        </div>
        <br>
        <div class="t2" >
          <span class="label label-info">入住人信息</span><br><br>
          <div v-for="mydata in mydatas">
          姓名：{{mydata.occName}}<br><br>
          身份证号：{{mydata.occCordId}}<br><br>
          手机号：{{mydata.occPhone}}<br>
          </div>
        </div>
        <br>
        <div class="t3">
          <span class="label label-info">预定人信息</span><br><br>
          姓名：{{mydatas[0].uTrueName}}<br><br>
          手机：{{mydatas[0].uPhone}}<br>
        </div>
        <br>
        <div class="Costs">
          <br>
          &nbsp;&nbsp;<span class="label label-info">订单费用信息</span>
          <br>{{mydatas[0].hPrice}}<br><br>
          <div class="eltable">
            <el-table style="width: 95%">
              <el-table-column prop="title" label="" style="width: 25%"></el-table-column>
              <el-table-column prop="price" label="日均价" style="width: 15%"></el-table-column>
              <el-table-column  prop="number0" label="预定数量" style="width: 15%"></el-table-column>
              <el-table-column prop="dates" label="天数" style="width: 15%"></el-table-column>
              <el-table-column prop="discount" label="优惠" style="width: 15%"></el-table-column>
              <el-table-column  prop="prices" label="总价" style="width: 15%"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!--底部规则-->
    <div class="unsubscribe">
      <br>
      &nbsp;&nbsp;<span class="label label-info">退订规则</span>
      <br><br>
      <div class="unsub">
        <h5>交易规则</h5>
        <p>
          根据房东设置的交易规则未早于10月31日退订视为有责取消，应扣除取消订单时间点后1天订金作为违约金，剩余钱款将被原路退还 取消订单和提前退房时间以小沫系统中记录的时间为准。如与房东产生争议，请致电小沫客服电话：400 010 7890
        </p>
        <h5>友情提示</h5>
        <p>
          入住后如您认为照片与房间实际情况有较大差异时，可将能够证明存在较大差异的材料（如带有拍摄日期水印的实地拍摄照片、短视频等）提供给客服进行审核；如小沫工作人员核查认为材料真实、有效，小沫将安排专门的客服人员与您联系，并尽最大可能为您解决问题。因自然灾害及其他不可抗力因素导致的退订需求，由您和房东协商解决。 已支付押金将在您入住完成后原路退还，该钱款不包含在订单总金额内。
        </p>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
  import axios from 'axios'
  // let oId = this.$route.params.oIdq
  export default {
    name: "Pay",
    data(){
      return {
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
        activeNames: ['1'],
        oId:this.$route.params.oIde,
        mydatas:[]
      }
    },
    mounted(){
      axios.get('http://localhost:3000/order/getOrderDetail/1').then((result)=> {
        this.mydatas = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },

  }
</script>

<style scoped>
  .Ordnum,.unsubscribe,.ways{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .help{
    background-color:#F5F5F5 ;
  }
  .Ph3{
    color:#FF666A
  }
  h5{
    font-weight: bold;
  }
  .unsub,.list-inline,.payway,.t1,.t2,.t3,.Oh3{
    margin-left: 1%;
  }
  /*.Costs{*/
  /*border: 1px solid gainsboro;*/
  /*box-shadow: 4px 4px 8px grey;*/
  /*border-radius: 10px;*/
  /*background-color: #F5F5F5;*/
  /*}*/
  li{
    margin-right: 2%;
  }
  .label {
    font-size: 180%;
    background-color: #FF666A;
    /*label label-info*/
  }
  @media (min-width: 768px) {
    h5{
      font-size: 12px;
      line-height: 20px;
    }
    p{
      font-size:10px;
      line-height: 20px;
    }
  }
  @media (min-width: 992px) {
    h5{
      font-size: 14px;
      line-height: 25px;
    }
    p{
      font-size:12px;
      line-height: 25px;
    }
  }
  @media (min-width: 1280px) {
    h5{
      font-size: 16px;
      line-height: 30px;
    }
    p{
      font-size:14px;
      line-height: 30px;
    }
  }
  .label {
    font-size: 160%;
  }
</style>
