<template>
  <div class="container">
    <div class="row">
      <br>
      <div class="reviews col-md-8 container-fluid contact">
        <br><center><h2 class="article_title">点评发布规则</h2></center><br>
        <p class="second_title">入住点评</p>
        <p class="about_p">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>房客对本次入住过程加以评价，将威两.观点建议等通过文字展示计来;房东也可对此点评做出向真;房高的入住点评是评价房东服务 能力和其他房有丁房时的重要参考依据。<br>
        </p>
        <p class="second_title">点评发布规则</p>
        <ol>
          <li>点评词句流畅含义清折，月显语法错误!</li>
          <li>
            点评内容中不得含有以下内容:
            <p>
              a.色情,反动等丰法内容<br>
              b.辱骂、人身攻击的直按词汇或同音词.网络用语等<br>
              c.厂告宣传类内容<br>
              d.小与入住体验无关、无意义的内容<br>
              e.投诉或咨讯类的内容<br>
              f.胁迫或诱导他人编与不实点讲文字<br>
            </p>
          </li>
        </ol>
        <p class="second_title">点评审核结果</p>
        <ol>
          <li>符台猪短租相关规购点评内容，将继续在线展示;</li>
          <li>不符合小沫短租相关规则的点评内容，“则猪短租”将下线该点评展示，发布人可在“小沫短租”房客(房东)中心的“消息通知”中查看并可重新发布点评;</li>
        </ol>
        <h6>用户在“小沫短租”发布的点评内容及版权归“小沫矩粗”所有未轻允许不得擅自转载使用。</h6>
        <h6>小沫短祖”保留对点评内容展示调整权及删除权。</h6>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Reviews"
    }
</script>

<style scoped>
  .reviews{
    background-color: #F5F5F5;
    border: 1px solid gainsboro;
  }
  .article_title{
    color: #FF666A;
  }
  .second_title{
    color: #FF9966;
  }
  h6{
    font-weight: bold;
    margin-left: 5%;
  }
  @media (max-width: 768px) {
    .article_title{
      font-size:15px;
    }
    .second_title{
      font-size:14px;
    }
    p,ol{
      font-size: 13px;
      line-height: 20px;
    }
    h6{
      font-size: 10px;
      line-height: 20px;
    }
  }
  @media (min-width: 768px) {
    .article_title{
      font-size:16px;
    }
    .second_title{
      font-size:15px;
    }
    p,ol{
      font-size: 14px;
      line-height: 25px;
    }
    h6{
      font-size: 11px;
      line-height: 20px;
    }
  }
  @media (min-width: 992px) {
    .article_title{
      font-size:17px;
    }
    .second_title{
      font-size:16px;
    }
    p,ol{
      font-size: 15px;
      line-height: 30px;
    }
    h6{
      font-size: 12px;
      line-height: 20px;
    }
  }
  @media (min-width: 1280px) {
    .article_title{
      font-size:18px;
    }
    .second_title{
      font-size:17px;
    }
    p,ol{
      font-size: 16px;
      line-height: 35px;
    }
    h6{
      font-size: 13px;
      line-height: 20px;
    }
  }
</style>
