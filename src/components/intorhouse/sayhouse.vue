<template>
      <div>
          <div class="block" style=" background-color:#fff;margin-left:5%;border-bottom:2px solid #f8f8f8">
            <span class="demonstration" style="font-size:25px;font-weight:bold;color:rgba(111,147,255,0.81);margin-top:25px;position:absolute; ">点评 {{househscore}} 分</span>
            <el-rate v-model="househscore" style="margin-top:65px;position:absolute;"></el-rate>
            <p style="display:inline-block;margin-left:20%;margin-top:65px;">
              <span style="margin-left:20px;">整洁卫生{{househscore}}</span>
              <span style="margin-left:20px;">描述相符{{househscore}}</span>
              <span style="margin-left:20px;">整洁卫生{{househscore}}</span>
              <span style="margin-left:20px;">性价比{{househscore}}</span>
            </p>
          </div>

        <div  v-for="(content,index) in articleInfoList">
        <div style=" width:90%;margin:20px auto;">
          <img :src="`../../../static/images/pinglun/`+content.aImages" style="border-radius:50px;height:50px;width:50px;float:left;">
          <div style="display: inline-block;margin-left:40px;width:80%;" class="allcontent">
            <p><span>{{content.uName}}</span>  入住时间:{{content.arrvialDate.substring(0,10)}}</p>
            <p>{{content.aContent}}</p>
            <p><span>房东回复:</span></p>
            <p>{{content.rContent}}</p>
          </div>
        </div>
        </div>
        <div style="width:100%;padding:30px;">
        <div class="block dibu" style="margin-left:70%;">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="3"
            layout="total, prev, pager, next"
            :total="len">
          </el-pagination>
        </div>
        </div>
      </div>

</template>

<script>
  import axios from "axios"
    export default {
      name: "sayhouse",

      data() {
        return {
          message: 'hello Vue!',
          hIdsco: this.$route.params.hId,
          househscore: this.$store.state.housescore,
          // 分页
          articleInfoList: [],//每页显示的数据
          articleList: [],//所有的数据
          currentPage: 1,//当前页
          currentPage1: 4,//当前页
          len: 0,//默认总的数据长度
          pageSize: 3,//默认每页显示的数量
        }
      },
      created() {
        let _this = this

        axios.get(`http://localhost:3000/assessment/allassment/${_this.hIdsco}`).then(function (res) {
          _this.articleList = res.data.data;
          _this.len = res.data.data.length;
          _this.handleInfo();
        }).catch(function (err) {
          console.log(error);
        })
      },
      methods: {
        handleCurrentChange(val) {
          this.articleInfoList = this.articleList[val - 1]
        },
        handleInfo() {
          // 页数，如果有小数，只取整数部分
          let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
          // 定义一个空数组
          let newArr = [];
          // 遍历获取的数据，每次遍历都从数组的0位置开始截取，截取数量为每页显示的数量
          for (let i = 0; i < pageNum; i++) {
            newArr.push(this.articleList.splice(0, this.pageSize));
          }
          // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
          if (this.articleList.length < this.pageSize) {
            newArr.push(this.articleList.splice(0, this.articleList.length));
          }
          // 将新的数组赋给articleList[],用来渲染页面
          this.articleList = newArr;
          // 第一次进入页面显示this.articleList[]数组的第一个元素
          this.articleInfoList = this.articleList[0]
        },

      },
      mounted() {
        let _this = this;
        axios.get(`http://localhost:3000/house/details/` + this.hIdsco).then(function (result) {
          _this.househscore = result.data.data[0].hScore;

        })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
</script>
<style scoped>
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
