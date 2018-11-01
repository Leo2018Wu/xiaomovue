<template>
  <div class="row">
    <div id="carousel-item" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators">
        <li data-target="#carousel-item" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-item" data-slide-to="1"></li>
        <li data-target="#carousel-item" data-slide-to="2"></li>
        <li data-target="#carousel-item" data-slide-to="3"></li>
        <li data-target="#carousel-item" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner " role="listbox">
        <div class="item active">
          <img src="../../assets/first-top-01.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/first-top-02.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/first-top-03.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/first-top-04.jpg" alt="">
        </div>
        <div class="item">
          <img src="../../assets/first-top-05.jpg" alt="">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-item" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" href="#carousel-item" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
    <div class="choose">
      <app-choose></app-choose>
    </div>
  </div>
</template>

<script>
  import Choose from './Choose.vue'
  export default {
    name: 'Home',
    components:{
      'app-choose':Choose,
    }
  }

</script>

<style scoped>
</style>
