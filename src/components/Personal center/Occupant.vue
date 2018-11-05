<template>
  <div>
    <el-card class="box-card" v-for="(person,index) in persons">
      <div slot="header">
        <h4>姓名:{{person.occName}}</h4>
        <el-button type="text"style="float: right" @click="del(person.occId)"><i class="el-icon-delete"></i></el-button>
      </div>
      <div  class="text item">
        <p>手机号码：{{person.occPhone}}</p><br>
        <p>身份证号：{{person.occCordId}}</p>
      </div>
    </el-card>
    <el-button type="text" @click="dialogFormVisible2 = true" class="addOccupant">
      <div class="addboder"><i class="el-icon-plus" ></i>添加入住人</div>
    </el-button>
    <el-dialog title="添加入住人" :visible.sync="dialogFormVisible2" >
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"style="width: 60%">
        <el-form-item label="真实姓名" prop="tureName">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model.number="ruleForm.idCard"/>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="ruleForm.phone"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="addOccupant()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
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
        centerDialogVisible: false,
        persons:[
          // {phone:'13137794602',Id:'411324199602053827'},
          // {phone:'13137794603',Id:'411324199602053827'},
        ],
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        ruleForm: {
          phone: '',
          name:'',
          idCard:'',
        },
        rules: {
          phone: [
            {validator: checkPhone, required: true, message: '请输入手机号',trigger: 'blur'}
          ],
          name:[
            { required: true, message: '请输入真实名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          idCard:[
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message: '长度是18位数字', trigger: 'blur' }
          ],
        }
      };
    },
    mounted(){
      axios.get(`http://localhost:3000/occupant/getOccupant/${sessionStorage.getItem('suId')}`).then((result)=> {
        this.persons = result.data.data
        // console.log(this.persons)
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      del(occId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('http://localhost:3000/occupant/updateOccupant',{
                occId:occId,
                occStatus:0,
              }).then((response)=>{
                window.location.reload()
              }).catch((err)=>{
                console.log(err)
              })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      addOccupant(){
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        const reg2 = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
        const reg3 = /^[\u4e00-\u9fa5]{2,4}$/
        if(!reg3.test(this.ruleForm.name)){
          this.dialogFormVisible2 = true
        }else {
        if(!reg2.test(this.ruleForm.idCard)){
        this.dialogFormVisible2 = true
        } else {
          if(!reg.test(this.ruleForm.phone)){
            this.dialogFormVisible2 = true

        }
        else {
            axios.post('http://localhost:3000/occupant/addOccupant',{
              // activityCommentId:12,
              occName:this.ruleForm.name,
              occCordId:this.ruleForm.idCard,
              occPhone:this.ruleForm.phone,
              occStatus:1,
              uId:sessionStorage.getItem('suId'),
            }).then((response)=>{
              this.dialogFormVisible2 = false
              window.location.reload()
            }).catch((err)=>{
              console.log(err)
            })

          }
      }
        }



      }
    },


  };
</script>
<style scoped>
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
  h4{
    display: inline-block;
    margin-bottom: 10px;
  }
  .text {
    color: #999;;

  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width:100%;
    margin-bottom: 10px;
  }
  .addOccupant{
    float: right;
  }
  .addboder{
    width: 118px;
    height: 34px;
    font-family: "微软雅黑";
    font-size: 14px;
    border: 1px solid #f05b72;
    line-height: 34px;
    text-align: center;
    color: #f05b72;
    text-decoration: none;
  }
</style>
