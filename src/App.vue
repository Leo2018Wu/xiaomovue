
<template>
  <div class="container">
    <app-navigation-top></app-navigation-top>
    <router-view></router-view>
    <app-navigation-bottom></app-navigation-bottom>
  </div>
</template>
<script>
  import NavigationTop from './components/NavigationTop.vue'
  import NavigationBottom from './components/NavigationBottom.vue'
  import AllHome from './components/home/AllHome.vue'
  export default {
    name: 'App',
    components:{
      'app-navigation-top':NavigationTop,
      'app-navigation-bottom':NavigationBottom,
      'app-all-home':AllHome,

    },
  }
</script>


<style>

</style>
