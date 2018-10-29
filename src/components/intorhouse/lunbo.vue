<template>
    <div class="row">

      <div class="lunbo col-xs-8">
        <el-carousel indicator-position="outside" :interval="2000" height="533px">
          <el-carousel-item v-for="(img,index) in imglist" :key="index">
            <h3><img :src="'../../../static/images/'+img"></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--<h1 style="margin-right:0;width:40px;height:10px;background-color:#ccc;">{{$router.params.hId}}</h1>-->

    </div>
</template>
<script>
  import axios from "axios"
  import route  from "vue-router"
    export default {
        name: "lunbo",
      data(){
        return{
          imglist:[],
          hId:this.$route.params.hId,
          people:4,
          bed:"",
        }
      },
      mounted(){
        let _this=this
        axios.get(`http://localhost:3000/house/details/`+this.hId).then(function (result) {
          _this.imglist.push(result.data.data[0].hPic1,result.data.data[0].hPic2,result.data.data[0].hPic3,result.data.data[0].hPic4);
             console.log(_this.imglist)
        })
          .catch(function (error) {
            console.log(error);
          });

      },
      computed:{
        num:{
          get(){
            return this.bed=this.people/2;

          }
        }
      }


      }


</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .lunbo{
    height:533px;
    margin-top:10px;
    margin-left:2%;


  }
  @media (max-width:1144px) {
    .lunbo{
      width:90%;
      margin-left:5%;

    }
    .chen{
      width:90%;
      margin-left:5%;
    }

  }

  .el-carousel__item h3 {
     color: #475669;
     font-size: 18px;
     opacity: 0.75;
     line-height:300px;
     margin: 0;

   }
  .el-carousel__item h3 img{
    width:100%;
    height:533px;

  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>
