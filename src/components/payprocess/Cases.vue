<template>
  <div class="open-body">
    <div class="wrapper">
      <div class="bg rotate"></div>
      <div class="open-has ">
        <h3 class="title-close"><span class="user">小沫短租</span>给你发了一个宝箱</h3>
        <h3 class="title-open">恭喜你，<br>成功领取<span class="user">小沫短租</span>发的福利宝箱</h3>
        <div class="mod-chest">
          <div class="chest-close show">
            <div class="gift"></div>
            <div class="tips">
              <i class="arrow"></i>
            </div>
          </div>
          <div class="chest-open ">
            <div class="mod-chest-cont open-cont">
              <div class="content">
                <div class="gift">
                  <div class="icon"><img src="../../assets/chest-icon-zuan.png"></div> x 500 </div>
                <div class="func">
                  <button class="chest-btn">查看详情并提取</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="open-none" style="display:none">
        <h3>你来晚啦，下次早点吧！</h3>
        <div class="mod-chest">
          <div class="chest-open show"></div>
        </div>
        <div class="func">
          <button class="chest-btn">查看领取详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Cases",
      mounted(){
        $(".chest-close").click(function(){
          $(this).addClass("shake");
          var that=this;
          this.addEventListener("webkitAnimationEnd", function(){
            $(that).closest(".open-has").addClass("opened");
            setTimeout(function(){
              $(that).removeClass("show");
              $(that).closest(".mod-chest").find(".chest-open").addClass("show");
              setTimeout(function(){
                $(".chest-open").addClass("blur");
              },500)
            },200)
          }, false);
        });
        $(".chest-btn").click(function(){
          $(".chest-open").hide();
          $(".chest-open").removeClass("show");
        })
      }
    }
</script>

<style scoped>
  /*button  www.xhg.hk*/
  body{background:#FFF4D2;background-size: 320px auto;}
  input[type="text"]{-webkit-appearance: none;border:#cfba8a 1px solid;border:#cfba8a 1px solid;box-sizing:border-box;width:100%;height:33px;outline: none;font-size: 12px;color:#9e702f;padding:0px 8px;}
  .chest-btn{width:100%;display: block;color:#fff;background-image: -webkit-gradient(linear, left top, left bottom, from(#ffa200), to(#ffa200));height:44px;line-height: 44px;border-radius: 3px;font-size: 17px;}
  .chest-btn:active{background-image: -webkit-gradient(linear, left top, left bottom, from(#f09902), to(#f09902));}
  .mod-chest-cont{background: url(../../assets/open-bg-top.png) center top  no-repeat, url(../../assets/open-bg-bottom.png) center bottom  no-repeat;background-size: 276px auto;width:276px;margin:27px auto 118px;position: relative;}
  .mod-chest-cont:before{width:100%;position: absolute;top:12px;bottom:80px;left:0px;content:"";background:#fff;border-left:#e59c00 1px solid;border-right:#e59c00 1px solid;box-sizing:border-box;}
  .mod-chest-cont .content{position: relative;z-index: 2;padding:13px;}
  .mod-chest-cont h3{color:#865500;font-size: 15px;}
  .mod-chest{position: relative;width: 100%;}
  .mod-chest .chest-close{width: 320px;height:135px;opacity: 0;position: relative;z-index: 1;position: absolute;left:50%;top:0px;margin-left:-160px;}
  .mod-chest .chest-close .gift{width: 320px;height:135px;background:url(../../assets/chest.png) no-repeat 0px 0px;background-size: 320px auto;position: absolute;left:0;top:0px;}
  .mod-chest .chest-open{width: 320px;height:150px;background:url(../../assets/chest.png) no-repeat 0px -137px;background-size: 320px auto;opacity: 0;position: relative;z-index: 1;position: absolute;left:0px;top:0px;}
  .mod-chest .chest-open .mod-chest-cont{position: absolute;bottom:-27px;left:50%;margin-left:-138px;}
  .mod-chest .show{z-index: 2;opacity: 1;}
  .wrapper{width: 100%;overflow: hidden;position: relative;}
  .open-body{width: 100%;overflow: hidden;}
  .open-body .bg{position: absolute;z-index: 1;background:url(../../assets/light.png) 0px 0px no-repeat;background-size:452px auto;width:452px;height:510px; max-height:100%; left:50%;margin-left:-226px;top:-25px;}
  .open-body .bg.rotate{-webkit-animation: rotate 10s  infinite  linear;}
  .open-has{position: relative;z-index: 2;height:450px;width: 320px;margin:0px auto;}
  .open-has .title-close{opacity: 1;-webkit-transition:all .5s;width: 100%;text-align: center;}
  .open-has .title-open{opacity: 0;-webkit-transition:all .5s;position: absolute;top:0px;left:0px;text-align: center;width: 100%;}
  .open-has h3{color: #865500;font-size: 15px;text-align: center;padding-top:75px;padding-bottom:33px;}
  .open-has h3 .user{color: #ff5400;margin:0px 5px;display: inline-block;overflow:hidden;text-overflow:ellipsis; max-width: 100px;position: relative;white-space:nowrap;vertical-align: top;}
  .open-has .title-close .user{}
  .mod-chest .chest-close .tips{width: 166px;height:60px;background:url(../../assets/txt-tips-open.png) 0px 0px no-repeat;background-size: 190px auto;position: absolute;left:70px;top:145px;-webkit-transition:all .5s;}
  .mod-chest .chest-close .tips .arrow{width: 26px;height:60px;background:url(../../assets/txt-tips-open.png) right 0px no-repeat;background-size: 190px auto;position: absolute;display: block;top:0px;right:-28px;-webkit-animation:move .7s linear infinite alternate;}
  .mod-chest .chest-close:after{width: 320px;height:300px;position: absolute;top:-100px;left:-61px;content:"";display: block;}
  .mod-chest .chest-close:active{-webkit-transform:scale(1.05);-webkit-transition:all .3s;}
  .mod-chest .chest-close.shake .gift{-webkit-animation:shake 1.2s linear;-webkit-animation-fill-mode:forwards;}
  .mod-chest .chest-close.shake .tips{opacity: 0;}
  .mod-chest .chest-open{}
  .mod-chest .chest-open.blur:after{width: 320px;height: 68px;background: url(../../assets/chest-open-blur.png) no-repeat 0px 0px;background-size: 320px auto;position: relative;z-index: 1;position: absolute;left: 0px;top: -5px;content:"";display: block;}
  .open-has.opened .title-open{opacity: 1;}
  .open-has.opened .title-close{opacity: 0;}
  .open-has.opened .mod-chest .chest-open{-webkit-transform:translate(0px,150px);}
  .open-has .mod-chest-cont{padding:30px 0px 50px;text-align: center;overflow: hidden;opacity: 0;-webkit-transform:translate(0px,30px);/*-webkit-transition:all .3s .3s;-webkit-transition:all .3s .3s cubic-bezier(.53,1.5,.69,1.81);*/z-index: 9;-webkit-animation-fill-mode: forwards;}
  .open-has .chest-open.show .mod-chest-cont{/*-webkit-transform:translate(0px,0px);opacity: 1;*/-webkit-animation:move2 .2s .0s linear;-webkit-animation-fill-mode: forwards;}
  .open-has .mod-chest-cont .gift{color:#ff6000;font-size: 24px;line-height: 30px;padding-bottom:30px;}
  .open-has .mod-chest-cont .gift .icon{width: 58px;height:0px;position:relative;display: inline-block;vertical-align: middle;}
  .open-has .mod-chest-cont .gift img{width: 75px;height:50px;position: absolute;top:-28px;left:-5px;}
  .open-none{position: relative;z-index:2;height:450px;width: 320px;margin:0px auto;}
  .open-none .mod-chest{height:150px;}
  .open-none h3{font-size: 15px;color:#865500;text-align: center;padding-top:35px;padding-bottom:40px;}
  .open-none .func{padding:18px 35px 30px;}
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform:rotate(0deg);
    }
    100% {
      -webkit-transform:rotate(360deg);
    }
  }
  @-webkit-keyframes move {
    0% {
      -webkit-transform:translate(0px ,0px);
    }
    100% {
      -webkit-transform:translate(0px ,-5px);
    }
  }
  @-webkit-keyframes move2 {
    0% {
      -webkit-transform:translate(0px,30px);
      opacity: 0;
    }
    70% {
      -webkit-transform:translate(0px,-20px);
      opacity: 1;
    }
    100% {
      -webkit-transform:translate(0px,0px);
      opacity: 1;
    }
  }
  @-webkit-keyframes shake {
    0% {
      transform: scale(1);
      -webkit-transform: scale3d(1, 1, 1);
    }
    6%{
      -webkit-transform: scale(.9) rotate(-8deg);
      -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -8deg);
    }
    18%, 30%,42%{
      -webkit-transform: scale(1.1) rotate(8deg);
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 8deg);
    }
    12%,24%, 36%,48%{
      -webkit-transform: scale(1.1) rotate(-8deg);
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -8deg);
    }
    54%{
      -webkit-transform: scale(1);
      -webkit-transform: scale3d(1, 1, 1);
    }
    60%{
      -webkit-transform: scale(1);
      -webkit-transform: scale3d(1, 1, 1);
    }
    80% {
      -webkit-transform: scale(1) translate(0px,150px);
      -webkit-transform: scale3d(1, 1, 1) translate3d(0px,150px,0);
    }
    90% {
      -webkit-transform: scale(1) translate(0px,130px);
      -webkit-transform: scale3d(1, 1, 1) translate3d(0px,130px,0);
    }
    100% {
      -webkit-transform: scale(1) translate(0px,150px);
      -webkit-transform: scale3d(1, 1, 1) translate3d(0px,150px,0);
    }
  }
  .chest-notice input{position: relative;top:3px;}
  /*CSS Reset*/
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code,
  form, fieldset, legend, input, textarea, p, blockquote, th, td, header,
  hgroup, nav, section, article, aside, footer, figure, figcaption, menu, button {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size:inherit;
    font-weight: normal;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  fieldset, img {
    border: 0;
  }
  li {
    list-style: none;
  }
  input, textarea, select {
    font-family:inherit;
    font-size:inherit;
    font-weight:inherit;
  }
  button, input[type="text"]{
    border: none;
    background: none;
    -webkit-appearance:none;
    outline:none;
  }
  a {
    -webkit-touch-callout:none;
    text-decoration: none;
    color: #0079ff;
    outline:none;
  }
  em,i {
    font-style: normal;
  }
  ::-webkit-input-placeholder {
    color:#999;
  }
</style>
