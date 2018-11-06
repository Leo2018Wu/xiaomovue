<template>
  <div>
    <div class="persondate1">
      <span class="title" >基本信息</span>
      <hr>
      <el-row>
        <el-col :span="20"><div class="grid-content bg-purple">
          <span>用 户 名：:{{userInfo.name}}</span>
          <el-button type="text" @click="open4">编辑</el-button><br>
          <span>手机号码：{{userInfo.phone}}</span><br>
          <span>邮&nbsp;&nbsp;箱：{{userInfo.email}}</span>
          <el-button type="text" @click="open3">编辑</el-button><br>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">
          <u-headpic></u-headpic>
        </div></el-col>
      </el-row>
    </div>
    <update-ture></update-ture>
    </div>
</template>

<script>
  import Uheadpic from '../../components/Personal center/Uheadpic.vue'
  import UpdateTure from '../../components/Personal center/UpdateTure.vue'
  import axios from 'axios'
    export default {
      data() {
        return {
          userInfo: {
            name:'',
            phone:'',
            email:'',
          }

        }
      },
      components: {
        'u-headpic': Uheadpic,
        'update-ture': UpdateTure,
      },
      mounted() {
        this.$axios.get(`/userorderdis/getUserInfos/${sessionStorage.getItem('suId')}`).then((result) => {
          this.userInfo.name = result.data.data[0].uName
          this.userInfo.phone = result.data.data[0].uPhone
          this.userInfo.email = result.data.data[0].uEmail
        }, (err) => {
          console.log(result.err)
        })
      },
      methods: {
        open3() {
          this.$prompt('请输邮箱号', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
          }).then(({ value }) => {
            this.$axios.post('userorderdis/updateuEmail',{
              uId:sessionStorage.getItem('suId'),
              uEmail:value
            }).then((response)=>{
              alert('修改成功')
            }).catch((err)=>{
              alert('修改失败')
              console.log(err)
            })
            this.$message({
              type: 'success',
              message: '你的邮箱是: ' + value
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消修改'
            });
          });
        },
        open4() {
          this.$prompt('请输用户名', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern:/^[\w\u4e00-\u9fa5]{3,10}$/g,
            inputErrorMessage: '请输入3-10个字母/汉字/数字/下划线'
          }).then(({value}) => {
            this.$axios.post('userorderdis/updateuName',{
              uId:sessionStorage.getItem('suId'),
             uName:value
            }).then((response)=>{
              alert('修改成功')
              sessionStorage.setItem('sname',value)
              window.location.href='http://10.40.4.8:8080/center/updateInfo'
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
              message: '修改'
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
