<template>
  <div class="container" id="to">
    <div class="row">
      <div class="writepage">
        <!--顶部步骤条-->
        <app-steps1></app-steps1>
        <br>
        <!--入住信息-->
        <div class="Basic">
          <br>
          &nbsp;&nbsp;<span class="label label-info">入住信息</span>
          <br><br><br>
          <div class="basicf">
            <el-form class="demo-ruleForm">
              <el-form-item label="房源信息：">
                <label for="">{{$store.state.hName}} - 整套出租</label>
              </el-form-item>
              <el-form-item label="入住时段：">
                <el-date-picker
                  v-model="create_start_date"
                  type="date"
                  :picker-options="pickerBeginDateBefore"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="开始日期"
                  style="width: 25%">
                </el-date-picker>
                &nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                  v-model="create_end_date"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  :picker-options="pickerBeginDateAfter"
                  placeholder="结束日期"
                  style="width: 25%">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="预定数量：">
                <el-input v-model="input1" :disabled="true" style="width: 20%"></el-input>
              </el-form-item>
              <el-form-item label="是否需要发票：" prop="radio">
                <el-radio v-model="radio" label="您可在入住完成10天内在App上填写开票信息">需要</el-radio>
                &nbsp;&nbsp;<span style="color: gray;font-size:11px">{{radio}}</span>
                <br>
                <el-radio v-model="radio">不需要</el-radio>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <br>
        <!--入住人信息-->
        <div class="Occupant">
          <br>
          &nbsp;&nbsp;<span class="label label-info">入住人信息</span>
          <br><br><br>
          <div class="occ">
            <p class="occt">填写包含手机号在内的完整信息</p>
            <p class="occp">可免费获赠最高保额10万元的住宿旅行意外险</p>
          </div>
          <div class="occf">
            <el-form class="demo-ruleForm" :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item label="真实姓名" prop="name" required>
                <el-input v-model="ruleForm.name"placeholder="请输入真实的信息" style="width: 50%"></el-input>
              </el-form-item>
              <el-form-item label="身份证号" prop="identity" required>
                <el-input v-model="ruleForm.identity"placeholder="请输入真实的信息" style="width: 50%"></el-input>
              </el-form-item>
              <el-form-item label=" 手 机 号" prop="phone" required>
                <el-input v-model="ruleForm.phone" placeholder="请输入真实的信息" style="width: 50%"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <br>
        </div>
        <br>
        <!--预定人信息-->
        <div class="reserve">
          <br>
          &nbsp;&nbsp;<span class="label label-info">预定人信息</span>
          <br><br><br>
          <div class="res">
            昵称：{{sname}}&nbsp;&nbsp;
            手机：+86 {{sphone}}
            <br><br>
          </div>
        </div>
        <br>
        <!--定单费用信息-->
        <div class="Costs">
          <br>
          &nbsp;&nbsp;<span class="label label-info">订单费用信息</span>
          <br><br><br>
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
                <th style="width: 25%">{{title}}</th>
                <td style="width: 15%">￥{{$store.state.houseprice}}</td>
                <td style="width: 15%">1</td>
                <td style="width: 15%">{{(Date.parse(create_end_date)-Date.parse(create_start_date))/1000/60/60/24}}天</td>
                <td style="width: 15%"><span style="color:#FF666A">备注：入住当天凭有效证件返现</span></td>
                <td style="width: 15%">￥{{(Date.parse(create_end_date)-Date.parse(create_start_date))/1000/60/60/24*$store.state.houseprice}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
        <!--房东要求-->
        <div class="requires">
          <br>
          &nbsp;&nbsp;<span class="label label-info">房东要求</span>
          <br><br><br>
          <div class="steps">
            <el-steps :active="2" align-center>
              <el-step title="预定成功"></el-step>
              <el-step title="入住前7天"></el-step>
              <el-step title="入住时间"></el-step>
              <el-step title="退房时间"></el-step>
            </el-steps>
          </div>
          <br>
          <div class="req">
            <h5>交易规则</h5>
            <p class="requirep">
              根据房东设置的交易规则未早于11月04日退订视为有责取消，应扣除取消订单时间点后3天订金作为违约金，剩余钱款将被原路退还
            </p>
            <p class="requirep">
              取消订单和提前退房时间以小猪系统中记录的时间为准。如与房东产生争议，请致电小猪客服电话：400 010 7890
            </p>
            <p class="requirep">
              额外购买的保险费用（不包含免费赠送的保险），如未入住则全部退还；如提前退房，则退还未入住部分的保险费用。
            </p>
            <p class="requirep">
              清洁费用一旦入住，则不予退还。
            </p>
            <p>
            </p>
            <h5>友情提示</h5>
            <p class="requirep">
              入住后如您认为照片与房间实际情况有较大差异时，可将能够证明存在较大差异的材料（如带有拍摄日期水印的实地拍摄照片、 短视频等）
              提供给客服进行审核；如小猪工作人员核查认为材料真实、有效，小猪将安排专门的客服人员与您联系，并尽最大可能为您解决问题。
              因自然灾害及其他不可抗力因素导致的退订需求，由您和房东协商解决。
            </p>
            <p class="requirep">
              已支付押金将在您入住完成后原路退还，该钱款不包含在订单总金额内。
            </p>
            <h5>房东要求</h5>
            <p class="requirep">
              允许做饭。不允许带宠物。不允许聚会。允许吸烟。接待境外人士。宜居2人，不允许加客。
            <p>
            <p class="requirep">
              其他费用：入住时间为下午14：00后，退房时间为中午12：00前。如延迟退房将按照时间收取费用：退房时间在12：00至13：00收取50元；超过13：00退房，收取100元。
              餐具使用后请自行清洗归位，如退房后遗留使用后未清洁的餐具，将视卫生情况收取50-100元清洁费。
              房间每日电费上限为10元（此电量为中国家庭每日平均用电量的2倍，在房间无人时请关闭空调电视，在正常的情况下，不会超出此用电量。）
              退房后会有保洁阿姨检查电量，如发现超出正常用电量，将会从住宿押金中扣除超出的部分费用
            </p>
            <center><p class="bottomP"><input type="checkbox" v-model="box">&nbsp;我同意
              <router-link to="/rightnav/service">&nbsp;<a style="text-decoration: none">《小猪服务协议》</a></router-link>
              及该房东制定的退订规则及入住规定</p></center>
          </div>
        </div>
        <br>
        <center><a><el-button type="danger" @click="submits" round>提交订单</el-button></a></center>
      </div>
    </div>
    <a href="#to" title="飞回顶部" style="right:1%;bottom:3%;position:fixed">
      <div style="width: 100px;height: 100px;"><img src="../../assets/rocket.png" alt="" style="max-width:100%;max-height:100%"></div>
    </a>
  </div>
</template>

<script>
  import Steps1 from '../steps/Steps1.vue'
  import axios from 'axios'
  export default {
    name: "Write",
    data() {
      return {
        uLocation:"",
        price:'',
        input1: '1',
        radio: '您可在入住完成10天内在App上填写开票信息',
        box: false,
        title: '房租',
        sname:sessionStorage.getItem('sname'),
        sphone:sessionStorage.getItem('sphone'),

        ruleForm: {
          phone: '',
          name:'',
          identity:'',
        },
        rules: {
          phone: [
            {required: true, message: '请输入手机号',trigger: 'blur'},
            {pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message: '长度为11位有效手机号', trigger: 'blur'}
          ],
          name:[
            { required: true, message: '请输入真实名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          identity:[
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message: '长度是18位有效身份证', trigger: 'blur' }
          ],
        },
        pickerBeginDateBefore: {
          disabledDate: (time) => {
            if (this.$store.state.create_end_date === '') {
              return time.getTime() < Date.now() - 8.64e7
            } else {
              let beginDateVal = this.$store.state.create_end_date;
              if (beginDateVal) {
                return time.getTime() > beginDateVal || time.getTime() < Date.now() - 8.64e7;
              }
            }
          }
        },
        pickerBeginDateAfter: {
          disabledDate: (time) => {
            if (this.$store.state.create_start_date === '') {
              this.flag = true
              return time.getTime() < Date.now() - 8.64e7
            } else {
              let beginDateVal = this.$store.state.create_start_date;
              if (beginDateVal) {
                return time.getTime() < beginDateVal || time.getTime() < Date.now() - 8.64e7;
              }
            }
          }
        },
      };
    },
    computed: {
      create_start_date: {
        get:function() {
          console.log('get!!!')
          return this.$store.state.create_start_date
        },
        set(value) {
          console.log('set');
          this.$store.state.create_start_date = value
        }
      },
      create_end_date: {
        get:function() {
          console.log('get!!!')
          return this.$store.state.create_end_date
        },
        set(value) {
          console.log('set');
          this.$store.state.create_end_date = value
        }
      },
      // 添加入住人的姓名身份证手机
      // name: {
      //   get:function() {
      //     console.log('get!!!')
      //     return this.$store.state.name1
      //   },
      //   set(value) {
      //     console.log('set');
      //     this.$store.state.name1 = value
      //   }
      // },
      // identity: {
      //   get:function() {
      //     console.log('get!!!')
      //     return this.$store.state.identity1
      //   },
      //   set(value) {
      //     console.log('set');
      //     this.$store.state.identity1 = value
      //   }
      // },
      // phone: {
      //   get:function() {
      //     console.log('get!!!')
      //     return this.$store.state.phone1
      //   },
      //   set(value) {
      //     console.log('set');
      //     this.$store.state.phone1 = value
      //   }
      // },
    },

    methods:{
      submits(){
        console.log(this.box)
        if(this.create_start_date==''||this.create_end_date==''||this.ruleForm.name==''||this.ruleForm.phone==''||this.ruleForm.identity==''||this.box==false){
          alert('请确认信息不为空')
        }else{
          let _this=this
          var date = new Date();
          var seperator1 = "-";
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          let house = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
          let minute = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
          let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          var currentdate = year + seperator1 + month + seperator1 + strDate+' '+house+minute+seconds;
          _this.$store.state.newdate=currentdate
          console.log('当前时间'+_this.$store.state.newdate)
          axios.post("http://localhost:3000/order", {
            arrvialDate: _this.$store.state.create_start_date,
            leaveDate: _this.$store.state.create_end_date,
            hPrice: _this.$store.state.houseprice,
            oDate: _this.$store.state.newdate,
            oStatus: 0,
            uId: sessionStorage.getItem('suId'),
            hId: _this.$store.state.househId,
            occName:_this.ruleForm.name,
            occCordId:_this.ruleForm.identity,
            occPhone:_this.ruleForm.phone,
          }).then(function (result) {
            console.log(result.data)
          })
          alert('提交订单成功,即将跳转支付页面！');
          this.$router.push({path: '/pay'})
          // this.$store.state.name1 = '',
          //   this.$store.state.phone1 = '',
          //   this.$store.state.identity1 = ''
          // this.$store.state.state.create_end_date = ''
          // this.$store.state.state.create_start_date = ''

          sessionStorage.setItem('start_date',_this.$store.state.create_start_date)
          sessionStorage.setItem('end_date',_this.$store.state.create_end_date)
          sessionStorage.setItem('shouseprice',_this.$store.state.houseprice)
          // sessionStorage.setItem('susername',_this.$store.state.name1)
          // sessionStorage.setItem('sidentity',_this.$store.state.identity1)
          // sessionStorage.setItem('suserphone',_this.$store.state.phone1)
          sessionStorage.setItem('shName',_this.$store.state.hName)

          sessionStorage.setItem('susername',_this.ruleForm.name)
          sessionStorage.setItem('sidentity',_this.ruleForm.identity)
          sessionStorage.setItem('suserphone',_this.ruleForm.phone)
        }
      }
    },
    components:{
      'app-steps1':Steps1
    }
  }
</script>

<style scoped>
  .writepage{
    margin-top: 80px;
  }
  .Basic{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .Occupant{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .occp{
    font-size: 10px;
    color: lightgray;
  }
  .occf{
    margin-left: 30px;
  }
  .reserve{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .res,.paytable,.req,.occ,.basicf{
    margin-left: 1%;
  }
  .Costs{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .requires{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .label {
    font-size: 180%;
  }
  h3{
    background-color: #06F;
  }
  h5{
    font-weight: bold;
  }
  @media (min-width: 768px) {
    .requirep,h5{
      font-size: 12px;
      line-height: 20px;
    }
    bottomP{
      font-size:4px;
    }
  }
  @media (min-width: 992px) {
    .requirep,h5{
      font-size: 14px;
      line-height: 25px;
    }
    bottomP{
      font-size:6px;
    }
  }
  @media (min-width: 1280px) {
    .requirep,h5{
      font-size: 16px;
      line-height: 30px;
    }
    bottomP{
      font-size:8px;
    }
  }
</style>
