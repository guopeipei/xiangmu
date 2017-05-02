<template>
  <div class="wrap-shelf">
    <header_link></header_link>
    <scroller
      :on-refresh="refresh"
      :on-infinite= "infinite" class="content3">
    <div ref="wrap" >
    <div class="subcat-title">最近一周新品</div>
    <div class="shelf-item">
      <a href="" class="item-pic-bx">
        <img src="./1.jpg" alt="" class="item-pic">
        <div class="item-status-empty">热卖脱销</div>
      </a>
      <div class="item-panel">
        <div class="title clearFix">马桶强力疏通器</div>
        <div class="item-price">
          <div class="price-cont">
            <span class="act-tag">新品首发优惠</span>
            <span>￥</span>
            <span>36</span>
            &nbsp;
            <span class="original-price">￥39</span>
            <span class="promo-lable">新</span>
          </div>
          <div class="item-comment">评论：0</div>
        </div>
      </div>
    </div>
    <div class="shelf-item">
      <a href="" class="item-pic-bx">
        <img src="./2.jpg" alt="" class="item-pic">
        <div class="item-status-empty">热卖脱销</div>
      </a>
      <div class="item-panel">
        <div class="title clearFix">马桶强力疏通器</div>
        <div class="item-price">
          <div class="price-cont">
            <span class="act-tag">新品首发优惠</span>
            <span>￥</span>
            <span>36</span>
            &nbsp;
            <span class="original-price">￥39</span>
            <span class="promo-lable">新</span>
          </div>
          <div class="item-comment">评论：0</div>
        </div>
      </div>
    </div>
    <div class="shelf-item">
      <a href="" class="item-pic-bx">
        <img src="./3.jpg" alt="" class="item-pic">
        <div class="item-status-empty">热卖脱销</div>
      </a>
      <div class="item-panel">
        <div class="title clearFix">马桶强力疏通器</div>
        <div class="item-price">
          <div class="price-cont">
            <span class="act-tag">新品首发优惠</span>
            <span>￥</span>
            <span>36</span>
            &nbsp;
            <span class="original-price">￥39</span>
            <span class="promo-lable">新</span>
          </div>
          <div class="item-comment">评论：0</div>
        </div>
      </div>
    </div>
    <div class="shelf-item">
      <a href="" class="item-pic-bx">
        <img src="./4.jpg" alt="" class="item-pic">
        <div class="item-status-empty">热卖脱销</div>
      </a>
      <div class="item-panel">
        <div class="title clearFix">马桶强力疏通器</div>
        <div class="item-price">
          <div class="price-cont">
            <span class="act-tag">新品首发优惠</span>
            <span>￥</span>
            <span>36</span>
            &nbsp;
            <span class="original-price">￥39</span>
            <span class="promo-lable">新</span>
          </div>
          <div class="item-comment">评论：0</div>
        </div>
      </div>
    </div>
    <div class="shelf-item">
      <a href="" class="item-pic-bx">
        <img src="./5.jpg" alt="" class="item-pic">
        <div class="item-status-empty">热卖脱销</div>
      </a>
      <div class="item-panel">
        <div class="title clearFix">马桶强力疏通器</div>
        <div class="item-price">
          <div class="price-cont">
            <span class="act-tag">新品首发优惠</span>
            <span>￥</span>
            <span>36</span>
            &nbsp;
            <span class="original-price">￥39</span>
            <span class="promo-lable">新</span>
          </div>
          <div class="item-comment">评论：0</div>
        </div>
      </div>
    </div>
    </div>
      </scroller>
  </div>
</template>

<script>
    import header from '../header/header.vue'
      export default{
      methods: {
        refresh (done) {
          setTimeout(()=>{
            done()
          },1000)
        },
        infinite (done) {
          setTimeout(()=>{
            done(true)
          },1000)
        }
      },
      components: {
        header_link: header
      }
    }
</script>
<style scoped>
  .wrap-shelf {
    width: 100%;
    margin-top: 102px;
    background-color: #eee;
  }
  .wrap-shelf .subcat-title {
    max-width: 96%;
    height: 38px;
    text-align: center;
    font-size: 19px;
    color: #000;
    line-height: 38px;
    margin: 0 auto -22px;
  }
  .wrap-shelf .shelf-item {
    position: relative;
    width: 96%;
    border: 1px solid #ddd;
    margin: 24px auto 0;
  }
  .wrap-shelf .shelf-item .item-pic-bx {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
    color: #333;
  }
  .wrap-shelf .shelf-item .item-pic-bx .item-pic {
    width: 100%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
  }
  .wrap-shelf .shelf-item .item-pic-bx .item-status-empty {
    width: 84px;
    height: 84px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    color: #fff;
    line-height: 84px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -48px;
    margin-left: -48px;
  }
  .wrap-shelf .shelf-item .item-panel {
    width: 100%;
    background-color: #fff;
    color: #333;
    box-sizing: border-box;
    padding: 3.6px;
  }
  .wrap-shelf .shelf-item .item-panel .title {
    width: 94%;
    margin: 0 auto;
    text-align: left;
    font-size: 13px;
    color: #333;
    line-height: 31px;
    padding-top: 6px;
  }
  .wrap-shelf .shelf-item .item-panel .item-price {
    width: 94%;
    margin: 0 auto;
    overflow: hidden;
  }
  .wrap-shelf .shelf-item .item-panel .item-price .price-cont {
    font-size: 13px;
    min-width: 68%;
    float: left;
    line-height: 21px;
    margin-top: 2.4px;
  }
  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .act-tag {
    background-color: #fff000;
    display: inline-block;
    padding: 1px 3px;
  }
  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .original-price {
    color: #ccc;
    text-decoration: line-through;
  }
  .wrap-shelf .shelf-item .item-panel .item-price .price-cont .promo-lable {
    background-color: #c00;
    color: #fff;
    padding: 1px 3px;
  }
  .wrap-shelf .shelf-item .item-panel .item-price .item-comment {
    width: 48px;
    height: 31px;
    line-height: 31px;
    font-size: 13px;
    float: right;
    text-align: right;
    color: #999;
  }

  .content3{
    margin-top: 96px;
  }

</style>

