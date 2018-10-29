<template>
  <div class="container">
    <div class="row">
      <br>
      <div class="col-md-8 container-fluid contact">
        <br><center><h2 class="article_title">联系我们</h2></center><br>
        <p class="about_p"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>欢迎来到小猪，我们将对您的需求和问题提供满意的服务与帮助！</p>
        <p class="second_title">客户服务：</p>
        <p class="about_p">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>如果您在使用小猪平台时，出现任何问题、或者您要给我们提出任何意见和建议，请联系：<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>E-mail：service@xiaozhu.com
        </p>
        <p class="second_title">合作联系：</p>
        <p class="about_p">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>如果您想与小猪洽谈商务合作、市场合作及媒体合作等，请联系：<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>BD商务：bd@xiaozhu.com<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>PR：pr@xiaozhu.com<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>招聘：hr@xiaozhu.com
        </p>
        <p class="second_title">400免费客服热线：</p>
        <p class="about_p">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>400-010-7890<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>为了给您提供更好的服务及方便沟通，请您在发信给我们的时候，留下您的联系方式。<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>对您的来信与来电，我们会非常重视，并及时给您反馈！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContactUs"
    }
</script>

<style scoped>
  .contact{
    background-color: #F5F5F5;
    border: 1px solid gainsboro;
  }
  .article_title{
    color:#FF666A;
  }
  .second_title{
    color:#FF9966;
  }
  @media (max-width: 768px) {
    .article_title{
      font-size:15px;
    }
    p{
      font-size: 13px;
      line-height: 20px;
    }
  }
  @media (min-width: 768px) {
    .article_title{
      font-size:16px;
    }
    p{
      font-size: 14px;
      line-height: 25px;
    }
  }
  @media (min-width: 992px) {
    .article_title{
      font-size:17px;
    }
    p{
      font-size: 15px;
      line-height: 30px;
    }
  }
  @media (min-width: 1280px) {
    .article_title{
      font-size:18px;
    }
    p{
      font-size: 16px;
      line-height: 35px;
    }
  }
</style>
