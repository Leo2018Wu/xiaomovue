<template>
  <div class="container" id="to">
    <div class="row">
      <div class="unfinish">
        <div class="steps4">
          <!--顶部步骤条-->
          <app-steps2></app-steps2>
        </div>
        <br>
        <!--下方提示信息-->
        <div class="unfinished">
          <br>
          <center>
            <img src="../../assets/remind.png" alt="">&nbsp;
            <h2>订单超时未支付</h2>
            <h2>请到个人中心付款</h2>
          </center>
          <br>
          <center><h5>小沫更多好房等你来选，看看更多房源吧</h5></center>
          <center><router-link to="/center/orderempty"><a>去支付</a></router-link></center>
        </div>
        <br>
        <!--更多房源-->
        <div class="first-row center-block col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="first-row-left col-md-6 col-lg-6" v-for="house in houses">
            <div class="first-shadow">
              <router-link :to="`/intorhouse/${house.hId}`">
                <div class="center-img"><a><img class="himg" :src="'../../../static/images/'+house.hPic1" alt=""></a>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#to" title="飞回顶部" style="right:1%;bottom:3%;position:fixed">
      <div style="width: 100px;height: 100px;"><img src="../../assets/rocket.png" alt="" style="max-width:100%;max-height:100%"></div>
    </a>
  </div>
</template>

<script>
  import Steps2 from '../steps/Steps2.vue'
  export default {
    name: "UnFinished",
    data(){
      return{
        mydata:[],
        houses:[],
      }
    },
    components:{
      'app-steps2':Steps2,
    },
    mounted:function () {
      this.$axios.get("/house/styleHouse").then((result)=> {
        this.mydata = result.data.data;
        // console.log(this.mydata)
        for(var i = 0 ; i < 6; i++){
          this.houses.push(this.mydata[i])
        }
      },(err) =>{
        // console.log(result.err)
      })
    },
  }
</script>

<style scoped>
  .unfinish{
    margin-top:80px;
  }
  ul{
    font-size: 22px;
  }
  .steps4{
    margin: 0 auto;
  }
  .unfinished{
    border: 1px solid gainsboro;
    box-shadow: 4px 4px 8px grey;
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  h2{
    color:#FF666A
  }
  a {
    text-decoration: none;
  }
  a:hover{
    color:#FF666A;
  }
  .himg{
    width: 100%;
    display:block;
    margin: 0;
    padding:0;
  }
  .center-img{
    display: block;
    margin: 0;
    padding:0;
  }
  .first-shadow:hover{
    box-shadow: 0 0 5px 3px #ccc;
  }
  .first-shadow{
    margin-bottom: 5%;
    padding:8px;
  }
</style>
