<template>
  <div style="width:100%; " class="pic" >

  <div style="margin-top:230px;position:absolute; " class="col-xs-6 col-xs-push-3 col-sm-4 col-sm-push-4">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass" style="margin-top:30px;">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" v-model="ruleForm2.code" placeholder="请输入验证码" autocomplete="off"></el-input>
        <el-button type="primary" @click="getMessage" style="margin-top:28px;width:30%;">获取验证码</el-button>
        <el-button type="primary" @click="submitForm('ruleForm2')"  style="width:30%;" >更改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "changepwd",
      data() {
        var validateCode = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请获取验证码'));
          } else if (value !== this.getcode) {
            callback(new Error('验证码有误，请重新输入!'));
          } else {
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入新密码'));
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
          }else if(value.length<6){
            callback(new Error('密码不得少于6位'))
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            checkPass: '',
            code: '',
            uId:'',
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            code: [
              { validator: validateCode, trigger: 'blur' }
            ],
          }
        };
      },

      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            let _this=this
            if (valid) {
              axios.post('http://localhost:3000/userorderdis/perfect/idchangpwd',{
                uid:_this.uId,
                upwd:_this.ruleForm2.pass,
              }).then((response)=>{
                alert("修改密码成功,请重新登录!")
                 _this.$router.replace("/login");
              })
            }
            else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        getMessage()
        {
          let _this = this;
          _this.getcode = '';
          for (let i = 0; i < 6; i++) {
            _this.getcode += Math.floor(Math.random() * 10);
          }
          alert(_this.getcode);
        }

      },
      mounted(){
          let _this=this;
        axios.get(`http://localhost:3000/userorderdis/perfect/${_this.$store.state.chphone}`).then(function (result) {
                   _this.uId = result.data.data[0].uId;
        })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .pic{
    margin-left:5%;
    height:700px;
    background-image: url("../../../static/images/housedetail/kk2.jpg");
    background-repeat: no-repeat;
  }

</style>
