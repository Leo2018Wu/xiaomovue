<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="slider-box">
          <img class="img-responsive" :src="slider_img[cur_index]" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Picture",
      data () {
        return {
          cur_index: 0, // 当前幻灯片的下标
          // 定义一个专门放幻灯片的模型
          slider_img: [
            require('../../assets/about_banner_01.jpg'),
            require('../../assets/about_banner_02.jpg'),
            require('../../assets/about_banner_03.jpg')
          ],
          // 定义一个实现轮播图的模型
          sliders: [
            setInterval(() => {
              if (this.cur_index === this.slider_img.length - 1) {
                this.cur_index = 0
              } else {
                this.cur_index++
              }
            }, 4000)
          ]
        }
      }
    }
</script>

<style scoped>
  .img-responsive{
    margin: 0 auto;
  }
</style>
