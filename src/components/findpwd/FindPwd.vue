<template>

  <div style="min-width: 800px">
    <img src="../../../static/images/housedetail/findbackground.jpg" style="width:100%;float:left;">
    <div>

      <form style="position:absolute;z-index:999;margin-top:200px; "  class="col-xs-6 col-xs-push-3 col-sm-4 col-sm-push-3">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phoneNum">
            <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
            <el-button type="primary" @click="getMessage" style="margin-top:28px">获取验证码</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')"   >更改密码</el-button>
          </el-form-item>

        </el-form>

      </form>
    </div>

  </div>
</template>
<script>
  export default {
    name: "findpwd",
    data() {
      var validatephone = (rule, value, callback) => {
        var pattern = /^1[34578]\d{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.getcode) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          phoneNum: '',
          code: '',
          length:''
        },
        rules: {
          phoneNum: [
            {validator: validatephone, trigger: 'blur'}
          ],
          code: [
            {validator: validateCode, trigger: 'blur' }
          ],
        },
      }
    },




    methods:{
      submitForm(formName)
      {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this=this
            axios.get(`http://localhost:3000/userorderdis/getallphone/${this.ruleForm.phoneNum}`).then(function (result) {
              if(result.data.data.length == 1){
                _this.$store.state.chphone=_this.ruleForm.phoneNum;
                _this.$router.replace("/cpwd")
              }else{
                _this.ruleForm.code=" ";
                alert("该手机号不存在，请重新注册！")
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        })
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
    }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
</style>
