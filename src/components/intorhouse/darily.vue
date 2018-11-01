<template>
  <div  >
    <div style="position:absolute;bottom: 50px;margin-left:43%;">

      <button @click="tofour"> < </button>

      <input type="button" value="1"  v-on:click="change(1)">
      <input type="button" value="2"  v-on:click="change(2)">
      <input type="button" value="3"  v-on:click="change(3)">
      <input type="button" value="4"  v-on:click="change(4)">

      <button @click="toone"> > </button>

    </div><div>

</div>
    <div class="a1" v-if="isshow == 1">
      <div style="width:90%;margin:0 auto; ">
        <div>
        <img :src="`../../../static/images/pinglun/`+info[0].dImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
        <div >
          <p style="color:#ff666a; margin-top:35px;position:absolute;letter-spacing:2px;font-size:16px;margin-left:70px;   ">{{info[0].uTrueName}} </p>
             <p style="font-size:15px; margin-left:70px;margin-top:65px;position:absolute;">{{info[0].dDate.substring(0,10)}}</p>
          <p style=" font-size:20px; margin-top:35px;position:absolute;margin-left:38%;color:#ff666a;  ">{{info[0].dTitle}}</p>
        </div>
          <div style="clear:both;margin-top:100px;position:absolute; line-height: 28px;margin-right:40px;    ">
            {{info[0].dContent}}
          </div>
        </div>

      </div>
    </div>
    <div class="a2" v-if="isshow == 2">
      <div style="width:90%;margin:0 auto; ">
        <div>
          <img :src="`../../../static/images/pinglun/`+info[1].dImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
          <div >
            <p style="color:#ff666a; margin-top:35px;position:absolute;letter-spacing:2px;font-size:16px;margin-left:70px;   ">{{info[1].uTrueName}} </p>
            <p style="font-size:15px; margin-left:70px;margin-top:65px;position:absolute;">{{info[1].dDate.substring(0,10)}}</p>
            <p style=" font-size:20px;margin-top:35px;position:absolute;margin-left:38%;color:#ff666a;  ">{{info[1].dTitle}}</p>
          </div>
          <div style="clear:both;margin-top:100px;position:absolute; line-height: 28px;margin-right:40px;    ">
            {{info[1].dContent}}
          </div>
        </div>

      </div>
    </div>
    <div class="a3" v-if="isshow == 3">
      <div style="width:90%;margin:0 auto; ">
        <div>
          <img :src="`../../../static/images/pinglun/`+info[2].dImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
          <div >
            <p style="color:#ff666a; margin-top:35px;position:absolute;letter-spacing:2px;font-size:16px;margin-left:70px;   ">{{info[2].uTrueName}}  </p>
            <p style="font-size:15px; margin-left:70px;margin-top:65px;position:absolute;">{{info[2].dDate.substring(0,10)}}</p>
            <p style=" font-size:20px; margin-top:35px;position:absolute;margin-left:38%;color:#ff666a;  ">{{info[2].dTitle}}</p>
          </div>
          <div style="clear:both;margin-top:100px;position:absolute; line-height: 28px;margin-right:40px;   ">
            {{info[2].dContent}}
          </div>
        </div>

      </div>
    </div>
    <div class="a4" v-if="isshow == 4">
      <div style="width:90%;margin:0 auto; ">
        <div>
          <img :src="`../../../static/images/pinglun/`+info[3].dImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
          <div >
            <p style="color:#ff666a; margin-top:35px;position:absolute;letter-spacing:2px;font-size:16px;margin-left:70px;   ">{{info[3].uTrueName}}  </p>
            <p style="font-size:15px; margin-left:70px;margin-top:65px;position:absolute;">{{info[3].dDate.substring(0,10)}}</p>
            <p style=" font-size:20px; margin-top:35px;position:absolute;margin-left:38%;color:#ff666a  ">{{info[3].dTitle}}</p>
          </div>
          <div style="clear:both;margin-top:100px;position:absolute; line-height: 28px;margin-right:40px;   ">
            {{info[3].dContent}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "darily",
      data(){
        return {
          message:'hello Vue!',
          recommend:1,
          isshow:1,
          info:[],

        }

      },

      mounted(){
          let _this=this
        axios.get(`http://localhost:3000/diarys/${this.recommend}`).then(function (result) {
          _this.info.push(result.data.data[0],result.data.data[1],result.data.data[2],result.data.data[3]);

       })
        .catch(function (error) {
          console.log(error);
       });
     },
      methods:{
        change:function (num) {
          this.isshow=num;
        },
        toone(){
          this.isshow=1;
        },
        tofour(){
          this.isshow=4;
        },
      }
    }

</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .a1,.a2,.a3,.a4{
    background-color: #fff;
    width:100%;
    height:600px;


  }

  input:hover,button:hover{
    background-color:#ff666a;

  }
  button,input{
    width:23px;
    height:23px;
    line-height:23px;
    text-align:center;
    border:1px solid #fff;

  }
</style>
