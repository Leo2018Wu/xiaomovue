<template>
  <div class="row">
    <el-card class="box-card" v-for="(assessment,index) in assessments">
                <div  class="text item">
                  <el-row>
                    <el-col :span="2"><div class="grid-content bg-purple">
                      <img src="../../assets/first-center-01.jpg" class="himg"/>
                    </div></el-col>
                    <el-col :span="20":offset="2"><div class="grid-content bg-purple-light">
                      <div><h5>{{assessment.hName}}</h5>
                      <span class="aDate">{{assessment.aDate}}</span>
                      <el-button style="float: right; padding: 3px 0" type="text">
                        <el-button type="text" @click="centerDialogVisible = true">
                          <i class="el-icon-delete"></i>
                        </el-button>
                        <el-dialog
                          title="删除"
                          :visible.sync="centerDialogVisible"
                          width="30%"
                          center>
                          <span>确定删除？</span>
                          <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false;del(index)">确 定</el-button>
  </span>
                        </el-dialog>
                      </el-button>
                      </div>
                      <hr>
                      <p>{{assessment.aContent}}</p>
                      <img src="../../assets/first-center-01.jpg"/>
                      <img src="../../assets/first-center-01.jpg"/>
                      <img src="../../assets/first-center-01.jpg"/>
                    </div></el-col>
                  </el-row>

                </div>
    </el-card>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        centerDialogVisible: false,
        assessments:[
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房1',content:'本来是和朋友来北京实习租房的，却没有想到可以碰到这么有趣的人儿而且变成超级舍不得的朋友！！ 房东我们文文真的是个全能型的绝世小可爱，他会给你做好吃到不行的咖喱和炸酱面，他会唱魅力无边的男低音，他会带你去深夜鱼市教你认识各种稀奇古怪的鱼，他会给你讲各种段子和经历，他会第一时间解决你的问题，他会留意你的各种需求比如说喜欢洗过的衣服留香珠的味道。 至于这个屋子呢，那一定是人见人爱的。楼下就有便利店和餐厅，离沃尔玛商场国贸地铁站巴士站也走路分分钟到。而且家里厨房卫生间和各种设施也很齐全且高质量。屋子是个很宽敞的双人床，装修设计的很有风格也十分干净。每个屋子都有自己的钥匙，安全也很放心。 最重要的，家里还有两只超级好摸的葱花和三七，以及两缸的仙女鱼！每天看到他们都很治愈！葱花很慵懒，三七很热情！当然，如果你有点儿害怕小动物，文文也不会让你看到并且接触他们的。 隔壁的cookie和强哥也变成了每天一起嘻嘻哈哈的玩伴！在北京我们大家一起去的各种地方真的是最棒的经历啦，从素不相识到天天吹水约局，在来之前是万万想不到的。别犹豫啦，不仅会收获一个完美的入住体验，还有可能会收获一群合得来的朋友！',arrive:'0'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房2',content:'本来是和朋友来北京实习租房的，却没有想到可以碰到这么有趣的人儿而且变成超级舍不得的朋友！！ 房东我们文文真的是个全能型的绝世小可爱，他会给你做好吃到不行的咖喱和炸酱面，他会唱魅力无边的男低音，他会带你去深夜鱼市教你认识各种稀奇古怪的鱼，他会给你讲各种段子和经历，他会第一时间解决你的问题，他会留意你的各种需求比如说喜欢洗过的衣服留香珠的味道。 至于这个屋子呢，那一定是人见人爱的。楼下就有便利店和餐厅，离沃尔玛商场国贸地铁站巴士站也走路分分钟到。而且家里厨房卫生间和各种设施也很齐全且高质量。屋子是个很宽敞的双人床，装修设计的很有风格也十分干净。每个屋子都有自己的钥匙，安全也很放心。 最重要的，家里还有两只超级好摸的葱花和三七，以及两缸的仙女鱼！每天看到他们都很治愈！葱花很慵懒，三七很热情！当然，如果你有点儿害怕小动物，文文也不会让你看到并且接触他们的。 隔壁的cookie和强哥也变成了每天一起嘻嘻哈哈的玩伴！在北京我们大家一起去的各种地方真的是最棒的经历啦，从素不相识到天天吹水约局，在来之前是万万想不到的。别犹豫啦，不仅会收获一个完美的入住体验，还有可能会收获一群合得来的朋友！',num:'1'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房3',content:'本来是和朋友来北京实习租房的，却没有想到可以碰到这么有趣的人儿而且变成超级舍不得的朋友！！ 房东我们文文真的是个全能型的绝世小可爱，他会给你做好吃到不行的咖喱和炸酱面，他会唱魅力无边的男低音，他会带你去深夜鱼市教你认识各种稀奇古怪的鱼，他会给你讲各种段子和经历，他会第一时间解决你的问题，他会留意你的各种需求比如说喜欢洗过的衣服留香珠的味道。 至于这个屋子呢，那一定是人见人爱的。楼下就有便利店和餐厅，离沃尔玛商场国贸地铁站巴士站也走路分分钟到。而且家里厨房卫生间和各种设施也很齐全且高质量。屋子是个很宽敞的双人床，装修设计的很有风格也十分干净。每个屋子都有自己的钥匙，安全也很放心。 最重要的，家里还有两只超级好摸的葱花和三七，以及两缸的仙女鱼！每天看到他们都很治愈！葱花很慵懒，三七很热情！当然，如果你有点儿害怕小动物，文文也不会让你看到并且接触他们的。 隔壁的cookie和强哥也变成了每天一起嘻嘻哈哈的玩伴！在北京我们大家一起去的各种地方真的是最棒的经历啦，从素不相识到天天吹水约局，在来之前是万万想不到的。别犹豫啦，不仅会收获一个完美的入住体验，还有可能会收获一群合得来的朋友！',num:'2'},
          // // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房4',content:'住的很舒服，环境也很好',num:'3'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房5',content:'住的很舒服，环境也很好',num:'4'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房1',content:'住的很舒服，环境也很好',num:'5'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房2',content:'住的很舒服，环境也很好',num:'6'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房3',content:'住的很舒服，环境也很好',num:'7'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房4',content:'住的很舒服，环境也很好',num:'8'},
          // {hpic:require("../../assets/im_qr_part2.png"),hName:'厦门海景房5',content:'住的很舒服，环境也很好',num:'9'},
        ],


      };
    },
    mounted(){
      axios.get('http://localhost:3000/assessment/personal/userAssessment/1').then((result)=> {
        // this.mydata = result.data.data[0].uName;
        this.assessments = result.data.data
        // console.log(this.assessments)
        // this.assessments.push(this.mydata)
        // console.log(this.assessments[0])
      },(err) =>{
        console.log(result.err)
      })
    },
    methods: {
      del(index){
        axios.get(`http://localhost:3000/assessment/details/delAssessment/${this.assessments[index].aId}`).then((result)=> {
          console.log("删除成功")
        },(err) =>{
          console.log(result.err)
        })
      },
    },
  }
</script>
<style>
  img {
    width: 100px;
    height: 100px;
  }
  .himg{
    border-radius: 10px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width:100%;
    margin-bottom: 10px;
  }
  .aDate{
    font-size: 18px;
  }
</style>
