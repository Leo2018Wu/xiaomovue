<template>
  <div class="container"style="">
    <template>
      <div class="container" style="margin-left: -15px;margin-top:80px;">
        <div class="row" >
          <div class="col-xs-5 col-md-5">
            <div class="col-xs-12 col-md-12 box">
              <destina-box></destina-box>
            </div>
            <div class="col-xs-12 col-md-12 box">
              <date-box></date-box>
            </div>
            <div class="col-xs-12 col-md-12 box">
              <guest-num></guest-num>
            </div>
            <div class="col-xs-12 col-md-12 box">
              <key-box></key-box>
            </div>
          </div>
          <div class="col-xs-7 col-md-7">
            <div class="col-xs-12 col-md-12 box"><price-box></price-box></div>
            <div class="col-xs-12 col-md-12 box">
              <div>
                <span>设施</span>
                <label v-for="fac in facs">
                  <input type="checkbox" name="optionsRadios" id="optionsRadios1" value="option1" aria-checked="">{{fac}}
                </label>
              </div>
            </div>
            <div class="col-xs-12 col-md-12 box">
              <div><span> 风格</span>
                <label v-for="sty in styles">
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option1" aria-checked="">{{sty}}
                </label>
              </div>
            </div>
            <div class="col-xs-12 col-md-12 box">
              <div>
                <span>位置</span>
                <label  v-for="loc in locations">
                  <input type="checkbox">{{loc}}
                </label>
              </div>
            </div>
          </div>
        </div>
        <ul class="list-inline list-unstyled" style="margin-top: 30px;float: right">
          <li v-on:click="show(0)">推荐</li>
          <li v-on:click="show(1)">好评</li>
          <li v-on:click="show(2)">价格</li>
        </ul>
      </div>
    </template>
    <div class="row list-pic" v-if="type== 2">
      <div class="col-xs-12 col-md-12">
        <div class="thumbnail col-xs-3 col-md-3" v-for="item in priceOrderHouse">
          <img :src="item.hPic1" alt="">
          <div class="caption" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
            <p>{{item.hLocation}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row list-pic" v-else-if="type==0">
      <div class="col-xs-12 col-md-12">
        <div class="thumbnail col-xs-3 col-md-3" v-for="item in thumbOrderHouse">
          <img :src="item.hPic1" alt="">
          <div class="caption" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
            <p>{{item.hLocation}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row list-pic" v-else="type==1">
      <div class="col-xs-12 col-md-12">
        <div class="thumbnail col-xs-3 col-md-3" v-for="item in scoreOrderHouse">
          <img :src="item.hPic1" alt="">
          <div class="caption" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
            <p>{{item.hLocation}}</p>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation" >
      <ul class="pagination" style="margin-left:37%">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  // import ListHouse from './ListHouse.vue'
  import Date from './DateBox'
  import Desti from './DestinaBox'
  import GuestN from './GuestNumBox'
  import Key from './KeyBox'
  import Price from './PriceBox'
  import axios from 'axios'
    export default {
        name: "HouseChoose",
      data(){
          return {
            locations:['车站','景点','机场','高校','地铁','医院','商圈'],
            facs:['淋浴','空调','电视','网络','允许做饭','暖气','独卫'],
            styles:['古典','乡村田园','地中海','现代简约','欧式','东南亚','中式复古','暗黑哥特','雅致主义'],
            mydata:[],
            type:0,
          }
      },
      computed:{
        //价格排序
        priceOrderHouse:function () {
          return _.orderBy(this.mydata,['hPrice'],['asc'])
        },
        //推荐排序(默认显示)
        thumbOrderHouse:function () {
          return _.orderBy(this.mydata,['hThumbs'],['asc'])
        },
        //好评排序
        scoreOrderHouse:function () {
          return _.orderBy(this.mydata,['hScore'],['asc'])
        },
        //入住人数排序
        // guestNum:function () {
        //   var self = this
        //   return self.mydata.filter(function () {
        //
        //   })
        // }
      },
      filters:{
        //
      },
      methods:{
          show:function (index) {
            this.type= index;
          }
      },
      components:{
        // 'choose-list-house':ListHouse,
        'date-box':Date,
        'destina-box':Desti,
        'guest-num':GuestN,
        'key-box':Key,
        'price-box':Price
      },created(){
        axios.get(`http://localhost:3000/house/styleHouse`).then((res)=>{
          //渲染页面
          console.log(res)
          this.mydata = res.data.data;
        }),(err)=>{
          console.log(err)
        }
      }
    }
</script>

<style scoped>
  .container{
    background: #ecf0f1;
    min-width: 1028px;
  }
  .box{
    margin-top:10px;
    background: #fff;
    height: 40px;
  }
  label{
    display: inline-block;
    font-weight: unset;
  }
  label input{margin-left:5px;}
  .thumbnail{
    margin-top: -20px;
  }
  .list-pic{
    margin-top:20px;
  }
</style>
