<template>
  <div class="block">
    <el-cascader
    :options="options2"
    :show-all-levels="false"
    @active-item-change="handleItemChange"
    :props="props"
    style="width: 350px"
    placeholder="城市或目的地"
    v-model="city"
  ></el-cascader></div>

</template>

<script>
    export default {
        name: "DestinaBox",
      // data(){
      //   return {
      //     city:this.$route.params.city
      //   }
      // }
      data() {
        return {
          options2: [
          {
            label: '江苏',
            cities: []
          }, {
            label: '浙江',
            cities: []
          }],
          props: {
            value: 'label',
            children: 'cities'
          }
        }
      },
      computed:{
          city:{
            get:function () {
              return this.$store.state.mycity
            },
            set(value){
              this.$store.state.mycity = value
            }
          },
        // date:{
        //     get:function () {
        //       return this.$store.state.mydate
        //     },
        //   set(value){
        //       this.$store.state.mydate = value
        //   }
        // }
      },
      methods: {
        handleItemChange(val) {
          console.log('active item:', val);
          setTimeout(_ => {
            if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
              this.options2[0].cities = [{
                label: '南京'
              }];
            } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
              this.options2[1].cities = [{
                label: '杭州'
              }];
            }
          }, 300);
        }
      }
    }
</script>

<style scoped>
el-slider{padding-right:10px;}
</style>
