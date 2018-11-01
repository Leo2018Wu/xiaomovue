<template>
  <div class="row">
    <div class="all-choose col-xs-8 col-xs-push-2">
      <div class="row">
        <el-select v-model="city" ref="first" clearable placeholder="请选择热门城市" class="col-xs-6 col-xs-offset-2">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--<router-link to="/house/order">-->
        <div class="button col-xs-2" @click="changeCity">搜索小沫</div>
        <!--</router-link>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '北京',
          label: '北京'
        }, {
          value: '上海',
          label: '上海'
        }, {
          value: '广州',
          label: '广州'
        }, {
          value: '深圳',
          label: '深圳'
        }, {
          value: '苏州',
          label: '苏州'
        }, {
          value: '南京',
          label: '南京'
        },{
          value: '杭州',
          label: '杭州'
        }],
      }
    },
    computed: {
      city: {
        get: function () {
          return this.$store.state.mycity
        },
        set(value) {
          this.$store.state.mycity = value
        }
      },
    },
    methods:{
      changeCity(){
        console.log(this.$store.state.mycity)
        if(this.$store.state.mycity == ''){
          alert('请输入城市')
        }else{
          this.$router.push({path:'/house/order'})
        }
      }
    }
  }
</script>
<style scoped>
  .all-choose{
    margin-top: -110px;
    text-align: center;
    padding: 20px 0; ;
  }
  .button{
    margin-left: -20px;
    height: 40px;
    line-height: 40px;
    background-color: #ff666A;
    font-size: 16px;
    color:white;
    text-align: center;
    cursor: pointer;
  }
</style>
