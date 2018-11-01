<template>
  <div class="container">
    <div class="row">
      <br>
      <div class="rules col-md-8 container-fluid contact">
        <br><center><h2 class="article_title">未成年人入住规则</h2></center><br>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>根据《民法通则》第十二条规定“十周岁以上的未成年，人是限制民事行为能力人，可以进行与他的年龄、智力相适应的民 事活动;其他民事活动由他的法定代理人代理，或者征得他的法定代理人的同意。不满十周岁的未成年人是无民事行为能力人，由他的法定代理人代理民事活动”，未成年人不得擅自租赁房屋。为此若未成年人有意入住小猪短租网房源，本网站建议如下:<br>
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>一、可由该未成年人的父母代理预订，并在入住时向房东主动出示《监护人声明》及可以证明该监护人与该未成年入住人 亲子关系的《户口本》复印件;
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>二、该若未成年人在本网站自行预订房屋，应在入住时主动向房东出示《监护人声明》及可以证明该监护人与该未成年入 住人亲子关系的《户口本》复印件，并说明入住原因。对于无法提供《监护人声明》及《户口本》复印件的，房东有权拒绝该未成人入住。
        </p>
        <p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>三、对于因未成人单独擅自入住且无法提供任何证明材料而产生的一切问题，由房东和该未成年人家属自行解决。本网站 不承担一切相应民事及刑事责任。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Rules"
  }
</script>

<style scoped>
  .rules{
    background-color: #F5F5F5;
    border: 1px solid gainsboro;
  }
  .article_title{
    color:#FF666A;
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
      font-size: 14px;
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
