<template>

    <div class="dianpin col-xs-8" style="clear:both;margin-top:10px;">
      <div style="margin-top:10px;margin-bottom:20px;font-size:20px;line-height:40px;background-color:#fff;">
        <span  v-on:click="changeone" ref="first" >本房源点评({{dianlen}})</span>
        <span  v-on:click="changetwo" ref="second" style="margin-left:20px;">房客日记({{darilylen}})</span>
      </div>

      <div class="a1" v-if="isshow == 1" style="background-color:#fff;">
        <div style="width:100%;height:800px;">
        <say-house></say-house>
        </div>
      </div>
      <div class="a2" v-if="isshow == 2" style="background-color:#fff">
        <div style="width:100%;height:600px;">
          <dari-ly></dari-ly>
      </div>

      </div>
  </div>
</template>

<script>
  import darily from "./darily.vue"
  import sayhouse from "./sayhouse.vue"
    export default {
        name: "dianpin",
      data() {
        return {
          activeName: 'second',
          dianlen:this.$store.state.dianlen,
          isshow:1,
          darilylen:4,
        };
      },
      computed:{
          sayhome: {
            get() {
              return this.dian + this.fenshu
            }
          },

        wridar: {
          get() {
            return this.fang + this.jinum
          }
        }


      },
      components:{
          "say-house":sayhouse,
          "dari-ly":darily,

      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        changeone() {
          this.isshow=1;
          this.$refs.first.style.color = '#ff666a';
          this.$refs.second.style.color = '#595959';
        },
       changetwo() {
          this.isshow=2;
          this.$refs.second.style.color = '#ff666a';
         this.$refs.first.style.color = '#595959';
        },

      },
      mounted(){
        this.$refs.first.style.color = '#ff666a';
      }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  span:hover{
    color:#ff666a;
  }

  @media (max-width:1200px) {
    .dianpin{
      width:90%;
      margin-left:5%;
    }
  }
  @media (min-width:1200px) {
    .dianpin{
      margin-left:2%;
    }

  }

</style>
