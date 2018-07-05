<template>
  <div class="loading">
    <div class="img-wrap">
      <img width="40" height="40" src="./progress_bg.png" class="load-rotate">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
</script>
<style  lang="less" >
  .loading{
    position: fixed;
    left:0;
    bottom:50px;
    width: 100%;
    height:100%;
    z-index:999;
    text-align: center;
    background:#f5f5f9;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    .img-wrap{
      padding-top:20px;
      width:80px;
      height:60px;
      border-radius:.6rem;
      background:#fff;
    }
    .desc{
      line-height: 30px;
      font-size: 14PX;
      color: #CCC
    }
    @-webkit-keyframes rotation{
      from {-webkit-transform: rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}
      to {-webkit-transform: rotate(360deg);transform:rotate(360deg);-moz-transform:rotate(360deg)}
    }
    @keyframes rotation{
      from {-webkit-transform: rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}
      to {-webkit-transform: rotate(360deg);transform:rotate(360deg);-moz-transform:rotate(360deg)}
    }
    @-moz-keyframes rotation{
      from {-webkit-transform: rotate(0deg);transform:rotate(0deg);-moz-transform:rotate(0deg)}
      to {-webkit-transform: rotate(360deg);transform:rotate(360deg);-moz-transform:rotate(360deg)}
    }
    .load-rotate{
      margin:0 auto;
      animation: rotation 1s linear infinite;
      -moz-animation: rotation 1s linear infinite;
      -webkit-animation: rotation 1s linear infinite;
      -o-animation: rotation 1s linear infinite;
    }
  }

</style>
