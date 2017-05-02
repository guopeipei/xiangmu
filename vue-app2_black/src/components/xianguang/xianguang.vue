<template>
  <div id="app">
    <div class="stroll-header">
      <header id="topbar" class="header">
        <div class="header-content">
          <p class="header-title">闲逛</p>
        </div>
      </header>
    </div>
    <scroller
      :on-refresh="refresh"
      :on-infinite= "infinite" class="content1">
    <div class="content" ref="content">
      <div class="page-loadmore-wrapper">
        <div class="clearFix">
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./03.jpg" alt="">
                  <span class="tag-new">New</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">除菌泡沫洗手液</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>9</em></span>
                  <span class="original">￥12</span>
                  <span class="comment">月销 11717</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./04.jpg" alt="">
                  <span></span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">可挂式防尘防潮收纳袋</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>20</em></span>
                  <!--<span class="original">￥12</span>-->
                  <span class="comment">月销 23062</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./01.jpg" alt="">
                  <span class="tag-new">New</span>
                  <span></span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">快捷便利</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>10</em></span>
                  <span class="original">￥12</span>
                  <span class="comment">月销 10002</span>
                </div>
              </div>
            </div>
          </div>
          <div class="stroll-all-item">
            <div data-v-e6620f52="" class="stroll-item">
              <div class="stroll-type-item  clearFix">
                <div class="cat-menu-a">
                  <span>新价格</span>
                </div>
                <div class="cat-menu-a">
                  <span>今日新品</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./06.jpg" alt="">
                  <span class="tag-new">New</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">单手开盖运动杯</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>9</em></span>
                  <span class="comment">月销 30</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./08.jpg" alt="">
                  <span></span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">2222222</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>9</em></span>
                  <span class="comment">月销 3021</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./10.jpg" alt="">
                  <span></span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="##">单手开盖运动杯</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">￥<em>9</em></span>
                  <span class="comment">月销 36220</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </scroller>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default{
      methods: {
        refresh (done) {
          setTimeout(()=>{
            done ()
          },1000)
        },
        infinite (done) {
          setTimeout(()=>{
            done (true)
          },1000)
        }
      }

    }


</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/demo.styl"
</style>
