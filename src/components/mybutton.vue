<template>
  <button @click="button" class="btn">{{text}}</button>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    button (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
.btn {
  width: 80%;
  margin: 0 auto;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d81e06;
  color: #fff;
  border-radius: 50px;
  font-style: 20px;
}
</style>
