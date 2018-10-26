<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "Allorder",
    data(){
      return{
        centerDialogVisible: false,
        orderInfos:[
          {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房1',rentDate:'2018-10-11至2018-10-15',price:'288'},
          {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房2',rentDate:'2018-10-11至2018-10-15',price:'288'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房3',rentDate:'2018-10-11至2018-10-15',price:'288'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房4',rentDate:'2018-10-11至2018-10-15',price:'288'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'海景房5',rentDate:'2018-10-11至2018-10-15',price:'288'}

        ]

      }
    },
    methods:{
      del(index){
        this.orderInfos.splice(index,1)
      }
    }
  }
</script>

<style scoped>
  span{
    font-weight: 300;
    font-size: 18px;
  }
  img{
    width: 100%;
  }
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
    margin-bottom: 10px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    /* color: #fff; */
    color: #fff;
    /*background-color: #fff;*/
    border-right-color: #dcdfe6;
    border-left-color: #dcdfe6;
    background-color: #ff666a;
  }
</style>
