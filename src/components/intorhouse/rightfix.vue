<template>
  <div class="rigfix col-xs-3">
      <div class="order"  >
        <br>
        <div style=" margin-left:10px; ">
          <span><img src="../../../static/images/shou.png" style="width:20px;height:20px;"></span>
          <span class="shoufont" @click="save">收藏</span>
          <span style="margin-left:30px;"><img src="../../../static/images/show.png" style="width:20px;height:20px;"></span>
          <span class="shoufont">分享</span>
          <span class="pinfen">评分:  {{househscore}}分</span>
        </div>
        <p class="p1" style="padding:12px;">
          <span style="color: #ff666A">￥</span><span style="font-size:30px;text-align: left;color: #ff666A">{{houseprice}}</span>
          &nbsp;&nbsp;<span style="font-size:14px;text-align: right;color: #2c2c2c">/每晚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="cursor: pointer;color: #ff666A" @click="todisount">更多优惠>></span></span></p>
        <div style="text-align: center">
          <span>共</span>
          <div style="display:inline-block; ">
            <template>
              <el-input-number v-model="num2" :disabled="true" style="width: 150px"></el-input-number>
            </template>
          </div>
          <span>套</span>
        </div>

          <button style="width:100%;height:45px;background-color:#FF666A;border:0 solid #fff;color:#fff;display: inline-block;margin-top: 20px;border-radius: 5px;font-size: 18px" @click="quekorder">立即预定</button>

        <div style="text-align: center">
          <img :src="headimage" style="width:30%;height:30%;margin:20px 20px;border-radius: 50%;text-align: center">
          <p>等雨停</p>
        </div>
        <div style="text-align: center;font-size: 18px;margin-top: 15px;color: #ff666A;">
          <p >在线聊天</p>
        </div>
      </div>

  </div>






</template>

<script>
  import axios from "axios"
  export default {
    name: "rightfix",
    methods: {
      handleClick() {
        alert('button click');
      },
      todisount(){
        this.$router.push({path:'/discounts'})
      },
      quekorder(){
        console.log(!sessionStorage.getItem("suId"));
        if(sessionStorage.getItem("suId") == null){
          alert("请先登录!")
          return;
        }else{
          this.$store.state.hName=this.hName;
          this.$store.state.houseprice=this.houseprice;
          this.$store.state.househId=this.hId;
          this.$router.push({path:'/write'})
        }
      },

      handleChange(value) {
        console.log(value);
      },
      save(){
        if(sessionStorage.getItem("suId") == null){
          alert("请先登录!")
          return;
        }else{
          axios.post("http://localhost:3000/save/add",{
            sDate:new Date().toLocaleDateString(),
            uId:sessionStorage.getItem('suId'),
            hId:this.hId,
          }).then((resopnse)=>{
            alert("收藏成功")
          }).catch((err)=>{
            alert("收藏失败")
          })

        }


      }
    },


    data() {
      return{
        houseprice:"",
        househscore:"",
        hName:"",
        headimage:"../../../static/images/pinglun/4.jpg",
        value6: '',
        value7: '',
        num2:1,
        hId:this.$route.params.hId,
      };
    },
    mounted(){
      let _this=this;
      axios.get(  `http://localhost:3000/house/details/`+this.hId).then(function (result) {
        _this.houseprice=result.data.data[0].hPrice;
        _this.househscore=result.data.data[0].hScore;
        _this.hName = result.data.data[0].hName;
      })
        .catch(function (error) {
          console.log(error);
        });
      window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        var height=scrollHeight-scrollTop-windowHeight;
        if(height<=240){
          $(".rigfix").css("top","-240px");
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

    position: fixed;
    top:120px;

    bottom:200px;

  }

  .shoufont,.pinfen{
    font-size:15px;


  }
  .shoufont:hover,.pinfen:hover{
    color: #ff666a;
  }
  .pinfen{
    margin-left:20px;
  }
  .order{
    width:100%;
    padding:10px;
    background-color: #ffffff;
    margin-top:54px;

  }
  .p1{
    margin-left:30px;
    margin-top:10px;
    color:#ff666a;
  }
  @media (max-width:1200px) {
    .rigfix{
      display: none;
    }
  }
  @media (min-width:1200px) {
    .rigfix{
      right:5%;
    }
  }
  @media (min-width:1500px) {
    .rigfix{
      right:15%;

    }
  }
</style>
