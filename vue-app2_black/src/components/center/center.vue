<template>
  <div id="app">
    <div>
      <header id="topbar" class="header">
        <div class="header-content">
          <p class="header-title">账户中心</p>
          <a href="##">
            <label class="editcart">设置</label>
          </a>
        </div>
      </header>
    </div>
    <scroller
    :on-refresh="refresh" class="content2">
    <article class="uscenter-cont life-module">
      <div class="page-loadmore-wrapper">
        <div class="mint-loadmore">
          <div class="mint-loadmore-content">
            <div class="mint-loadmore-top">
              <span class="mint-loadmore-text"></span>
            </div>
            <div class="acct-user-wrap">
              <div class="acct-nolog">
                <span class="state">您还未登录</span>
                <div class="btn-entry">
                  <router-link to="./mylife" class="font-large">登录</router-link>
                  <span class="split"></span>
                  <router-link to="./register" class="font-large">注册</router-link>
                </div>
              </div>
            </div>
            <div class="dashboard-order life-dashboard-order">
              <ul>
                <li>
                  <router-link to="/mylife">
                    <span class="item-ico">
                    <span class="ico" id="ico1"></span>
                    </span>
                    <span class="item-title">待支付</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mylife">
                    <span class="item-ico">
                    <span class="ico" id="ico2"></span>
                  </span>
                    <span class="item-title">待发货</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mylife">
                  <span class="item-ico">
                    <span class="ico" id="ico3"></span>
                  </span>
                    <span class="item-title">待收货</span>
                  </router-link>
                </li>
              </ul>
              <ul>
                <li>
                  <router-link to="/mylife">
                    <span class="item-ico">
                    <span class="ico" id="ico4"></span>
                    </span>
                    <span class="item-title">待评论</span>
                    </router-link>
                </li>
                <li>
                  <a href="##">
                    <span class="item-ico">
                    <span class="ico" id="ico5"></span>
                  </span>
                    <span class="item-title">回复</span>
                  </a>
                </li>
                <li>
                  <a href="##">
                  <span class="item-ico">
                    <span class="ico" id="ico6"></span>
                  </span>
                    <span class="item-title">退换货</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="dashboard">
              <ul style="margin-bottom:12px;">
                <li>
                  <a>
                    <img src="./01.png" class="item-i">
                    <span class="item-title">我的订单</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
              </ul>
              <ul style="margin-bottom:12px;">
                <li>
                  <a><img src="./02.png" class="item-i">
                    <span class="item-title">我的优惠券</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./03.png" class="item-i">
                    <span class="item-title">现金积分</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./04.png" class="item-i">
                    <span class="item-title">关于发票</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
              </ul>
              <ul style="margin-bottom:12px;">
                <li>
                  <a><img src="./05.png" class="item-i">
                    <span class="item-title">密码和登录信息</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./06.png" class="item-i">
                    <span class="item-title">老会员建议</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./07.png" class="item-i">
                    <span class="item-title">客户服务</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./08.png" class="item-i">
                    <span class="item-title">地址管理</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
                <li>
                  <a><img src="./09.png" class="item-i">
                    <span class="item-title">手机验证</span>
                    <span class="arr-r"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
    </scroller>
  </div>
</template>

<script>
    export default{
      methods: {
        refresh (done) {
          setTimeout(()=> {
            done()
          }, 1000)
        },
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/demo2.styl"
</style>
