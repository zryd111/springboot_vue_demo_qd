<template>
	<div class="login">
    <img src="../assets/logo.png">
    <Form ref="loginForm" :model="loginForm" :rules="loginRules" :label-width="80">
          <FormItem label="姓名" prop="name">
            <Input v-model="loginForm.name" placeholder="请输入你的姓名" />
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input v-model="loginForm.password" placeholder="请输入你的密码" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="HandleSubmit('loginForm')">登录</Button>
            <Button @click="HandleReset('loginForm')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
  </div>
</template>

<style>
	
</style>

<script>
import Config from '../../config'
import { UserQryByNameAndEmailAction } from "../api/login.js";
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      loginRules: {
        name: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    Login() {
      UserQryByNameAndEmailAction(this.loginForm).then(res => {
        if(res.data != null && res.data != "") {
          this.$router.push({ path: '/user' })
        } else {
          this.$Message.error("登录有误!");
        }
      });
    },
    HandleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.Login();
          } else {
            this.$Message.error("填写信息错误!");
          }
        });
    },
    HandleReset(name) {
        this.$refs[name].resetFields();
    }
  }
}
</script>