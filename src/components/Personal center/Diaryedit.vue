<template>
  <div>
    <h3>标题</h3><textarea v-model="title" cols="60" rows="1"></textarea>
    <textarea v-model="message" cols="120" rows="13"></textarea>
    <button type="submit" style="float: right" @click = addDiary() >提交</button>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>

</template>

<script>
  import axios from 'axios'
  // let oId = this.$route.params.
  export default {
    name: "Assessmentedit",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        title:'',
        message:'',
        oId:this.$route.params.oIdr,
        oneOrder:[]
      };
    },
    mounted(){
      axios.get(`http://localhost:3000/order/getoneorder/${this.oId}`).then((result)=> {
        this.oneOrder = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      addDiary(){
        console.log(this.oId)
        if(this.title==''){
          alert('你还没有输入日记标题哦')
        }else if (this.message==''){
          alert('你还没有输入日记内容哦')
        }else{
            axios.post('http://localhost:3000/diarys/orders/add',{
              // arrvialDate:this.oneOrder[0].arrvialDate.toLocaleString(),
              dContent:this.message,
              dDate:new Date().toLocaleString(),
              recommend:1,
              uId:1,
              hId:this.oneOrder[0].hId,
              dTitle:this.title,
               oId:this.oneOrder[0].hId,
          }).then((response)=>{
            // if(response.data.status==200){
            alert('评论成功！')

              this.title = '';
              this.message = ''
            // }
            // else alert('评论失败')
          }).catch((err)=>{
            alert('评论失败')
            console.log(err)
          })
        }
        }
      }

  }
</script>

<style scoped>

</style>
