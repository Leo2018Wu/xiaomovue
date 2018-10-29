<template>
  <div>
    <el-card class="box-card" v-for="(orderInfo,index) in orderInfos">
      <div slot="header" class="clearfix">
        <el-row :gutter="20">
          <el-col :span="10"><div class="grid-content bg-purple"><span>房源概述</span></div></el-col>
          <el-col :span="9"><div class="grid-content bg-purple"><span style="color: #FF666A;">支付成功</span></div></el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-button class="button" type="text" @click="centerDialogVisible1 = true">退订</el-button>
              <el-dialog
                title="退订"
                :visible.sync="centerDialogVisible1"
                width="30%"
                center>
                <span>退订后退款会在三个工作日返回原来账户，退款详情请见房客指南</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible1 = false;cancle(index)">确 定</el-button>
  </span>
              </el-dialog>
              <el-button class="button" type="text" @click="centerDialogVisible = true">删除</el-button>
              <el-dialog
                title="删除"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <span>你确定要删除此订单？</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
              </el-dialog>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="text item">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img class="media-object" :src="'../../../static/images/'+orderInfo.hPic1"/>
            </div>
          </el-col>
          <el-col :span="15" :offset="1">
            <div class="grid-content bg-purple-light">
              <p><span>房源名称：</span>{{orderInfo.hName}}</p>
              <p><span>房源地址：</span>{{orderInfo.hLocation}}</p>
              <p><span>出租时间：</span>{{orderInfo.hArrivalDate}}-{{orderInfo.hLeaveDate}}</p>
              <p><span>下单时间：</span>{{orderInfo.oDate}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <h4>￥{{orderInfo.hPrice}}</h4>
              <router-link :to="'/center/orderempty/Successdetail/'+orderInfo.oId"><el-button type="text" class="button">详情</el-button></router-link>
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
        centerDialogVisible1: false,
        centerDialogVisible: false,
        orderInfos:[
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房1',rentDate:'2018-10-11至2018-10-15',price:'288'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房2',rentDate:'2018-10-11至2018-10-15',price:'288'},
        ]

      }
    },
    mounted(){
      axios.get('http://localhost:3000/order/getSuccessorder/1').then((result)=> {
        this.orderInfos = result.data.data
        console.log(this.orderInfos);
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
      cancle(index){
        axios.post('http://localhost:3000/order/updateorder',{
          oId:this.orderInfos[index].oId,
          oStatus:-1
        }).then((response)=>{

        }).catch((err)=>{
          // alert('评论失败')
          console.log(err)
        })
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
