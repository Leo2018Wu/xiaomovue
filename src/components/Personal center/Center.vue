<template>
  <div class="container">
    <div class="row">
      <img src="../../assets/cmbchina_fkcenter.jpg" alt="广告"/>
    </div>
    <!--<div id="row"> <h3>个人中心</h3></div>-->
<div class="row" style="margin-top: 20px">
      <div class="col-xs-2">
        <ul class="list-group"  >
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center" exact>
            <span class="glyphicon glyphicon-link" aria-hidden="true"></span>&nbsp;分享优惠</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/orderempty">
            <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;我的订单</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/myassessment">
            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>&nbsp;我的点评</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/diaryempty">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;我的日记</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/mysave">
            <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>&nbsp;我的收藏</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/occupant">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;常用入住人</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/personaldata">
            <span class="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;个人资料</router-link>
          <router-link class="list-group-item"  tag="li" active-class="active" to="/center/updatepwd">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>&nbsp;密码设置</router-link>
        </ul>
      </div>
      <!--<div class="col-xs-1"></div>-->
      <div class="col-xs-9 col-xs-push-1"><router-view></router-view></div>
</div>
  </div>
</template>

<script>
  export default {
    name: "Center",
    data() {
      return {
        title:" ",

      }
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  /*h3{*/
    /*margin-top: 15px;*/
  /*}*/
  img{
    width: 100%;
    margin-top: 60px;
  }
  ul {
    list-style: none;
  }
  li{
    margin-bottom: 10px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 17px;
    color: #2c3e50;
    cursor: pointer;
  }
  li:hover{
    background-color:#F0F0F0;
  }
  .list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover{
    background-color: #FF666A;
    border-color: #FF666A;
  }
  .list-group-item{
    background-color: rgba(168,166,162,0.25);
  }
  /*li{*/
  /*background-color:#f05b72;*/
  /*}*/
</style>
