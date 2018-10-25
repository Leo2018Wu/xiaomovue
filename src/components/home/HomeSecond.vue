<template>
    <div class="row">
      <div class="home-center-header col-sm-12 col-md-12 col-lg-12">
        <h1>别住酒店，住我家！</h1>
        <p>晚来天欲雪，能饮一杯无</p>
      </div>
      <div class="first-row col-sm-12 col-md-12 col-lg-12 center-block">
      <div class="first-row-left col-xs-4 col-sm-4 col-md-4 col-lg-4" v-for="house in houses">
        <div class="first-shadow">
          <router-link :to="`/intorhouse/${house.hId}`">
          <div class="center-img"><a><img :src ="house.hPic1" alt=""></a></div>
          </router-link>
        </div>
        <div class="first-row-left-tip">
          <!--<div class="radius-img img-responsive"><img src="../assets/fangdong-01.jpg" alt=""></div>-->
          <router-link to="/intorhouse"><p>{{house.hCity}}-{{house.hType}}</p></router-link>
          <p><span style="font-size: 10px;color: #ff573e;">￥</span><span style="font-size: 20px;color: #ff573e;font-weight: bold">{{house.hPrice}}</span></p><br/>
        </div>
       </div>
    </div>
    </div>
</template>
<script>
  import axios from "axios"
    export default {
      data(){
        return {
          mydata:[],
          houses:[],
          // housePics:[
          //   {housePicUrl:require("../assets/first-center-01.jpg"),userPic:require("../assets/fangdong-01.jpg"),houseName:"李先生的家-哈尔滨",price:832},
          //   {housePicUrl:require("../assets/first-center-02.jpg"),userPic:require("../assets/fangdong-02.jpg"),houseName:"张先生的家-哈尔滨",price:768},
          //   {housePicUrl:require("../assets/first-center-03.jpg"),userPic:require("../assets/fangdong-03.jpg"),houseName:"刘先生的家-哈尔滨",price:1234},
          //   {housePicUrl:require("../assets/first-center-04.jpg"),userPic:require("../assets/fangdong-04.jpg"),houseName:"刘先生的家-哈尔滨",price:1234},
          //   {housePicUrl:require("../assets/first-center-05.jpg"),userPic:require("../assets/fangdong-05.jpg"),houseName:"刘先生的家-哈尔滨",price:1234},
          //   {housePicUrl:require("../assets/first-center-06.jpg"),userPic:require("../assets/fangdong-06.jpg"),houseName:"刘先生的家-哈尔滨",price:1234},
          // ],
        }
      },
//动态加载数据（只能文字）（图片的路径问题）
      mounted:function () {
        axios.get("http://127.0.0.1:3000/house/styleHouse").then((result)=> {
              this.mydata = result.data.data;
              // console.log(this.mydata)
              for(var i = 0 ; i < 9; i++){
              this.houses.push(this.mydata[i])
          }
            },(err) =>{
              // console.log(result.err)
            })
      },
    }
</script>

<style scoped>
  *{margin: 0;padding:0;}
  img{
    width: 100%;
    display:block
  }
.home-center-header{
    margin: 70px auto;
  }
.home-center-header h1{
  margin-bottom: 20px;
  text-align: center;
}
.home-center-header P{
  color: #696969;
  text-align: center;
}
.price{
  color: #FF666A;
}
/*.first-shadow{*/
  /*margin-bottom: 130px;*/
  /*padding:7px;*/
/*}*/
.first-shadow:hover{
  box-shadow: 0 0 5px 2px #ccc;
}
.center-img img{
  display: block;
}
  /*.radius-img img{*/
    /*width:24%;*/
    /*height:24%;*/
    /*border-radius:25px;*/
  /*}*/
  .first-row-left-tip p{
    /*margin-bottom: 20px;*/
    color: white;
  }
  /*.radius-img{*/
    /*margin-left:45%;*/
  /*}*/
  @media (max-width: 768px) {
    .first-row-left-tip p{
      margin-top: 3px;
      font-size:14px;
    }
    .home-center-header h1{
      font-size:32px;
    }
    .home-center-header p{
      font-size:14px;
    }
    .first-row-left-tip{
      /*margin-bottom: 20px;*/
      display: none;
    }
    .first-shadow{
      /*margin-bottom: -0px;*/
      padding:7px;
    }
  }
  @media (max-width: 992px) {
    .first-row-left-tip p{
      margin-top: 5px;
      font-size:14px;
    }
    .home-center-header h1{
      font-size:34px;
    }
    .home-center-header p{
      font-size:16px;
    }
    .first-row-left-tip{
      text-align:center;
      margin-top:-200px;
    }
    .first-shadow{
      margin-bottom: 130px;
      padding:7px;
    }
  }
  @media (max-width: 1220px) {
    .first-row-left-tip p{
      margin-top: 4px;
      font-size:16px;
    }
    .home-center-header h1{
      font-size:36px;
    }
    .home-center-header p{
      font-size:18px;
    }
    .first-row-left-tip{
      text-align:center;
      margin-top:-200px;
    }
    .first-shadow{
      margin-bottom: 130px;
      padding:7px;
    }
  }
  @media (min-width: 1220px) {
    .first-row-left-tip p{
      margin-top: 10px;
      font-size:18px;
    }
    .home-center-header h1{
      font-size:40px;
    }
    .home-center-header p{
      font-size:20px;
    }
    .first-row-left-tip{
      text-align:center;
      margin-top:-200px;
    }
    .first-shadow{
      margin-bottom: 130px;
      padding:7px;
    }
  }
</style>
