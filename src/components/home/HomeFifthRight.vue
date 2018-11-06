<template>
  <div class="home-left col-xs-6">
    <h3>房客日记</h3>
    <div class="all-info">
      <div v-if="isshow==1">
        <img class="radius-img" :src="'../../../static/images/'+diarys[0].uHeadPic" alt="">
        <p>{{diarys[0].uName}}</p>
        <p>{{diarys[0].dDate.substring(0,10)}}</p>
        <div class="content">{{diarys[0].dContent}}</div>
      </div>
      <div v-else-if="isshow==2">
        <img class="radius-img" :src="'../../../static/images/'+diarys[1].uHeadPic" alt="">
        <p>{{diarys[1].uName}}</p>
        <p>{{diarys[1].dDate.substring(0,10)}}</p>
        <div class="content">{{diarys[1].dContent}}</div>
      </div>
      <div v-else-if="isshow==3">
        <img class="radius-img" :src="'../../../static/images/'+diarys[2].uHeadPic" alt="">
        <p>{{diarys[2].uName}}</p>
        <p>{{diarys[2].dDate.substring(0,10)}}</p>
        <div class="content">{{diarys[2].dContent}}</div>
      </div>
      <div v-else="isshow==4">
        <img class="radius-img" :src="'../../../static/images/'+diarys[3].uHeadPic" alt="">
        <p>{{diarys[3].uName}}</p>
        <p>{{diarys[3].dDate.substring(0,10)}}</p>
        <div class="content">{{diarys[3].dContent}}</div>
      </div>

    </div>
    <ul class="icon">
      <li v-on:click ="changeone" ref="one" style="background-color:#ff666a;"></li>
      <li v-on:click ="changetwo" ref="two"></li>
      <li v-on:click ="changethre" ref="thre"></li>
      <li v-on:click ="changefou" ref="fou"></li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeFifthLeft",
    data(){
      return{
        aCommend:1,
        mydata:[],
        diarys:[],
        isshow:1,
      }

    },
    methods: {
      // change:function (num) {
      //   this.isshow = num;
      // },
      changeone() {
        this.isshow = 1;
        this.$refs.one.style.backgroundColor = '#ff666a';
        this.$refs.two.style.backgroundColor = '#fff';
        this.$refs.thre.style.backgroundColor = '#fff';
        this.$refs.fou.style.backgroundColor = '#fff';
      },
      changetwo() {
        this.isshow = 2;
        this.$refs.two.style.backgroundColor = '#ff666a';
        this.$refs.one.style.backgroundColor = '#fff';
        this.$refs.thre.style.backgroundColor = '#fff';
        this.$refs.fou.style.backgroundColor = '#fff';
      },
      changethre() {
        this.isshow = 3;
        this.$refs.thre.style.backgroundColor = '#ff666a';
        this.$refs.two.style.backgroundColor = '#fff';
        this.$refs.one.style.backgroundColor = '#fff';
        this.$refs.fou.style.backgroundColor = '#fff';
      },
      changefou() {
        this.isshow = 4;
        this.$refs.fou.style.backgroundColor = '#ff666a';
        this.$refs.two.style.backgroundColor = '#fff';
        this.$refs.thre.style.backgroundColor = '#fff';
        this.$refs.one.style.backgroundColor = '#fff';
      },
    },
    mounted(){
      $(".content").each(function() {
        if ($(this).text().length > 70) {
          $(this).html($(this).text().replace(/\s+/g, "").substr(0, 70) + "...")
        }
      }),
        this.$axios.get(`/diarys/${this.aCommend}`).then((result)=> {
          // this.mydata = result.data.data[0].uName;
          this.mydata = result.data.data
          console.log(this.mydata)
          for(var i = 0 ; i < 4; i++){
            this.diarys.push(this.mydata[i])
            // console.log(this.diarys[0])
          }
        },(err) =>{
          // console.log(result.err)
        })
    },
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
</style>
