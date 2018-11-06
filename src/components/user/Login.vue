<template>
  <div class="row">
    <div class="login-wrapper" style="margin-top: 60px">
      <div class="login-left">
        <img src="../../../src/assets/loginbg.jpg">
        <div class="h1">点击进入小沫短租</div>
      </div>
      <div class="login-right">
        <!--<div class="h2" style="margin-top: 70px">登&nbsp;录</div>-->
        <div style="width: 40px;height: 40px;margin-top:20px">
          <img src="../../../static/images/photo/animated_favicon1.gif" alt="" style="margin-top: 20px;max-width: 100%;max-height: 100%;transform: scale(2,2)">
        </div>
        <div class="form-group">
          <input v-model="phonenum" id="phonenum" type="text"  placeholder="请输入手机号">
          <label for="phonenum">手机号</label>
        </div>
        <div class="form-group">
          <input v-model="password" id="password" type="password" placeholder="请输入密码">
          <label for="password">密码</label>
        </div>
        <div ><a href="http://10.40.4.8:8080/fpwd" style="color: #aaaaaa">找回密码</a></div>
        <div class="button-area">

          <button class="btn btn-primary" v-on:click="UserButton()">登&nbsp;录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Login",
    data(){
      return{
        phonenum:'',
        password:'',
        uPhone:'',
        uid:'',
        mydata:''
      }
    },
    mounted(){
      var openLoginRight = document.querySelector('.h1');
      var loginWrapper = document.querySelector('.login-wrapper');
      openLoginRight.addEventListener('click', function(){
        loginWrapper.classList.toggle('open');
      });
    },
    methods:{
      UserButton() {
        if(this.phonenum == ''||this.password == ''){
          alert('手机号和密码不能为空！')
        }else {
          let _this = this;
          this.$axios.post('userorderdis/login',
            {
              uPhone: _this.phonenum,
              uPwd: _this.password
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            if (info.code == 200) {
              alert('登录成功，即将跳转到首页');
              setTimeout(function () {
                _this.$router.replace({path:'/'})
              }.bind(this), 1000);
              _this.$store.state.phone =_this.phonenum;
              _this.uid =_this.phonenum;
              sessionStorage.setItem('sphone',info.data.uPhone);
              sessionStorage.setItem('sname',info.data.uName);
              sessionStorage.setItem('suId',info.data.uId);
              window.location.href = 'http://10.40.4.8:8080'
            }
            else {
              alert('用户名或密码错误')
            }
          });
        }
      },
    },
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  a:hover{text-decoration: none}
  body {
    font-family: 'Lato', sans-serif;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #2A2A2A;
    overflow: hidden;
  }
  input {
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 0;
    border-bottom: 1px solid #AAAAAA;
    font-size: 16px;
    color: #000;
    border-radius: 0;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    height: 40px;
  }
  button,
  input:focus {
    outline: 0;
  }
  ::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.00933333em;
  }
  .form-group {
    position: relative;
    padding-top: 15px;
    margin-top: 10px;
  }
  label {
    position: absolute;
    top: 0;
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    color: #aaa;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: -0.00933333em;
    transition: all 0.2s ease-out;
  }
  input:placeholder-shown  + label {
    opacity: 0;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
  .h1 {
    color: #fff;
    opacity: 0.8;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2405em;
    transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
    text-align: center;
    cursor: pointer;
    position: absolute;
  }
  .open .h1 {
    -webkit-transform: translateX(200px) translateZ(0);
    transform: translateX(200px) translateZ(0);
  }
  .h2 {
    color: #000;
    font-size: 22px;
    letter-spacing: -0.00933333em;
    font-weight: 400;
    padding-bottom: 15px;
  }
  .login-wrapper {
    margin: 50px auto;
    width: 1140px;
    height: 600px;
    background-color: #fff;
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .login-left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
    overflow: hidden;
  }

  .login-left img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
    object-position: left;
  }

  .open .login-left img {
    -webkit-transform: translateX(280px) translateZ(0);
    transform: translateX(280px) translateZ(0);
  }

  .open .login-left {
    -webkit-transform: translateX(-400px) translateZ(0);
    transform: translateX(-400px) translateZ(0);
  }

  .login-right {
    padding: 40px;
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    -webkit-transform: translateX(400px) translateZ(0);
    transform: translateX(400px) translateZ(0);
    transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  }

  .open .login-right {
    -webkit-transform: translateX(0px) translateZ(0);
    transform: translateX(0px) translateZ(0);
  }
  input[type="checkbox"] {
    cursor: pointer;
    margin: 0;
    height: 22px;
    position: relative;
    width: 22px;
    -webkit-appearance: none;
    transition: all 180ms linear;
  }

  input[type="checkbox"]:before {
    border: 1px solid #aaa;
    background-color: #fff;
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 2px;
    transition: all 180ms linear;
  }
  input[type="checkbox"]:checked:before {
    background: #ff666A;
    border: 1px solid #ff666A;
  }
  input[type="checkbox"]:after {
    content: '';
    border: 2px solid #fff;
    border-right: 0;
    border-top: 0;
    display: block;
    height: 4px;
    left: 4px;
    opacity: 0;
    position: absolute;
    top: 6px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 12px;
    transition: all 180ms linear;
  }
  input[type="checkbox"]:checked:after {
    opacity: 1;
  }
  .button-area {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .btn {
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 2px;
    height: 40px;
    display: flex;
    padding: 0 35px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: -0.00933333em;
  }
  .btn-primary {
    margin-top: 40px;
    margin-left: 210px;
    color: #fff;
    background: #ff666A;
    border-radius: 5px;
    border: 1px solid #ff666A;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
</style>
