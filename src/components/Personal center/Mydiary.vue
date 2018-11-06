<template>
  <!--<div class="container">-->
    <div >
  <el-card class="box-card" v-for="(diary,index) in pro">
    <div slot="header" class="clearfix">
      <h3 class="dtitle">{{diary.dTitle}}</h3><br>
      <router-link :to="'/center/diaryempty/'+diary.dId"><el-button style="color:#ff666A;float: right; padding: 3px 0" type="text">详情>></el-button></router-link>
      <span>{{diary.hName}}</span>
      <h5>{{diary.dDate}}</h5>
    </div>
    <div  class="text item">
      <p class="dContent">{{diary.dContent }}</p>
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
  <!--</div>-->
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        dialogVisible: false,
        pageIndex:1,
        pageSize:3,
        pageCount:0,
        pro:[],
        diarys:[]
      };
    },
    methods:{
      loadData(){
        this.pro=[];
        let start=(this.pageIndex-1)*this.pageSize;
        let end=start +this.pageSize
        // console.log(this.diarys[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for(let i=start;i<end;i++){
          this.pro.push(this.diarys[i])
        }
      },
      change(){
        this.loadData()
      }
    },
    mounted(){
      let _this=this
      this.$axios.get(`/diarys/udiarys/${sessionStorage.getItem('suId')}`).then((result)=> {
        _this.diarys = result.data.data
        _this.pageCount=_this.diarys.length
        _this.loadData()
      },(err) =>{
        console.log(result.err)
      })
    },
  }
</script>
<style scoped>
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
    width:100%;
    margin-bottom: 10px;
  }
  .dContent{
    width: 700px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
