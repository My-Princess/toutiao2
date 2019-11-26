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
        class="input"
        v-model="users.username"
        :rules='/^1\d{10}$/'
        err_msg='请输入11位手机号~~'
        />
        <myinput
        placeholder="密码"
        class="input"
        type="password"
        v-model="users.password" />
      </div>
      <p class="tips">
        没有账号？
        <a href="javascript:;" @click="$router.push({path: '/register'})" class>去注册</a>
      </p>
      <mybutton class="button" text="登录" @click="btn"></mybutton>
    </div>
  </div>
</template>

<script>
import myinput from '../components/myinput'
import mybutton from '../components/mybutton'
import { login } from '../api/users'
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
    myinput, mybutton
  },
  methods: {
    btn () {
      // console.log(this.users)
      login(this.users)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            // 将服务器返回的token数据存储到本地
            localStorage.setItem('toutiao2', res.data.data.token)
            // 将id存储到本地
            localStorage.setItem('toutiao2', res.data.data.user.id)
            this.$router.push({ name: 'Personal' })
          }
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('登录失败')
        })
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
