<template>
  <div id="app">
    <div>
      <header id="topbar" class="header">
        <div class="header-content">
          <router-link to="/newproduce">
            <span class="btn-back">
              <label class="leftback-img"></label>
            </span>
          </router-link>
          <p class="header-title">购物车</p>
          <!--<label class="editcart">修改 </label>-->
          <img src="" alt="">
        </div>
        <div class="header-login-wrap">
          <div class="header-login">
            <router-link to="/mylife" class="btn-login">登录</router-link>
            <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
          </div>
        </div>
      </header>
    </div>
    <div class="wrap-content">
      <div class="page-loadmore-wrapper">
        <div class="mint-loadmore">
          <div class="mint-loadmore-content">
            <div class="header-exchange-wrap">
              <div class="header-exchange">
                <input type="text" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
                <input type="button" value="兑换" class="exch-btn">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-panel"></div>
      <div class="wrap-nodata">
        <div class="carts-img">
          <img src="./shopcart.png" alt="购物车">
        </div>
        <div class="carts-text font-medium">
          <p>您的购物车还是空荡荡的</p>
        </div>
        <div class="carts-link font-medium">
          <a href="###">赶紧去逛逛</a>
        </div>
        <div class="wrap-cart-assem cart-empty-recom">
          <div class="cart-assem-title">
            <p>Rico.S为你精心推荐</p>
          </div>
          <div class="cart-assem-list">
            <ul>
              <li>
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./1.jpg" alt="">
                  </a>
                  <p class="title">可降解环保垃圾袋（可拎式）</p>
                  <p class="price">￥9</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./2.jpg" alt="">
                  </a>
                  <p class="title">可降解环保垃圾袋（可拎式）</p>
                  <p class="price">￥9</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./3.jpg" alt="">
                  </a>
                  <p class="title">可降解环保垃圾袋（可拎式）</p>
                  <p class="price">￥9</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./4.jpg" alt="">
                  </a>
                  <p class="title">可降解环保垃圾袋（可拎式）</p>
                  <p class="price">￥9</p>
                </div>
              </li>
              <li>
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./5.jpg" alt="">
                  </a>
                  <p class="title">可降解环保垃圾袋（可拎式）</p>
                  <p class="price">￥9</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/demo1.styl"
</style>
