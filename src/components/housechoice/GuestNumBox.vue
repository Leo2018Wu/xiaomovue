<template>
  <el-select v-model="value4" clearable placeholder="请选择入住人数" style="width: 350px">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"

  >
  </el-option>
</el-select>
</template>

<script>
    export default {
        name: "GuestNumBox",
      data() {
        return {
          options: [{
            value: '选项1',
            label: 1,
          }, {
            value: '选项2',
            label: 2
          }, {
            value: '选项3',
            label: 3
          }, {
            value: '选项4',
            label: 4
          }, {
            value: '选项5',
            label: 5
          },{
            value: '选项6',
            label: 6
          },{
            value: '选项7',
            label: 7
          },{
            value: '选项8',
            label: 8
          }
          ],
          // value4: ''
        }
      },
      computed:{
        value4:{
            get:function () {
              return this.$store.state.value4
            },
            set(value){
              this.$store.state.value4 = value
            }
          }
      }
    }
</script>

<style scoped>

</style>
