<template>
  <div class="row">
    <el-card class="box-card" v-for="(assessment,index) in pro">
                <div  class="text item">
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link :to="`/intorhouse/${assessment.hId}`">  <img :src="'../../../static/images/'+assessment.hPic1" class="himg"/></router-link>
                    </div></el-col>
                    <el-col :span="20":offset="1"><div class="grid-content bg-purple-light">
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
                      <div class="img" v-for="image in mydata1s[index]" style="float: left;margin: 2%">
                        <img  :src="image"/>
                        <!--<img :src="image" onerror="this.src='../../assets/first-center-01.jpg'" />-->
                      </div>
                    </div>
                    </el-col>
                  </el-row>

                </div>
    </el-card>
    <el-row>
      <el-col :span="15" offset="9">
        <div class="block" style="margin: 20px 0">
          <span class="demonstration"></span>
          <el-pagination ref="elpage"
                         @current-change="change()"
                         :current-page.sync="pageIndex"
                         layout="prev, pager, next"
                         :total="pageCount"
                         :page-size = "pageSize"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<!--<script type="text/javascript" src="../../assets/jquery-1.9.1.min.js"></script>-->
<script>
  import axios from 'axios'
  export default {
    data() {


      return {
        centerDialogVisible: false,
        pageIndex:1,
        pageSize:3,
        pageCount:0,
        pro:[],
        assessments:[ ],
        mydata:[],
        mydata1:[],
        mydata1s:[],
      };
    },
    mounted(){
      axios.get(`http://localhost:3000/assessment/personal/userAssessment/${sessionStorage.getItem('suId')}`).then((result)=> {
        this.assessments = result.data.data
        // console.log( this.assessments[0])
        this.pageCount = this.assessments.length
        this.loadData()
        let j =  this.assessments.length
        // alert(this.assessments.length)
        for(var i = 0 ;i < j ; i++){
        this.mydata=this.assessments[i].aImages
        this.mydata = this.mydata.substr(0,this.mydata.length-1)
        this.mydata1=this.mydata.split(',')
        // this.mydata1s = this.assessment[0]
          this.mydata1s.push(this.mydata1)
        // console.log(this.mydata1s)
        }
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      loadData(){
        this.pro=[];
        let start=(this.pageIndex-1)*this.pageSize;
        let end=start +this.pageSize
        // console.log(this.diarys[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for(let i=start;i<end;i++){
          this.pro.push(this.assessments[i])
        }
      },
      change(){
        this.loadData()
      },
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
    width: 100%;
    height: 100%;
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
