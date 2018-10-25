<template>

    <div class="dianpin col-xs-8" style="clear:both;margin-left:2%;margin-top:10px;">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane :label="sayhome" name="first"  >
          <div style="background-color:#fff;" class="col-xs-12">
            <say-house></say-house>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="wridar" name="second" class="col-xs-12">
          <div style="background-color:#fff;">
            <dari-ly></dari-ly>
          </div>
        </el-tab-pane>

      </el-tabs>



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
          dian:"本房源点评",
          fenshu:" (23) ",
          fang:"房客日记",
          jinum:" (22)"
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

      }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }

  @media (max-width:1144px) {
    .dianpin{
      width:90%;
      margin-left:5%;

    }

  }

</style>
