<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <router-link to="/home">
          <div class="nav-left"><span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span></div>
        </router-link>
        <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="body">
      <div class="panel panel-red padding-1rem">
        <div class="panel-body">
          <h2 class="padding-top-1rem">在投金额(元)</h2>
          <div class="line-height-1_5 text-h1-max">0</div>
        </div>
      </div>
      <div class="panel border-bottom-solid">
        <div class="panel-body col col-2 text-center">
          <div class="col-cell border-right-solid padding-top-1rem padding-bottom-1rem">
            <div class="text-red text-normal-max">0.00</div>
            <div class="padding-top-0_5rem text-gray text-tips">待收收益(元)</div>
          </div>
          <div class="col-cell padding-top-1rem padding-bottom-1rem">
            <div class="text-red text-normal-max">0.00</div>
            <div class="padding-top-0_5rem text-gray text-tips">已收收益(元)</div>
          </div>
        </div>
      </div>
      <!---card list-->
      <div class="tabs margin-top-0_5rem">
        <div class="tabs-head">
          <ul>
            <li class="active"><a href="javascript:;">在投标 <i class="icon iconfont icon-timer"></i></a></li>
            <li class=""><a href="javascript:;">已还款</a></li>
            <li class=""><a href="javascript:;">未成标</a></li>
          </ul>
        </div>
        <!--tab-items-01 在投标-->
        <div class="tabs-items" style="display: block;">
          <div class="text-gray text-center padding-2rem">暂无在投标项目</div>
        </div>

        <!--tab-items-02 已还款-->
        <div class="tabs-items" style="display: none;">
          <div class="text-gray text-center padding-2rem">暂无已还款项目</div>
        </div>

        <!--tab-items-03 未成标-->
        <div class="tabs-items" style="display: none;">
          <div class="text-gray text-center padding-2rem">暂无未成标项目</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>

</style>
