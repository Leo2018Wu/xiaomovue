<template>
  <div class="block">
    <el-date-picker
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2"
      v-model="value7"
      format= "yyyy年MM月dd日"
      value-format= "yyyy-MM-dd"
    >
    </el-date-picker>
  </div>
</template>

<script>
    export default {
        name: "DateBox",
      computed:{
        value7:{
            get:function () {
              return this.$store.state.mydate
            },
          set(value){
              this.$store.state.mydate = value
          }
        }
      },
      data() {
        return {
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          value6: '',
        }
      }
    }
</script>

<style scoped>
.block{
  width: 350px;
}
el-date-picker{border:none}
</style>
