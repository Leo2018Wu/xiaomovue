<template>
  <div>
    <div class="persondate1">
      <span class="title" >基本信息</span>
      <el-button type="text" @click="centerDialogVisible1 = true" style="float: right">编辑</el-button>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible1"
        width="30%"
        center>
        <div>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model.number="ruleForm.phone"/>
            </el-form-item>
          </el-form>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic"hide-required-asterisk ="false">
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
            >
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible1 = false; updatePerfect()">确 定</el-button>
  </span>
      </el-dialog>
      <hr>
      <el-row>
        <el-col :span="16"><div class="grid-content bg-purple">
          <P>用 户 名：:{{ruleForm.name}}</P>
          <P>手机号码：{{ruleForm.phone}}</P>
          <P>邮&nbsp;&nbsp;箱：{{dynamicValidateForm.email}}</P>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">
          <u-headpic></u-headpic>
        </div></el-col>
      </el-row>
    </div>
    <div class="persondate1">
      <span class="title">身份信息</span><br>
      <el-button type="text" @click="centerDialogVisible2 = true" style="float: right">编辑</el-button>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible2"
        width="30%"
        center>
        <div>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="真实姓名" prop="tureName">
              <el-input v-model="ruleForm.tureName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idCard">
              <el-input v-model.number="ruleForm.idCard"/>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible2 = false;updateIdInfo()">确 定</el-button>
  </span>
      </el-dialog>
      <span style="color: rgba(114,113,108,0.91)">仅用于必要的安全环节，其他情况下将为您严格保密</span>
      <hr>
      <P>真实姓名：{{ruleForm.tureName}}</P>
      <P>身份证号：{{ruleForm.idCard}}</P>
      <P>性别：{{ruleForm.sex}}</P>
    </div>
  </div>


</template>
<script>
  import Uheadpic from '../../components/Personal center/Uheadpic.vue'
  import axios from 'axios'
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      return {
        userInfo:[],
          centerDialogVisible1: false,
        centerDialogVisible2: false,
        dynamicValidateForm: {
          domains: [
            {value: ''}
          ],
          email: '',
        },
        ruleForm: {
          name:'',
          phone: '',
          tureName:'',
          idCard:'',
          sex:''
        },
        rules: {
          phone: [
            {validator: checkPhone, required: true, message: '请输入手机号',trigger: 'blur'}
          ],
          name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          tureName:[
            { required: true, message: '请输入真实名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          idCard:[
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message: '长度是18位数字', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
        }
      };
    },
    components:{
      'u-headpic':Uheadpic,
    },
    mounted(){
      axios.get('http://localhost:3000/userorderdis/getUserInfos/1').then((result)=> {
        this.ruleForm.name = result.data.data[0].uName
        this.ruleForm.phone = result.data.data[0].uPhone
        this.dynamicValidateForm.email = result.data.data[0].uEmail
        this.ruleForm.tureName = result.data.data[0].uTrueName
        this.ruleForm.idCard = result.data.data[0].uCardId
        this.ruleForm.sex = result.data.data[0].uSex
      },(err) =>{
        console.log(result.err)
      })
    },
    methods:{
      updatePerfect(){
        axios.post('http://localhost:3000/userorderdis/perfect',{
          uId:1,
          uName:this.ruleForm.name,
        uPhone:this.ruleForm.phone,
        uEmail:this.dynamicValidateForm.email
        }).then((response)=>{
          alert('修改成功')
        }).catch((err)=>{
          alert('修改失败')
          console.log(err)
        })
      },
      updateIdInfo(){
        axios.post('http://localhost:3000/userorderdis/updateIdInfo',{
          uId:1,
          uTrueName: this.ruleForm.tureName,
          uCardId:this.ruleForm.idCard,
          uSex:this.ruleForm.sex
        }).then((response)=>{
          alert('修改成功')
        }).catch((err)=>{
          alert('修改失败')
          console.log(err)
        })
      }
    }
  };
</script>
<style>
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
