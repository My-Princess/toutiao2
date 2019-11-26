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
        :rules='/^1\d{10}$/'
        @input="namedata"
        :value="userdata.username"
        err_msg='请输入11位手机号~~'
        />
        <myinput
         placeholder="呢称"
         :rules="/^\w+$/"
         err_msg="呢称格式输入有误！"
         @input="nickdata"
         :value="userdata.nickname"
         />

        <myinput
        class="input"
        type="password"
         :rules="/^\w{6,16}$/"
        v-model="userdata.password" />
      </div>
      <p class="tips">
        <a href="javascript:;" @click="$router.push({path: '/login'})" class>去登录</a>
      </p>
      <mybutton class="button" text="注册" @click="btn"></mybutton>
    </div>
  </div>
</template>

<script>
import myinput from '../components/myinput'
import mybutton from '../components/mybutton'
import { register } from '../api/users'
export default {
  data () {
    return {
      userdata: {
        username: '',
        nickname: '',
        password: ''
      }
    }
  },
  components: {
    myinput, mybutton
  },
  methods: {
    async btn () {
    //   console.log(this.userdata)
      let res = await register(this.userdata)
      //   console.log(res)
      if (res.status === 200) {
        this.$toast(res.data.message)
      } else {
        this.$toast('注册失败')
      }
    },
    namedata (value) {
      this.userdata.username = value
    },
    nickdata (value) {
      this.userdata.nickname = value
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
