<template>
  <div>
    <div class="download0207" v-show="isShow">
      <img src="./downloadTop.png">
      <a href="" class="download"></a>
      <span class="close" @click="clear"></span>
    </div>
    <footer>
      <div>
        <ul id="footermenuNav">
          <li class="footermenu">
            <router-link to="/shouye">
              <div class="iconfont icon-shouye_shouye"></div>
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/product">
              <div class="iconfont icon-quanbu"></div>
              <span>全部产品</span>
            </router-link>
          </li>
          <li>
            <router-link to="/xianguang">
              <div class="iconfont icon-zhinanzhen"></div>
              <span>闲逛</span>
            </router-link>
          </li>
          <li>
            <router-link to="/shopcart">
              <div class="iconfont icon-gouwuche"></div>
              <span>购物车</span>
            </router-link>
          </li>
          <li>
            <router-link to="/center">
              <div class="iconfont icon-me_line"></div>
              <span>账户中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>

</template>

<script>
    export default{
      data () {
        return{
          isShow : true
        }
      },
      methods: {
      clear () {
        this.isShow = !this.isShow
      }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/fonts/iconfont.css"
  .active
    color:#009c42

  /*底部的footer*/
  footer{
    /* overflow: hidden;*/
    position: fixed;
    bottom:0px;
    width: 100%;
    height: 55px;
    background: #f8f8f8;
  }
  #footermenuNav {
    margin: 0;
    padding: 0;

    text-align: center;
    width: 100%;
    /*margin:6px 4px;*/
    z-index: 1001;
    overflow: hidden;
  }
  .iconfont{
    height: 26px;
  }
  #footermenuNav li{
    float: left;
    width: 20%;
  }
  li a{
    margin-bottom: 8px;
    margin-top:8px;
    display: block;
    color: #ababab;
    line-height: 20px;
    font-size: 14px;
    vertical-align: bottom;
  }

  .download0207{
    height: 65px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 47px;
    background-image: url("./downloadBottom.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100%;
    z-index: 100;
  }
  .download0207 .download{
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    height: 100%;
    bottom: 0;
  }
  .download0207 img{
    position: absolute;
    width: 15.5%;
    top: -43px;
    left: 4.8%;
  }
  .download0207 .close{
    width: 7%;
    height: 24px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 35%;
  }
</style>
