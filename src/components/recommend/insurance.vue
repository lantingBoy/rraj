<template>
  <div >
    <header class="header" style="border-bottom:1px solid #ccc;z-index:999">
      <nav class="n-nav">
        <div class="nav-left" @click="back">
          <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
        </div>
        <div class="nav-head1" style="justify-content: center;-webkit-justify-content: center">
          <div  style="line-height: 3rem;text-align: center;font-size:1rem;">安全保障</div>
        </div>
      </nav>
    </header>
    <div class="container" style="padding-top: 3rem;">
      <!--选项卡-E-->
      <div class="tab-body">
        <!--选项卡详情-安全保障-S-->
        <div class="tab-cont">
          <div class="box box-img">
            <h3>多重安全保障</h3>
            <h4>投资更放心</h4>
            <div class="circle-info">
              <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_01.png" width="100%">
              <div class="circle-pin a" ref="pin"><div class="pin-in">银行存管</div></div>
              <div class="circle-pin b " ref="pin"><div class="pin-in">超<i class="text-red">139</i>万用户</div></div>
              <div class="circle-pin c " ref="pin"><div class="pin-in">全面风控体系</div></div>
              <div class="circle-pin d " ref="pin"><div class="pin-left-in">累计成交突破<i class="text-red">20</i>亿</div></div>
              <div class="circle-pin e " ref="pin"><div class="pin-left-in">法律合规</div></div>
              <div class="circle-pin f " ref="pin"><div class="pin-left-in">1亿B轮融资</div></div>
            </div>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>恒丰银行资金存管</h3>
            <h4>合法合规</h4>
            <p>人人爱家金融已在恒丰银行开立资金存管账户，确保投资者资金与平台自有资金彻底隔离。投资者的充值、投资、提现与划拨等交易类操作，均通过独立存管账户完成，严格隔离信息流与资金流，杜绝平台内部形成资金池，最大限度保障用户资金安全。</p>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_02.png" width="100%">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>严格的资产筛选原则</h3>
            <h4>项目优质</h4>
            <p>用户投资爱家宝、稳赚计划的资金，将通过系统动态投标的方式，由投资者自主选择标的，点对点将资金投向信息风险低、收益波动小的各类标准化金融产品及债权资产，包括但不限于：</p>
            <h5><span class="text-red">01/</span> 严选企业信贷</h5>
            <p class="supple-info">项目借款企业通常实力雄厚，并提供动产及不动产作为抵质押担保，还款能力强，同时还有担保方出具的无限连带责任担保函，将风险降到最低。</p>
            <h5><span class="text-red">01/</span> 供应链金融</h5>
            <p class="supple-info">基于供应链上下游的采购贸易，为采购方或供货方提供融资，融资方以票据质押、保证金担保、第三方机构担保等形式为借款提供担保。大型商业保理、融资租赁公司承接，付款方均为资金雄厚，有足够偿还能力的大型企业。</p>
            <div class="tips text-center"><br>*截止至今，用户所有过往投资均实现100%兑付。<br></div>
            <!--滑动幻灯--->
            <div class="slider">
              <h3>全面的风险控制体系</h3>
              <h4>安全升级</h4>
             <!-- <div class="slider-box active-1" id="slider-box">
                <div class="panel ">
                  <h6>借款审查</h6>
                  <p>1. 借款人生产经营、财务状况核查</p>
                  <p>2. 借款人生产和办公地实地调查</p>
                  <p>3. 实际控制人财务资产情况、住址、家庭状况等核查</p>
                  <p>4. 人行征信和法院执行信息等查询</p>
                  <p>5. 第三方反欺诈信息核查</p>
                  <p>6. 信贷审查通过签署合同</p>
                </div>
                <div class="panel active">
                  <h6>贷后跟踪</h6>
                  <p>1. 还本付息提前通知和跟踪</p>
                  <p>2. 负面信息查询</p>
                  <p>3. 定期上门面对面沟通</p>
                  <p>4. 信贷质量分析</p>
                  <p>5. 信贷政策调整</p>
                </div>
                <div class="panel ">
                  <h6>到期还本</h6>
                  <p>1. 成功还款</p>
                  <p>2. 尽调评价总结</p>
                  <p>3. 尽调资料存档</p>
                  <p>4. 担保人代偿</p>
                  <p>5. 担保物处置</p>
                  <p>6. 预期催收</p>
                  <p>7. 结清退出</p>
                </div>
              </div>-->

              <div class="step">
                <i class="num"></i>
                <i class="num active"></i>
                <i class="num"></i>
              </div>
              <div class="slider-info">
                人人爱家金融通过第三方大数据，建立自身的云数据系统、风险评估模型、信用衡量体系、风险定价模型等核心产品实现企业风控自动化、流程化，有效把控风险。
              </div>
            </div>

            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>设立风险保障机制</h3>
            <h4>本息无忧</h4>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_04.png" width="100%">
            <p>人人爱家金融与具有担保资格的第三方机构达成战略合作。由第三方机构设立风险准备金，全面保障投资者的本息安全。当借款方出现逾期时，第三方机构先行计提风险准备金并垫付投资者的本息，确保投资者本息安全，并由第三方机构追偿借款人本息。此外，人人爱家金融在恒丰银行开设独立的“服务质保金”存管账户，专项用于完善和提升平台的风控体系建设，强化对投资者的服务保障。截止2017年11月底，“服务质保金”账户余额为人民币120万余元。</p>

            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>权威律所深度合作</h3>
            <h4>全程监督</h4>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_05.png" width="100%">
            <p>权威律师事务所全程法律支持，保证每个理财项目合法合规。经过CFCA认证的电子签约平台（e签宝）和第三方电子存证平台双重保障投资者、借款人与平台签署的合同真实有效，并受到法律保护。</p>

            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>银行级数据加密存输</h3>
            <h4>系统安全</h4>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_06.png" width="100%">
            <p>使用银行级数据加密存储与传输技术，采用阿里巴巴相同的防火墙技术，并通过磁盘矩阵进行实时数据备份，7X24小时全程监控管理，保证资金数据与投资者信息安全。</p>

            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>设立资金同卡进出原则</h3>
            <h4>资金安全</h4>
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_07.png" width="100%">
            <p>资金进出采用同卡机制（A卡转入的资金，只能转出至A卡），若手机或身份证丢失造成账户被他人登录，资金无被盗转风险。</p>

            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_tit.png" width="100%" class="block-line">
            <h3>合规认证</h3>
            <h4>合法合规</h4>
            <p>2016年8月，国家四部委联合发布了《网络借贷信息中介机构业务活动管理暂行办法》当中规定网络借贷信息中介结构应当取得相应的电信业务经营许可和信息系统定级备案。人人爱家金融已于2017年7月5日取得ICP许可证，2017年8月29日获得信息安全等级第三级备案证明，是国内少数已率先符合国家规定开展互联网借贷业务的平台。</p>
          </div>
          <div class="copyright">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/comm/poster_logo.png" width="35%">
          </div>
        </div>
        <!--选项卡详情-安全保障-E-->
      </div>
    </div>
    <loading v-show="show"></loading>
  </div>
</template>
<script>
  import Loading from '../loading/loading.vue'
  export default{
    components:{
      Loading,
    },
    data(){
      return{
        show:true,

      }
    },
    methods:{
      back(){
        this.$router.back();
      }
    },

    computed:{


    },
    mounted(){
      setTimeout(()=>{
        this.show=false
      },300);
      const len=document.getElementsByClassName('circle-pin').length;
      for(let i=0;i<len;i++){
        self.setTimeout(function(){
          document.getElementsByClassName('circle-pin')[i].className +='animation';
        },250*i);
      }
    }
  }

 /* (function(){
    $('.circle-pin').each(function(i,n){
      var $this = $(this);
      self.setTimeout(function(){
        $this.addClass('animation');
      },250*i);
    });

    //禁用默认事件
    var preventDefault= function (e) {
      e.preventDefault();
    };

    //slider
    var slider = {
      elem: document.getElementById('slider-box'),
      panelBox:$('.slider-box'),
      panelList:$('.slider-box .panel'),
      stepList:$('.step .num'),
      posStart:{},
      posEnd:{},
      touch:('ontouchstart' in window)||window.DocumentTouch && document instanceof DoucumentTouch,//是否兼容touch事件
      handleEvent:function(event){
        var _eventType = event.type;
        if(_eventType==='touchstart'){
          slider.start(event);
        }else if(_eventType==='touchmove'){
          slider.move(event);
        }else if(_eventType==='touchend'){
          slider.end(event);
        }
      },
      //开始
      start:function(event){
        //console.log(event.targetTouches[0].clientX);
        var _target = event.targetTouches[0];
        slider._posStart = {x:_target.clientX,y:_target.clientY};

        this.elem.addEventListener('touchmove',slider.handleEvent,false);
        //启用禁用上下滑动
        this.elem.addEventListener('touchmove',preventDefault,false);
      },
      //滑动
      move:function(event){
        //console.log(event);
        var _targetMove = event.targetTouches[0];
        slider._posEnd = {x:_targetMove.clientX,y:_targetMove.clientY};
        //
        slider.touchMovePanel();
      },
      //结束
      end:function(event){
        this.elem.removeEventListener('touchmove',slider.handleEvent,false);
        //
        slider.touchEndPanel();
      },
      touchMovePanel:function(){
        //滑动
        var _this       = this;
        var _posMoveX   = _this._posEnd.x-_this._posStart.x;
        var _index      = _this.panelList.index($('.panel.active'));

        if(_posMoveX<0){
          //_this.panelList.eq(_index).css({'left':_posMoveX+'px'});
        }else{

        }
      },
      touchEndPanel:function(posMoveX){
        var _this           = this;
        var _posMoveX       = _this._posEnd.x-_this._posStart.x;
        var _index          = _this.panelList.index($('.panel.active'));

        if(_posMoveX<0){
          if(_index>=2){
            return;
          }else{
            //下一个面板
            this.panelBox.removeClass('active-'+_index);
            this.panelBox.addClass('active-'+(_index+1));
            this.panelList.removeClass('active').eq(_index+1).addClass('active');
            //
            //this.stepList.addClass('active-'+(_index+1));
            this.stepList.removeClass('active').eq(_index+1).addClass('active');
          }
        }else{
          //上一个面板
          if(_index<=0){
            return;
          }else {
            this.panelBox.removeClass('active-' + _index);
            this.panelBox.addClass('active-' + (_index - 1));
            this.panelList.removeClass('active').eq(_index - 1).addClass('active');
            this.stepList.removeClass('active').eq(_index-1).addClass('active');
          }
        }
      },
      //滑动动画
      init:function(){
        var _self = this;
        if(_self.touch){
          this.elem.addEventListener('touchstart',_self.handleEvent,false);
          this.elem.addEventListener('touchend',_self.handleEvent,false);
        }
      }
    };
    slider.init();

    $(document).ready(function(){
      $("img.lazy").lazyload();
    });
  })($);*/

</script>
<style scoped>
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .line-height-1_5{line-height:1.5}
  .text-gray{color: #999;}
  .text-red{ color: #ff4040;}
  .padding-left-1{padding-left: 1rem}
  .container{}
  .text-center{ text-align: center;}
  .text-right{ text-align: right;}
  .tips{ font-size: .75rem; color: #ff4040;}
  .tips-gray{ font-size: .75rem; color: #999;}
  i{ font-weight: normal; font-style: normal}
  .tab-tit{ width: 100%; background-color: #fff; border-bottom: 1px solid #e6e6e6; position: fixed; top: 0; z-index: 99}
  .tab-tit:after{ content: '';display: block;height: 0;width: 0; clear: both}
  .tab-tit li{width: 25%;  float: left; list-style:none; text-align: center; font-size: 1.125rem}
  .tab-tit li a{ text-decoration: none;display: block; padding: .5rem 0; border-bottom: 2px solid transparent;}
  .tab-tit li.active a{ color: #ff4040; border-bottom: 2px solid #ff4040;}
  .tab-body{}
  .tab-cont{ display: block; }
  .tab-cont.fadeOut{ display:none }
  .box{ background-color: #fff;  }
  .box-no-border{background-color: #fff; margin-top: .5rem; }
  .box.box-text{ padding: 1rem}
  .box.box-img{ padding:1rem 2rem 2rem}
  .box img{ display: block; margin:0 auto;}

  h3{color: #4c5c77; font-weight: normal;  font-size: 1rem; padding: .25rem 0; font-weight: bold; text-align: center}
  h4{color: #ff4040; font-weight: normal;padding:.125rem 0; font-size: .875rem; text-align: center}
  h5{color: #333; font-weight: bold;padding: .675rem 0 0 0; font-size: .875rem;}

  p{ padding-top: .5rem;font-size: .875rem; color: #646464; line-height: 1.75}
  p.supple-info{ text-indent: 2rem; color: #969696; font-size: .8rem;}

  .table-box{ margin-top: .25rem}
  table{ border-right:1px solid #e6e6e6;border-top:1px solid #e6e6e6}
  table a{text-decoration: none}
  table tr td,
  table tr th{ border-left:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6; padding: .5rem; line-height: 1.75}
  table tr th{ background-color: #f6f6f6; font-weight: normal}
  .box table tr td img{ display: inline; vertical-align: middle}
  .mark{ border-radius: 999rem; font-size: .675rem; color: #ff4040; border: 1px solid #ff4040; line-height: .75; padding:0 .25rem}
  .table-box-items{ margin-top: .5rem; margin-left: -2rem; margin-right: -2rem}
  .table-box-items table{ border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; border-left: 0; border-right: 0}
  .table-box-items tr td{ border:0}

  .items-tit{ padding:.75rem 2rem .75rem 1rem;}
  .items-cell{background-color: #fff;  border-top: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6; position: relative; margin-top: -1px}
  .items-cell.items-cell-top{ margin-top: 0}
  .items-cell:after{ content: ''; display: block;width: .5rem; height: .5rem; border-top:1px solid #e6e6e6; border-right: 1px solid #e6e6e6; position: absolute; right: 1rem; top: 40%; transform: rotate(45deg); -webkit-transform: rotate(45deg);transition: all .5s; -webkit-transition: all .25s;}
  .items-cell a{ display:block;padding:.75rem 2rem .75rem 1rem; text-decoration: none}

  .circle-info{ padding-top:1rem; position: relative; color: #ff4040;z-index: 9}

  .circle-pin{font-size:.875rem; border-bottom: 1px solid rgba(255,64,64,.75); color: #ff4040; padding:0 .25rem; right:15%; top: 0rem; white-space: nowrap; word-break: keep-all; position: absolute; opacity: 0; transition: all 1.5s;-webkit-transition: all .5s;transform:rotate(-45deg) translate(-3rem,3rem);-webkit-transform:rotate(-45deg) translate(-3rem,3rem);}
  .circle-pin.b{  right: -5%; top: 5rem}
  .circle-pin.c{  right: 4%; top:10rem}
  .circle-pin.d{ left:5%; right: inherit; top: 0}
  .circle-pin.e{ left:-1%; right: inherit; top: 4.5rem}
  .circle-pin.f{ left:4.5%; right: inherit; top: 8.5rem}
  .circle-pin .pin-in,
  .circle-pin .pin-left-in{position: relative; color: #ff4040}
  .circle-pin.animation{ opacity: .95;transform:rotate(0) translate(0,0);-webkit-transform:rotate(0) translate(0,0);}

  .pin-in:before{content: ''; display: block; position: absolute; left: 0; top: 0; height:0; width: 1rem; border-top:1px solid rgba(255,64,64,.75); transform:rotate(-45deg) translate(-1.9rem,.345rem);-webkit-transform:rotate(-45deg) translate(-1.9rem,.345rem); }
  .pin-in:after{content: '';display: block;position: absolute; left: 0; top: 0; height: .45rem;width: .45rem; background-color:rgba(255,64,64,.75); border-radius: 999rem; box-shadow: 0 0 0 .125rem rgba(255,64,64,.25); transform: translate(-1.4rem,2rem);-webkit-transform: translate(-1.35rem,1.85rem); }

  .pin-left-in:before{content: ''; display: block; position: absolute; right: 0; top: 0; height:0; width: 1rem; border-top:1px solid rgba(255,64,64,.75); transform:rotate(45deg) translate(1.9rem,.35rem);-webkit-transform:rotate(45deg) translate(1.9rem,.35rem); }
  .pin-left-in:after{content: '';display: block;position: absolute; right: 0; top: 0; height: .45rem;width: .45rem; background-color:rgba(255,64,64,.75); border-radius: 999rem; box-shadow: 0 0 0 .125rem rgba(255,64,64,.25); transform: translate(2rem,1.25rem);-webkit-transform: translate(1.35rem,1.9rem); }

  .block-line{ padding: 2rem 0}

  .copyright{ text-align: center; padding: .5rem 0; background-color: #efefef; margin-top: -1px}
  .copyright img{ display: block; margin: 0 auto;}

  .slider{ background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/detail/detail_safe_bg.png') left top no-repeat; background-size: 100% 100%; margin: 1rem -2rem; padding: 1rem 0; overflow: hidden;}
  .slider h3,
  .slider h4{ color: white}
  .slider h4{ padding-bottom: 1rem}
  .slider-box{position: relative; left: 0; top: 0;width: 260%; min-height: 14rem;transform: translateX(4.5%);-webkit-transform: translateX(4.5%) }
  .slider-box.active-0{transform: translateX(4.5%);-webkit-transform: translateX(4.5%);}
  .slider-box.active-1{transform: translateX(-26.5%);-webkit-transform: translateX(-26.5%);}
  .slider-box.active-2{transform: translateX(-57%);-webkit-transform: translateX(-57%);}
  .slider-box:after{ content: '';display: block;height: 0;width: 0; clear: both}
  .panel{ background: #ccc; border-radius: .5rem;padding:1% 2% 2%;width: 25%; margin: 0 .75%; min-height: 15rem; box-shadow: .25rem .25rem .5rem rgba(0,0,0,.5); float: left; transform: scale(.9,.9);-webkit-transform: scale(.9,.9) }
  .panel.active{background: white; transform: scale(1,1);-webkit-transform: scale(1,1) }
  .panel h6{color: #333; font-weight: bold;padding: .675rem 0 0 0; font-size: 1.125rem; text-align: center}
  .panel h6:after{ content: '';display: block; width: 0; height: 0; border-left:.325rem solid transparent; border-top:.5rem solid #333; border-right:.325rem solid transparent; margin: 0 auto; margin-top: .25rem}
  .panel p{ line-height: 1.25}
  .step{ margin: 1rem auto 0; width:3rem }
  .step:after{content: '';display: block;width: 0;height: 0; clear: both}
  .step .num{border-radius: 999rem;height: .5rem;width: .5rem; background: white; opacity: .5; display: block; float: left; margin: .25rem}
  .step .num.active{ opacity: 1}
  .slider-info{ color: white; padding:.5rem 2rem .5rem}

</style>
