<template>
  <input
  class="input"
  :placeholder="placeholder"
  @input="monitvalue"
  :class="{success:this.status === 'success',error:this.status === 'error'}"
  @blur="blur"
  />

</template>

<script>
export default {
  props: ['placeholder', 'label', 'err_msg', 'rules'],
  data () {
    return {
      status: ''
    }
  },
  methods: {
    monitvalue (event) {
      // 获取输入框的值 注意这个event值时输入框数据
      // console.log(event)
      const { value } = event.target
      // 发射数据
      this.$emit('input', value)

      //   验证匹配规则 监听当前值的变化，动态的添加样式
      if (this.rules) {
        //   test:判断指定的字符串是否匹配当前的正则表达式
        if (this.rules.test(value)) {
          this.status = 'success'
        } else {
          this.status = 'error'
        }
      }
    },
    // 失去焦点时
    blur (event) {
      const { value } = event.target
      if (this.rules) {
        if (!this.rules.test(value)) {
          // 给出用户提示
          this.$toast(this.err_msg || '输入错误')
        }
      }
    }
  }
}

</script>

<style scoped>
.input {
    display: block;
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
