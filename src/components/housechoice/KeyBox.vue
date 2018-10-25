<template>
  <el-input
    placeholder="位置，房间名，或房屋风格"
    v-model="input"
    clearable
    style="width: 350px">
  </el-input>
</template>

<script>
    export default {
        name: "KeyBox",
      computed:{
          input:{
            get:function () {
              return this.$store.state.keyBox
            },
            set(key){
              this.$store.state.keyBox = key
            }
          }
      },
      data() {
        return {
          // input: ''
        }
      }
    }
</script>

<style scoped>

</style>
