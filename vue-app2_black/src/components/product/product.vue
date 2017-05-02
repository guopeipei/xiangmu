<template>
  <div id="app">
    <div id="all-container">
      <header id="topbar" class="header">
        <div class="header-content">
          <p class="header-title">全部产品</p>
        </div>
        <div id="wrap" class="search-panel">
          <div id="search-bar">
            <form>
              <input type="search" placeholder="搜索商品" :class="{searchinput:true,changeStyle:isActive}" @click="changeInput">
              <input id="btnCancel" type="button" value="取消" class="sch-cancel" @click="clear">
            </form>
          </div>
        </div>
      </header>
    </div>
    <div id="content-wrap">
      <div class="life-goodsAll">
        <div class="life-goodsBox">
          <div class="goodsTip">
            <dl class="life-goodsMark">家务</dl>
          </div>
          <ul class="life-goodsUl">
            <li>
              <img src="./good1.jpg" alt="">
              <p>家务工具</p>
            </li>
            <li>
              <img src="./good3.jpg" alt="">
              <p>防霉除菌</p>
            </li>
            <li>
              <img src="./good4.jpg" alt="">
              <p>衣物收纳</p>
            </li>
            <li>
              <img src="./good5.jpg" alt="">
              <p>百纳箱</p>
            </li>
            <li>
              <img src="./good6.jpg" alt="">
              <p>生活必备</p>
            </li>
            <li>
              <img src="./good7.jpg" alt="">
              <p>酵素洗衣液</p>
            </li>
            <li>
              <img src="./good8.jpg" alt="">
              <p>魔力挂钩</p>
            </li>
            <li>
              <img src="./good9.jpg" alt="">
              <p>地毯地垫</p>
            </li>
            <li>
              <img src="./good2.jpg" alt="">
              <p>家庭清洁剂</p>
            </li>
          </ul>

        </div>
        <div class="life-goodsBox">
          <div class="goodsTip">
            <dl class="life-goodsMark">家务</dl>
          </div>
          <ul class="life-goodsUl">
            <li>
              <img src="./good1.jpg" alt="">
              <p>家务工具</p>
            </li>
            <li>
              <img src="./good3.jpg" alt="">
              <p>防霉除菌</p>
            </li>
            <li>
              <img src="./good4.jpg" alt="">
              <p>衣物收纳</p>
            </li>
            <li>
              <img src="./good5.jpg" alt="">
              <p>百纳箱</p>
            </li>
            <li>
              <img src="./good6.jpg" alt="">
              <p>生活必备</p>
            </li>
            <li>
              <img src="./good7.jpg" alt="">
              <p>酵素洗衣液</p>
            </li>
            <li>
              <img src="./good8.jpg" alt="">
              <p>魔力挂钩</p>
            </li>
            <li>
              <img src="./good9.jpg" alt="">
              <p>地毯地垫</p>
            </li>
            <li>
              <img src="./good2.jpg" alt="">
              <p>家庭清洁剂</p>
            </li>
          </ul>

        </div>
        <div class="life-goodsBox">
          <div class="goodsTip">
            <dl class="life-goodsMark">家务</dl>
          </div>
          <ul class="life-goodsUl">
            <li>
              <img src="./good1.jpg" alt="">
              <p>家务工具</p>
            </li>
            <li>
              <img src="./good3.jpg" alt="">
              <p>防霉除菌</p>
            </li>
            <li>
              <img src="./good4.jpg" alt="">
              <p>衣物收纳</p>
            </li>
            <li>
              <img src="./good5.jpg" alt="">
              <p>百纳箱</p>
            </li>
            <li>
              <img src="./good6.jpg" alt="">
              <p>生活必备</p>
            </li>
            <li>
              <img src="./good7.jpg" alt="">
              <p>酵素洗衣液</p>
            </li>
            <li>
              <img src="./good8.jpg" alt="">
              <p>魔力挂钩</p>
            </li>
            <li>
              <img src="./good9.jpg" alt="">
              <p>地毯地垫</p>
            </li>
            <li>
              <img src="./good2.jpg" alt="">
              <p>家庭清洁剂</p>
            </li>
          </ul>

        </div>
        <div class="life-goodsBox">
          <div class="goodsTip">
            <dl class="life-goodsMark">家务</dl>
          </div>
          <ul class="life-goodsUl">
            <li>
              <img src="./good1.jpg" alt="">
              <p>家务工具</p>
            </li>
            <li>
              <img src="./good3.jpg" alt="">
              <p>防霉除菌</p>
            </li>
            <li>
              <img src="./good4.jpg" alt="">
              <p>衣物收纳</p>
            </li>
            <li>
              <img src="./good5.jpg" alt="">
              <p>百纳箱</p>
            </li>
            <li>
              <img src="./good6.jpg" alt="">
              <p>生活必备</p>
            </li>
            <li>
              <img src="./good7.jpg" alt="">
              <p>酵素洗衣液</p>
            </li>
            <li>
              <img src="./good8.jpg" alt="">
              <p>魔力挂钩</p>
            </li>
            <li>
              <img src="./good9.jpg" alt="">
              <p>地毯地垫</p>
            </li>
            <li>
              <img src="./good2.jpg" alt="">
              <p>家庭清洁剂</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default{
      data () {
        return {
          isActive:false
        }
      },
      methods: {
        changeInput () {
          this.isActive = !this.isActive
        },
        clear () {
          this.isActive = !this.isActive
        }

      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app{
    background: #f0f0f0;
  }

  body{
    width: 100%;
  }


  #all-container{
    overflow: hidden;
  }
  /*整个头部的*/
  header{
    width: 100%;
    position: fixed;
    top:0;
    z-index: 999;
    background-color:#f0f0f0;
  }

  /*上半部分产品那的父元素*/
  .header-content{
    width: 100%;
    margin: 0 auto;
    height: 48px;
    background:#89be48;
  }
  /*上半部分产品那*/
  .header-title {
    margin: 0 auto;
    text-align: center;
    font-size:20px;
    line-height: 48px;
    height: 48px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 80%;
  }

  /*搜索区那最外面的一层*/
  .search-panel{
    padding: 6px 0;
    background-color #f2f2f2;
  }
  /*里面的一层*/
  #search-bar{
    height: 36px;
    width: 94%;
    margin: 0 auto;
    padding: 0;
    border-radius 6px
    /*text-align: center;*/
    /*vertical-align: middle;*/
    position relative

  }

  /*搜索商品的样式*/
  .searchinput{
    width:100%;
    height:36px;
    background-color: #fff;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAAACSkpKTk5OTk5ORkZGSkpKEhISTk5ORkZGTk5OSkpKRkZGRkZGRkZGSkpKRkZGTk5OTk5ORkZGTk5OSkpKSkpKSkpKTk5ORkZGRkZGRkZGSkpKPj4+UlJSUlJSQkJCSkpKRkZGSkpKRkZGQkJCWlpaRkZGSkpKWlpaTk5OSkpKSkpKRkZGenp6YmJhw30CvAAAALXRSTlMAxbmZWg0FdiT6ybROvKKNUjMpFd7az7+rVkhCEO7Tyn5jXzwvGfqWjYBsNhx4c16/AAAA0ElEQVQ4y82R2Q6CMBBFKVVa24IIsskO4i7//3kaYpSZEo0vxvPEzRya6a3xV3hMmtKmiTU99mnh1GmrKiHcqfmqcPjjswmW+pyvT69wKTXDio7j2K0VEmYEbpYImC2C9yIKXrDMkMAoiBvTQKQRFBzt1hIKMRbONogtwfUmEtYcekhwGMwUVdcFHDe9xT8gWDhuosm5gdmHq2evVd/LuWaw4DAo/ozYbHc1dcOjgsSxLUh9f7zFYGD81HXVsC00MF8Y2Scjen+GyikSMNz4ETeZVQrjcGuzcAAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: 38% 6px;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    padding-left: 36px;
    line-height: 36px;
    text-align: center;
    font-size 19px
    margin 0
    position absolute
    outline none
  }
  /*点击搜索按钮的样式*/
  .changeStyle{
    width 88%
    background-position 4.8px 6px
    text-align left
  }
    /*取消按钮*/
  .sch-cancel{
    width 15%;
    height 36px;
    display block;
    background none;
    background-color #f2f2f2;
    border 0
    font-size 19px
    color #83b842
    line-height 36px
    text-align right
    float right
    outline none
  }


  /*下面图片的设置*/
  #content-wrap{
    /*position: absolute;*/
    margin-top: 96px;
    width: 100%;
  }
  .goodsTip{
    width: 100%;
    text-align: center;
  }
  .life-goodsAll{
    overflow: hidden;
  }
  /*文字和图片整体的大小*/
  .life-goodsAll .life-goodsBox{
    margin-top: 24px;
  }
  /*大家务的文字*/
  .goodsTip .life-goodsMark{
    width: 120px;
    height: 36px;
    font-size: 20px;
    letter-spacing: 6px;
    margin:auto;
    line-height: 28px;

  }
  /*图片的ul*/
  .life-goodsUl{
    background: #ffffff;
    width: 375px;
    height: 417px;
  }
  .life-goodsUl li{
    float: left;
    width: 33.0%;
    height: 140px;
    margin: 0 0 -1px -1px;
    border: 1px solid #f1f1f1;
    text-align: center;
  }

  .life-goodsUl li p{
    height: 24px;
    line-height: 24px;
    padding-bottom: 12px;
    padding-top: 6px;
    font-size: 16px;

  }
  .life-goodsUl li img{
    /*width: 74.25px;
    height: 74.25px;*/
    width: 60%;
    padding-top: 12px;
    margin: auto;

  }



  /*底部的footer*/
  footer{
    /* overflow: hidden;*/
    position: fixed;
    bottom:0px;
    width: 100%;
    height: 50px;
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
    /*  width: 75px;
      height: 39px;*/
  }
  #footermenuNav li{
    float: left;
    width: 20%;
  }
  #footermenuNav li a{
    margin-bottom: 8px;
    margin-top:8px;
    display: block;
    color: #ababab;
    line-height: 16px;
    font-size: 14px;
    vertical-align: bottom;
  }

  #footermenuNav a .selected{
    color:#009c42
  }

</style>
