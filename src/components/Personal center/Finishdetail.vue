<template>
  <div class="paypage">
    <br>
    <!--中间订单页面-->
    <div class="Ordnum">
      <h3 class="Oh3">订单详情</h3><br>
      <div class="infornums">
        <div class="t1">
          <span class="wait"></span>&nbsp;&nbsp;<span class="a">入住信息</span><br><br>
          房源信息：{{mydatas[0].hName}}<br><br>
          入住时段：{{mydatas[0].arrvialDate}}---{{mydatas[0].leaveDate}}<br>
        </div>
        <br>
        <div class="t2" >
          <span class="wait"></span>&nbsp;&nbsp;<span class="a">入住人信息</span><br><br>
          <div v-for="mydata in mydatas">
            姓名：{{mydata.occName}}<br><br>
            身份证号：{{mydata.occCordId}}<br><br>
            手机号：{{mydata.occPhone}}<br>
          </div>
        </div>
        <br>
        <div class="t3">
          <span class="wait"></span>&nbsp;&nbsp;<span class="a">预定人信息</span><br><br>
          姓名：{{mydatas[0].uName}}<br><br>
          手机：{{mydatas[0].uPhone}}<br>
        </div>
        <br>
        <div class="Costs">
          &nbsp;&nbsp;<span class="label">订单费用信息</span>
          <br><br>
          <div class="table">
            <table class="table table-bordered" style="width: 95%;background: white">
              <tbody>
              <tr>
                <th style="width: 25%"></th>
                <td style="width: 15%">日均价</td>
                <td style="width: 15%">预定数量</td>
                <td style="width: 15%">天数</td>
                <td style="width: 15%">优惠</td>
                <td style="width: 15%">总价</td>
              </tr>
              <tr>
                <th style="width: 25%">房租</th>
                <td style="width: 15%">￥{{mydatas[0].hPrice}}</td>
                <td style="width: 15%">1</td>
                <td style="width: 15%">{{(Date.parse(mydatas[0].leaveDate)-Date.parse(mydatas[0].arrvialDate))/1000/60/60/24}}天</td>
                <td style="width: 15%"><span style="color:#FF666A">备注：入住当天凭有效证件返现</span></td>
                <td style="width: 15%">￥{{(Date.parse(mydatas[0].leaveDate)-Date.parse(mydatas[0].arrvialDate))/1000/60/60/24*mydatas[0].hPrice}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <br>
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
        activeNames: ['1'],
        oId:this.$route.params.oIde,
        mydatas:[],
      }
    },
    mounted(){
      this.$axios.get(`/order/getOrderDetail/${this.oId}`).then((result)=> {
        this.mydatas = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },

  }
</script>

<style scoped>
  .paypage{
    margin-top: 0px;
  }
  .wait{
    display: inline-block;
    width: 8px;
    height: 25px;
    background-color: #FF666A;
  }
  .unsub,.list-inline,.payway,.t1,.t2,.t3,.Oh3{
    margin-left: 1%;
  }
  li{
    margin-right: 2%;
  }
  .a {
    font-size: 180%;
    background-color: #FFf;
    color: rgba(0,0,0,0.73);
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
