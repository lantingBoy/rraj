<template>
  <div class="footer-nav col col-3" id="nav" >
    <router-link tag="div" class="col-cell" to="/recommend">
      <div><i class="icon iconfont icon-tuijian text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">精选</div>
    </router-link>
    <router-link tag="div" class="col-cell "  to="/list">
      <div><i class="icon iconfont icon-touzilicai text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">投资</div>
    </router-link>
    <router-link tag="div" class="col-cell "  to="/discover">
      <div><i class="icon iconfont   text-h1"> &#xe631;</i>
      </div>
      <div class="text-normal-min padding-top-0_2_5rem">发现</div>
    </router-link>
    <router-link tag="div" class="col-cell"  to="/home">
      <div><i class="icon iconfont icon-wode text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">爱家</div>
    </router-link>
  </div>
</template>

<script>
  export default{
      data(){
        return{
          activeImg:''
        }
      }
  }
</script>
<style>
  @font-face {
    font-family: 'iconfont';  /* project id 495910 */
    src: url('//at.alicdn.com/t/font_495910_qophl6gymiyvte29.eot');
    src: url('//at.alicdn.com/t/font_495910_qophl6gymiyvte29.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_495910_qophl6gymiyvte29.woff') format('woff'),
    url('//at.alicdn.com/t/font_495910_qophl6gymiyvte29.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_495910_qophl6gymiyvte29.svg#iconfont') format('svg');
  }
  .col-3>.col-cell{
    width:25%;
  }
  .footer-nav{height: 50px;padding: 5px 0}
</style>

