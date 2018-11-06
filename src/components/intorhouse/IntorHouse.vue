<template>
  <div class="allhezi row">

    <p class="col-xs-6 p1"  >{{housename[0]}}</p>
    <p class="col-xs-6 p2" style="clear:both;" >
      <span class="glyphicon glyphicon-map-marker"><span  >{{houselocation[0]}}</span></span></p>
    <lunbo-lun></lunbo-lun>
    <rigfix-rig></rigfix-rig>
    <detail-de></detail-de>
    <mapin-tro></mapin-tro>
    <konw-ho></konw-ho>
    <dian-pin></dian-pin>

  </div>

</template>

<script>

  import lunbo  from "./lunbo.vue"
  import rigfix from "./rightfix.vue"
  import detail from "./detail.vue"
  import mapintro from "./mapintro.vue"
  import knowho from "./knowho.vue"
  import dianpin from "./dianpin.vue"


    export default {
      name: "IntorHouse",
      components:{
          "lunbo-lun":lunbo,
          "rigfix-rig":rigfix,
          "detail-de":detail,
          "mapin-tro":mapintro,
          "konw-ho":knowho,
          "dian-pin":dianpin,
      },
      data(){
        return {
          housename:[],
          houselocation:[],
          hId:this.$route.params.hId
        }
      },
      mounted(){
        let _this=this

        this.$axios.get(  `/house/details/`+this.hId).then(function (result) {
          _this.housename.push(result.data.data[0].hName);
          _this.houselocation.push(result.data.data[0].hLocation);
        })
          .catch(function (error) {
            console.log(error);
          });

      },

    }

</script>

<style scoped>
       .allhezi{
         margin-top:60px;
         background-color: #f5f5f5;
         padding:20px;
         margin-left:-5%;
         margin-right:-5%;
       }
       .p1{
         font-size:20px;
         font-weight: bold;
         margin-left:10px;
  }
       .p2{
         margin-left:10px;
         color: #5d5d5d;
         /*color:black;*/
       }
       @media (max-width:1100px) {
         .p1,.p2{
           margin-left:5%;
         }
       }

</style>
