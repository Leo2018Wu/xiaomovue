<template>
  <div>
    <div class="persondate1">
      <span class="title" >基本信息</span>
      <el-button class="person"  type="text"@click="open3" style="float: right;color: #ff666A">编辑</el-button>
      <!--<el-dialog-->
        <!--title="修改基本信息"-->
        <!--:visible.sync="dialogFormVisible"-->
        <!--width="30%"-->
        <!--center>-->
        <!--<div>-->
          <!--<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px">-->
            <!--<el-form-item label="用户名" prop="name">-->
              <!--<el-input v-model="ruleForm2.name"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="手机号" prop="phone" >-->
            <!--<el-input v-model="ruleForm2.phone" :disabled="true"/>-->
          <!--</el-form-item>-->
            <!--<el-form-item label="邮箱" prop="email">-->
              <!--<el-input v-model="ruleForm2.email"/>-->
            <!--</el-form-item>-->
          <!--</el-form>-->
        <!--</div>-->
        <!--<span slot="footer" class="dialog-footer">-->
    <!--<el-button type="primary" @click="centerDialogVisible1 = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="centerDialogVisible1 = false; updatePerfect()">确 定</el-button>-->
  <!--</span>-->
      <!--</el-dialog>-->
      <hr>
      <el-row>
        <el-col :span="20"><div class="grid-content bg-purple">
          <P>用 户 名：:{{ruleForm2.name}}</P>
          <P>手机号码：{{ruleForm2.phone}}</P>
          <P>邮&nbsp;&nbsp;箱：{{ruleForm2.email}}</P>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">
          <u-headpic></u-headpic>
        </div></el-col>
      </el-row>
    </div>
    <div>
    <person-ture></person-ture>
    </div>
  </div>
</template>
<script>
  import Uheadpic from '../../components/Personal center/Uheadpic.vue'
  import PersonTure from '../../components/Personal center/PersonTure.vue'
  import axios from 'axios'
  export default {
    data() {
      // var checkName = (rule, value, callback) => {
      //   var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
      //   if (!pattern.test(value)) {
      //     callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
      //   } else {
      //     callback()
      //   }
      // }
      // var checkEmail = (rule, value, callback) => {
      //     const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      //     console.log(reg.test(value));
      //     if (reg.test(value)) {
      //       callback();
      //     } else {
      //       return callback(new Error('请输入正确的邮箱号'));
      //     }
      // };

      // return {
      //     centerDialogVisible1: false,
      //   ruleForm2: {
      //     name:'',
      //     phone: '',
      //     email: '',
      //   },
      //   rules2: {
      //     name:[
      //       {validator: checkName,  trigger: 'blur' },
      //     ],
      //     email:[
      //       { validator: checkEmail,  trigger: 'blur' },
      //     ],
      //   },
      // };
    },
    components:{
      'u-headpic':Uheadpic,
      'person-ture':PersonTure,
    },
    mounted(){
      axios.get('http://localhost:3000/userorderdis/getUserInfos/1').then((result)=> {
        this.ruleForm2.name = result.data.data[0].uName
        this.ruleForm2.phone = result.data.data[0].uPhone
        this.ruleForm2.email = result.data.data[0].uEmail
      },(err) =>{
        console.log(result.err)
      })
    },
    methods:{
      // updatePerfect(){
      //   let _this = this;
      //   const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      //   var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
      //  if(!pattern.test(this.ruleForm2.name)){
      //    callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
      //  }else {
      //     if(!reg.test(this.ruleForm2.phone)){
      //       return callback(new Error('请输入正确的邮箱号'));
      //     }else {
      //       axios.post('http://localhost:3000/userorderdis/perfect',{
      //         uId:1,
      //         uName:this.ruleForm2.name,
      //         uPhone:this.ruleForm2.phone,
      //         uEmail:this.ruleForm2.email
      //       }).then((response)=>{
      //         alert('修改成功')
      //       }).catch((err)=>{
      //         alert('修改失败')
      //         console.log(err)
      //       })
      //
      //     }
      //  }
      // },
      open3(){
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {


          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }


    }
  };
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
