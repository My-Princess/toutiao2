<template>
  <van-field
  class="input"
  :placeholder="placeholder"
  :label="label"
  @input="monitvalue"
  :error="error"
  />
</template>

<script>
export default {
  props: ['placeholder', 'label'],
  data () {
    return {
      error: false
    }
  },
  methods: {
    monitvalue (event) {
      // 获取输入框的值 注意这个event值时输入框数据
      //   console.log(event)
      this.$emit('input', event)
    }
  }

}
</script>

<style scoped>
.input {
    margin: 10px auto;
  width: 90%;
  height: 38 / 360 * 100vw;
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  border: none;
  border-bottom: 2px #999 solid;
  outline: none;
  font-size: 16px;
}

.success{
    border-bottom-color: green;
}

.error{
    border-bottom-color: red;
}
</style>
