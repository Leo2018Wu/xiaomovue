<template>
  <div class="container">
    <div class="row">
      <div class="paypage">
        <!--顶部步骤条-->
        <app-steps2></app-steps2>
        <br>
        <!--头部-->
        <div class="Paytop">
          <br>
          <center>
            <h3 class="Ph3"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;订单提交成功，请尽快支付现金</h3>
          </center>
          <br>
        </div>
        <br>
        <!--中间订单页面-->
        <div class="Ordnum">
          <h3 class="Oh3">订单详情</h3><br>
          <div class="infornums">
            <div class="t1">
              <span class="label label-info">入住信息</span><br><br>
              房源信息：{{$store.state.hname}}<br><br>
              入住时段：{{$store.state.create_start_date}}&nbsp;&nbsp;{{$store.state.create_end_date}}<br>
            </div>
            <br>
            <div class="t2">
              <span class="label label-info">入住人信息</span><br><br>
              姓名：{{$store.state.name1}}<br><br>
              身份证号：{{$store.state.identity1}}<br><br>
              手机号：{{$store.state.phone1}}<br>
            </div>
            <br>
            <div class="t3">
              <span class="label label-info">预定人信息</span><br><br>
              姓名：{{$store.state.resname}}<br><br>
              手机：{{$store.state.resphone}}<br>
            </div>
            <br>
            <div class="t4">
              <span class="label label-info">订单费用信息</span><br><br>
              房租：{{(($store.state.create_end_date-$store.state.create_start_date)/(60*60*24*1000))*$store.state.price}}&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
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
        <!--支付方式-->
        <div class="ways">
          <br>
          <div class="payway">
            <span class="label label-info">支付方式</span><br><br>
            <h5>支付平台</h5>
            <ul class="list-inline">
              <li><input type="radio" v-model="radio1" name="radios" id="1"><label for="1">&nbsp;&nbsp;<img src="../../assets/pay1.jpg" alt="" style="max-width: 50px"></label></li>
              <li><input type="radio" v-model="radio2" name="radios" id="2"><label for="2">&nbsp;&nbsp;<img src="../../assets/pay2.jpg" alt="" style="max-width: 50px"></label></li>
              <li><input type="radio" v-model="radio3" name="radios" id="3"><label for="3">&nbsp;&nbsp;<img src="../../assets/pay3.jpg" alt="" style="max-width: 80px"></label></li>
              <li><input type="radio" v-model="radio4" name="radios" id="4"><label for="4">&nbsp;&nbsp;<img src="../../assets/pay4.jpg" alt="" style="max-width: 80px"></label></li>
            </ul>
          </div>
        </div>
        <br>
        <center><a><el-button type="danger" @click="pays" round>支付</el-button></a></center>
        <br>
        <!--帮助-->
        <div class="help">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="1、没有网上银行怎么付款？" name="1" class="divt">
              <div class="divp">只要您有储蓄卡/信用卡，可使用银联的快捷支付进行购买，无需开通网上银行。</div>
              <div>或者，您可以找您的朋友帮您付款。</div>
            </el-collapse-item>
            <el-collapse-item title='2、网上银行扣款后，订单仍显示“未付款”怎么办？' name="2">
              <div>可能是由于银行的数据没有及时传输，请您不要担心，稍后刷新页面查看。</div>
              <div>如较长时间仍显示未付款，可联系小沫客服（400-0183-100）为您解决。</div>
            </el-collapse-item>
            <el-collapse-item title="3、网上银行支付失败怎么办？" name="3">
              <div>如有因网络中断或页面过期、超时、错误等问题导致支付失败，请先确认是否已经扣款，如未扣款可尝试再支付一次。</div>
              <div>您也可以联系您使用的银行或支付平台获得帮助。</div>
            </el-collapse-item>
            <el-collapse-item title="4、取消订单，退款什么时候到账？" name="4">
              <div>小沫支持实时退款。退款到账时间：支付宝/财付通为一个工作日到账；网银/信用卡1到7个工作日到账。</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps2 from '../steps/Steps2.vue'
  import axios from 'axios'
    export default {
        name: "Pay",
      data(){
        return {
          radio1: false,
          radio2: false,
          radio3: false,
          radio4: false,
          activeNames: ['1'],
        }
      },
      components:{
        'app-steps2':Steps2,
      },
      // mounted(){
      //   // 获取某一订单号oId
      //   axios.get(`http://localhost:3000/order/getoneorder/8`).then((result)=>{
      //   this.orderInfos=result.data.data
      //   console.log(this.orderInfos);
      // },(err)=>{
      //   console.log(result.err)
      // })
      // },
      methods: {
        pays(index) {
          let _this=this
          if (this.radio1 == false && this.radio2 == false && this.radio3 == false && this.radio4 == false)
            alert('请选择支付方式!')
          else
          // 修改获取到的订单号的订单状态
            axios.post(`http://localhost:3000/order/updateorder`, {
              // oId:_this.orderInfos[index].oId,
              oStatus: 1,
            })
            this.$router.push({path: '/finish'})
        },
        handleChange(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>
  .paypage{
    margin-top: 60px;
  }
  .Paytop,.Ordnum,.unsubscribe,.ways{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  /*.help{*/
    /*border: 1px solid gainsboro;*/
    /*box-shadow: 4px 4px 8px grey;*/
    /*border-radius: 10px;*/
    /*background-color:#F5F5F5 ;*/
  /*}*/
  .Ph3{
    color:#FF666A
  }
  h5{
    font-weight: bold;
  }
  .unsub,.list-inline,.payway,.t1,.t2,.t3,.t4,.Oh3{
    margin-left: 1%;
  }
  li{
    margin-right: 2%;
  }
  .label {
    font-size: 180%;
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
