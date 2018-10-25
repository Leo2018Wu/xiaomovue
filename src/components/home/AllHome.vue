<template>
    <div class="container">
      <app-choose></app-choose>
      <app-home-first></app-home-first>
      <app-home-second></app-home-second>
      <app-home-third></app-home-third>
      <app-home-fourth></app-home-fourth>
      <app-home-fifth></app-home-fifth>
    </div>
</template>

<script>
  import HomeFirst from './HomeFirst.vue'
  import Choose from './Choose.vue'
  import HomeSecond from './HomeSecond.vue'
  import HomeThird from './HomeThird.vue'
  import HomeFourth from './HomeFourth.vue'
  import HomeFifth from './HomeFifth.vue'

    export default {
        name: "AllHome",
      components:{
        'app-home-first':HomeFirst,
        'app-choose':Choose,
        'app-home-second':HomeSecond,
        'app-home-third':HomeThird,
        'app-home-fourth':HomeFourth,
        'app-home-fifth':HomeFifth,
      }

    }
</script>

<style scoped>

</style>
