import Vue from 'vue'
import Router from 'vue-router'
//吴志斌路由
import HouseChoose from '../components/housechoice/HouseChoose.vue'
// import Home from '../Home.vue'
import Login from '../components/user/Login.vue'
import Register from '../components/user/Register.vue'
import FindPwd from '../components/findpwd/FindPwd.vue'
import ChangePwd from '../components/findpwd/ChangePwd.vue'
import IntorHouse from '../components/intorhouse/IntorHouse.vue'
//卢露路由
import Guide from '../components/Guide of rent/Guide.vue'
import Guidea from '../components/Guide of rent/Guidea.vue'
import Guideb from '../components/Guide of rent/Guideb.vue'
import Guidec from '../components/Guide of rent/Guidec.vue'
import Center from '../components/Personal center/Center.vue'
import Sharediscount from '../components/Personal center/Sharediscount.vue'
import Myorder from '../components/Personal center/Myorder.vue'
import Orderempty from '../components/Personal center/Orderempty.vue'
import Myassessment from '../components/Personal center/Myassessment.vue'
import Mydiary from '../components/Personal center/Mydiary.vue'
import Diaryempty from '../components/Personal center/Diaryempty.vue'
import Occupant from '../components/Personal center/Occupant.vue'
import Personaldata from '../components/Personal center/Personaldata.vue'
import Mysave from '../components/Personal center/Mysave.vue'
import Updatepwd from '../components/Personal center/Updatepwd.vue'
import Diarydetail from '../components/Personal center/Diarydetail.vue'
import Successdetail from '../components/Personal center/Successdetail.vue'
import Waitdetail from '../components/Personal center/Waitdetail.vue'
import Finishdetail from '../components/Personal center/Finishdetail.vue'
import Cancledetail from '../components/Personal center/Cancledetail.vue'
import Diaryedit from '../components/Personal center/Diaryedit.vue'
import Assessmentedit from '../components/Personal center/Assessmentedit.vue'
// 刘铭君开始
import AllHome from '@/components/home/AllHome.vue'
import Discounts from '@/components/discountpage/Discounts.vue'
//许颖路由
import RightNav from '@/components/navdetails/RightNav.vue'
import AboutUs from '@/components/navdetails/AboutUs.vue'
import Service from '@/components/navdetails/Service.vue'
import ContactUs from '@/components/navdetails/ContactUs.vue'
import Declaration from '@/components/navdetails/Declaration.vue'
import Rules from '@/components/navdetails/Rules.vue'
import Write from '@/components/payprocess/Write.vue'
import Pay from '@/components/payprocess/Pay.vue'
import Finish from '@/components/payprocess/Finish.vue'
import UnFinished from '@/components/payprocess/UnFinished.vue'
Vue.use(Router)
// export const routes = [
//   {path: '/fpwd',component: FindPwd},
//   {path: '/cpwd',component: ChangePwd},
//   {path: '/intorhouse',component: IntorHouse},
//   {path:'*',redirect:'/'} //重定向，针对任何未匹配路由，到达首页路由
//   ]
export default new Router({
  mode:'history',
  routes:[

    //卢露路由
    {path:'/guide',component:Guide,
      children:[
        {path:'',component:Guidea},
        {path:'/guide/guideb',component:Guideb},
        {path:'/guide/guidec',component:Guidec}
      ]
    },
    {path:'/center',component:Center,
      children:[
        {path:'',component:Sharediscount},
        {path:'/center/myassessment',component:Myassessment},
        {path:'/center/diaryempty',component:Diaryempty,
          children:[
            {path:'/center/diaryempty',component:Mydiary},
            {path:'/center/diaryempty/:did',component:Diarydetail}
          ]
        },
        {path:'/center/occupant',component:Occupant},
        {path:'/center/personaldata',component:Personaldata},
        {path:'/center/mysave',component:Mysave},
        {path:'/center/orderempty',component:Orderempty,
          children:[
            {path:'/center/orderempty',component:Myorder},
            {path:'/center/orderempty/Successdetail/:oIdq',component:Successdetail},
            {path:'/center/orderempty/:oIdw',component:Waitdetail},
            {path:'/center/orderempty/:oIde',component:Finishdetail},
            {path: '/center/orderempty/diary/:oIdr',component:Diaryedit},
            {path: '/center/orderempty/assessment/:oIdt',component:Assessmentedit},
            {path:'/center/orderempty/Cancledetail/:oIdy',component:Cancledetail},
          ]

        },
        {path:'/center/updatepwd',component:Updatepwd}
      ]
    },

    //陈文杰路由
    {path: '/fpwd',component: FindPwd},
    {path: '/cpwd',component: ChangePwd},
    {path: '/intorhouse/:hId',component: IntorHouse},

    //许颖路由
    {path:'/rightnav',component:RightNav,children:[
        {path:'/rightnav/about',component:AboutUs},
        {path:'/rightnav/service',component:Service},
        {path:'/rightnav/contact',component:ContactUs},
        {path:'/rightnav/declaration',component:Declaration},
        {path:'/rightnav/rules',component:Rules},
      ]},
    {path: '/write', component: Write},
    {path: '/pay', component: Pay},
    {path:'/finish',component:Finish},
    {path:'/unfinish',component:UnFinished},
    // 刘铭君开始
        {path: '/', component: AllHome},
        {path: '/discounts', component: Discounts},
    //   {path: '/discount', component: Discount,children:[
      //   {path: '/discount', component: DiscountDefault},
      //   {path: '/discount/discountfirst', component: DiscountFirst},
      //   {path: '/discount/discountsecond', component: DiscountSecond},
      //   {path: '/discount/discountthird', component: DiscountThird},
      // ]},
    //  吴志斌路由
    // {path:'/home',component: Home},
    {path:'/house/:choose',component:HouseChoose},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'*',redirect:'/'} //重定向，针对任何未匹配路由，到达首页路由
  ],
})
