<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
    export default {
        name: "PriceBox",
      computed:{
          value:{
            get:function () {
              return this.$store.state.priceBox
            },
            set:function (price) {
              this.$store.state.priceBox =price
            }
          }
      },
      data() {
        return {
          // value: 0
        }
      }
    }
</script>

<style scoped>
.block{width:80%;}
</style>
