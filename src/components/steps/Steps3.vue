<template>
  <div class="container">
    <div class="row">
      <div class="steps3">
        <ol class="ui-step ui-step-red ui-step-3">
          <li class="step-start step-done">
            <div class="ui-step-line"></div>
            <div class="ui-step-cont">
              <span class="ui-step-cont-number">1</span>
              <span class="ui-step-cont-text">填写订单</span>
            </div>
          </li>
          <li class="step-active">
            <div class="ui-step-line"></div>
            <div class="ui-step-cont">
              <span class="ui-step-cont-number">2</span>
              <span class="ui-step-cont-text">支付订单</span>
            </div>
          </li>
          <li class="step-end">
            <div class="ui-step-line"></div>
            <div class="ui-step-cont">
              <span class="ui-step-cont-number">3</span>
              <span class="ui-step-cont-text">完成预定</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Steps3"
  }
</script>

<style scoped>
  ol {
    list-style: none outside none;
    margin: 0;
    padding: 0;
  }

  .ui-step {
    color: #FF666A;
    padding: 0 60px;
    margin-bottom: 35px;
    position: relative;
  }
  .ui-step:after {
    display: block;
    content: "";
    height: 0;
    font-size: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .ui-step li {
    float: left;
    position: relative;
  }
  .ui-step .step-end {
    width: 120px;
    position: absolute;
    top: 0;
    right: -60px;
  }
  .ui-step-line {
    height: 5px;
    background-color: #e0e0e0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.2);
    margin-top: 15px;
  }
  .step-end .ui-step-line { display: none; }
  .ui-step-cont {
    width: 120px;
    position: absolute;
    top: 0;
    left: -15px;
    text-align: center;
  }
  .ui-step-cont-number {
    display: inline-block;
    *zoom:1;
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border-radius: 50%;
    font-family: tahoma;
    font-weight: bold;
    font-size: 16px;
    background-color: #FF666A;
    box-shadow: inset 1px 1px 2px rgba(0,0,0,.2);
  }
  .ui-step-cont-text {
    position: relative;
    top: 34px;
    left: -42px;
    font-size: 16px;
  }
  /** 步骤数定义 **/
  .ui-step-3 li { width: 50%; }
  .ui-step-4 li { width: 33.3%; }
  .ui-step-5 li { width: 25%; }
  .ui-step-6 li { width: 20%; }
  /** The default style (默认风格) **/
  /** Red **/
  /* Done */
  .ui-step-red .step-done .ui-step-cont-number { background-color: #FF666A; }
  .ui-step-red .step-done .ui-step-cont-text { color: #FF666A; }
  .ui-step-red .step-done .ui-step-line { background-color: #FF666A; }
  /* Active */
  .ui-step-red .step-active .ui-step-cont-number { background-color: #FF666A; }
  .ui-step-red .step-active .ui-step-cont-text { color: #FF666A; }
  .ui-step-red .step-active .ui-step-line { background-color: #FF666A; }
</style>
