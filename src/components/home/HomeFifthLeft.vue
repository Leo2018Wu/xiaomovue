<template>
  <div class="home-left col-xs-6">
    <h3 style="position: relative">房客点评</h3>
    <div class="all-info">
      <div v-if="isshow==1">
        <img class="radius-img" :src="assessments[0].uHeadPic" alt="">
        <p>{{assessments[0].uName}}</p>
        <p>{{assessments[0].aDate}}</p>
        <div class="content">{{assessments[0].aContent}}</div>
      </div>
      <div v-else-if="isshow==2">
        <img class="radius-img" :src="assessments[1].uHeadPic" alt="">
        <p>{{assessments[1].uName}}</p>
        <p>{{assessments[1].aDate}}</p>
        <div class="content">{{assessments[1].aContent}}</div>
      </div>
      <div v-else-if="isshow==3">
        <img class="radius-img" :src="assessments[2].uHeadPic" alt="">
        <p>{{assessments[2].uName}}</p>
        <p>{{assessments[2].aDate}}</p>
        <div class="content">{{assessments[2].aContent}}</div>
      </div>
      <div v-else="isshow==4">
        <img class="radius-img" :src="assessments[3].uHeadPic" alt="">
        <p>{{assessments[3].uName}}</p>
        <p>{{assessments[3].aDate}}</p>
        <div class="content">{{assessments[3].aContent}}</div>
      </div>

    </div>
    <div class="icon-all">
      <ul class="icon">
        <li v-on:click ="change(1)"></li>
        <li v-on:click ="change(2)"></li>
        <li v-on:click ="change(3)"></li>
        <li v-on:click ="change(4)"></li>
      </ul>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "HomeFifthLeft",
    data() {
      return {
        recommend: 1,
        mydata: [],
        assessments: [],
        isshow: 1,
      }

    },
    methods: {
      change: function (num) {
        this.isshow = num;
      },
    },
    mounted() {
      axios.get(`http://127.0.0.1:3000/assessment/details/recommend/${this.recommend}`).then((result) => {
        // this.mydata = result.data.data[0].uName;
        this.mydata = result.data.data
        console.log(this.mydata)
        for (var i = 0; i < 4; i++) {
          this.assessments.push(this.mydata[i])
          // console.log(this.assessments[0])
        }
      }, (err) => {
        console.log(result.err)
      })
    }
  }
</script>

<style scoped>
  .home-left{
    height: 460px;
    text-align: center;
  }
  .home-left h3{
    color: white;
    font-size: 24px;
  }
  .home-left p{
    color: white;
    font-size: 12px;
  }

  .radius-img{
    margin: 10px 0;
    width:12%;
    height:12%;
    border-radius:50px;
  }
  .content{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    /*height: 200px;*/
    line-height: 26px;
    text-align: left;
    color: white;
    font-size: 14px;
    padding:0 70px;
    /*border-right: 2px solid darkgrey;*/
  }
  .icon-all{
    text-align: center;
  }
  .icon{
    position: absolute;
    top: 400px;
    left:150px;
    width: 230px;
    margin: 0 auto 50px;
  }
  .icon li{

    width: 40px;
    height: 6px;
    background-color: #fff;
    display: inline-block;
    margin-right:6px;
    float: left;
    vertical-align: bottom;
    cursor: pointer;
  }
  .icon li:hover{
    background-color: #ff666a;
  }
</style>
