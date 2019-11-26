<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <myinput
        placeholder="请输入手机号"
        label="手机号"
        class="input"
        v-model="users.username"
         />
        <myinput
        placeholder="密码"
        label="密码"
        class="input"
        type="password"
        v-model="users.password" />
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <div  class="button" @click="btn">登录按钮</div>
    </div>
  </div>
</template>

<script>
import myinput from '../components/myinput'
export default {
  data () {
    return {
      users: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    myinput
  },
  methods: {
    btn () {
      console.log(this.users)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
