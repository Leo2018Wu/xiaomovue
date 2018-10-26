<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>{{diaryOne[0].dTitle}}</h3>
    </div>
    <div  class="text item">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><p>{{diaryOne[0].dContent}}</p></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><span style="float: right;cursor: pointer;color: #FF666A" @click = del()>删除</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple-dark"> <img src="../../assets/first-center-01.jpg" /></div></el-col>
      </el-row>


    </div>
  </el-card>
</template>
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
    width: 100%;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {

        dialogVisible: false,
        diaryOne: [
          // {dTitle:'泰国曼谷芭提雅旅游日记',dContent:'去过很多城市，欣赏过很多风景，体会过很多民风，感觉次次旅游都是走马观花，只留下浅浅的记忆，'},
          // {dTitle:'叮咚，您有一份熊猫遛娃国庆假期旅游日记，请查收！',dContent:'还是青岛，旅游日记，我只写自己出行的城市，一个人出行，感官更敏感，观察更细致'},
          // {dTitle:'我的南京旅游日记',dContent:' 这是两地旅游日记的第二篇，如果对菲律宾感兴趣可以看我的前一篇游记'},
          // {dTitle:'旅游日记 －－包子篇',dContent:'我换了个窗户边的座位，坐在我们一排的是个湖南的阿姨，与yaping开始搭话，原来是女儿带她一起出来旅游的，一提到她女儿她很开心和我们聊开了，女儿是成都某重本的'},
          // {dTitle:'厦门旅游攻略·学生党旅游·旅游日记',dContent:'……[TOC] 厦门，是一座海边很美的旅游城市，值得一去，废话不多说，接下来分享一下去厦门的几点建议和我的行程安排吧。'},

        ]
      };
    },
    mounted() {
      let dId = this.$route.params.did
      axios.get(`http://localhost:3000/diarys/ddiarys/${dId}`).then((result) => {
        this.diaryOne = result.data.data
      }, (err) => {
        console.log(result.err)
      })
    },
    methods: {
      del() {
        axios.get(`http://localhost:3000/diarys/delete/${this.diaryOne[0].dId}`).then((result) => {
          alert("删除成功")
        }, (err) => {
          console.log(result.err)
        })
      },
    },
  }

</script>
