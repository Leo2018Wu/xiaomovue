<template>
  <div class="detailho col-xs-8" >
    <div class=" chen" style=" text-align:center;margin-bottom:40px;margin-left:10%;height:80px; border-bottom:2px solid #eaeaea;width:80%;background-color:#fff;margin-top:30px;  ">
      <div style="width:50%;float:left;   ">

        <p style="font-size:30px; ">宜居 {{num}} 人</p>

        <p style="font-size:18px; margin-top:15px;">客房独享整套房屋</p>
      </div>
      <div  style=" width:50%; float:right;  ">

        <p style="font-size:30px;;position:relative;">共 {{bed}} 床</p>

        <p style="font-size:18px;margin-top:15px; ">双人床: 1.8m 宽 x 2 m 长 x 1 张</p>
      </div>
    </div>

    <div style="margin-left:10%;margin-top:20px;border-bottom:2px solid #eaeaea;width:80%;">
        <h2 style="font-size:25px;color:#afafaf;">个性描述</h2>
      <p  style="margin-top:20px;margin-bottom:20px;">{{onehouseinfo[0].hInfo}}</p>
    </div>

    <div style="margin-left:10%;border-bottom:2px solid #eaeaea;width:80%;">
        <h2 style="font-size:25px;margin-top:20px;color:#afafaf;">内部情况</h2>
        <p style="margin-top:20px;margin-bottom:20px;">{{onehouseinfo[0].insideInfo}}</p>
      </div>
    <div style="margin-left:10%;border-bottom:2px solid #eaeaea; width:80%;">
        <h2 style="font-size:25px;margin-top:20px;color:#afafaf;">交通情况</h2>
        <p style="margin-top:20px;margin-bottom:20px;">{{onehouseinfo[0].trafficInfo}}</p>
      </div>
    <div>

      <div style="margin-left:10%;margin-top:20px;border-bottom:2px solid #eaeaea;width:80%;">
        <h2 style="font-size:25px;color:#afafaf;">周边情况</h2>
        <p style="margin-top:20px;margin-bottom:20px;">{{onehouseinfo[0].surroundInfo}}</p>
      </div>
    </div>

      <div style="margin-left:10%;margin-top:20px;border-bottom:2px solid #eaeaea;width:80%;">
        <h2 style="font-size:25px;color:#afafaf;">配套设施</h2>
        <p style="margin-top:20px;margin-bottom:20px;">{{onehouseinfo[0].hfacilily }}</p>
      </div>

      <div style="margin-left:10%;margin-top:20px;width:80%;" class="ruzhu">
        <h2 style="font-size:25px;color:#afafaf;">入住须知</h2>
        <p style="margin-top:20px;margin-bottom:20px;">卫生间：独立卫生间  最少入住天数：1天最多入住天数：3天是否接待境外人士：接待</p>
      </div>

  </div>
</template>


  <script>
  export default {
    name: "housedetail",
    data() {
      return {
        activeName: '1',
        gexingtitle:111,
        hId:this.$route.params.hId,
        people:"",
        bed:"",
        onehouseinfo:[],
        pertetail:"交通便利：临近延安东路隧道、复兴东路隧道、大连路隧道，并与杨浦、南浦、卢浦大桥以及2、4、9号地铁相近",
        innertetail:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念"
      };
    },
    computed:{
      num:{
        get(){
          return this.people=this.bed+this.bed;


        }
      }
    },

    mounted(){
      let _this=this
      this.$axios.get(  `/house/details/`+this.hId).then(function (result) {
        _this.onehouseinfo.push(result.data.data[0]);
        _this.bed=result.data.data[0].hBeds;
      })
        .catch(function (error) {
          console.log(error);
        });

    },

  }
</script>



<style scoped>
*{
  margin:0;
  padding:0;
}
  .detailho{
    margin-left:2%;
    margin-top:10px;

    background-color: #fff;
  }
  p{
    line-height:22px;
  }
  @media (max-width:1200px) {
    .detailho {
      width: 90%;
      margin-left: 5%;
    }
    .chen{
      height:200px;
    }
  }


</style>


