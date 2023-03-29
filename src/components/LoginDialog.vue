<template>
  <t-card title="后台管理系统" id="card">
    <t-form v-model="LoginForm">
      <t-form-item label="用户名" name="username">
        <t-input size="large"
                 placeholder="请输入用户名"
                 v-model="LoginForm.username"
                 :status="usernameStatus"
                 :tips="usernameTips"
                 @change="validateUsername">
        </t-input>
      </t-form-item>

      <t-form-item label="密码" name="password">
        <t-input size="large"
                 placeholder="请输入密码"
                 type="password"
                 v-model="LoginForm.password"
                 :status="passwordStatus"
                 :tips="passwordTips"
                 @change="validatePassword">
        </t-input>
      </t-form-item>

      <t-form-item>
        <t-button type="submit" block content="登录" @click="login"></t-button>
      </t-form-item>

    </t-form>
  </t-card>
</template>

<script>
import router from '@/router'
import store from '@/store'
export default {
  name: 'LoginDialog',
  data () {
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      usernameStatus: 'default',
      usernameTips: '',
      passwordStatus: 'default',
      passwordTips: ''
    }
  },
  methods: {
    validateUsername () {
      if (this.LoginForm.username === '') {
        this.usernameStatus = 'error'
        this.usernameTips = '用户名不能为空'
        return false
      } else {
        this.usernameStatus = 'success'
        this.usernameTips = ''
        return true
      }
    },
    validatePassword () {
      if (this.LoginForm.password === '') {
        this.passwordStatus = 'error'
        this.passwordTips = '密码不能为空'
        return false
      } else {
        this.passwordStatus = 'success'
        this.passwordTips = ''
        return true
      }
    },
    login () {
      if (!this.validateUsername() && !this.validatePassword()) {
        return null
      }
      // 登录后续....
      this.$http.post('/login', this.LoginForm).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          router.replace('/users')
          store.commit('setToken', res.data.data.token)
          // console.log(res.data.data.token)
        }
      })
    }
  }
}
</script>

<style scoped>
.t-card {
  background: rgba(255, 255, 255, 0.5);
  border: 0;
}

form {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
</style>
