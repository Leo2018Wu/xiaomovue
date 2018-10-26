<template>
  <div class="updatePwd">
<div>
  <h3 style="color: #ff666A">修改密码:</h3>
  <h4>已验证手机号：{{userInfo[0].uPhone}}</h4>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="新密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="Code">
    <el-input v-model="ruleForm2.Code"></el-input>
    <el-button @click="sendCode" style="margin-top: 15px">发送验证码</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</div>
  </div>
</template>
<script>
  import  axios from 'axios'
  export default {
    data() {
      // var checkCode = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('验证码不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else if(value !==this.checkCode){
      //         callback(new Error('验证码不正确,请重新输入!'));
      //     }else{
      //       callback();
      //     }
      //   }, 1000);
      // };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致,请重新输入!'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.checkCode) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',



        },
        checkCode:'',
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          Code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        },
        userInfo:[]
      };
    },
    mounted(){
      axios.get('http://localhost:3000/userorderdis/getUserInfos/1').then((result)=> {
        this.userInfo = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      submitForm(formName) {
        // var checkCode = (rule, value, callback) => {
        //   if (!value) {
        //     return callback(new Error('验证码不能为空'));
        //   }
        //   setTimeout(() => {
        //     if (!Number.isInteger(value)) {
        //       callback(new Error('请输入数字值'));
        //     } else if(value !==this.checkCode){
        //       callback(new Error('验证码不正确,请重新输入!'));
        //     }else{
        //       callback();
        //     }
        //   }, 1000);
        // };
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;

            axios.post("http://localhost:3000/userorderdis/perfect/password",{
              uid:1,
              upwd:_this.ruleForm2.checkPass
            }).then((result)=>{
              console.log(_this.ruleForm2.checkPass)
              alert('修改成功')
            }),(err)=>{
              alert('修改失败')
              console.log(err)
            }
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendCode(){
        let _this = this
        // alert('发送短信验证码！')
        for(var i=0; i<6;i++ ){
          _this.checkCode += Math.floor(Math.random()*10);
        }
        alert(this.checkCode)
        this.checkCode = ''
        // console.log(code);
        // let data = {valicode:'1234',to:this.userInfo[0].uPhone,key:'548f9475958d94a62f501ca54ec06aa7'}
        // alert(this.userInfo[0].uPhone)
        // axios.get(`/proxy?mobile=${this.userInfo[0].uPhone}&tpl_id=109732&tpl_value=%23code%23%3dcode${this.code}&key=548f9475958d94a62f501ca54ec06aa7`).then((res)=>{
        //
        //   console.log(res)
        // }).catch(err=>{console.log(err)})
      }
    },
  }
</script>
<style>
  .updatePwd{
    width: 50%;
  }
</style>
