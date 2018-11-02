<template>
  <div>
    <h3>标题</h3><textarea v-model="title" cols="60" rows="1"></textarea>
    <textarea v-model="message" cols="120" rows="13"></textarea>
    <button type="submit" style="float: right" @click = addDiary() >提交</button>
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
        title:'',
        message:'',
        oId:this.$route.params.oIdr,
        oneOrder:[],
        upath:[ ]
      };
    },
    mounted(){
      axios.get(`http://127.0.0.1:3000/order/getoneorder/${this.oId}`).then((result)=> {
        this.oneOrder = result.data.data
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      addDiary(){
        console.log(this.oId)
        if(this.title==''){
          alert('你还没有输入日记标题哦')
        }else if (this.message==''){
          alert('你还没有输入日记内容哦')
        }else if (this.upath == ''){
          alert('你还没有提交图片哦')
        }else{
          var zipFormData=new FormData();
          for(var i = 0 ; i< this.upath.length ; i++){
            zipFormData.append('dImages',this.upath[i])
          }
          zipFormData.append('dContent',this.message)
          zipFormData.append('dDate',new Date().toLocaleString())
          zipFormData.append('recommend',1)
          zipFormData.append('uId',sessionStorage.getItem('suId'))
          zipFormData.append('hId',this.oneOrder[0].hId)
          zipFormData.append('dTitle',this.title)
          zipFormData.append('oId',this.oneOrder[0].hId)
          let config={headers:{'Content-Type':'multipart/form-data'}}
          axios.post('http://localhost:3000/diarys/orders/add', zipFormData,config)
            .then(function (response) {
              console.log(response);
              console.log(response.data);
              console.log(response.bodyText);
              alert("日记发布成功")
              this.title=''
              this.message=''
            })
        }
        },
      changeImage(e) {
        this.upath = e.target.files;
      },
      }

  }
</script>

<style scoped>

</style>
