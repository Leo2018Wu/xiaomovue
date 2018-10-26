<template>
  <!--<div class="container">-->
    <div >
  <el-card class="box-card" v-for="(diary,index) in diarys">
    <div slot="header" class="clearfix">
      <span>{{diary.dTitle}}</span><br>
      <router-link :to="'/center/diaryempty/'+diary.dId"><el-button style="float: right; padding: 3px 0" type="text">详情>></el-button></router-link>
      <span>{{diary.hName}}</span>
      <h5>2018-11-05</h5>
    </div>
    <div  class="text item">
      <p class="dContent">{{diary.dContent }}</p>
    </div>
  </el-card>
    </div>
  <!--</div>-->
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        dialogVisible: false,
        diarys:[
          // {dTitle:'泰国曼谷芭提雅旅游日记',dContent:'去过很多城市，欣赏过很多风景，体会过很多民风，感觉次次旅游都是走马观花，只留下浅浅的记忆，'},
          // {dTitle:'叮咚，您有一份熊猫遛娃国庆假期旅游日记，请查收！',dContent:'还是青岛，旅游日记，我只写自己出行的城市，一个人出行，感官更敏感，观察更细致'},
          // {dTitle:'我的南京旅游日记',dContent:' 这是两地旅游日记的第二篇，如果对菲律宾感兴趣可以看我的前一篇游记'},
          // {dTitle:'旅游日记 －－包子篇',dContent:'我换了个窗户边的座位，坐在我们一排的是个湖南的阿姨，与yaping开始搭话，原来是女儿带她一起出来旅游的，一提到她女儿她很开心和我们聊开了，女儿是成都某重本的'},
          // {dTitle:'厦门旅游攻略·学生党旅游·旅游日记',dContent:'……[TOC] 厦门，是一座海边很美的旅游城市，值得一去，废话不多说，接下来分享一下去厦门的几点建议和我的行程安排吧。'},

        ]
      };
    },
    mounted(){
      axios.get('http://localhost:3000/diarys/udiarys/1').then((result)=> {
        this.diarys = result.data.data

      },(err) =>{
        console.log(result.err)
      })
    },
  }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:100%;
    margin-bottom: 10px;
  }
  .dContent{
    width: 700px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
