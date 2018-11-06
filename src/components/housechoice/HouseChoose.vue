<template>
  <div class="container" style="min-width: 1200px;margin-top:63px;background: #ecf0f1">
    <div class="chooseKinds" id="top">
      <div class="row">
        <div class="col-sm-4 col-xs-4">
          <div class="col-sm-12 col-xs-12">
            <el-select v-model="formData.city" clearable style="width: 450px" placeholder="请选择要去的城市" >
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </div>
          <div class="col-sm-12 col-xs-12" style="width: 450px;">
            <el-date-picker
              v-model="formData.chooseDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker><!--日期查询-->
          </div>
          <div class="col-sm-12 col-xs-12">
            <el-select v-model="formData.guestNum" style="width: 450px;" clearable placeholder="请选择最低入住人数">
              <el-option
                v-for="item in numbs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="col-sm-12 col-xs-12" style="width: 480px;">
            <el-input
              placeholder="请输入房屋名"
              v-model="formData.keyWord"
              clearable>
            </el-input><!--模糊查询-->
          </div>
        </div>
        <div class="col-sm-7 col-sm-offset-1 col-xs-7 col-xs-offset-1" style="">
          <div class="col-sm-12 col-xs-12 pap" style="padding-top: 0 ">
            <div class="col-sm-2 col-xs-2"><div  style="text-align: center;padding-top:10px;margin-left:-100%">价格:</div></div>
            <div class="col-sm-10 col-xs-10" style="margin-bottom: -10px;margin-left: -10%">
              <div class="block">
                <el-slider
                  v-model="formData.price"
                  show-input :max="3000">
                </el-slider>
              </div><!--价格查询-->
            </div>
          </div>
          <div class="col-sm-12 col-xs-12 pap">
            <label class="checkbox-inline" v-for="facility in facilities" v-model="formData.facility">
              <input type="checkbox" id="inlineCheckbox1" @click="showFac(facility)" value="option1">{{facility}}
            </label>
          </div>
          <div class="col-sm-12 col-xs-12 pap" >
            <label class="checkbox-inline" v-for="location in locations" v-model="formData.location">
              <input type="checkbox" id="inlineCheckbox2" @click="showLocation(location)" value="option1">{{location}}
            </label>

          </div>
          <div class="col-sm-12 col-xs-12 pap" style="padding-top: 0">
            <label class="checkbox-inline" v-for="style in styles" v-model="formData.style">
              <input type="checkbox"  @click="showStyle(style)" >{{style}}
            </label>
          </div>
        </div>
      </div>
      <div class="container">
        <button class="btn " @click="search(formData)" style="color: #00efff;height: 40px; background: #fff;margin-top:10px;text-align: center">提交筛选条件</button>
      </div>

    </div>
    <div class="houseContent" >
      <div class="row">
        <el-row v-if="!showReal.length">
          <nav class="shelf" style="background: #406072;margin:0 auto;margin-top:30px;">
            <a class="book home-page" href="http://10.40.4.8:8080/">首页</a>
            <a class="book about-us" href="http://10.40.4.8:8080/rightnav/about">关于小沫</a>
            <a class="book contact" href="http://10.40.4.8:8080/rightnav/contact">联系我们</a>
            <a class="book faq" href="http://10.40.4.8:8080/rightnav/service">服务协议</a>
            <span class="book not-found"></span>
            <span class="door left"></span>
            <span class="door right"></span>
          </nav>
          <div style="margin: 0 auto;width: 120px;height: 120px;">
            <img src="../../assets/images/cry4.png" style="max-width: 100%" alt="">
          </div>
          <p style="text-align: center">糟糕，没有符合的房间！建议您减少筛选条件！</p>
        </el-row>
        <el-row v-else>

            <div class="col-xs-4 col-md-3" v-for="(item,index) in showReal" :key="index"> <!--v-for="item in realChoice"-->
              <router-link tag="p" :to="`/intorhouse/${item.hId}`">
              <div class="thumbnail" style="cursor: pointer ;margin-top: 10px;margin-bottom:10px;">
                <img :src=" '../../../static/images/'+item.hPic1" alt="..." style="max-width: 100%">
                <div class="caption">
                  <p style="height: 40px;text-flow:hidden;">{{item.hName}}<br>宜住{{item.hLimitPr}}人/{{item.hScore}}分/{{item.hType}}/价格{{item.hPrice}}</p>
                </div>
              </div>
              </router-link>
            </div>
        </el-row>

      </div>
      <!--分页-->
      <el-row>
        <div class="block" style="text-align: center" >
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="8"
            layout="total, prev, pager, next"
            :total="len">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <a href="#" title="飞回顶部" id="huojian" style="right:1%;bottom:3%;position:fixed">
      <div style="width: 100px;height: 100px;"><img src="../../assets/rocket.png" alt="" style="max-width:100%;max-height:100%"></div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HouseChoose",
    data(){
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: '上海',
            label: '上海'
          }, {
            value: '北京',
            label: '北京'
          },
            {
              value:'杭州',
              label:'杭州',
            },
            {
              value:'西安',
              label:'西安',
            },
            {
              value:'青岛',
              label:'青岛',
            },
            {
              value:'济南',
              label:'济南',
            },
            {
              value:'厦门',
              label:'厦门',
            }
          ]
        }, {
          label: '城市名',
          options: [{
            value: '成都',
            label: '成都'
          }, {
            value: '深圳',
            label: '深圳'
          }, {
            value: '广州',
            label: '广州'
          }, {
            value: '大连',
            label: '大连'
          }]
        }],
        formData:{
          city:this.$store.state.mycity,
          chooseDate:'',
          guestNum:'',
          keyWord:'',
          price:3000,
          facility:'',
          style:'',
          location:'',
        },
        shortcuts: {
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        },
        styles:['古典','乡村田园','地中海','现代简约','欧式','东南亚','中式复古','暗黑哥特','雅致主义'],
        facilities:['淋浴','空调','电视','网络','允许做饭','暖气','独卫',],
        locations:['车站','景点','机场','高校','地铁','医院','商圈'],
        numbs:[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10}],
        realChoice:[],
        mydata:[],
        showReal:[],
        currentPage: 1,//当前页
        len: 0,//默认总的数据长度
        pageSize: 12,//默认每页显示的数量
        // currentPage1: 8,
      }
    },
    computed:{
      formData:{
        get:function () {
          return this.$store.state.chooseDate
        },
        set(value){
          this.$store.state.chooseDate = value
        }
      }
    },
    mounted(){
      $(window).scroll(function(){
        var h=$(this).scrollTop();//获得滚动条距top的高度
        if(h>300){
          $("#huojian").fadeIn();
        }else{
          $("#huojian").fadeOut();
        }
      });
      let _this=this;
      this.$axios.get(`/house/scoreOrderHouse`).then((res)=>{
        _this.mydata=JSON.stringify(res.data.data);
        this.search({});
      }),(err)=>{
        this.search({})
        console.log(err)
      }
    },
    watch:{
     'form.city':'search'
    },
    methods:{
      showStyle(style){
        this.formData.style=style
      },
      showLocation(location){
        this.formData.location=location;
      },
      showFac(facility){
        this.formData.facility=facility;
      },
      search({city,guestNum,keyWord,style,location,facility,chooseDate,price}) {
        this.realChoice = JSON.parse(this.mydata).filter(item=>{
          let matchCity = true ;//城市名筛选
          let matchNum = true ;//入住人数筛选
          let matchWord = true ;//模糊关键字筛选
          let matchStyle = true ;//房屋风格筛选
          let matchLocation = true ;//房屋位置筛选
          let matchFac = true ;//房屋设施筛选
          let matchDate = true;//日期筛选房屋
          let matchPrice = true; //价格筛选
          if(city){
            matchCity = item.hCity === city;
          }
          if(guestNum){
            let guest = guestNum
            if(guest >= item.hLimitPr){
              matchNum = item.hLimitPr ===guestNum
            }
          }
          if(keyWord){
            const keys = keyWord
              .toUpperCase()
              .replace(' ','')
              .split(''); //切割成单个字
            matchWord = keys.every(key =>item.hName.toUpperCase().includes(key))
          }
          if(style){
            matchStyle = item.hType === style;
          }
          if(location){
            const keys = location
              .replace(' ','')
              .split('');
            matchLocation= keys.every(key =>item.trafficInfo.includes(key))
          }
          if(facility){
            const keys = facility
              .replace(' ','')
              .split('');
            matchFac = keys.every(key =>item.hfacilily.includes(key))
          }
          if(chooseDate){
            let res1=new Date(chooseDate[1]);
            let time1=new Date(item.hLeaveDate);
            if(res1.getTime()>time1.getTime()){
              matchDate = item.hLeaveDate > chooseDate
            }
          }
          if(price){
            let result = price;
            if(result <=item.hPrice){
              matchPrice = item.hPrice === price
            }
          }
          return matchCity && matchNum && matchWord && matchStyle
            && matchLocation &&matchFac && matchDate && matchPrice;
        })
        this.len=this.realChoice.length
        // console.log('我的数据长度:'+this.len)
        this.handleInfo();
      },
      handleInfo(){
        let pageNum = Number(String(this.len / this.pageSize).split(".")[0]);
        // 定义一个空数组
        console.log('页数'+(pageNum+1))
        let newArr = [];
        // 遍历获取的数据，每次遍历都从数组的0位置开始截取，截取数量为每页显示的数量
        for (let i = 0; i < pageNum; i++) {
          newArr.push(this.realChoice.splice(0, this.pageSize));
        }
        // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
        if (this.realChoice.length < this.pageSize) {
          newArr.push(this.realChoice.splice(0, this.realChoice.length));
        }
        // 将新的数组赋给articleList[],用来渲染页面
        this.realChoice = newArr;
        // 第一次进入页面显示this.articleList[]数组的第一个元素
        this.showReal = this.realChoice[0]
      },
      handleCurrentChange(val) {
        this.showReal = this.realChoice[val - 1];
      },
    },
  }
</script>
<style scoped>
  @import "../../assets/css/bootstrap-grid.min.css";
  @import "../../assets/css/demo.css";
  @import "../../assets/css/house404.css";
  @media (min-width: 500px) and (max-width: 1024px) { .container{font-size: 10px}.thumbnail p{font-size: 16px} }
  @media (max-width:499px) {
    .container{font-size:8px}

  }
  button, input, optgroup, select, textarea{margin-left:-15px}
  /**{margin:0;padding:0}*/
  .col-sm-7 div{
    height: 40px;

  }
  p:hover{text-decoration: none}
  .pap{
    padding-top:10px ;
    display: inline-block;
    background: #fff;
    margin-top:20px;
  }
  .col-sm-4 div{
    margin-top:10px;
    margin-left: -7px;
  }
  .el-date-editor--daterange.el-input__inner{
    width: 450px;
  }
  .demo{
    padding: 2em 0;
  }
  .box{
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    position: relative;
  }
  .box:before{
    content: '';
    background-color: rgba(255,255,255,0.7);
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
  }
  .box:hover:before{
    left: 15px;
    right: 15px;
    bottom: 15px;
    top: 15px;
    opacity: 1;
    animation:bounce-left 1s ease-in forwards;
  }
  .box img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;
  }
  .box:hover img{ transform: scale(1.5); }
  .box .box-content{
    color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
    transform:translateX(-50%) translateY(-50%) scale(1);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transition:all 0.3s ease 0.5s;
  }
  .box .content{
    opacity: 0;
    transform:translateX(-50%) translateY(-50%);
    position: absolute;
    left:50%;
    top:50%;
    z-index: 2;
    transition:all 0.3s ease 0s;
  }
  .box:hover .content{ opacity: 1; }
  .box .title{
    color: #ff3a6f;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    transform: translateY(-500px);
    opacity: 0;
    transition:all 0.8s ease 0.3s;
  }
  .box .post{
    color: #000;
    font-size:15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 10px;
    opacity: 0;
    transform:translateY(-500px);
    transition:all 0.8s ease 0.15s;
  }
  .box:hover .title,
  .box:hover .post{
    opacity: 1;
    transform:translateY(0);
  }
  .box .icon{
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .box .icon li{
    margin:0 4px;
    opacity: 0;
    display: inline-block;
    transform: translateY(-200px);
    transition: all 0.8s ease 0s;
  }
  .box .icon li:nth-child(2){ transition-delay: 0.1s; }
  .box:hover .icon li{
    opacity: 1;
    transform: translateY(0);
  }
  .box .icon li a{
    color: #fff;
    background-color: #0eb1dc;
    font-size: 18px;
    line-height: 33px;
    height: 35px;
    width: 35px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: block;
    transition: all 0.3s ease 0s;
  }
  .box .icon li a:hover{
    color: #fff;
    background-color: #ff3a6f;
    box-shadow: 0 0 15px #ff3a6f;
  }
  @keyframes bounce-left{
    25%,50%,75%,100%{ transform:translateX(0); }
    40%{ transform:translateX(30px); }
    70%{ transform:translateX(15px); }
    90%{ transform:translateX(5px); }
  }
  @media only screen and (max-width:990px){
    .box{ margin-bottom: 30px; }
  }
  @media only screen and (max-width:479px){
    .box .title{ font-size: 18px; }
  }
</style>
