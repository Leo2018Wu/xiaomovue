<template>
  <div class="row">
    <nav class="navbar navbar-fixed-top" style="background-color: white">
      <div class="navbar-header">
        <ul class="navbar-brand logo" href="#">
          <router-link to="/" tag="li" style="margin-top:-6px;"><img src="../assets/logo.png">
            <span style="margin-top:6px;margin-left:9px;position:absolute;">小沫</span>
          </router-link>
          <router-link to="/" tag="li"><span style="margin-left:6px ">居住极简主义</span></router-link>
        </ul>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/login" v-if="getName == null" tag="li"><span class="glyphicon glyphicon-log-in"></span>&nbsp;登录</router-link>
          <router-link to="/register" v-if="getName == null" tag="li"><span class="glyphicon glyphicon-edit"></span>&nbsp;注册</router-link>
          <router-link to="/guide" tag="li"><span class="glyphicon glyphicon-fire"></span>&nbsp;房客指南</router-link>
          <router-link to="" tag="li" class="inner"><span class="glyphicon glyphicon-phone"></span>&nbsp;手机小沫
            <ul class="inner-ul">
              <li id="inner-ul-li"><img src="../assets/code_pic.png" alt="" style="width: 100px;height: 100px;"></li>
            </ul>
          </router-link>
          <router-link to="/discounts" tag="li"><span class="glyphicon glyphicon-bullhorn"></span>&nbsp;优惠政策</router-link>
          <router-link to="/center" v-if="getName != null" tag="li"><span class="glyphicon glyphicon-user"></span>&nbsp;个人中心</router-link>
          <router-link to="" v-if="getName != null" tag="span" class="hello-user" style="color: #FF666A">欢迎&nbsp;&nbsp;{{getName}}</router-link>
          <a v-if="getName != null" tag="span"  @click="cleanUser" class="hello-user" style="margin-left: 10px"><span class="glyphicon glyphicon-log-out"></span>&nbsp;退出</a>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    computed:{
      getName(){
        return sessionStorage.getItem('sname')
      }
    },
    methods:{
      cleanUser(){
        sessionStorage.clear();
        // this.$router.push({path:'/login'})
        window.location.href='http://localhost:8080/login';
      }
    },
  }
</script>

<style scoped>
  *{margin: 0;padding: 0;}
  img{
    width: 30px;
    height: 30px;
  }
  #inner-ul-li{
    width: 120px;
    height: 120px;
    line-height: 120px;
    float: right;
    text-align:center;
    display: none;
  }
  #inner-ul-li:hover{
    background-color: rgba(0,0,0,0.5);
  }
  .inner:hover #inner-ul-li{
    display: block;
    background-color: rgba(0,0,0,0.5);
  }
  .logo li{
    cursor: pointer;
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-family: "楷体";
    font-size: 19px;
    float: left;
  }
  .navbar-right li{
    cursor: pointer;
    width: 120px;
    height: 60px;
    color: rgba(0, 0, 0, 0.7);
    line-height: 60px;
    text-align: center;
    font-size: 15px;
    float: left;
  }
  .logo li+li:hover{
    color: #FF666A;
  }
  .navbar-right li:hover{
    color:#ff666a;
  }
  .hello-user{
    padding-left: 10px;
    font-size: 15px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color:rgba(0, 0, 0, 0.7);
  }
  .hello-user:hover{
    cursor: pointer;
    color: #ff666A;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    margin-top: 15px;
  }
  @media (max-width: 992px) {
    .navbar-right li{
      display: none;
    }
  }
</style>
