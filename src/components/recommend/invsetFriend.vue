<template>
<div>
  <header class="header" >
    <nav class="n-nav">
      <div class="nav-left" @click="back">
        <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
      </div>
      <div class="nav-head1" style="justify-content: center;-webkit-justify-content: center">
        <div  style="line-height: 3rem;text-align: center;font-size:1rem;">邀请好友</div>
      </div>
    </nav>
  </header>
  <div class="container" style="background: #fbad14">
    <div class="img-wrap">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_01.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_02.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_03.png" width="100%">
      <div class="msg-box">
        <div class="msg-pop"><a href="javascript:;" onclick="invite_list()">已邀请<span class="text-orange">0</span>位好友，共获得<span class="text-orange">0</span>元奖励&gt;&gt;</a></div>
      </div>
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_05.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_06_new.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_07.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_08.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_09.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_10.png" width="100%">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_11.png" width="100%">
    </div>
    <div class="panel panel-rule" >
      <div class="panel-body">
        <h4>活动细则</h4>
        <p><strong>邀请规则：</strong></p>
        <p><span class="rule-pop">1</span>每成功邀请一位好友注册并累计投资稳赚计划(30天及以上)满10000元，你与好友各得50元现金奖励。</p>
        <p><span class="rule-pop">2</span>在50元邀请奖励到账后，你还能获得好友从注册起一年内每笔稳赚投资收益的20%作为佣金奖励（如好友第一笔投资稳赚一月5千元，第二笔投资3万元，你能立即获得50元邀请奖励，佣金奖励从第三笔投资开始计算）。</p>
        <p><span class="rule-pop">3</span>以每个自然月为周期，你邀请的好友达到5位且都累计投资稳赚计划(30天及以上)满10000元，还能额外获得500元现金奖励。</p>
        <p><strong>奖励发放：</strong></p>
        <p>在满足活动要求后，奖励将实时发放至账户可用余额，佣金奖励每月统计一次，次月5号前发放至账户余额。</p>
        <p><br>* 邀请人数越多，好友投资金额越多，你获得的奖励也就越多，上不封顶。</p>
      </div>
    </div>

    <div class="block">
      <!--block d--->
      <div class="footer">
        <p class="text-center"><br>客服热线：400-667-0571</p>
        <p class="text-center">本活动最终解释权归人人爱家金融所有<br><br></p>
        <p class="text-center copyright">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/comm/poster_logo.png" width="40%">
        </p>
      </div>
    </div>
    <!--block d--->
  </div>
  <div class="control-bottom active">
    <a  @click="share">二维码邀请</a>
    <a  @click="share">分享邀请</a>
  </div>
  <div class="back-top" v-show="showBar" style="display: block">
    <span  @click="backTop">返回<br>顶部</span>
  </div>
  <loading v-show="show"></loading>
</div>
</template>
<script>
  import Loading from '../loading/loading.vue'
  import {MessageBox} from 'mint-ui'
  export default{
    components:{
      Loading
    },
    data(){
      return{
        showBar:false,
        show:true
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      share(){
        MessageBox.confirm('请下载APP查看').then(action => {
          if(action==='confirm'){
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err=>{
          if(err==='cancel'){
          }
        })
      },
      backTop(){
        const timer=setInterval(function(){
          let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
          let ispeed=Math.floor(-scrollTop/6);
          if(scrollTop===0){
            clearInterval(timer);
          }
          document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
        },30)
      }
    },
    mounted(){
      const _this=this;
      setTimeout(()=>{
        _this.show=false
      },300)
      window.onscroll=function () {
       if(document.body.scrollTop>window.innerHeight/2){
         _this.showBar=true;
       }else{
         _this.showBar=false;
       }
      }
    }
  }
</script>
<style lang="less" scoped >
  .text-center{text-align: center}
  .block p{ margin-top: .25em}
  .header{}
  .img-wrap img{ display: block}
  .tips{ font-size: 12px; padding:.25em 5%; text-align: center}
  .tips-date{font-size: 16px; text-align:center;}
  .text-green{color:#30450f}
  .text-yellow{color:#fce5b1;font-size: 15px;}
  .text-a-yellow{ color:#fdea00; text-decoration: none}
  .text-gray{color:#999999}
  @media (max-width: 340px) {
    .tips{ font-size: 10px; }
  }
  .text-orange{color:#fc8230;}
  .container{ z-index: 0;position: relative;}
  .panel{margin: 1em;background-color: #d42b3c; box-shadow:0 0 0 5px #dd2e3d ; border-radius: .5em; padding: 5%}
  .panel.panel-message{ text-align: center;color: #fce5b1; height: 50px; overflow: hidden}
  .panel-rule{ line-height:1.6;color: white; background-color: transparent; padding: 5%; margin: 5%;font-size: 14px; box-shadow: none}
  .panel-rule h4{ font-size: 18px; text-align: center;}
  .panel-rule p:first-child{ margin-top:0}
  .panel-rule p{}
  .rule-pop{ background-color: transparent; height: 1em; width: 1em;border-radius: 999px;color:white; box-shadow: 0 0 0 1px white; display: inline-block;line-height: 1em; text-align: center; margin-right: .5em;}
  .panel-rule .tips{font-size: 12px;text-align: left}
  .msg-box{ background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/shareFriendV4/in_04.png') left top no-repeat; background-size: 100% 100%; padding: .5em 0; }
  .msg-pop{ border-radius: .5em; border: 2px solid #fc8230; border-top-width: 4px; width: 80%; margin: 0 auto; padding: .5em 0; background-color: #fff;color: #543202; text-align: center; font-size: 13px; }
  .msg-pop a{ color: #543202; text-decoration: none; }
  .footer{font-size: 13px;}
  .copyright{ background-color: #e79d0d;  padding:.5em 0 }
  @media (max-width: 320px) {
    .panel.panel-bag td div:nth-child(3){ font-size: 14px;}
    .msg-pop{font-size: 14px;}
    .dialog-panel-body table{ font-size: 12px;}
  }
  .back-top{ display: none; border-radius: 999px; color: #925604;font-size: 12px;width: 38px;height: 34px;position: fixed; right: 1em;bottom: 6em; background-color: #ffd100;border-left: 2px solid #ffef89;line-height: 14px; text-align: center; vertical-align: middle; padding-top:6px; transition: all .5s; z-index: 4}
  .back-top a{color: #925604; text-decoration: none}
  .control-bottom{ bottom: 0;width: 100%; left: 0; background-color: #fff; position: fixed; text-align: center; padding: .5em 0; border-top: 1px solid #fcfcfc;opacity: 0; transform: translateY(5em);-webkit-transform:translateY(5em);transition: all .25s;-webkit-transition: all .25s}
  .control-bottom.active{opacity: 1; transform: translateY(0);-webkit-transform: translateY(0);}
  .control-bottom a{ text-decoration: none; background-color: #ff6600; color: white; border-radius: .25em; display: inline-block;width: 43%; padding: .5em 0;font-size: 18px; margin: 0 .25em}

</style>
