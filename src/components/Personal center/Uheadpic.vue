<template>
  <div>
      <div class="headPic">
        <img :src="headPath" class="head" />
      </div>
    <el-row>
      <el-col :span="21" :offset="3"><div class="grid-content bg-purple">
        <el-button style="color: #ff666A;text-align: center" type="text" @click="centerDialogVisible = true">
          编辑头像
        </el-button>
      </div></el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <input type="file" name="avatar"
               @change="changeImage($event)"
               accept="image/gif,image/jpeg,image/jpg,image/png"
               ref="avatarInput"
               multiple
               id="file" ><br/>
      <!--</div>-->
      <span slot="footer" class="dialog-footer">
    <el-button class="person" @click="centerDialogVisible = false">取 消</el-button>
    <el-button class="person" @click="centerDialogVisible = false;edit()">确 定</el-button>
  </span>
    </el-dialog>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
        upath:'',
        headPath:''
      };
    },
    mounted(){
      axios.get('http://localhost:3000/userorderdis/getUserInfos/1').then((result)=> {
        this.headPath = result.data.data[0].uHeadPic
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      edit() {
        var zipFormData=new FormData();
        zipFormData.append('uId',1)
        zipFormData.append('uHeadPic',this.upath[0])
        let config={headers:{'Content-Type':'multipart/form-data'}}
        axios.post('http://localhost:3000/userorderdis/updatePhoto',zipFormData,config)
          .then(function(result){
            console.log(result.data)
            // sessionStorage.setItem('photo',result.data.data.uHeadPic)
          })
        alert("头像更换成功")
        window.location.reload()
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
      }
    },


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

  .headPic{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #eee;
  }
  .head{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #eee;
  }
  /*input[type=file] {*/
  /*display: block;*/
  /*}*/
  /*input {*/
  /*border: #ddd solid 1px;*/
  /*width: 100px;*/
  /*height: 100px;*/
  /*border-radius: 50%;*/
  /*text-align: center;*/
  /*color: #aaa;*/
  /*margin-bottom: 10px;*/
  /*}*/
</style>
