import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)//第三方插件
export default new Vuex.Store({
  state: {
    create_start_date: '',
    create_end_date: '',
    startdate:'',
    enddate:'',
    name1:'',
    identity1:'',
    phone1:'',
    number:'1',
    newdate:'',
    uId:'',
    // 刘铭君开始
    mycity:'',
    // mydate:'',
    // 刘铭君结束
    // mycityliu:[],
    // mydateliu:'',
    // myPNum:'',
    type:0,
    //登录

    phone:'',
    username:'',
    pwd:'',
    //吴志斌
    value4:'',
    keyBox:'',
    priceBox:'',
    styleBox:'',
    //  陈文杰
    hName:'',
    houseprice:'',
    househId:'',

  },
})
