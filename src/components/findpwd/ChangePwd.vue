<template>
  <div style="width:100%; ">
    <div>
      <img src="../../../static/images/housedetail/2.jpg" style="width:100%;float:left;">
    </div>
  <div style="margin-top:150px;position:absolute;z-index:99;" class="col-xs-6 col-xs-push-3 col-sm-4 col-sm-push-4">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass" style="margin-top:30px;">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="yan"  style="margin-top:30px;">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item  style="margin-top:30px;">

        <el-button @click="getMessage">获取验证码</el-button>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
        name: "changepwd",
      data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
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
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            checkPass: '',
            yan: ''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            yan: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        getMessage(){
          let _this = this;
          _this.getcode='';
          for(let i = 0;i < 6;i++){
            _this.getcode+= Math.floor(Math.random()*10);
          }
          alert(_this.getcode);
        },
      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }


</style>
