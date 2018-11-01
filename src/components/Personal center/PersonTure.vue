<template>
  <div class="persondate1">
    <span class="title">身份信息</span><br>
    <el-button class="person" type="text" @click="centerDialogVisible2 = true" style="float: right; color: #ff666A">编辑</el-button>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible2"
      width="30%"
      center>
      <div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px">
          <el-form-item label="真实姓名" prop="tureName">
            <el-input v-model="ruleForm2.tureName"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input v-model.number="ruleForm2.idCard"/>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleForm2.sex" placeholder="请选择性别">
              <el-option label="男" value="man"></el-option>
              <el-option label="女" value="woman"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button  type="primary" @click="centerDialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible2 = false;submitForm('ruleForm2')">确 定</el-button>
  </span>
    </el-dialog>
    <span style="color: rgba(114,113,108,0.91)">仅用于必要的安全环节，其他情况下将为您严格保密</span>
    <hr>
    <P>真实姓名：{{ruleForm2.tureName}}</P>
    <P>身份证号：{{ruleForm2.idCard}}</P>
    <P>性别：{{ruleForm2.sex}}</P>
  </div>
</template>

<script>
    export default {
      data() {
        var checkTureName = (rule, value, callback) => {
          var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
          if (value === '') {
            callback(new Error('请输入真实姓名'));
          } else if (!pattern.test(value)) {
            callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
          } else {
            callback()
          }
        }
        var idCard = (rule, value, callback) => {
          var pattern =/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
          if (value === '') {
            callback(new Error('请输入身份证号'));
          } else if (!pattern.test(value)) {
            callback(new Error('请输入正确的身份证号'))
          } else {
            callback()
          }
        };
        return {
          centerDialogVisible2: false,
          ruleForm2: {
            tureName:'',
            idCard:'',
            sex:''
          },
          rules2: {
            tureName:[
              { validator: checkTureName, trigger: 'blur' },
            ],
            idCard:[
              {validator: idCard,  trigger: 'blur' },
              // { pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message: '长度是18位数字', trigger: 'blur' }
            ],
            sex: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              axios.post('http://localhost:3000/userorderdis/updateIdInfo',{
                uId:1,
                uTrueName: this.ruleForm2.tureName,
                uCardId:this.ruleForm2.idCard,
                uSex:this.ruleForm2.sex
              }).then((response)=>{
                alert('修改成功')
              }).catch((err)=>{
                alert('修改失败')
                console.log(err)
              })
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }

    }
</script>

<style scoped>
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
  input{
    border: #ddd solid 1px;
    height: 35px;
    text-align: center;
    color: #aaa;
    margin-bottom: 10px;
  }
  .persondate1{
    border: 1px solid #a0a0a0;
    margin-bottom: 50px;
    padding: 30px;
  }
  p{
    color: rgba(114,113,108,0.91);
    line-height: 30px;
  }
  .title{
    color: #FF666A;
    font-weight: lighter;
    font-size: 20px;
  }
</style>
