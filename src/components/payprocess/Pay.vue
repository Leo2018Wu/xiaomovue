<template>
  <div class="container" id="to">
    <div class="row">
      <div class="paypage">
        <!--顶部步骤条-->
        <app-steps2></app-steps2>
        <br>
        <!--头部-->
        <div class="Paytop">
          <br>
          <center>
            <h2 class="Ph3"><span class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;订单提交成功，请尽快支付现金</h2>
          </center>
          <br>
          <center><h4>请您在<span style="color:red">&nbsp;{{minute}}:{{second}}</span>&nbsp;分钟之内完成支付</h4></center>
          <br>
        </div>
        <br>
        <!--中间订单页面-->
        <div class="Ordnum">
          <h3 class="Oh3">订单详情</h3><br>
          <div class="infornums">
            <div class="t1">
              <span class="label label-info">入住信息</span><br><br>
              房源信息：<span style="font-weight: bold">{{shName}}</span><br><br>
              入住时段：<span style="font-weight: bold">{{start_date}}</span>&nbsp;&nbsp;
              14:00入住&nbsp;&nbsp;<span style="font-weight: bold">{{end_date}}</span>&nbsp;&nbsp;12:00退房&nbsp;&nbsp;
              共&nbsp;<span style="font-weight: bold">{{(Date.parse(end_date)-Date.parse(start_date))/1000/60/60/24}}</span>&nbsp;晚<br>
            </div>
            <br>
            <div class="t2">
              <span class="label label-info">入住人信息</span><br><br>
              姓名：{{susername}}<br><br>
              身份证号：{{sidentity}}<br><br>
              手机号：{{suserphone}}<br>
            </div>
            <br>
            <div class="t3">
              <span class="label label-info">预定人信息</span><br><br>
              姓名：{{sname}}<br><br>
              手机：{{sphone}}<br>
            </div>
            <br>
            <div class="t4">
              <span class="label label-info">订单费用信息</span><br><br>
              <!--房租：￥{{((Date.parse(end_date)-Date.parse(start_date))/1000/60/60/24)*shouseprice}}&nbsp;&nbsp;&nbsp;&nbsp;<br><br>-->
              <div class="paytable">
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
                    <td style="width: 15%">￥{{shouseprice}}</td>
                    <td style="width: 15%">1</td>
                    <td style="width: 15%">{{(Date.parse(end_date)-Date.parse(start_date))/1000/60/60/24}}天</td>
                    <td style="width: 15%"><span style="color:#FF666A">备注：入住当天凭有效证件返现</span></td>
                    <td style="width: 15%">￥{{((Date.parse(end_date)-Date.parse(start_date))/1000/60/60/24)*shouseprice}}</td>
                  </tr>
                  </tbody>
                </table>
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
        <!--支付方式-->
        <div class="ways">
          <br>
          <div class="payway">
            <span class="label label-info">支付方式</span><br><br>
            <h5>支付平台</h5>
            <!--<el-radio-group v-model="radio">-->
            <ul class="list-inline">
              <!--<li><input type="radio" v-model="radio1" name="radios" value="1">&nbsp;&nbsp;<img src="../../assets/pay1.jpg" alt="" style="max-width: 50px"></li>-->
              <!--<li><input type="radio" v-model="radio2" name="radios" value="2">&nbsp;&nbsp;<img src="../../assets/pay2.jpg" alt="" style="max-width: 50px"></li>-->
              <!--<li><input type="radio" v-model="radio3" name="radios" value="3">&nbsp;&nbsp;<img src="../../assets/pay3.jpg" alt="" style="max-width: 80px"></li>-->
              <!--<li><input type="radio" v-model="radio4" name="radios" value="4">&nbsp;&nbsp;<img src="../../assets/pay4.jpg" alt="" style="max-width: 80px"></li>-->
              <li><el-radio v-model="radio" label="1">&nbsp;&nbsp;<img src="../../assets/pay1.jpg" alt="" style="max-width: 50px"></el-radio></li>
              <li><el-radio v-model="radio" label="2">&nbsp;&nbsp;<img src="../../assets/pay2.jpg" alt="" style="max-width: 50px"></el-radio></li>
              <li><el-radio v-model="radio" label="3">&nbsp;&nbsp;<img src="../../assets/pay3.jpg" alt="" style="max-width: 80px"></el-radio></li>
              <li><el-radio v-model="radio" label="4">&nbsp;&nbsp;<img src="../../assets/pay4.jpg" alt="" style="max-width: 80px"></el-radio></li>
            </ul>
            <!--</el-radio-group>-->
          </div>
        </div>
        <br>
        <center><a><el-button type="danger" @click="pays" round>立即支付</el-button></a></center>
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
    <a href="#to" title="飞回顶部" style="right:0;bottom:3%;position:fixed">
      <div style="width: 100px;height: 100px;"><img src="../../assets/rocket.png" alt="" style="max-width:100%;max-height:100%"></div>
    </a>
  </div>
</template>

<script>
  import Steps2 from '../steps/Steps2.vue'
  export default {
    name: "Pay",
    data(){
      return {
        radio:false,
        // radio1: false,
        // radio2: false,
        // radio3: false,
        // radio4: false,
        activeNames: ['1'],
        maxId:'',
        maxoccId:'',

        maxorders:'',

        sname:sessionStorage.getItem('sname'),
        sphone:sessionStorage.getItem('sphone'),

        minutes:20,
        seconds:0,

        susername:sessionStorage.getItem('susername'),
        suserphone:sessionStorage.getItem('suserphone'),
        sidentity:sessionStorage.getItem('sidentity'),
        shouseprice:sessionStorage.getItem('shouseprice'),
        start_date:sessionStorage.getItem('start_date'),
        end_date:sessionStorage.getItem('end_date'),
        shName:sessionStorage.getItem('shName'),
      }
    },
    components:{
      'app-steps2':Steps2,
    },
    mounted(){
      // this.add()

      this._timeout=setInterval(()=>{
        this.add()
      },1000)

      // let _this=this
      //获取刚输入的订单号也就是最大的订单id
      this.$axios.get(`/order/getMaxOrder`).then((result)=> {
        // this.maxorder = result.data.data
        this.maxId = result.data.data[0].oId;
        console.log( this.maxId)
      },(err) =>{
        console.log(result.err)
      })
      this.$axios.get(`/occupant/getMaxOccId`).then((result)=> {
        // this.maxorder = result.data.data
        this.maxoccId = result.data.data[0].occId;
        console.log( this.maxoccId)
      },(err) =>{
        console.log(result.err)
      })
    },

    methods: {
      // num:function (n) {
      //   return n<10 ? "0" + n : "" + n
      // },
      // add() {
      //   var _this = this;
      //   var time = window.setInterval(function () {
      //     if (_this.seconds == 0 && _this.minutes != 0) {
      //       _this.seconds = 59;
      //       _this.minutes -= 1;
      //     } else if (_this.minutes == 0 && _this.seconds == 0) {
      //       _this.seconds = 0;
      //       window.clearInterval(time);
      //       _this.$router.push({path: '/unfinish'})
      //     } else {
      //       _this.seconds -= 1
      //     }
      //   }, 1000);
      // },



      num:function (n) {
        return n<10 ? "0" + n : "" + n
      },
      add() {
        var _this = this;
        if (_this.seconds == 0 && _this.minutes != 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes == 0 && _this.seconds == 0) {
          _this.seconds = 0;
          clearInterval(_this._timeout);
          _this.$router.push({path: '/unfinish'})
        } else {
          _this.seconds -= 1
        }
      },


      pays(index) {
        let _this = this
        if (this.radio == false)
        // if (this.radio1 == false || this.radio2 == false || this.radio3 == false || this.radio4 == false)
          alert('请选择支付方式!')
        else
          this.$router.push({path: '/finish'})
        // 修改获取到的订单号的订单状态
        // console.log(this.maxId + 1)
        this.$axios.post(`/order/updateorder`, {
          oId: this.maxId + 1,
          oStatus: 1,
        })
        this.$axios.post(`/occupant/addOccOid`,{
          oId:this.maxId+1,
          occId:this.maxoccId+1
        })

        // sessionStorage.removeItem('sname')
        // sessionStorage.removeItem('sphone')
        this.$store.state.hName = ''
        this.$store.state.create_start_date = ''
        this.$store.state.create_end_date = ''
        this.$store.state.name1 = ''
        this.$store.state.identity1 = ''
        this.$store.state.phone1 = ''
        // ((Date.parse($store.state.create_end_date)-Date.parse($store.state.create_start_date))/1000/60/60/24)*$store.state.houseprice=''
      },
      handleChange(val) {
        console.log(val);
      }
    },

    beforeDestroy(){
      clearInterval(this._timeout)
    },


    // watch: {
    //   second: {
    //     handler(newVal) {
    //       this.num(newVal)
    //     }
    //   },
    //   minute: {
    //     handler(newVal) {
    //       this.num(newVal)
    //     }
    //   }
    // },
    computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      }
    }
  }
</script>

<style scoped>
  .paypage{
    margin-top: 80px;
  }
  .Paytop,.Ordnum,.unsubscribe,.ways{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
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
