<template>
  <div class="allRegidter" style="min-width: 800px">
    <div class="row">
      <div class="col-sm-6 col-sm-push-3 col-xs-8 col-xs-push-2">
        <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phoneNum">
            <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" placeholder="请输入昵称" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
            <el-button type="primary" @click="getMessage()" style="margin-top:28px">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="邀请码" prop="inviteNum" placeholder="请输入邀请码">
            <el-input type="text" v-model="ruleForm.inviteNum"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="container">
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <div class="circle-container">
        <div class="circle"></div>
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
      // checkRegister(formName){
      //   let _this = this
      //   axios.get(`http://127.0.0.1:3000/userorderdis/getallphone/${_this.ruleForm.phoneNum}`).then((result)=> {
      //     this.mydata = result.data.data;
      //     for(var i = 0 ; i < this.mydata.length; i++){
      //       if(this.mydata[i]==_this.ruleForm.phoneNum){
      //         alert('该用户已注册，请直接登录！')
      //         break;
      //       }else{
      //         submitForm(formName){
      //           _this.$refs[formName].validate((valid) => {
      //             if (valid) {
      //               alert('注册成功！即将跳转到登陆页面…');
      //               let _this = this
      //               _this.$router.push({path: '/login'})
      //               axios.post("http://127.0.0.1:3000/userorderdis/register", {
      //                 uphone: _this.ruleForm.phoneNum,
      //                 uinvitecode: _this.ruleForm.inviteNum,
      //                 upwd: _this.ruleForm.pass,
      //                 uname: _this.ruleForm.userName
      //               }).then((result)=> {
      //                 console.log(result.data)
      //               },(err) =>{
      //                 console.log(result.err)
      //               })
      //             } else {
      //               console.log('error submit!!');
      //               return false;
      //             }
      //           });
      //         }
      //         resetForm(formName){
      //           _this.$refs[formName].resetFields();
      //         }
      //       }
      //     }
      //   },(err) =>{
      //     // console.log(result.err)
      //   })
      // },
      submitForm(formName) {
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style scoped>
  @import "../../assets/css/style.css";
  .allRegidter{
    margin-top: 100px;
  }
</style>
