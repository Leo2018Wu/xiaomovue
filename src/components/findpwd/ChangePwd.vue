<template>
  <div id="center" class="row">
    <img src="../../../static/images/h2.jpg" class="img1"/>
    <div id="centform">
      <p  class="she">设置新密码</p>
      <div class="infom">
        <img src="../../../static/images/gouzi.jpeg" class="img2">
        <p style="margin-left:-30px;">验证短信已发送至手机号码</p>
        <p class="phone">+86 {{phone}}</p>
      </div>

      <form action=""  >
        <div>
          <div class="input-group col-xs-5 col-xs-push-2" style="margin-top:15px;">
            <input type="text" class="form-control input-lg" id="form3" placeholder="手机验证码" style="text-align:center;border-radius:7px;">
          </div>
          <button type="button" class="btn btn-default" style="margin-left:62%;margin-top:-15%;height:42px;width:22%;font-family:'Times New Roman',Times,serif;">重新发送</button>
        </div>
        <div class="input-group col-xs-8 col-xs-push-2">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock" style="padding:8px;"></i></span>
          <input type="text" class="form-control input-lg" id="form1" placeholder="新密码" style="text-align:center">
        </div>
        <div class="input-group col-xs-8 col-xs-push-2" style="margin-top:20px;padding-bottom: 20px;">
          <router-link to="/center">
          <button type="submit" class="btn btn-danger" style="width:100%;height:42px;border-radius:7px;font-family:'Times New Roman',Times,serif;"
              @suce="sucess">完成</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>


</template>

<script>
    export default {
        name: "changepwd",
        data:function () {
          return{
            phone:1234567811
          }
      },
      methods:{
          sucess(){
            //设置新密码成功后进入首页
            this.$router.push("/intorhouse")
          }
      }

    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .img1{
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
  .img2{
    width:50px;
    height:50px;
    float:left;
    margin-left:15%;

  }
  .infom{
    margin-top:-25px;
  }
  .she{
    text-align:center;
  }
  .phone{
    margin-top:-35px;
    text-align:center;
  }

  #centform {
    width: 36%;
    background-color: #ffffff;
    position: relative;
    margin-top: -40%;
    margin-left: 32%;
  }
  p {
    padding: 15px;
    font-size:23px;
    margin-bottom: 20px;
  }

</style>
