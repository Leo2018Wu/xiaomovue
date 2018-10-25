<template>
  <div class="container">
    <div class="row">
      <div class="content">
      <app-picture></app-picture>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
      <br>
      <div class="col-md-3 col-md-offset-1 info-right container-fluid hidden-xs hidden-sm">
        <dl class="about_sider">
          <dt>网站介绍</dt>
          <dd><router-link to="/rightnav/about">&nbsp;<a>关于我们</a></router-link></dd>
          <dd><router-link to="/rightnav/contact">&nbsp;<a>联系我们</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>网站地图</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>友情链接</a></router-link></dd>
        </dl>
        <dl class="about_sider">
          <dt>法律协议</dt>
          <dd><router-link to="">&nbsp;<a>隐私保护声明</a></router-link></dd>
          <dd><router-link to="/rightnav/declaration">&nbsp;<a>版权声明</a></router-link></dd>
          <dd><router-link to="/rightnav/service">&nbsp;<a>服务协议</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>免责声明</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>知识产权声明</a></router-link></dd>
        </dl>
        <dl class="about_sider"><span></span>
          <dt>服务规则</dt>
          <dd><router-link to="">&nbsp;<a>房东规则</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>房客规则</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>房源上线标准</a></router-link></dd>
          <dd><router-link to="">&nbsp;<a>点评发布规则</a></router-link></dd>
          <dd><router-link to="/rightnav/rules">&nbsp;<a>未成年人入住规则</a></router-link></dd>
        </dl>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Picture from './Picture.vue'
    export default {
        name: "RightNav",
      components:{
        'app-picture':Picture,
      }
    }
</script>
<style scoped>
  a:hover{
    color:#FF6666;
    text-decoration: none;
  }
  .content{
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    dt{
      font-size:16px;
    }
    dl{
      font-size: 12px;
      line-height: 20px;
    }
  }
  @media (min-width: 992px) {
    dt{
      font-size:18px;
    }
    dl{
      font-size: 14px;
      line-height: 25px;
    }
  }
  @media (min-width: 1280px) {
    dt{
      font-size:20px;
    }
    dl{
      font-size: 16px;
      line-height: 30px;
    }
  }
</style>
