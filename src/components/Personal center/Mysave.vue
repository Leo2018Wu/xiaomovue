<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(save, index) in saves[0]"  style="margin: 20px 30px;height: 330px;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/im_qr_part2.png" class="image">
          <div style="padding: 14px;">
            <span>{{save.hName}}</span>
            <div class="bottom clearfix">
              <time class="time">{{save.hLocation}}</time><br>
              <el-button style="color: #ff666A" type="text" @click="centerDialogVisible = true;">删除</el-button>
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
              <el-button type="text" style="color: #ff666A;float: right">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>
<style scoped>
  span{
    font-size: 17px;
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
</style>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        centerDialogVisible: false,
        mydata:[],
        saves: [
          // {hName:'海景房1'},
          // {hName:'海景房2'},
          // {hName:'海景房3'},
          // {hName:'海景房4'},
          // {hName:'海景房5'},
          // {hName:'海景房6'},
          // {hName:'海景房7'},
        ]
      };
    },

    mounted(){
      axios.get('http://localhost:3000/save/uSave/1').then((result)=> {
        this.mydata = result.data.data
        this.saves.push(this.mydata)
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
