<template>
  <div class="allRegidter">
    <div class="row">
      <div class="col-sm-6 col-sm-push-3">
        <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="" prop="phoneNum">
            <span style="margin-right: 10px"><img src="../../assets/phone.png" alt=""></span>
            <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off" style="width: 70%"></el-input>
          </el-form-item>
          <el-form-item label="" prop="userName">
            <span style="margin-right: 10px"><img src="../../assets/user.png" alt=""></span>
            <el-input type="text" v-model="ruleForm.userName" placeholder="请输入昵称" autocomplete="off" style="width: 70%"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <span style="margin-right: 10px"><img src="../../assets/password.png" alt=""></span>
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off" style="width: 70%"></el-input>
          </el-form-item>
          <el-form-item label="" prop="checkPass">
            <span style="margin-right: 10px"><img src="../../assets/password.png" alt=""></span>
            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off" style="width: 70%"></el-input>
          </el-form-item>
          <el-form-item label="" prop="code">
            <span style="margin-right: 10px"><img src="../../assets/safe.png" alt=""></span>
            <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off" style="width: 45%"></el-input>
            <el-button type="primary" @click="getMessage()" style="width: 24%">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="" prop="inviteNum">
            <span style="margin-right: 10px"><img src="../../assets/friend.png" alt=""></span>
            <el-input type="text" v-model="ruleForm.inviteNum" placeholder="请输入好友邀请码" autocomplete="off" style="width: 70%"></el-input>
          </el-form-item>
          <div class="checkbox-container" style="margin-left: 120px;margin-bottom: 40px">
            <input type="checkbox" v-model="box">
            <div class="text-checkbox" style="font-size: 12px;color: white">我同意小沫短租<a class="div-a" href="/rightnav/service">《服务协议》</a></div>
          </div>
          <el-form-item>
            <el-button @click="resetForm('ruleForm')" style="margin-left: 100px">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left: 70px">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      var validatephone = (rule, value, callback) => {
        var pattern = /^1[34578]\d{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if(!pattern.test(value)){
          callback(new Error('请输入正确的手机号'))
        }else{
          callback()
        }
      };
      var validateName = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
      var validatePwd = (rule, value, callback) => {
        var pattern = /^\S{3,20}$/g
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-20个非空白字符'))
        } else {
          if (this.ruleForm.pass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validateRePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.getcode) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      // var validateInviteNum = (rule, value, callback) => {
      //   if (value == '') {
      //     alert("请输入好友的邀请码,帮助好友获得优惠哦!没有邀请码,请继续")
      //     callback();
      //   } else {
      //     callback();
      //   }
      // };
      return {
        getcode:'',
        mydata:'',
        box:true,
        ruleForm: {
          phoneNum:'',
          userName:'',
          pass: '',
          checkPass: '',
          code:'',
          inviteNum:''
        },
        rules2: {
          phoneNum: [
            { validator: validatephone, trigger: 'blur' }
          ],
          userName: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validateRePass, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ],
          // inviteNum: [
          //   { validator: validateInviteNum, trigger: 'blur' }
          // ]
        }
      };
    },
    methods: {
      getMessage(){
        let _this = this
        axios.get(`http://127.0.0.1:3000/userorderdis/getallphone/${_this.ruleForm.phoneNum}`,).then((result)=> {
          let info = eval("(" + result.request.response + ")");
          if(info.data.length != 0){
            alert("该用户已经注册,请直接登录!")
          }
        },(err) =>{
          console.log(result.err)
        })
        this.getcode='';
        for(let i = 0;i < 6;i++){
          _this.getcode += Math.floor(Math.random()*10);
        }
        alert(_this.getcode);

      },
      submitForm(formName) {
        if(this.box!=true){
          alert("请同意小沫服务协议。")
        }else{
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('注册成功！即将跳转到登陆页面…');
              let _this = this
              _this.$router.push({path: '/login'})
              axios.post("http://127.0.0.1:3000/userorderdis/register", {
                uphone: _this.ruleForm.phoneNum,
                uinvitecode: _this.ruleForm.inviteNum,
                upwd: _this.ruleForm.pass,
                uname: _this.ruleForm.userName
              }).then((result)=> {
                console.log(result.data)
              },(err) =>{
                console.log(result.err)
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },

  }
</script>
<style scoped>
  .allRegidter{
    padding:70px 0;
    background-image: url(../../assets/registerbg.jpg);
    margin-top:60px;
  }
  .checkbox-container {
    display: flex;
    margin-top: 35px;
  }
  .text-checkbox {
    color: #aaa;
    font-size: 16px;
    letter-spacing: -0.00933333em;
    font-weight: 300;
    margin-left: 15px;
  }
  .div-a{
    color: white;
  }
  .div-a:hover{
    color: #ff666A;
    text-decoration: none;
  }
</style>

