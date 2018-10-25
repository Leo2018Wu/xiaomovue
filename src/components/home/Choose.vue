<template>
  <div class="row">
    <div class="all-choose col-xs-8 col-xs-push-2">
      <div>
        <el-select v-model="city" placeholder="请选择城市" class="select-option col-xs-6 col-xs-push-2">
          <el-option-group
            class="choose-city"
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
        <router-link to="/house/order">
        <div class="button col-xs-2 col-xs-push-2">搜索小沫</div>
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: '上海',
            label: '上海'
          }, {
            value: '北京',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: '成都',
            label: '成都'
          }, {
            value: '深圳',
            label: '深圳'
          }, {
            value: '广州',
            label: '广州'
          }, {
            value: '大连',
            label: '大连'
          }]
        }],
      };
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
  }
</script>
<style scoped>
  .all-choose{
    margin-top: -110px;
    text-align: center;
    padding: 20px 0; ;
    /*background-color: #ffa297;*/
  }
  .button{
    margin-left: -20px;
    height: 40px;
    line-height: 40px;
    background-color: #ffa297;
    font-size: 16px;
    color:white;
    text-align: center;
  }
</style>
