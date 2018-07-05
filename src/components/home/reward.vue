<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <router-link to="/home">
          <div class="nav-left"><span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray" href="http://wap.renrenaijia.com/member/index"></span></div>
        </router-link>
        <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
        <div class="nav-right line-height-1_5">&nbsp;</div>
      </nav>
    </header>
    <div class="body">
      <div class="tabs">
        <div class="tabs-head fixed">
          <ul>
            <li class="active"><a href="javascript:;">理财红包</a></li>
            <li><a href="javascript:;">体验金</a></li>
          </ul>
        </div>
        <!--理财红包-->
        <div class="tabs-items" style="padding-bottom:0.5rem; display:block">
          <div class="list">
            <div class="list-body padding-bottom-0_5rem">
              <!--没有红包-->
              <div class="bar text-center padding-2rem text-gray" style="font-size:110%; padding:2rem;">没有可用红包！</div>
            </div>
          </div>
        </div>
        <!--体验金-->
        <div class="tabs-items">
          <div class="list-head">
            <div class="left text-normal-min">累计<span class="text-red">8,888.00</span>元</div>
            <div class="right text-right text-normal-min">利息小计<span class="text-red">4.59</span>元</div>                </div>
          <div class="list-body padding-bottom-1rem">
            <!--体验金列表-->
            <div id="tabJ">
              <div class=" list-rb-2 mark-used">
                <div class="rb-cell">
                  <div><span class="text-normal-min">￥</span><span class="text-h2">8888</span></div>
                  <div class="text-tips padding-top-0_5rem">理财体验金</div>
                </div>
                <div class="rb-cell">
                  <h5 class="text-normal">&nbsp;&nbsp;8888元体验金</h5>
                  <div class="text-gray text-tips padding-top-0_5rem">&nbsp;&nbsp;2017.07.31起计息3天</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>

</style>
