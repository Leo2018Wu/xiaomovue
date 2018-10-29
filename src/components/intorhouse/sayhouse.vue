<template>
      <div>
        <div style="position:absolute;bottom: 50px;margin-left:44%;">
          <button @click="tofour"> < </button>
          <input type="button" value="1"  v-on:click="change(1)"  >
          <input type="button" value="2"  v-on:click="change(2)"  >
          <input type="button" value="3"  v-on:click="change(3)"  >
          <input type="button" value="4"  v-on:click="change(4)" >
          <button @click="toone"> > </button>
        </div>

        <div class="block" style=" background-color:#fff;margin-left:5%;border-bottom:2px solid #f8f8f8">
          <span class="demonstration" style="font-size:25px;font-weight:bold;color:rgba(111,147,255,0.81);margin-top:25px;position:absolute; ">点评 {{househscore[0]}} 分</span>
          <el-rate v-model="value1" style="margin-top:65px;position:absolute;"></el-rate>
          <p style="display:inline-block;margin-left:20%;margin-top:65px;">
            <span style="margin-left:20px;">整洁卫生{{numwei}}</span>
            <span style="margin-left:20px;">描述相符{{nummao}}</span>
            <span style="margin-left:20px;">整洁卫生{{numan}}</span>
            <span style="margin-left:20px;">性价比{{numan}}</span>
          </p>


        </div>

        <div class="a1" v-if="isshow == 1"  >

          <div style="  width:90%;margin:10px auto;">

           <img :src="`../../../static/images/pinglun/`+allinfo[0].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
           <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
             <p><span>{{allinfo[0].uName}}</span>  入住时间:{{allinfo[0].aDate.substring(0,10)}}</p>
              <p>{{allinfo[0].aContent}}</p>
             <p><span>房东回复:</span></p>
             <p>{{allinfo[0].rContent}}</p>
         </div>

       </div>
          <div style=" width:90%;margin:10px auto;">
            <img :src="`../../../static/images/pinglun/`+allinfo[1].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
            <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
              <p><span>{{allinfo[1].uName}}</span>  入住时间:{{allinfo[1].aDate.substring(0,10)}}</p>
              <p>{{allinfo[1].aContent}}</p>
              <p><span>房东回复:</span></p>
              <p>{{allinfo[1].rContent}}</p>
            </div>

          </div>
          <div style=" width:90%;margin:10px auto;">
            <img :src="`../../../static/images/pinglun/`+allinfo[2].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
            <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
              <p><span>{{allinfo[2].uName}}</span>  入住时间:{{allinfo[2].aDate.substring(0,10)}}</p>
              <p>{{allinfo[2].aContent}}</p>
              <p><span>房东回复:</span></p>
              <p>{{allinfo[2].rContent}}</p>
            </div>

          </div>
          <div style=" width:90%;margin:10px auto;">
            <img :src="`../../../static/images/pinglun/`+allinfo[3].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
            <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
              <p><span>{{allinfo[3].uName}}</span>  入住时间:{{allinfo[3].aDate.substring(0,10)}}</p>
              <p>{{allinfo[3].aContent}}</p>
              <p><span>房东回复:</span></p>
              <p>{{allinfo[3].rContent}}</p>
            </div>

          </div>
        </div>
         <div class="a2" v-if="isshow == 2" >

           <div style=" width:90%;margin:10px auto;">
               <img :src="`../../../static/images/pinglun/`+allinfo[4].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
               <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
                 <p><span>{{allinfo[4].uName}}</span>  入住时间:{{allinfo[4].aDate.substring(0,10)}}</p>
                 <p>{{allinfo[4].aContent}}</p>
                 <p><span>房东回复:</span></p>
                 <p>{{allinfo[4].rContent}}</p>
               </div>
           </div>
           <div style=" width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[5].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:-50px;margin-left:80px;">
               <p><span>{{allinfo[5].uName}}</span>  入住时间:{{allinfo[5].aDate.substring(0,10)}}</p>
               <p>{{allinfo[5].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[5].rContent}}</p>
             </div>
           </div>
           <div style=" width:90%;margin:10px auto;">
           <img :src="`../../../static/images/pinglun/`+allinfo[6].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
           <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[6].uName}}</span>  入住时间:{{allinfo[6].aDate.substring(0,10)}}</p>
               <p>{{allinfo[6].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[6].rContent}}</p>
             </div>
         </div>
           <div style=" width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[7].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[7].uName}}</span>  入住时间:{{allinfo[7].aDate.substring(0,10)}}</p>
               <p>{{allinfo[7].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[7].rContent}}</p>
             </div>
           </div>
         </div>
         <div class="a3" v-if="isshow == 3">
           <div style="width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[8].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[8].uName}}</span>  入住时间:{{allinfo[8].aDate.substring(0,10)}}</p>
               <p>{{allinfo[8].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[8].rContent}}</p>
             </div>


           </div>
           <div style=" width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[9].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[9].uname}}</span>  入住时间:{{allinfo[9].aDate.substring(0,10)}}</p>
               <p>{{allinfo[9].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[9].rContent}}</p>
             </div>


           </div>
           <div style=" width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[10].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[10].uName}}</span>  入住时间:{{allinfo[10].aDate.substring(0,10)}}</p>
               <p>{{allinfo[10].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[10].rContent}}</p>
             </div>


           </div>
             <div style=" width:90%;margin:10px auto;">
               <img :src="`../../../static/images/pinglun/`+allinfo[11].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
               <div style="display: inline-block;margin-top:30px;margin-left:20px;">
                 <p><span>{{allinfo[11].uName}}</span>  入住时间:{{allinfo[11].aDate.substring(0,10)}}</p>
                 <p>{{allinfo[11].aContent}}</p>
                 <p><span>房东回复:</span></p>
                 <p>{{allinfo[11].rContent}}</p>
               </div>


           </div>
         </div>
         <div class="a4" v-if="isshow == 4">
           <div style="width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[12].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[12].uName}}</span>  入住时间:{{allinfo[12].aDate.substring(0,10)}}</p>
               <p>{{allinfo[12].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[12].rContent}}</p>
             </div>


           </div>
           <div style=" width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[13].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[13].uName}}</span>  入住时间:{{allinfo[13].aDate.substring(0,10)}}</p>
               <p>{{allinfo[13].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[13].rContent}}</p>
             </div>


           </div>
           <div style="width:90%;margin:10px auto;">
             <img :src="`../../../static/images/pinglun/`+allinfo[14].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
             <div style="display: inline-block;margin-top:30px;margin-left:20px;">
               <p><span>{{allinfo[14].uName}}</span>  入住时间:{{allinfo[14].aDate.substring(0,10)}}</p>
               <p>{{allinfo[14].aContent}}</p>
               <p><span>房东回复:</span></p>
               <p>{{allinfo[14].rContent}}</p>
             </div>


           </div>
             <div style=" width:90%;margin:10px auto;">
               <img :src="`../../../static/images/pinglun/`+allinfo[15].aImages" style="border-radius:50px;height:50px;width:50px;margin-top:30px;float:left;">
               <div style="display: inline-block;margin-top:30px;margin-left:20px;">
                 <p><span>{{allinfo[15].uName}}</span>  入住时间:{{allinfo[15].aDate.substring(0,10)}}</p>
                 <p>{{allinfo[15].aContent}}</p>
                 <p><span>房东回复:</span></p>
                 <p>{{allinfo[15].rContent}}</p>
               </div>


           </div>
         </div>
      </div>

</template>

<script>
    export default {
        name: "sayhouse",
      data(){
          return {
            message:'hello Vue!',
            value1:'',
            isshow:1,
            numbler:5,
            numwei:4.9,
            nummao:4.9,
            numjiao:4.9,
            numan:4.9,
            numjia:4.9,
            hId:1,
            allinfo:[],
            hIdsco:this.$route.params.hId,
            househscore:[]
          }

      },
      mounted(){
        let _this=this
        axios.get(`http://localhost:3000/assessment/allinfo`).then(function (result) {
          _this.allinfo.push(result.data.data[0],result.data.data[1],result.data.data[2],result.data.data[3],
            result.data.data[4],result.data.data[5],result.data.data[6],result.data.data[7],
            result.data.data[8],result.data.data[9],result.data.data[10],result.data.data[11],
            result.data.data[12],result.data.data[13],result.data.data[14],result.data.data[15]);

        })
          .catch(function (error) {
            console.log(error);
          });
          axios.get(  `http://localhost:3000/house/details/`+this.hIdsco).then(function (result) {

            _this.househscore.push(result.data.data[0].hScore);
            _this.value1=result.data.data[0].hScore;

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
.a1,.a2,.a3,.a4{
  width:100%;
  height:1050px;
}
button,input{
  border:1px solid #fff;
}

  input:hover,button:hover{
    background-color:#ff666a;

  }
  span{
    color:#ff666a;
  }
</style>
