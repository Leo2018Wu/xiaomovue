<template>
  <div class="row">
    <nav class="navbar">
      <div class="center " style="z-index: 100;">
        <div class="bottom-header">
          <p style="text-align: center;margin: 20px 0 10px">关注我们</p>
          <a><img src="../assets/code_pic.png" alt=""></a>
        </div>
        <div class="bottom-left col-xs-4 col-sm-4 col-md-2 col-lg-2">
          <h5>关于我们</h5>
          <ul class="center-ul">
            <router-link to="/rightnav/about"><li><a>关于小沫</a></li></router-link>
            <router-link to="/rightnav/contact"><li><a>联系我们</a></li></router-link>
          </ul>
        </div>
        <div class="bottom-center col-xs-4 col-sm-4 col-md-2 col-lg-2">
          <h5>网站协议</h5>
          <ul class="center-ul">
            <router-link to="/rightnav/service"><li><a>服务协议</a></li></router-link>
            <router-link to="/rightnav/declaration"><li><a>版权声明</a></li></router-link>
          </ul>
        </div>
        <div class="bottom-right col-xs-4 col-sm-4 col-md-2 col-lg-2">
          <h5>房客须知</h5>
          <ul class="center-ul">
            <router-link to="/guide"><li><a>房客指南</a></li></router-link>
            <router-link to="/discounts"><li><a>优惠政策</a></li></router-link>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <ul class="bottom-ul">
          <li><span style="font-size: 16px">城市导航</span></li>
          <li>北京短租房</li>
          <li>上海短租房</li>
          <li>苏州短租房</li>
          <li>南京短租房</li>
          <li>成都短租房</li>
          <li>广州短租房</li>
          <li>重庆短租房</li>
          <li>武汉短租房</li>
        </ul>
      </div>
      <p style="font-size: 14px;text-align: center;margin: 10px 0">Copyright &copy; 2018 XiaomoShort-Rent Incorporated. All rights reserved</p>
    </nav>
  </div>

</template>

<script>
  export default {
    name: "NavigationBottom"
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    color: #5c5c5c;
  }
  .navbar{
    width: 100%;
  }
  img{
    width: 100px;
    height: 100px;
  }
  .bottom-header{
    width: 100px;
    height: 130px;
    margin: 0 auto;
    font-size: 16px;
  }
  h5{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .bottom-left,.bottom-center,.bottom-right{
    margin-top: 30px;
    width: 200px;
    height: 100px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    float: left;
  }
  .center{
    width: 600px;
    height: 100px;
    margin: 0 auto;
  }
  .bottom{
    width: 100%;
    height: 20px;
    line-height: 20px;
    clear: both;
  }
  .center-ul,.bottom-ul{
    list-style: none;
  }
  .bottom-ul{
    width: 720px;
    height: 20px;
    margin: 0 auto;
  }
  .bottom-ul li{
    margin-left: 10px;
    font-size: 14px;
    float: left;
  }
  li a{
    text-decoration: none;
  }
  li a:hover{
    color: #ff666A;
  }
</style>
