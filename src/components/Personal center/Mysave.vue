<template>
  <div>
        <div v-for="(save, index) in saves[0]">
          <div style="margin: 20px 30px;float: left">
            <el-card :body-style="{ padding: '0px' }"style="width: 220px;height: 320px;">
              <router-link :to="`/intorhouse/${save.hId}`"> <img :src="'../../../static/images/'+save.hPic1" class="image"></router-link>
              <div style="padding: 14px;">
                <span>{{save.hName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{save.hLocation}}</time><br>
                  <time class="time">{{save.sDate.substring(0,10)}}</time><br>
                  <el-button style="color: #ff666A;" type="text" @click="centerDialogVisible = true;">删除</el-button>
                  <el-dialog
                    title="删除"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    center>
                    <span>确定将此收藏的房源删除</span>
                    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
                  </el-dialog>
                  <router-link :to="`/intorhouse/${save.hId}`"> <el-button type="text" style="color: #ff666A;float: right;">详情</el-button></router-link>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
</template>
<style scoped>
  span{
    font-size: 17px;
    height: 20px;
  }
  .el-icon-delete{
    color: #ff666A;
  }
  .el-button--primary {
    color: #fff;
    background-color: #ff666A;
    border-color: #ff666A;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background: #ff666A;
    border-color: #ff666A;
    color: #fff;
  }
  .time {
    font-size: 13px;
    color: #999;
    height: 40px;
  }

  .button {
    padding: 10px;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  span{
    display: inline-block;
    height:50px ;
  }
</style>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        centerDialogVisible: false,
        mydata:[],
        saves: [
        ]
      };
    },

    mounted(){
      axios.get(`http://localhost:3000/save/uSave/${sessionStorage.getItem('suId')}`).then((result)=> {
        this.mydata = result.data.data
        this.saves.push(this.mydata)
        console.log(this.saves);
      },(err) =>{
        console.log(result.err)
      })

    },
    methods: {
      del(index){
        axios.get(`http://localhost:3000/save/delete/${this.saves[0][index].sId}`).then((result)=> {
          console.log("删除成功")
          window.location.reload()
        },(err) =>{
          console.log(result.err)
        })
      },
    },

  }
</script>
