<template>
  <div class="container">
    <div class="row">
      <br>
      <div class="col-md-8 container-fluid declaration">
        <br><center><h2 class="article_title">版权声明</h2></center><br>
        <ol>
          <li>北京快跑信息科技有限公司（以下简称“北京快跑”）拥有对其在小猪网（www.xiaozhu.com）（以下简称“本网”）及其有关产品包括但不限于APP、H5页面发布的包括但不限于产品内容、服务内容及全部材料的版权等知识产权。以上提及的包括版权在内的所有知识产权受法律保护。</li>
          <li>除小猪网用户自行上传的信息外，凡带有“小猪实拍”水印、“小猪”LOGO的所有文字、图片、音频、视频及页面设计、编排、软件、及小猪网（www.xiaozhu.com）及其有关产品包括但不限于APP、H5页面上的素材，其版权均属于“北京快跑”。任何媒体、单位或个人未经“北京快跑”书面授权不得以任何形式转载、摘编、改编或以其他方式复制发表。经“北京快跑”授权的媒体、单位或个人，应在授权范围内使用，并注明“来源小猪网”或使用其他可以明确指明资料来源的文字说明。除小猪网用户自行上传的信息外，凡带有“小猪实拍”水印、“小猪”LOGO的所有文字、图片、音频、视频及页面设计、编排、软件、及小猪网（www.xiaozhu.com）及其有关产品包括但不限于APP、H5页面上的素材，其版权均属于“北京快跑”。任何媒体、单位或个人未经“北京快跑”书面授权不得以任何形式转载、摘编、改编或以其他方式复制发表。经“北京快跑”授权的媒体、单位或个人，应在授权范围内使用，并注明“来源小猪网”或使用其他可以明确指明资料来源的文字说明。</li>
          <li>除法律另有规定外，未经“北京快跑”书面许可，任何人不得对本网及相关产品中拥有版权和/或其他知识产权的任何内容进行使用、复制、修改、抄录、传播或与其它产品捆绑使用、销售，或在非本网所属的服务器上进行镜像处理或以其他任何方式进行使用。</li>
          <li>对于不当转载或引用本网内容而引起的民事纷争、行政处理或其他损失，“北京快跑”不承担责任。</li>
          <li>对不遵守本声明的用户或其他违法、恶意使用本网内容者，“北京快跑”保留追究其法律责任的权利。</li>
          <li>本声明未涉及的问题请参见国家有关法律法规，当本声明与国家有关法律法规冲突时，以国家法律法规为准。</li>
          <li>本网站相关声明版权及其修改权、更新权和最终解释权均属“北京快跑”所有。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Declaration"
    }
</script>

<style scoped>
  .declaration{
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
    ol{
      font-size: 14px;
      line-height: 25px;
    }
  }
  @media (min-width: 992px) {
    .article_title{
      font-size:17px;
    }
    ol{
      font-size: 15px;
      line-height: 30px;
    }
  }
  @media (min-width: 1280px) {
    .article_title{
      font-size:18px;
    }
    ol{
      font-size: 16px;
      line-height: 35px;
    }
  }
</style>
