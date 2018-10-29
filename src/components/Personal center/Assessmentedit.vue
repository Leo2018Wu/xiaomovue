<template>
  <div>
    <div class="block">
      <span class="demonstration">请先评分</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <textarea v-model="message" cols="120" rows="13"></textarea>
    <button type="submit" style="float: right" @click = addComment() >提交</button>
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
  export default {
    name: "Assessmentedit",
    data() {
      return {
        value1: '',
        dialogImageUrl: '',
        dialogVisible: false,
        message:'',
        oneOrder:[],
        oId:this.$route.params.oIdt
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
      addComment(){
        let oId = this.$route.params.oIdt
        if(this.message==''){
          alert('你还没有输入评论内容哦')
        }else{
          axios.post('http://localhost:3000/assessment/details/addAssessment',{
            // arrvialDate:this.oneOrder[0].arrvialDate.toLocaleString(),
            aDate:new Date().toLocaleString(),
            aContent:this.message,
            aCommend:1,
            uId:this.oneOrder[0].uId,
            hId:this.oneOrder[0].hId,
            oId:this.oneOrder[0].oId,
            aScore:this.value1
          }).then((response)=>{
            // if(response.data.status==200){
            alert('评论成功！')
            this.message = ''
            this.value1 = ''
            // }
            // else alert('评论失败')
          }).catch((err)=>{
            alert('评论失败')
            console.log(err)
          })
        }
      }
    },

  }
</script>

<style scoped>

</style>
