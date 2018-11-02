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
      <el-form-item label="短信验证" prop="code" >
        <el-input v-model="ruleForm2.code" placeholder="请输入短信验证码"></el-input>
        <el-button  @click="sendCode"  style="margin-top: 15px">获取验证码</el-button>
      </el-form-item>
    <!--</el-col>-->
    <el-col :span="12">
    </el-col>
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
      var validatePass = (rule, value, callback) => {
        var pattern = /^\S{3,20}$/g
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if (!pattern.test(value)) {
          callback(new Error('请输入3-20个非空白字符'))
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
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          code:'',
          checkCode:'',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          // code: [
          //   { validator: validateCode, trigger: 'blur' }
          // ],
        },
        userInfo:[]
      };
    },
    //${sessionStorage.getItem('suId')}
    mounted(){
      axios.get(`http://localhost:3000/userorderdis/getUserInfos/${sessionStorage.getItem('suId')}`).then((result)=> {
        this.userInfo = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid){
            let _this = this;
            if (this.ruleForm2.code === this.ruleForm2.checkCode) {
              alert('身份验证成功')
              axios.post("http://localhost:3000/userorderdis/perfect/idchangpwd",{
                uid:sessionStorage.getItem('suId'),
                upwd:_this.ruleForm2.checkPass
              }).then((result)=>{
                _this.ruleForm2.pass="",
                  _this.ruleForm2.checkPass="",
                  _this.ruleForm2.code="",
                  alert('修改成功')
                sessionStorage.clear();
                // this.$router.push({path:'/login'})
                window.location.href='http://localhost:8080/login'
              }),(err)=>{
                alert('修改失败')
                console.log(err)
              }

            } else {
              alert('验证码有误')
              return false;
            }
          }else {
            alert('修改失败')
            return false;
          }


        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendCode(){
        let _this=this;
        _this.ruleForm2.checkCode=''
        for(let i =0;i<6;i++){
          this.ruleForm2.checkCode += Math.floor(Math.random()*10);
        }
        alert(_this.ruleForm2.checkCode);
        // axios.get(`/proxy?mobile=13137794602&tpl_id=109732&tpl_value=%23code%23%3d${_this.ruleForm2.checkCode}&key=548f9475958d94a62f501ca54ec06aa7`).then((res)=>{
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
  .el-icon-delete{
    color: #ff666A;
  }
  .el-button--primary {
    color: #fff;
    background-color: #ff666A;
    border-color: #ff666A;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background: #ff666A;
    border-color: #ff666A;
    color: #fff;
  }
</style>
