<template>
  <div>
    <div class="block">
      <span class="demonstration">请先评分</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <textarea v-model="message" cols="120" rows="13"></textarea>
    <button type="button" style="float: right" @click ='addComment' >提交</button>
    <div class="container-fluid">
      <div class="row">
        <div v-for="picture in pictures" class="col-xs-2">
          <div  style="margin-right: 20px;width: 100px;height: 130px;float: left">
            <img :src="picture"style="width: 100%;height: 100%;"/>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <input type="file" name="avatar"
           @change="changeImage($event)"
           accept="image/gif,image/jpeg,image/jpg,image/png"
           ref="avatarInput"
           multiple
           id="file" ><br/>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "Assessmentedit",
    data() {
      return {
        value1: '',
        message:'',
        oneOrder:[],
        oId:this.$route.params.oIdt,
        pictures:[ ],
        upath:""
      };
    },
    mounted(){
      this.$axios.get(`/order/getoneorder/${this.oId}`).then((result)=> {
        this.oneOrder = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      addComment(){
        let oId = this.$route.params.oIdt
        if(this.message==''){
          alert('你还没有输入评论内容哦')
        }else{
          if(this.message!=''){ var zipFormData=new FormData();
            for(var i = 0 ; i< this.upath.length ; i++){
              zipFormData.append('aImages',this.upath[i])
            }
            // zipFormData.append('arrvialDate',this.oneOrder[0].arrvialDate.toLocaleString())
            zipFormData.append('aDate',new Date().toLocaleString())
            zipFormData.append('aContent',this.message)
            zipFormData.append('aCommend',1)
            zipFormData.append('uId',this.oneOrder[0].uId)
            zipFormData.append('hId',this.oneOrder[0].hId)
            zipFormData.append('oId',this.oneOrder[0].hId)
            zipFormData.append('aScore',this.value1)
            let config={headers:{'Content-Type':'multipart/form-data'}}
            this.$axios.post(`/assessment/details/addAssessment`, zipFormData,config)
              .then(function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.bodyText);
              })
          }
          alert("评论发布成功")
          this.message=''
          this.value1=''
          this.upath=''
        }
      },
      changeImage(e) {
        this.upath = e.target.files;
        let $target = e.target || e.srcElement
        for(var i = 0 ; i< this.upath.length ; i++){
          let file = $target.files[i]
          var reader = new FileReader()
          reader.onload = (data) => {
            let res = data.target || data.srcElement
            // this.picture =  res.result
            this.pictures.push(res.result)
          }
          reader.readAsDataURL(file)
        }
      },
    },

  }
</script>

<style scoped>

</style>
