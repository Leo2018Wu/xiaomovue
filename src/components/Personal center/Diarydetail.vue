<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>{{diaryOne[0].dTitle}}</h3>
    </div>
    <div  class="text item">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><p>{{diaryOne[0].dContent}}</p></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><span style="float: right;cursor: pointer;color: #FF666A" @click = del()>删除</span></div></el-col>
      </el-row>
      <el-row >
        <el-col :span="4" v-for="image in mydata1">
          <div  style="margin-right: 20px;width: 100px;height: 130px;">
            <img :src="image"style="width: 100%;height: 100%;"/>

          </div>
        </el-col>
      </el-row>
      <hr>
      <span>评论</span>
      <div style="background-color:#fafafa;"  >
        <div v-for="assessment in assessments">
        <el-row style="padding:10px" >
          <el-col :span="3">
            <div class="grid-content bg-purple">
            <img src="../../assets/first-center-01.jpg" style="height: 100%;width: 100%;border-radius: 50%"/>
          </div>
          </el-col>
          <el-col :span="20" :offset="1"><div class="grid-content bg-purple-light">
            <h3>{{assessment.uName}}</h3>
            <h5>{{assessment.daDate}}</h5>
            <p>{{assessment.daContent}}</p>
          </div></el-col>
        </el-row>
        </div>
      </div>
    </div>
  </el-card>
</template>
<style scoped>
  p{
    line-height: 30px;
    text-indent:25px;
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
    width: 100%;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {

        dialogVisible: false,
        diaryOne: [],
        mydata:[],
        mydata1:[],
        assessments:[ ]
      };
    },
    mounted() {
      let dId = this.$route.params.did
      axios.get(`http://localhost:3000/diarys/ddiarys/${dId}`).then((result) => {
        this.diaryOne = result.data.data
        this.mydata=this.diaryOne[0].dImages
        this.mydata = this.mydata.substr(0,this.mydata.length-1)
        this.mydata1=this.mydata.split(',')
      }, (err) => {
        console.log(result.err)
      })
      axios.get(`http://localhost:3000/diarys/ddiarys/getUandAssessments/${dId}`).then((result) => {
        this.assessments = result.data.data
      }, (err) => {
        console.log(result.err)
      })
    },
    methods: {
      del() {
        axios.get(`http://localhost:3000/diarys/delete/${this.diaryOne[0].dId}`).then((result) => {
          alert("删除成功")
          window.location.reload()
        }, (err) => {
          console.log(result.err)
        })
      },
    },
  //   del: function (cid) {
  //     // var index=this.products.indexOf(index);
  //     // this.products.splice(index,1);
  //
  //     let _this = this
  //     $.ajax({
  //       url:"http://localhost:3000/deletecart/"+cid,
  //       type:"get",
  //       success:function(result){
  //         _this.products=[],
  //           _this.ajax()
  //         _this.getTotalMoney();
  //         _this.getTotalNum();
  //       }
  //     })
  //   },
  //   ajax() {
  //     let _this=this
  //     axios.get(`http://localhost:3000/getcart/${this.$store.state.uid1}`).then(function (result) {
  //       _this.products = result.data.data;
  //       console.log(result.data)
  //     })
  //   }
  // },
  // created(){
  //   this.ajax()
  // }
  // <button v-on:click="del(product.cid)">删除</button>


  }

</script>
