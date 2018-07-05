<template>

</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style lang="less" scoped>
  @keyframes loadPage {
    from{ opacity: 0}
  }

  @font-face {
    font-family: 'DINOT';
    src:url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/DINOT-Bold.ttf/DINOT-Bold.ttf') format('truetype');
  }
  *{padding: 0;margin: 0; font-family: "苹方", "Helvetica Neue", Helvetica, Arial, sans-serif }
  body,html{ background-color: #fff;color: #646464; display: block;width: 100%; height: 100%; overflow: hidden}
  html{font-size:75%; line-height: 1.5;  }
  @media screen and (max-width: 340px) {
    html{ font-size: 75%}
  }
  h1,h2,h3,h4,h5,h6{ font-weight: normal}
  .pager01:before {
    content: 'The Show Must Go';
    display: block;
    position: absolute;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 2rem;
    background-color: transparent;
    color: #f6f9fe;
    text-align: center;
    transform: scale(1.75,1.75);
    z-index: 0;
  }
  .block p{ margin-top: .25rem}
  .box{}
  .box img{ display: block;}
  .text-add a{ color: white; text-decoration: none}
  .text-center{text-align: center}
  .text-yellow{ color: #ffe86a}
  .font-bold{font-weight: bold}
  .text-red{color:#ff616c}
  .text-orange{ color: #fd6a53}
  .text-blue-dark{color:#a8aebe}
  .text-gray{ color: #999999}
  .text-blue{color:#6daaef}
  .text-violet{color:#aba6f9}
  .text-DINOT{ font-family: DINOT;}
  .text-h1{ font-size: 3rem}
  .text-h2{ font-size: 2rem}
  .text-h2-max{ font-size: 2.5rem}
  .text-h3{ font-size: 1.5rem}
  .text-h3-min{ font-size: 1.25rem}
  .text-h4{ font-size: 1rem}
  .text-h5{ font-size: .875rem}
  .text-h6{ font-size: .75rem}
  .font-lighter{font-weight: 300}
  .clearfix:after{content: '';display: block; height: 0;width: 0;overflow: hidden; clear: both}
  .border-top{ border-top: 1px solid #6b7591}
  .border-right{ border-right: 1px solid #6b7591}
  .padding-1rem{ padding: 1rem}
  .padding-2rem{ padding: 2rem}
  .padding-top-1rem{ padding-top: 1rem}
  .padding-bottom-1rem{ padding-bottom: 1rem}
  .padding-top-2rem{ padding-top: 2rem}
  .padding-bottom-2rem{ padding-bottom: 2rem}
  .text-indent-1rem{text-indent: 1rem}
  .img-block{ display: block}
  .line-height-1{ line-height: 1}
  /*****/
  /*******/
  .container{ transition: all 1s;}

  .container.animation01{ transform: translateY(-100%)}
  .pager{ width: 100%; height: 100%; position: relative; overflow: hidden }
  .pager:before{ content: 'The Show Must Go';display: block; position: absolute; width: 100%; height: 2rem; line-height: 2rem; font-size: 2rem; background-color: transparent; color: #f6f9fe; text-align: center; transform: scale(1.75,1.75); z-index: 0}
  .pager:first-child:before,
  .pager:last-child:before{ content: '';display: none}
  .pager-bottom{ position: absolute; bottom: 0; width: 100%; text-align: center}
  .pager-bottom .logo{ width: 12rem;}
  .pager-bottom .next{ width: 2rem; transition: all .5s;}
  .pager-top{ padding-left: 2rem; padding-top: 2rem}
  .pager-top img{ height: 2rem;}

  .mark-tit{ font-size: 1.25rem; margin-top:1rem; position: relative; padding-bottom: .5rem; }
  .mark-tit:after{ content: '';width: 6%;  display: block; position: absolute; left:47%; bottom:-.125rem; border-top:.15rem solid #67ffb2;border-bottom:.15rem solid #67ffb2; border-radius: 999rem;}

  .box{ background: url(http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/panel_bg.png) left top no-repeat; background-size: 100% 100%; padding: 1rem 0; color: white; margin: 1rem 2rem 0;}
  .box .sum-tit .tit{ color: white; font-size: 1.125rem; font-weight: 300}
  .box .sum-tit .tit-sub{ color: white;font-weight: 300}

  .box-info{ background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_01.png') left top no-repeat; background-size: 100% 100%; color: white; width: 57%; margin: 0 auto; padding:1rem 0 1rem 28%; border-radius: .75rem; box-shadow: 0 0 .5rem #0b87e8}
  .box-info.hot{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_02.png');box-shadow: 0 0 .5rem #f99611;margin: 1.5rem auto 0;}
  .box-info.popular{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_03.png');box-shadow: 0 0 .5rem #fc6731;margin: 1.5rem auto 0;}
  .box-info.gold{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_04.png');box-shadow: 0 0 .5rem #906afb;margin: 1.5rem auto 0;}
  /****cover***/
  .cover{ }

  .chart-tips{ padding:1rem 2rem 0; font-size: .875rem}
  /****pager01***/
  .panel-head {padding: 1rem 0 .5rem;position: relative;z-index: 2; border-bottom: 1px solid #f1eeee; margin: 0 2rem}
  .panel-head h1{ font-weight: lighter; font-size: 4rem; line-height: 1; float: left; font-weight: 300; color: #fd6a53; position: relative}
  .panel-head h1:before{ content: '';display: block;width: 4rem; height: 4rem; left: 2.425rem; bottom: 0; background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/tit-shade.png') left bottom no-repeat; background-size: 100%; position: absolute; }
  .panel-head:after{ content: '';display: block; height: 0;width: 0; clear: both; overflow: hidden;}
  .panel-head .tit-dsp{ float: left; padding-left: .5rem; margin-top: 2rem;position: relative;z-index: 3;}
  .panel-head h2{  font-size: 1.5rem; line-height: 1.125;color: #5e5e5e; font-weight: 100;}
  .panel-head h3{ font-size: .75rem;line-height: 1.25; color: #7682a1; position: relative;font-weight: 100;}

  table{}
  table td{ padding: .75rem 0}

  .list{ display: flex;display: -webkit-flex; flex-wrap: wrap; -webkit-flex-wrap: wrap}
  .list-col{ flex-shrink: 10; padding: .5rem}
  .list-col:last-child{ flex-shrink: 2; padding-top: 1rem}
  .list-head{ font-size: 1rem; text-align: center; color: #333; padding-bottom: .5rem; font-weight: 300}
  .list-rank{ border-radius: .25rem; background-color: #f9f9f9; color: #666666; margin:.25rem 2rem 0; padding: .25rem 0; text-align: center }
  .list-rank.list-tit{ background-color: transparent; color: #333}
  .list-cell{ font-size: .875rem}
  .list-cell:first-child{ width: 12%}
  .list-cell:nth-child(2){width: 20%}
  .list-cell:nth-child(3){width: 18%}
  .list-cell:last-child{width: 50%}
  .list-box{ width: 50%;}
  .pager10 .list-box{ padding-top: 5rem}

  .list-top{ position: relative; height: 14rem;
    /* padding-bottom: 1rem*/}

  .list-top-cell{ position: absolute;width: 24%; height: 7.6rem; left:37%; top: 0; background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page07-top-bg.png') left top no-repeat; background-size: 100% 100%; }
  .list-top-cell:nth-child(2){ top: 6.1rem; left: 24.5%}
  .list-top-cell:last-child{ top: 6.1rem; left:49.5%}
  .list-top-cell .t-box{ position: relative;}
  .t-box .index-img{ position: absolute; left: 8%; top: .5rem;width: 80%; transform: translate(0,-2rem);-webkit-transform: translate(0,-2rem); transition: all 1.75s;-webkit-transition: all 1.75s; opacity: 0}
  .t-box .index-img.active{ transform: translate(0,0);-webkit-transform: translate(0,0); opacity: 1}
  .t-box .index-img img{width: 30%;}
  .t-box .index{ text-align: right; padding-right: 1.5rem; color: #ff4040; font-size: .875rem;line-height: 1; padding-top: 1.5rem}
  .t-box .name{ text-align: right; padding-right: 1.5rem;font-size: .875rem; color: #a59d9d; line-height: 1}
  .t-box .integral{text-align: center; font-size: 1.75rem; font-weight: bold; color: #fd6a53; line-height: 1.2}
  .t-box .gift{text-align: center; font-size: .875rem; color: #666666; line-height: 1}
  /*.list-top-cell{ border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c; position: relative; z-index: 1; width: 7.75rem; height: 4.5rem;}*/
  /*.list-top-cell:before{ content: '';display: block; z-index: 0; width: 7.75rem; height: 4.5rem; border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c;  position: absolute; left: 0;top: 0; transform: rotate(-60deg) ;}*/
  /*.list-top-cell:after{content: '';display: block; z-index: 0; width: 7.75rem; height: 4.5rem;  border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c; position: absolute; left: 0;top: 0; transform: rotate(60deg)}*/

  .pop{ background:linear-gradient(to right,#ff8774,#fc573d); background:-webkit-linear-gradient(left,#ff8774,#fc573d); border-radius: 999rem; color: #fff; width: 4rem; height: 4rem; text-align: center;border:.25rem solid #ffd5ce ; box-shadow:0 0 .5rem #ffd5ce }
  .pop .icon{ line-height: 1.5; font-size: 2.75rem}
  .pop.pop-orange,
  .pop.pop-yellow,
  .pop.pop-blue,
  .pop.pop-green{box-shadow:0 0 .5rem #fc573d; line-height: 1.25rem; padding-top: 2rem; height: 4.5rem; width: 6.5rem; position: relative; margin: 0 auto; border: 0}
  .pager10 .pop{ height: 6rem; padding-top:2.5rem; width: 8.5rem}
  .pop.pop-orange:after,
  .pop.pop-yellow:after,
  .pop.pop-blue:after,
  .pop.pop-green:after{content:''; display: block;width: 90%; height: 90%; left: 5%; top: 5%; border-radius: 999rem; box-shadow: 0 0 0 .075rem #fff; position: absolute;z-index: 1}

  .pop .crown{ position: absolute; width: 2rem; height: 2rem; left: 2.375rem; top: -.875rem; background-color: white; border-radius: 999rem; box-shadow: 0 0 .25rem #fc573d; z-index: 2}
  .pop .crown .icon{ color: #fc573d; font-size: 1.25rem}
  .pager10 .pop .crown{left: 3.125rem; top: -.875rem;width: 2.5rem; height: 2.5rem;}
  .pager10 .pop .crown .icon{font-size: 1.675rem}
  .pop.pop-yellow{background:linear-gradient(to right,#ffc584,#ffb866); background:-webkit-linear-gradient(left,#ffc584,#ffb866);box-shadow:0 0 .5rem #ffb866; }
  .pop.pop-yellow .crown{ box-shadow: 0 0 .25rem #ffb866;}
  .pop.pop-yellow .crown .icon{ color: #ffb866;}
  .pop.pop-blue{background:linear-gradient(to right,#96cfff,#79c2ff); background:-webkit-linear-gradient(left,#96cfff,#79c2ff);box-shadow:0 0 .5rem #79c2ff; }
  .pop.pop-blue .crown{ box-shadow: 0 0 .25rem #79c2ff;}
  .pop.pop-blue .crown .icon{ color: #79c2ff;}
  .pop.pop-green{background:linear-gradient(to right,#71e8ee,#3cced5); background:-webkit-linear-gradient(left,#71e8ee,#3cced5);box-shadow:0 0 .5rem #3cced5; }
  .pop.pop-green .crown{ box-shadow: 0 0 .25rem #3cced5;}
  .pop.pop-green .crown .icon{ color: #3cced5;}

  .sum-tit,
  .sum-tit-line{ text-align: center;}
  .sum-tit-line{ padding-top: .5rem}
  .sum-tit .tit{ text-align: center;color: #333; font-size: 1.5rem;}
  .sum-tit .tit-sub{ text-align: center;color: #999; font-size: .75rem; }
  .sum-tit-line .tit{ position: relative;font-size: 1rem}
  .sum-tit-line .tit:before{content: '';display: block;width: 60%;position: absolute;left: 20%; border-bottom: 1px solid #6f7998; top: 50% }
  .sum-tit-line .tit span{ background-color: #444b5c; padding:0 .5rem; position: relative;z-index: 2}
  .sum-tit .val{ font-family: 'GLUEKLIN'; font-size: 2.5rem; color:#ff616c; line-height: 1.125 }
  .sum-tit .unit{ font-size: 2rem; color: #fff;}
  .sum-tit-line .val{ font-size: 1.5rem;}
  .sum-tit-line .val.text-blue{ color:#6daaef}
  .sum-tit-line .unit{ font-size: 1.125rem;}
  /*****/
  /*****/
  .chart-box{}
  /****pager02***/
  /****pager09***/
  .info-items{ border-left:.25rem solid #ff3b1c;  line-height:1.25; width: 86%; margin: 1rem auto 0; padding-left: .5rem; font-size: 1rem; font-weight: 300}
  .info-items:first-child{ margin-top: 1rem;}
  /*******/
  /*.slider-box{ padding: 2rem}*/
  .slider{ width:80%; padding:5% 5% 0; margin: 2rem auto; position: relative; z-index: 1; min-height: 19rem; box-shadow: 0 0  .25rem #f1eeee; overflow: hidden}
  .slider img{ display: block;}
  .slider-info{ padding: 1rem 0 0}
  .slider-mark{ position: relative; padding-bottom: .25rem;}
  .slider-mark:after{ content: '';display: block;width: 5rem; left: 0; bottom: 0; border-bottom: 1px solid #ff616c; position: absolute;transform: translate(-50rem,0);-webkit-transform: translate(-50rem,0);transition: all .75s;-webkit-transition: all .75s}

  .slider-items{ position: absolute; left: 5%;  top: 5%;  z-index: 1;transition: all .5s; opacity: 0; width: 90%; }
  .slider-items.active{ z-index: 2; opacity: 1;transform: translate(0,0);-webkit-transform: translate(0,0);}
  .slider-step{ position: absolute; bottom: 1rem; left: 42%; width: 40%;z-index: 2; }
  .slider-step .point{ background-color: #f1eeee; color: #f1eeee; border-radius: 999px; width: .5rem; height: .5rem; display: inline-block; overflow: hidden; transition: all .5s; margin: 0 .25rem}
  .slider-step .point.active{ background-color:#fd6a53; color: #fd6a53 }
  /****back& cover***/
  .pager-cover,
  .cover{  background-color: #fc563c; text-align: center ; position: relative}
  .cover .tit{ position: absolute; width: 100%; top: 20%; color: white; opacity: 0; transform: translate(1.5rem,0);-webkit-transform: translate(1.5rem,0); transition: all .75s;-webkit-transition: all .75s }
  .cover .tit.active{opacity: 1;transform: translate(0,0);-webkit-transform: translate(0,0);}
  .cover .tit.tit-year{ font-size: 1.25rem }
  .cover .tit.tit-name{ font-size: 3rem; top: 25% }
  .cover .tit.tit-name-sub{ font-size: .875rem;top: 36% }
  .cover .tit.tit-date{ font-size: .875rem;top: inherit; bottom: 20%; box-shadow: 0 0 0 1px white; width: 50%; left: 25% }
  .cover-sqr{ width: 100%; display: block}
  .copyright{  text-align: center; width: 100%; padding-top: 6.5rem;position: absolute; bottom: 15%; color: white; opacity: .5}
  .app-link{  border-radius: 999rem; color: white; font-size: 1.25rem; box-shadow: 0 0 0 1px white; width: 60%; margin: 0 auto; position: absolute; bottom: 20%; left: 20%; padding: .25rem 0}
  .app-link .icon{ display: inline-block; transform: rotate(-90deg);-webkit-transform: rotate(-90deg)}
  /*****/
  .pager-toggle{ position: fixed; bottom: 0rem;width: 100%;  text-align: center;z-index: 4}
  .pager-toggle .next{  display: inline-block}

  /****/
  .ui-loading {  position: fixed;  top: 0;  left: 0;  z-index: 999;  width: 100%;  height: 100%;}
  .ui-loading-circle {  position: fixed;  width: 30%;  padding:2rem .5%;  left: 35%; color: #fff; text-align: center;  height: auto;  top: 35%;  background-color: rgba(0,0,0,.5);  border-radius: .75em;  }
  .ui-loading-circle img {  display: block;  width: 100%;  border-radius: .75em;}
  .icon-svg {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1.5em; height: 1.5em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.25em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
  }

  .count-scroll{display: inline-flex; display: -webkit-inline-flex; }
  .num,
  .num-dot{font-size: 2rem; width: 1.125rem; height: 2rem; text-align: center; line-height: 1;  display: block; overflow:hidden ; font-family:DINOT; text-align: center}
  .num-dot{ width: .5rem;}
  .num-dot i{ font-family:DINOT;display: block;width: .5rem;  height:2rem;font-style: normal;transform: translateY(2rem);-webkit-transform: translateY(2rem);  }
  .num-dot.active i{transform: translateY(0);-webkit-transform: translateY(0);transition: all 1s;-webkit-transition: all 1s; }
  .num i{display: block; font-style: normal; width: 1.05rem; word-break: break-all;white-space: pre-wrap; height:20rem;font-family:DINOT;transform: translateY(2rem);-webkit-transform: translateY(2rem); }
  .num.num-0 i{ transform: translateY(0);-webkit-transform: translateY(0); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-1 i{ transform: translateY(-2rem);-webkit-transform: translateY(-2rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-2 i{ transform: translateY(-4rem);-webkit-transform: translateY(-4rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-3 i{ transform: translateY(-6rem);-webkit-transform: translateY(-6rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-4 i{ transform: translateY(-4rem);-webkit-transform: translateY(-8rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-5 i{ transform: translateY(-10rem);-webkit-transform: translateY(-10rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-6 i{ transform: translateY(-12rem);-webkit-transform: translateY(-12rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-7 i{ transform: translateY(-14rem);-webkit-transform: translateY(-14rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-8 i{ transform: translateY(-16rem);-webkit-transform: translateY(-16rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-9 i{ transform: translateY(-18rem);-webkit-transform: translateY(-18rem); transition: all 1s;-webkit-transition: all 1s;}
</style>
