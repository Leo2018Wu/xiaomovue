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
              <img class="media-object" :src="'../../../static/images/'+orderInfo.hPic1"/>
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
              <h5>订单已完成</h5>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2":offset="16">
            <router-link :to="'/center/orderempty/assessment/'+orderInfo.oId"><el-button type="text" class="button">评价</el-button></router-link><br>
          </el-col>
          <el-col :span="2">
            <router-link :to="'/center/orderempty/diary/'+orderInfo.oId"><el-button type="text" class="button">写日记</el-button></router-link><br>
          </el-col>
          <el-col :span="2">
            <router-link :to="'/center/orderempty/Finishdetail/'+orderInfo.oId"><el-button type="text" class="button">详情</el-button></router-link>
          </el-col>
          <el-col :span="2">
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
        orderInfos:[]

      }
    },
    mounted(){
      axios.get('http://localhost:3000/order/getFinishorder/1').then((result)=> {
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
          // alert('评论失败')
          console.log(err)
        })

      }
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
