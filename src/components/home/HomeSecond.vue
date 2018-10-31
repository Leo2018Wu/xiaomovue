<template>
  <div class="row">
    <div class="home-center-header col-sm-12 col-md-12 col-lg-12">
      <h1>别住酒店，住我家！</h1>
      <p>晚来天欲雪，能饮一杯无</p>
    </div>
    <div class="first-row col-xs-12 col-sm-12 col-md-12 col-lg-12 center-block">
      <div class="col-xs-4 col-md-4 col-sm-4"  v-for="house in houses" style="padding: 0 15px 15px 0">
        <div class="box" style="display: block">
          <router-link :to="`/intorhouse/${house.hId}`">
            <img :src="'../../../static/images/'+house.hPic1" alt=""  >
            <div class="box-content">
              <div class="content" style="margin-top: 20%">
                <h3 class="title">{{house.hCity}}-{{house.hType}}</h3>
                <br>
                <span class="post" style="color: #ff632d;font-size: 22px"><span style="font-size: 13px">￥</span>{{house.hPrice}}</span>
              </div>
            </div>
          </router-link>
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
      }
    },
    mounted:function () {
      axios.get("http://127.0.0.1:3000/house/styleHouse").then((result)=> {
        this.mydata = result.data.data;
        for(var i = 0 ; i < 9; i++){
          this.houses.push(this.mydata[i])
        }
      },(err) =>{
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
  .center-img img{
    display: block;
  }
  .first-row-left-tip p{
    color: white;
  }
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
  }
  @media (min-width: 1220px) {
    .first-row-left-tip p{
      margin-top: 10px;
      font-size:18px;
    }
    .home-center-header h1{
      font-size:40px;
    }
    .home-center-header p {
      font-size: 20px;
    }
  }
  /*动画样式*/
  .box{
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    position: relative;
  }
  .box:before{
    content: '';
    background-color: rgba(255,255,255,0.5);
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
  }
  .box:hover:before{
    left: 15px;
    right: 15px;
    bottom: 15px;
    top: 15px;
    opacity: 1;
    animation:bounce-left 1s ease-in forwards;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;
  }
  .box:hover img{ transform: scale(1.5); }
  .box .box-content{
    color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
    transform:translateX(-50%) translateY(-50%) scale(1);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition:all 0.3s ease 0.5s;
  }
  .box .content{
    opacity: 0;
    transform:translateX(-50%) translateY(-50%);
    position: absolute;
    left:50%;
    top:50%;
    z-index: 2;
    transition:all 0.3s ease 0s;
  }
  .box:hover .content{ opacity: 1; }
  .box .title{
    color: #5f5f5f;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    transform: translateY(-500px);
    opacity: 0;
    transition:all 0.8s ease 0.3s;
  }
  .box .post{
    color: #000;
    font-size:15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 10px;
    opacity: 0;
    transform:translateY(-500px);
    transition:all 0.8s ease 0.15s;
  }
  .box:hover .title,
  .box:hover .post{
    opacity: 1;
    transform:translateY(0);
  }
  .box .icon{
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .box .icon li{
    margin:0 4px;
    opacity: 0;
    display: inline-block;
    transform: translateY(-200px);
    transition: all 0.8s ease 0s;
  }
  .box .icon li:nth-child(2){ transition-delay: 0.1s; }
  .box:hover .icon li{
    opacity: 1;
    transform: translateY(0);
  }
  .box .icon li a{
    color: #fff;
    background-color: #0eb1dc;
    font-size: 18px;
    line-height: 33px;
    height: 35px;
    width: 35px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: block;
    transition: all 0.3s ease 0s;
  }
  .box .icon li a:hover{
    color: #fff;
    background-color: #ff3a6f;
    box-shadow: 0 0 15px #ff3a6f;
  }
  @keyframes bounce-left{
    25%,50%,75%,100%{ transform:translateX(0); }
    40%{ transform:translateX(30px); }
    70%{ transform:translateX(15px); }
    90%{ transform:translateX(5px); }
  }
  @media only screen and (max-width:990px){
    .box{ margin-bottom: 30px; }
  }
  @media only screen and (max-width:479px){
    .box .title{ font-size: 18px; }
  }
</style>
