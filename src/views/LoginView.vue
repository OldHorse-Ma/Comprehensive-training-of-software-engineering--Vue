<template>
  <div id="loginView">
    <t-row>
      <t-col :span="4" :offset="4">
        <LoginDialog id="dialog"></LoginDialog>
      </t-col>
    </t-row>
  </div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: 'LoginView',
  components: {LoginDialog}
}
</script>

<style scoped>
#loginView {
  width: 100%;
  height: 100%;
  background: url("@/assets/background.jpg") no-repeat center;
  position: fixed;
  left: 0;
  top: 0;
}

#dialog {
  margin-top: 40%;
}
</style>
