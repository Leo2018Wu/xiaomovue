<template>
  <div>
    <el-card class="box-card" v-for="(orderInfo,index) in orderInfos">
      <div slot="header" class="clearfix">
        <el-row :gutter="20">
          <el-col :span="10"><div class="grid-content bg-purple"><span>房源概述</span></div></el-col>
          <el-col :span="9"><div class="grid-content bg-purple"><span style="color: #FF666A;">等待付款</span></div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">
            <el-button class="button" type="text" @click="centerDialogVisible = true">退订</el-button>
            <el-dialog
              title="退订"
              :visible.sync="centerDialogVisible"
              width="30%"
              center>
              <span>你确定要取消此订单？</span>
              <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
            </el-dialog>
          </div></el-col>
        </el-row>
      </div>
      <div class="text item">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img class="media-object" :src="'../../../static/images/'+orderInfo.hPic1"/>
            </div>
          </el-col>
          <el-col :span="15" :offset="1" >
            <div class="grid-content bg-purple-light">
              <p>房源名称：{{orderInfo.hName}}</p>
            <p>房源地址：{{orderInfo.hLocation}}</p>
            <p>出租时间：{{orderInfo.hArrivalDate}}-{{orderInfo.hLeaveDate}}</p>
            <p>下单时间：{{orderInfo.oDate}}</p>
      </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <h4>￥{{orderInfo.hPrice}}</h4>
              <el-button type="danger" class="button" @click="centerDialogVisible1 = true">立即支付</el-button><br>

              <el-dialog
                title="请选择支付方式"
                :visible.sync="centerDialogVisible1"
                width="30%"
                center>
                <ul class="list-inline">
                  <li><input type="radio" v-model="radio1" name="radios" id="1"><label for="1">&nbsp;&nbsp;<img src="../../assets/pay1.jpg" alt="" style="max-width: 50px"></label></li>
                  <li><input type="radio" v-model="radio2" name="radios" id="2"><label for="2">&nbsp;&nbsp;<img src="../../assets/pay2.jpg" alt="" style="max-width: 50px"></label></li>
                  <li><input type="radio" v-model="radio3" name="radios" id="3"><label for="3">&nbsp;&nbsp;<img src="../../assets/pay3.jpg" alt="" style="max-width: 80px"></label></li>
                  <li><input type="radio" v-model="radio4" name="radios" id="4"><label for="4">&nbsp;&nbsp;<img src="../../assets/pay4.jpg" alt="" style="max-width: 80px"></label></li>
                </ul>
                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible1 = false">取 消</el-button>
    <el-button  @click="centerDialogVisible1 = false;pay">确 定</el-button>
  </span>
              </el-dialog>

              <router-link :to="'/center/orderempty/'+orderInfo.oId"> <el-button type="text" class="button" @click="">详情</el-button></router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Allorder",
    data(){
      return{
        centerDialogVisible: false,
        centerDialogVisible1: false,
        orderInfos:[ ]

      }
    },
    mounted(){
      axios.get('http://localhost:3000/order/getWaitorder/1').then((result)=> {
        this.orderInfos = result.data.data

      },(err) =>{
        console.log(result.err)
      })
    },
    methods:{
      del(index){
        axios.post('http://localhost:3000/order/updateorder',{
          oId:this.orderInfos[index].oId,
          oStatus:3
        }).then((response)=>{
          window.location.reload()
        }).catch((err)=>{
          console.log(err)
        })
      },
      pay(){
        if (this.radio1 == false && this.radio2 == false && this.radio3 == false && this.radio4 == false) {
          alert('请选择支付方式!')
        }
        else{
         this. centerDialogVisible1 = true;
        }
      }
    }
  }
</script>

<style scoped>
  h4{
    color: #ff666A;
  }
  span{
    font-weight: 300;
    font-size: 18px;
  }
  img{
    width: 100%;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    margin-bottom: 10px;
  }
</style>
