<template>
  <div id="center" class="row">
    <img src="../../../static/images/h3.jpg"/>
    <div id="centform">
      <p>找回密码</p>
      <form>
        <div class="input-group col-xs-8 col-xs-push-2">
          <span class="input-group-addon"><i class="glyphicon glyphicon-phone" style="padding:8px;"></i></span>
          <input type="text" class="form-control input-lg" id="form1" placeholder="请输入手机号" style="text-align:center">
        </div>
        <div class="input-group col-xs-5 col-xs-push-2" style="margin-top:25px;">
          <span class="input-group-addon"><i class=" glyphicon glyphicon-picture " style="padding:8px;"></i></span>

          <input type="text" class="form-control input-lg yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma" id="form2" placeholder="图片验证码" style="text-align:center" >
        </div>
        <input type="button" id="code" @click="createCode" class="verification1" v-model="checkCode" style="width:20%;float:right;margin-right:10%;margin-top:-10%;"/>
        <div>
          <div class="input-group col-xs-5 col-xs-push-2" style="margin-top:25px;">
            <input type="text" class="form-control input-lg" id="form3" placeholder="请输入验证码"
                   style="text-align:center;border-radius:7px;">
          </div>
          <button type="button" class="btn btn-danger"
                  style="margin-left:62%;margin-top:-15%;height:42px;width:22%;border-radius:7px;">获取验证码
          </button>
        </div>
        <div class="input-group col-xs-8 col-xs-push-2" style="margin-top:5px;padding-bottom: 20px;">
          <button   class="btn btn-danger" style="width:100%;height:42px;border-radius:7px;"
                  @click.prevent="changepwd">立即找回
          </button>
        </div>
      </form>
    </div>
  </div>


</template>
<script>

  export default {
    name: "findpwd",
    data () {
      return {
        userPhone:'',
        dialog: false,
        LUserPhone:'',
        LUserPsd:'',
        picLyanzhengma:'',
        checkCode:''
      }
    },
    methods:{
      changepwd(){
        this.$router.push("/cpwd")

     // console.log("nihao")
     //   this.$axios.get("http://localhost:3000/order/getallorder/:uId",{uId:2}).
     //    then(function(result){
     //      console.log(result.data.data)
     //      }).catch(function (error) {
     //      console.log(error);
     //    })
      },
      checkLpicma(){

        this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
        if(this.picLyanzhengma == '') {
          $(".login_content1 span:eq(2)").text("请输入验证码")
          $(".login_content1 span:eq(2)").removeClass("disappear");

        }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
          console.log( this.picLyanzhengma.toUpperCase())
          console.log(code)
          $(".login_content1 span:eq(2)").text("验证码不正确")
          $(".login_content1 span:eq(2)").removeClass("disappear");
          this.createCode();//刷新验证码
          this.picLyanzhengma = '';
        }else { //输入正确时
          $(".login_content1 span:eq(2)").addClass("disappear");
          $(".login_content1 span:eq(2)").text("请输入验证码")
          return true;
        }
      },
      // 图片验证码
      createCode(){
        code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
          'S','T','U','V','W','X','Y','Z'];//随机数
        for(let i = 0; i < codeLength; i++) {//循环操作
          let index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
      },
    }

  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    opacity: 0.8;
  }

  #centform {
    width: 36%;
    background-color: #ffffff;
    position: relative;
    margin-top: -40%;
    margin-left: 32%;
  }
  .verification1{
    vertical-align: middle;

    width: 102px;
  }

  p {
    text-align: center;
    color: #ff666a;
    padding: 15px;
    letter-spacing: 5px;
    font-size: 30px;
  }
</style>
