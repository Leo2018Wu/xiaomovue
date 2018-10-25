<template>
  <div style="min-width: 800px">
    <div class="bg" style=" "></div>
    <div class="mask"></div>
    <form class="form-horizontal " style="margin-top: 200px">
      <div class="form-group" style="margin-top:-150px">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-lg-4 col-sm-push-4 col-xs-push-4">
            <input v-model="phonenum" style="height: 50px;width: 400px;" type="text" class="form-control" id="inputEmail3" placeholder="请输入手机号">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-lg-4 col-sm-push-4 col-xs-push-4">
            <input v-model="password" style="height: 50px;margin-top: 30px;width: 400px;" type="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-sm-push-4 col-xs-push-4" style="text-align: center">
            <button type="submit" class="btn btn-primary" style="height: 60px;width: 100px;margin-top:30px" v-on:click="UserButton()">登录</button>
          </div>
        </div>


      </div>
    </form>
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
    methods:{
      UserButton() {
        if(this.phonenum == ''||this.password == ''){
          alert('手机号和密码不能为空！')
        }else {
          let _this = this;
          axios.post('http://127.0.0.1:3000/userorderdis/login',
            {
              uPhone: _this.phonenum,
              uPwd: _this.password
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            _this.$store.state.uId = info.data.uId
            _this.$store.state.username= info.data.uName
            console.log(_this.uid)
            if (info.code == 200) {
              alert('登录成功，即将跳转到首页');
              setTimeout(function () {
                _this.$router.push('/')
              }.bind(this), 1000);
              _this.$store.state.phone =_this.phonenum;
              _this.uid =_this.phonenum;
              sessionStorage.setItem('sphone',_this.$store.state.phone);
              sessionStorage.setItem('sname',_this.$store.state.username);
              sessionStorage.setItem('suId',_this.$store.state.uId);
              sessionStorage.setItem('spassword',_this.$store.state.pwd);
              _this.$store.state.type = 1;
              _this.$router.push({path: '/'})


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
  @import "../../assets/css/loginBg.css";
  .mask{
    margin-top:100px;
    margin-left:35%;
  }
</style>

