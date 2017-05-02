<template>
  <div id="app">
    <article id="loginBg" class="acct-wrap">
      <div class="old_user_login">
        <router-link to="/mylife">
          <label class="acct_top_back">
          </label>
        </router-link>

        <img src="./image/login_register/1.png" class="acct_top_show" alt="">
      </div>
      <div class="bg-wrap">
        <div class="login_content">
          <h1>新用户注册</h1>
          <div class="wrap">
            <div>
              <form id="reset-form">
                <ul class="fm_list">
                  <li class="multi">
                    <input required="required" type="tel" maxlength="11" placeholder="请输入手机号" class="field_ipt">
                  </li>
                  <li >
                    <input type="text" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required" class="field_ipt">
                  </li>
                  <li>
                    <input required="required" type="text" maxlength="10" id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt" >
                    <div class="verifycode_img">
                      <!--<img class="yanzhengma" :src="./image/login_register/yanzhengCode.jpg" @click="tuxing">-->
                      <img class="yanzhengma" :src="pic.src" @click="tuxing">
                      <img class="yuan" src="./image/login_register/yuan.png" @click="tuxing">
                    </div>
                  </li>

                  <li class="multi">
                    <input type="text" placeholder="请输入手机验证码" maxlength="10" id="regSmsCaptcha" required="required" class="field_ipt">
                    <a class="fidld_skip" @click="zhuce">获取验证码</a>
                  </li>
                </ul>
                <div class="set_link">
                  <p class="problem_contact_service">遇到问题？请
                    <a>联系客服</a>
                  </p>
                </div>
              </form>
            </div>
            <div class=""></div>
            <input type="button" value="注册" class="btn_login" >
            <input type="button" value="登录" class="btn_regisiter" >
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      data () {
        return {
         pic:{}
        }
      },
      methods: {
        /*sendCode () {
          this.$refs.timerbtn.setDisabled(true)
          hz.ajaxRequest("sys/sendCode?_"+$.now(),function(data){
            if(data.status){
              this.$refs.timerbtn.start(); //启动倒计时
            }else{
              this.$refs.timerbtn.stop(); //停止倒计时
            }
          });
        },*/
        zhuce () {
          const url = 'http://localhost:3000/send'
          axios.get(url)
            .then( response => {
              console.log(response.body)
            })
        },
        tuxing () {
          const url = 'http://localhost:3000/send1'
          axios.get(url)
            .then(response => {
             /* console.log(response.body)*/
              this.pic = response.data
              /*console.log(response)*/
            })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app #loginBg {
    overflow: hidden;
  }
  #app #loginBg .old_user_login {
    background: #fff;
    height: 142px;
    width: 100%;
    position: relative;
  }
  #app #loginBg .old_user_login .acct_top_back {
    display: block;
    width: 25px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 42px;
  }
  #app #loginBg .old_user_login .acct_top_back:after {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    transform: rotate(-45deg);
  }
  #app #loginBg .old_user_login .acct_top_show {
    width: 120px;
    display: block;
    overflow: hidden;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -60px;
  }
  #app #loginBg .bg-wrap {
    background-image: url("image/login_register/2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    height: 526px;
  }
  #app #loginBg .bg-wrap .login_content {
    width: 100%;
    height: 325px;
    box-sizing: border-box;
  }
  #app #loginBg .bg-wrap .login_content h1 {
    width: 100%;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 84px;
    box-sizing: border-box;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li {
    width: 90%;
    margin: 0 auto;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li #regCaptcha {
    width: 70%;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li .verifycode_img {
    position: absolute;
    right: -70%;
    width: 100%;
    top: 12px;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li .verifycode_img .yanzhengma{
    width: 20%;
    vertical-align: middle;
    height: 27px;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li .verifycode_img .yuan{
    width: 5%;
    vertical-align: middle;
    margin-left: 7px;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list li .field_ipt {
    outline: none;
    font-size: 16px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    height: 50px;
    box-sizing: border-box;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list .multi {
    width: 90%;
    margin: 0 auto;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list .multi .fidld_skip {
    display: inline-block;
    float: right;
    font-size: 16px;
    color: #3aad36;
    text-decoration: none;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding: 9px 15px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 10px;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .fm_list .yanzhengma {
    width: 90%;
    margin: 0 auto;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .set_link {
    position: relative;
    padding: 0.18rem 0 0.4rem;
    text-align: right;
    height: 50px;
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    box-sizing: border-box;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .set_link .problem_contact_service {
    float: left;
    font-size: 14px;
    color: #666;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .set_link .problem_contact_service a {
    color: #3ea438;
    text-decoration: underline;
    line-height: 0.4rem;
  }
  #app #loginBg .bg-wrap .login_content .wrap #reset-form .set_link .problem_contact_service span {
    float: right;
    line-height: 20px;
    margin-right: 7px;
  }
  #app #loginBg .bg-wrap .login_content .btn_login {
    margin: 0 auto 15px;
    width: 80%;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 38px;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
  }
  #app #loginBg .bg-wrap .login_content .btn_regisiter {
    margin: 10px auto 0;
    width: 80%;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 38px;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: 0.5;
  }
</style>
