<template>
  <div>
    <div class="persondate1">
      <span class="title" >身份信息</span>
      <hr>
      <el-row>
        <el-col :span="20"><div class="grid-content bg-purple">
          <span>真实姓名：{{userInfo.turename}}</span>
          <el-button type="text" @click="open3">编辑</el-button><br>
          <span>身份证号：{{userInfo.idcard}}</span>
          <el-button type="text" @click="open4">编辑</el-button><br>
          <span>护照 号：{{userInfo.possport}}</span>
          <el-button type="text" @click="open5">编辑</el-button><br>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Uheadpic from '../../components/Personal center/Uheadpic.vue'
  import PersonTure from '../../components/Personal center/PersonTure.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        userInfo: {
          turename:'',
          idcard:'',
          possport:''
        }

      }
    },
    mounted() {
      axios.get(`http://localhost:3000/userorderdis/getUserInfos/${sessionStorage.getItem('suId')}`).then((result) => {
        this.userInfo.turename = result.data.data[0].uTrueName
        this.userInfo.idcard = result.data.data[0].uCardId
        this.userInfo.possport = result.data.data[0].uPossPort
      }, (err) => {
        console.log(result.err)
      })
    },
    methods: {
      open3() {
        this.$prompt('请输入真实姓名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\u4e00-\u9fa5]{2,4}$/,
          inputErrorMessage:'请输入2到4个字母/汉字/数字/下划线'
        }).then(({ value }) => {
          axios.post('http://127.0.0.1:3000/userorderdis/updateTureName',{
            uId:sessionStorage.getItem('suId'),
            uTrueName:value
          }).then((response)=>{
            alert('修改成功')
          }).catch((err)=>{
            alert('修改失败')
            console.log(err)
          })
          this.$message({
            type: 'success',
            message: '你的真实姓名是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
      open4() {
        this.$prompt('请输入身份证号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
          inputErrorMessage:'请输入正确的身份证号'
        }).then(({ value }) => {
          axios.post('http://127.0.0.1:3000/userorderdis/updateuIdcard',{
            uId:sessionStorage.getItem('suId'),
            uCardId:value
          }).then((response)=>{
            alert('修改成功')
          }).catch((err)=>{
            alert('修改失败')
            console.log(err)
          })
          this.$message({
            type: 'success',
            message: '你的身份证号是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
      open5() {
        this.$prompt('请输入护照号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:/^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/g,
          inputErrorMessage: '请输入正确格式的护照号'
        }).then(({ value1 }) => {
          axios.post('http://127.0.0.1:3000/userorderdis/updateuPoss',{
            uId:sessionStorage.getItem('suId'),
            uPossPort:value
          }).then((response)=>{
            alert('修改成功')
          }).catch((err)=>{
            alert('修改失败')
            console.log(err)
          })
          this.$message({
            type: 'success',
            message: '你的用户名是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        });
      },
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
  span{
    color: rgba(114,113,108,0.91);
    line-height: 30px;
  }
  .title{
    color: #FF666A;
    font-weight: lighter;
    font-size: 20px;
  }
</style>
