<template>
  <div class="row">
    <el-card class="box-card" v-for="(assessment,index) in assessments">
                <div  class="text item">
                  <el-row>
                    <el-col :span="2"><div class="grid-content bg-purple">
                      <img src="../../assets/first-center-01.jpg" class="himg"/>
                    </div></el-col>
                    <el-col :span="20":offset="2"><div class="grid-content bg-purple-light">
                      <div><h4>{{assessment.hName}}</h4>
                      <span class="aDate">{{assessment.aDate.substring(0,10)}}</span>
                      <el-button style="float: right; padding: 3px 0" type="text">
                        <el-button type="text" @click="centerDialogVisible = true">
                          <i class="el-icon-delete"></i>
                        </el-button>
                        <el-dialog
                          title="删除"
                          :visible.sync="centerDialogVisible"
                          width="30%"
                          center>
                          <span>确定删除？</span>
                          <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
                        </el-dialog>
                      </el-button>
                      </div>
                      <hr>
                      <p>{{assessment.aContent}}</p>
                      <div v-for="image in mydata1" style="float: left;margin: 2%">
                        <img :src="image"/>
                      </div>
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
    data() {
      return {
        centerDialogVisible: false,
        assessments:[ ],
        mydata:[],
        mydata1:[],
      };
    },
    mounted(){
      axios.get('http://localhost:3000/assessment/personal/userAssessment/1').then((result)=> {
        this.assessments = result.data.data
        this.mydata=this.assessments[0].aImages
        this.mydata = this.mydata.substr(0,this.mydata.length-1)
        this.mydata1=this.mydata.split(',')
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      del(index){
        axios.get(`http://localhost:3000/assessment/details/delAssessment/${this.assessments[index].aId}`).then((result)=> {
          console.log("删除成功")
          window.location.reload()
        },(err) =>{
          console.log(result.err)
        })
      },
    },
  }
</script>
<style scoped>
  img {
    width: 100px;
    height: 100px;
  }
  .himg{
    border-radius: 10px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width:100%;
    margin-bottom: 10px;
  }
  .aDate{
    font-size: 18px;
  }
</style>
