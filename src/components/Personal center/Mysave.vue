<template>
  <div>
        <div v-for="(save, index) in saves[0]">
          <div style="margin: 20px 30px;float: left">
            <el-card :body-style="{ padding: '0px' }"style="width: 220px;height: 340px;">
              <router-link :to="`/intorhouse/${save.hId}`"> <img :src="'../../../static/images/'+save.hPic1" class="image"></router-link>
              <div style="padding: 14px;height: 340px!important;">
                <span style="height: 50px!important;">{{save.hName}}</span>
                <div class="bottom clearfix">
                  <div class="time" style="height: 40px!important;">{{save.hLocation}}</div>
                  <div class="time" style="margin-top: 0px!important;">{{save.sDate.substring(0,10)}}</div>
                  <el-button style="color: #ff666A;" type="text" @click="del(save.sId)">删除</el-button>
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
    height:30px ;
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
      del(sId) {
        this.$confirm('确定要删除此收藏?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.get(`http://localhost:3000/save/delete/${sId}`).then((result)=> {
            console.log("删除成功")
            window.location.reload()
          },(err) =>{
            console.log(result.err)
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
    },

  }
</script>
