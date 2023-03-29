<template>
  <t-base-table row-key='id'
                :data='users'
                :columns='columns'
                :stripe="true"
                header-affixed-top="true"
                table-layout="auto">
  </t-base-table>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'

axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = Cookies.get('token')
      return config
    }
)

export default {
  name: 'UsersView',
  data () {
    return {
      users: [],
      columns: [
        {
          colKey: 'id', title: '用户id'
        },
        {
          colKey: 'username', title: '用户名'
        },
        {
          colKey: 'phone', title: '手机号'
        },
        {
          colKey: 'email', title: '邮箱'
        },
        {
          colKey: 'status', title: '状态'
        },
      ],
    }
  },
  mounted () {
    const _this = this
    axios.post('/users', {}).then(function (res) {
      console.log(res)
      _this.users = res.data.data
    })
  }
}
</script>
