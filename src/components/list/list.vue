<template>
  <div>
    <header id="headerNormal" class="header">
      <nav class="nav">
        <div class="nav-left">
          <div></div>
        </div>
        <div class="nav-head"><a href="javascript:;"><img
          src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="bg"></div>
    <listWZ></listWZ>
    <router-view></router-view>
  </div>
</template>
<script>
  import ListWZ from 'components/list/listWZ'
  export default{
    methods: {
    },
    components: {
      ListWZ
    }
  }
</script>

<style lang="less">
  .bg{padding: 1.5rem 0}
  .slide-enter-active , .slide-leave-active{
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%,0,0);
  }
</style>

