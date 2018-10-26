<template>
  <div>
    <el-card class="box-card" v-for="(person,index) in persons">
      <div slot="header">
        <h4>姓名:{{person.occName}}</h4>
        <el-button style="float: right; padding: 3px 0" type="text">
          <el-button type="text" @click="centerDialogVisible = true">
            <i class="el-icon-delete"></i>
          </el-button>
          <el-dialog
            title="删除"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>你确定要删除此入住人？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
          </el-dialog>
        </el-button>
      </div>
      <div  class="text item">
        <h4>手机号码：{{person.occPhone}}</h4><br>
        <h4>身份证号：{{person.occCordId}}</h4>
      </div>
    </el-card>
    <el-button type="text" @click="dialogFormVisible2 = true" class="addOccupant">
      <div class="addboder"><i class="el-icon-plus" ></i>添加入住人</div>
    </el-button>
    <el-dialog title="添加入住人" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="真实姓名" :label-width="formLabelWidth" autofocus="autofocus" placeholder="7-15位大写字母或者数字">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="form.idCard" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input    v-model="form.phone" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false;addOccupant()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        centerDialogVisible: false,
        persons:[
          // {phone:'13137794602',Id:'411324199602053827'},
          // {phone:'13137794603',Id:'411324199602053827'},
        ],
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        form: {
          name: ' ',
          phone: '',
          idCard: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        occInfos: {
          name: '1111111',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      del(index){
        axios.get(`http://localhost:3000/occupant/deleteOccupant/${this.persons[index].occId}`).then((result)=> {
          alert('删除成功')
        },(err) =>{
          alert(result.err)
        })
      },
      addOccupant(){
        axios.post('http://localhost:3000/occupant/addOccupant',{
          // activityCommentId:12,
          occName:this.form.name,
          occCordId:this.form.idCard,
          occPhone:this.form.phone,
          uId:1
        }).then((response)=>{

        }).catch((err)=>{
          console.log(err)
        })

      }
    },

    mounted(){
      axios.get('http://localhost:3000/occupant/getOccupant/1').then((result)=> {
        this.persons = result.data.data
        // console.log(this.persons)
      },(err) =>{
        console.log(result.err)
      })
    },
  };
</script>
<style>
  h4{
    display: inline-block;
    margin-bottom: 10px;
  }
  .text {
    font-size: 14px;
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
