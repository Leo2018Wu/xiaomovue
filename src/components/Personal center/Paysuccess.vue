<template>
  <div>
    <el-card class="box-card" v-for="(orderInfo,index) in orderInfos">
      <div slot="header" class="clearfix">
      <span>房源概述</span>
      </div>
      <div class="text item">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <router-link :to="`/intorhouse/${orderInfo.hId}`"> <img class="media-object" :src="'../../../static/images/'+orderInfo.hPic1"/></router-link>
            </div>
          </el-col>
          <el-col :span="15" :offset="1">
            <div class="grid-content bg-purple-light">
              <p>房源名称：{{orderInfo.hName}}</p>
              <p>房源地址：{{orderInfo.hLocation}}</p>
              <p>出租时间：{{orderInfo.hArrivalDate}}---{{orderInfo.hLeaveDate}}</p>
              <p>下单时间：{{orderInfo.oDate}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <h4>￥{{orderInfo.hPrice}}</h4>
              <h5>支付成功</h5>
              </div>
            </el-col>
          </el-row>
        <el-row>
          <el-col :span="2":offset="18">
            <router-link :to="'/center/orderempty/Successdetail/'+orderInfo.oId"><el-button type="text" class="button">详情</el-button></router-link>
          </el-col>
          <el-col :span="2">
            <el-button class="button" type="text" @click="del(orderInfo.oId)">删除</el-button>
          </el-col>
          <el-col :span="2">
            <el-button class="button" type="text" @click="cancle(orderInfo.oId)">退订</el-button>
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
          centerDialogVisible1: false,
          centerDialogVisible: false,
          orderInfos:[ ]
        }
      },
      mounted(){
        axios.get(`http://localhost:3000/order/getSuccessorder/${sessionStorage.getItem('suId')}`).then((result)=> {
          this.orderInfos = result.data.data
          console.log(this.orderInfos);
        },(err) =>{
          console.log(result.err)
        })
      },
      methods:{
        del(oId) {
          this.$confirm('确定要删除此订单?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            axios.post('http://localhost:3000/order/updateorder',{
              oId:oId,
              oStatus:3
            }).then((response)=>{
              window.location.reload()
            }).catch((err)=>{
              console.log(err)
            })
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        cancle(oId) {
          this.$confirm('退订后退款会在三个工作日返回原来账户，退款详情请见房客指南', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            axios.post('http://localhost:3000/order/updateorder',{
              oId:oId,
              oStatus:-1
            }).then((response)=>{
              window.location.reload()
            }).catch((err)=>{
              console.log(err)
            })
            this.$message({
              type: 'success',
              message: '退订成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消退订'
            });
          });
        },
      }
    }
  </script>

  <style scoped>
    h4,h5{
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
