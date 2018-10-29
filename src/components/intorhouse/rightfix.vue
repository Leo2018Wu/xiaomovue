<template>
  <div class="rigfix">
    <div>
      <span><img src="../../../static/images/shou.png"></span>
      <span class="shoufont" >收藏</span>
      <span style="margin-left:30px;"><img src="../../../static/images/show.png"></span>
      <span class="shoufont">分享</span>
      <span class="pinfen">评分:  {{househscore}}分</span>
    </div>
    <div class="order">
      <p class="p1" style="padding:12px;">
        <span>￥</span><span style="font-size:30px;">{{houseprice}}</span></p>
      <span style="margin-top:-40px;float:right;margin-right:60px;">每晚</span>

      <div class="block" style="margin-top:10px;">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>

      <div style="margin-top:30px;display: inline-block; ">
        <template>
          <el-input-number v-model="num2" :disabled="true"></el-input-number>
        </template>
      </div>
      <span>套</span>

      <button style="width:40%;height:45px;background-color:#FF666A;border:0 solid #fff;color:#fff;display: inline-block;" @click="quekorder">立即预定</button>


      <div>
        <img :src="headimage" style="width:20%;height:20%;margin:20px 20px;border-radius: 50%;">
        <p style="margin-top:-25%;margin-left:30%;font-size:20px;">aimeelai</p>
        <img src="../../../static/images/pinglun/shiming.png" style="margin-left:28%;margin-top:5%;">
        <img src="../../../static/images/pinglun/small.png" style="margin-left:80%;margin-top:-45%;" >
      </div>
      <div style="width:100%;height:15%;">
        <el-button   icon="el-icon-message" style="width:100%;background-color:#FF666A;color:#fff;">在线聊天</el-button>
      </div>
    </div>
  </div>






</template>

<script>
  export default {
    name: "rightfix",
    methods: {
      handleClick() {
        alert('button click');
      },
      quekorder(){
        this.$store.state.hName=this.hName;
        this.$store.state.houseprice=this.houseprice;
        this.$router.push({path:'/write'})
        this.$store.state.househId=this.hId;


      },

      handleChange(value) {
        console.log(value);
      },
      // save(){
      //   let _this = this;
      //   axios.get(`http://localhost:3000/house/details/`+this.hId).then(function (result) {
      //     sDate:new Date();
      //     hId:this.$route.params.hId;
      //     uId:sessionStorage.uId;
      //
      //
      //
      //   })
      // }
    },


    data() {
      return{
        houseprice:"",
        househscore:"",
        hName:"",
        headimage:"../../../static/images/pinglun/4.jpg",
        value6: '',
        value7: '',
        hId:this.$route.params.hId,
      };
    },
    mounted(){
      let _this=this
      axios.get(  `http://localhost:3000/house/details/`+this.hId).then(function (result) {
        _this.houseprice=result.data.data[0].hPrice;
        _this.househscore=result.data.data[0].hScore;
        _this.hName = result.data.data[0].hName;


      })
        .catch(function (error) {
          console.log(error);
        });
      window.onscroll = function(){
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        var height=scrollHeight-scrollTop-windowHeight;
        if(height<=240){
          //写后台加载数据的函数

          $(".rigfix").css("top","-160px");
          //动画效果有延迟，效果不好，使用不当
          // $(".rigfix").animate({top:'-160px'},50);
        }else{
          $(".rigfix").css("top","100px");
          // $(".rigfix").animate({top:'70px'},50);
        }


      }
    }

  };








</script>

<style scoped>
  .rigfix{
    height:350px;
    position: fixed;
    top:100px;
    right:0;
    bottom:200px;

  }

  .shoufont,.pinfen{
    font-size:16px;
    font-family: "宋体";
    font-weight: bold;
  }
  .shoufont:hover,.pinfen:hover{
    color: #ff666a;
  }
  .pinfen{
    margin-left:50px;
  }
  .order{
    width:100%;
    height:350px;
    background-color: #ffffff;
    margin-top:28px;
  }
  .p1{
    margin-left:30px;
    margin-top:10px;
    color:#ff666a;
  }
  @media (max-width:1144px) {
    .rigfix{
      display: none;
    }
  }
  @media (min-width:1300px) {
    .rigfix{
      right:40px;
    }
  }
  @media (min-width:1144px) and (max-width:1300px) {
    .rigfix{
      right:0;
    }
  }
</style>
