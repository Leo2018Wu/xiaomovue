<template>
 <div>
  <img src="../../assets/discount.png"/>
   <div class="discountNum">
         <span class="share_region">
           {{mydata.uPhone}}
           <!--<el-button type="text" @click="dialogVisible = true">-->
             <!--<span class="glyphicon glyphicon-edit"></span></el-button>-->
           <!--<el-dialog-->
             <!--title="自定义邀请码"-->
             <!--:visible.sync="dialogVisible"-->
             <!--width="30%"-->
             <!--:before-close="handleClose">-->
             <!--邀请码：<input required="required" autofocus="autofocus" type="text"  placeholder="7-15位大写字母或者数字" v-model="invitation"/>-->
             <!--<span slot="footer" class="dialog-footer">-->
    <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="dialogVisible = false;updateuInviteCode()">确 定</el-button>-->
  <!--</span>-->
           <!--</el-dialog>-->

         </span>
     <ul class="link">
       <li ><img class="weixin" src="../../assets/weixin.png" title="分享到微信"/></li>
       <li><img src="../../assets/qq.png" title="分享到QQ空间"/></li>
       <li><img src="../../assets/weibo.png" title="分享到新浪微博" @click = ''/></li>
       <li><img src="../../assets/link.png"/></li>
     </ul>
     <img class="erweima" src="../../assets/erweima.png"/>
   </div>
  </div>

</template>

<script>
  import axios from 'axios'
    export default {
      data() {
        return {
          invitation:'',
          mydata:[],
          dialogVisible: false
        };
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        // updateuInviteCode(){
        //     axios.post('http://localhost:3000/userorderdis/perfect/1',{
        //       // activityCommentId:12,
        //       uInviteCode:this.invitation
        //     }).then((response)=>{
        //       // if(response.data.status==200){
        //       // alert('修改成功！')
        //       // }
        //       // else alert('评论失败')
        //     }).catch((err)=>{
        //       // alert('修改失败')
        //       console.log(err)
        //     })
        //
        // }
      },
      mounted(){
        axios.get(`http://localhost:3000/userorderdis/getUserInfos/${sessionStorage.getItem('suId')}`).then((result)=> {
          // this.mydata = result.data.data[0].uName;
          this.mydata = result.data.data[0]
          // console.log(this.mydata)
          // this.invitation.push(this.mydata)
          // console.log(this.invitation[0])
        },(err) =>{
          console.log(result.err)
        })
      },
    };
</script>

<style scoped>

img{
  width: 100%;
}
.erweima{
    width:180px;
    height: 200px;
  position: absolute;
  left: 20%;
  top: 55%;
 display: none;
  }
.weixin:hover .erweima{
  display: block;
}
  .discountNum{
    width:100%;
    height: 250px;
    background-color: #f5f5f5;
    position: absolute;
  }
  .share_region{
    width: 300px;
    border-bottom: #e1e1e1 solid ;
    font-size: 20px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    text-align: center;
  }
 li{
    float: left;
  }
 .link{
   position: absolute;
   left: 50%;
   margin-left: -30%;
   margin-top: 8%;
   list-style: none;
 }
.glyphicon-edit:before{
           color: #FF666A;
           text-align: right;
  }
  input{
    border: #ddd solid 1px;
    height: 35px;
    text-align: center;
    color: #aaa;
  }
  ul:first-child{

  }
</style>
