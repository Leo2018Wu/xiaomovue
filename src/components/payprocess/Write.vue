<template>
  <div class="container">
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
                <label for="">{{this.$store.state.hname}} - 整套出租</label>
              </el-form-item>
              <el-form-item label="房东用户名：">
                <label for="">{{this.$store.state.pname}}</label>&nbsp;&nbsp;
                <el-button type="info" round @click="open"><span class="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;离线留言</el-button>
              </el-form-item>
              <el-form-item label="入住时段：">
                <el-date-picker
                  v-model="create_start_date"
                  type="date"
                  :picker-options="pickerBeginDateBefore"
                  format="yyyy-MM-dd"
                  placeholder="开始日期"
                  value-format="timestamp"
                  style="width: 25%">
                </el-date-picker>
                  &nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                  v-model="create_end_date"
                  type="date"
                  format="yyyy-MM-dd"
                  :picker-options="pickerBeginDateAfter"
                  placeholder="结束日期"
                  value-format="timestamp"
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
            <el-form class="demo-ruleForm">
              <el-form-item label="真实姓名">
                <el-input v-model="name"placeholder="请输入真实的信息" style="width: 50%"></el-input>
              </el-form-item>
              <el-form-item label="身份证号" required>
                <el-form-item>
                  <el-input v-model="identity"placeholder="请输入真实的信息" style="width: 50%"></el-input>
                </el-form-item>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="phone" placeholder="请输入真实的信息" style="width: 50%"></el-input>
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
            昵称：{{$store.state.resname}}&nbsp;&nbsp;
            手机：+86 {{$store.state.resphone}}
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
                <td style="width: 15%">￥{{$store.state.price}}</td>
                <td style="width: 15%">{{$store.state.number}}</td>
                <td style="width: 15%">{{($store.state.create_end_date-$store.state.create_start_date)/(60*60*24*1000)}}天</td>
                <td style="width: 15%">{{discount}}</td>
                <td style="width: 15%">￥{{(($store.state.create_end_date-$store.state.create_start_date)/(60*60*24*1000))*$store.state.price}}</td>
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
              <router-link to="/rightnav/service">&nbsp;<a>《小猪服务协议》</a></router-link>
              及该房东制定的退订规则及入住规定</p></center>
          </div>
        </div>
        <br>
        <center><a><el-button type="danger" @click="submits" round>提交订单</el-button></a></center>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps1 from '../steps/Steps1.vue'
  import axios from 'axios'
    export default {
        name: "Write",
      data() {
        return {
          input1: '1',
          radio: '您可在入住完成10天内在App上填写开票信息',
          box: false,
          title: '房租',
          discount: '备注：入住当天凭有效证件返现',


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
        name: {
          get:function() {
            console.log('get!!!')
            return this.$store.state.name1
          },
          set(value) {
            console.log('set');
            this.$store.state.name1 = value
          }
        },
        identity: {
          get:function() {
            console.log('get!!!')
            return this.$store.state.identity1
          },
          set(value) {
            console.log('set');
            this.$store.state.identity1 = value
          }
        },
        phone: {
          get:function() {
            console.log('get!!!')
            return this.$store.state.phone1
          },
          set(value) {
            console.log('set');
            this.$store.state.phone1 = value
          }
        },
      },

      methods:{
        open(){
          this.$prompt('请输入需要留言的内容', '请留言', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: '',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '您的留言已发送 '
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消'
            });
          });
        },
        // submitForm() {
        //   // 将入住人的信息添加到数据库
        //   if(this.$store.state.name1==''||this.$store.state.phone1==''||this.$store.state.date1==''){
        //     alert('请确认信息内容不能为空')
        //   }else {
        //     axios.post("http://localhost:3000/occupant/addOccupant", {
        //       occName: this.$store.state.name1,
        //       occPhone: this.$store.state.phone1,
        //       occBirthDate: this.$store.state.date1,
        //
        //
        //     }).then(function (result) {
        //       console.log(result.data)
        //     })
        //     alert('添加成功!');
        //     this.$store.state.name1 = '',
        //     this.$store.state.phone1 = '',
        //     this.$store.state.date1 = ''
        //   }
        // },
        submits(){
          console.log(this.box)
          if(this.$store.state.name1==''||this.$store.state.phone1==''||this.$store.state.date1==''||this.box==false){
            alert('请确认信息不为空')
          }else{
            let _this=this
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
              month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
              strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            _this.$store.state.newdate=currentdate
            console.log('当前时间'+_this.$store.state.newdate)
            axios.post("http://localhost:3000/order", {
              arrvialDate: '2018-10-25',
              leaveDate: '2018-10-27',
              hPrice: _this.$store.state.price,
              oDate: _this.$store.state.newdate,
              oStatus: 0,
              uId: _this.$store.state.uId,
              hId: _this.$store.state.hId,
              occName: _this.$store.state.name1,
              occCordId: _this.$store.state.identity1,
              occPhone: _this.$store.state.phone1,
            }).then(function (result) {
              console.log(result.data)
            })
            alert('添加成功,即将跳转支付页面！');
              this.$router.push({path: '/pay'})
              // this.$store.state.name1 = '',
              // this.$store.state.phone1 = '',
              // this.$store.state.identity1 = ''
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
    margin-top: 60px;
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
