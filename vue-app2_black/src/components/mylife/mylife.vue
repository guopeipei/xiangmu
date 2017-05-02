<template>
  <div id="app">
    <div>
      <div></div>
      <article class="acct-wrap">
        <div class="old_user_login">
          <router-link to="/center">
          <label class="acct_top_back"></label>
          </router-link>
          <img src="./1.png" alt="" class="acct_top_show">
        </div>
        <div class="bg-wrap">
          <div class="login_content">
            <h1>老用户登录</h1>
            <div class="wrap">
              <div>
                <form id="reset-form">
                  <ul class="fm_list">
                    <li class="multi">
                      <input
                        required="required" type="tel"
                        maxlength="11" placeholder="请输入手机号"
                        class="field_ipt">
                      <a class="fidld_skip">获取验证码</a>
                    </li>
                    <li  class="multi">
                      <input required="required" type="text"
                             maxlength="10" id="loginVerifyCode"
                             placeholder="请输入手机验证码" class="field_ipt">
                    </li>
                  </ul>
                  <div class="set_link">
                    <p class="problem_contact_service">遇到问题？请
                      <a href="###">联系客服</a>
                    </p>
                    <a>
                      <b class="jiantou"></b>
                      <span class="passWord">账号密码登录</span>
                    </a>
                  </div>
                </form>
              </div>
              <div></div>
              <input type="button" value="登录" class="btn_login">
              <router-link to="./register">
              <input type="button" value="注册" class="btn_regisiter">
              </router-link>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
    export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/demo3.styl"
</style>
