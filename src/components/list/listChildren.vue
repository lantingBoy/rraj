<template>
  <div class="container">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a
          class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">{{listDetail.projectName}}</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="body body-wz" style="padding-bottom:3.6rem;">
      <div class="panel panel-red">
        <div class="panel-body text-center padding-top-2rem padding-bottom-1rem">
          <div class="text-normal text-gray-light">今日预期年化</div>
          <div class="text-h1-max line-height-1_5 profit-val margin-top" data-profit="0.063">
            {{listDetail.yearrate}}%+{{listDetail.plusrate}}%
          </div>
          <div class="col col-3 " style="margin-top:1.5rem">
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.days}}天</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">项目周期</div>
            </div>
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.repayWay}}</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">当日起息</div>
            </div>
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.collectMoney | filterB}}</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">项目总额</div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel border-bottom-solid">
        <!--通知-->
        <!--<div class="border-bottom-solid text-normal-min col col-8">
          <div class="col-cell col-cell-7 padding-top-0_5rem padding-bottom-0_5rem">
            <div class="padding-left-1rem text-no-warp padding-right-1rem">
              <i class="icon iconfont icon-notice text-orange text-normal-min"></i>&nbsp;&nbsp;新用户仅限购买一次，限额5万。
            </div>
          </div>
          <div class="col-cell text-gray text-center">
            <div class="border-left-solid padding-top-0_5rem padding-bottom-0_5rem">详情</div>
          </div>
        </div>-->
        <div class="panel-body">
          <div class="padding-top-1rem padding-left-1rem padding-bottom-1rem text-normal-min">
            已募集<span class="text-red">{{listDetail.raisedMoney | filterA}}</span>
          </div>
          <div class="ui-slider margin-left-1rem margin-right-1rem">
            <div class="slider-bar1">
              <div class="slider-progress" :style="'width:'+width+'%'"></div>
              <div class="bar1" ></div>
              <div class="bar-mark1" :style="'left:'+width+'%'">{{listDetail.raisedMoney/listDetail.collectMoney * 100 | filterC}}
              </div>
              <!--<div class="bar-mark-least">
              </div>-->
            </div>
          </div>
          <div class="raiseMoney">最低募集额</div>
          <div
            class="margin-left-1rem margin-right-1rem margin-top-1rem padding-top-0_5rem padding-bottom-0_5rem border-top-solid text-normal-min"
            @click.stop="openDialog">
            <font color="#333333">项目成立的次日开始计息</font> <i class="icon iconfont icon-help text-normal-min text-gray"
                                                        ui-dialog="explain"></i>
          </div>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <a class="list-cell-arrow-right" href="javascript:;" ui-dialog="service-rule" @click.stop="openDialog1">项目详情</a>
        <a class="list-cell-arrow-right" href="javascript:;" ui-dialog="service-rule2">
          <router-link to="/insurance" class="col col-2">
            <div class="col-cell">安全保障</div>
            <div class="col-cell text-right text-normal-min">恒丰银行资金存管</div>
          </router-link>
        </a>
        <a class="list-cell-arrow-right" @click="ranking">
          <div class="col col-2">
            <div class="col-cell">本期已有<span class="text-red">{{listDetail.joinCount}}</span>人加入</div>
            <div class="col-cell text-right text-normal-min text-red">{{listDetail.returnMoney}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="footer footer-bottom">
      <div class="text-normal-min line-height-2">
        <div v-html="listDetail.earningText"></div>
      </div>
      <div class="btn-control" @click.prevent="doBtn">
        <!--:class="listDetail.buttonStatus==0?'btn-disable':''"-->
        <a class="btn btn-red btn-circle" ref="btn" :disabled="prevent">立即投资</a>
      </div>
    </div>
    <div class="dialog" ui-dialog-name="explain" :class="dialogShow? 'dialog-animate':''">
      <div class="dialog-box">
        <div class="dialog-header">计息说明</div>
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <p>1.项目满标或在募集期结束时达到最低募集额，则项目成立；</p>
          <p class="padding-top-0_5rem">2.项目成立的次日开始计息；</p>
          <p class="padding-top-0_5rem">3.如项目未达到最低募集额将退还本金至您的账户余额；</p>
          <p class="padding-top-0_5rem">4.募集期不计息，项目周期不包括募集期。</p>
        </div>
        <div class="dialog-footer">
          <a class="btn btn-max text-red" ui-dialog-close="explain" @click="sure">我知道了</a>
        </div>
      </div>
    </div>
    <div class="dialog dialog-full " ui-dialog-name="service-rule" :class="dialogShow1? 'dialog-animate':''">
      <div class="dialog-box">
        <div class="dialog-header" @click="shutDialog">
          <div class="nav-head"><a href="javascript:;"><img
            src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
          <i class="icon iconfont icon-close text-h2" ui-dialog-close="service-rule"></i>
        </div>
        <div class="dialog-body">
          <iframe src="http://m.renrenaijia.com/app/project/detail.html?id=12519" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
    <div class="f-dialog" :class="riskTestShow? 'active':''">
      <div class="f-dialog-con">
        <div class="f-title">风险偏好测试</div>
        <div class="f-tip">
          <p class="f-msg1">为更好保障您的权益</p>
          <p class="f-msg2">请及时评估您的风险承受能力</p>
        </div>
        <div class="f-btn">
          <button class="f-sbtn1 my-red countdown" @click="cancelRisktest">暂不评测</button>
          <button class="f-sbtn1 my-red countdown" @click="cancelRisktest" :disabled="sendMsgDisabled" ref="time"
                  v-if="countdownFlag">暂不评测 <span style="color:#ccc">(<span>{{time|filterA}}</span>)</span></button>
          <button class="f-sbtn1 my-red countdown" @click="cancelRisktest" v-if="!countdownFlag">暂不评测</button>
          <button class="f-sbtn2" @click="toRisktest">去评测</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import Loading from '../loading/loading.vue'
  export default {
    components: {
      Loading
    },
    data() {
      return {
        listDetail: {},
        dialogShow: false,
        dialogShow1: false,
        width: '',
        showLoading: true,
        act: '',
        riskTestShow: false, // 是否进行风险评测弹框
        prevent: false,  // 售罄禁止点击
        countdownFlag: false,
        sendMsgDisabled: true
      }
    },
    created() {
      // 调取稳赚详情页面
      this.$fetch.api_data.getWZdetail({projectId: this.$route.params.id, token: ''}).then((res) => {
        console.log(res)
        this.listDetail = res.data.data
        if (this.listDetail.buttonStatus === 0) { // 如果已经售罄
          this.$refs.btn.innerHTML = '已售罄'
          this.prevent = true
          this.$refs.btn.style = 'background:#ccc'
        }
        this.act = res.data.data.act
        this.width = ((res.data.data.raisedMoney / res.data.data.collectMoney) * 100)
        console.log(this.width)
        this.showLoading = false  //设置loading
      })
    },
    methods: {
      openDialog1() {
        this.dialogShow1 = true;
      },
      openDialog() {
        this.dialogShow = true;
      },
      shutDialog() {
        this.dialogShow1 = false;
      },
      sure() {
        this.dialogShow = false;
      },
      back() {
        this.$router.push({path: '/list'});
      },
      doBtn() {
        if (this.listDetail.buttonStatus === 0) {
          return false
        }
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined || localStorage.isLogin == null) {
          //将当前项目的id带入登录页面以便登录之后仍回到当前页面
          this.$router.push({path: '/login', query: {pageId: this.$route.params.id, page: 'listChildren'}})
        }
        if (localStorage.isRealName == 'false') {
          MessageBox.confirm('', {
            message: '为确保你的资金安全，请先完成实名认证',
            title: '提示',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonClass: 'cancelButton',
            confirmButtonClass: 'confirmButton',
            confirmButtonText: '前往',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {
              //确定操作
              this.$router.push({path: '/realName'})
            }
          }).catch(err => {
            if (err == 'cancel') {
              //取消按钮
            }
          });
          return
        }
        if (this.act === "") { // 不需要风险评测
          this.$router.push(`/listDetail/${this.$route.params.id}`) // 动态路由跳转
          return true
        } else {             //风险评测
          let decodeUrl = decodeURIComponent(this.act);
          let act = JSON.parse(decodeUrl);
          if (act.action === 1002) {  // 弹出风险评测
            this.riskTestShow = true;
          } else if (act.action === 1008) { // 弹出带倒计时的风险评测
            this.countdown();//风险评测的倒计时
            this.dialogShow = true;
            this.countdownFlag = true;
          }
        }
      },
      ranking() {
        MessageBox.confirm('', {
          message: '请下载App查看',
          title: '',
          showConfirmButton: true,
          showCancelButton: true,
          cancelButtonClass: 'cancelButton',
          confirmButtonClass: 'confirmButton',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(action => {
          if (action == 'confirm') {
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err => {
          if (err == 'cancel') {}
        })
      },
      cancelRisktest() { // 暂不评测
        this.$fetch.api_data.cancelRiskTest({token: ''}).then((res) => {
          this.dialogShow = false
        })
      },
      toRisktest() {   // 风险测评
        this.dialogShow = false
        this.$router.push({path: '/riskTest'})
      },
      countdown() {
        const me = this
        me.time = 5
        me.sendMsgDisabled = true
        let interval = window.setInterval(function () {
          me.time--
          if (me.time <= 0) {
            me.time = 0
            me.sendMsgDisabled = false
            window.clearInterval(interval)
          }
        }, 1000)
      }
    },
    filters: {
      filterB: function (num) {
        let number = new Number(num)
        let str = number / 10000
        return str + '万'
      },
      filterC: function (num) {
        let number = new Number(num)
        if (number > 0 && number < 1) {
          Math.ceil(number)
          return Math.ceil(number) + '%'
        } else {
          return Math.floor(number) + '%'
        }

      }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    padding-top: 0;
    .col-3 > .col-cell {
      width: 33%;
    }
    .padding-top-2rem {
      padding-top: 4rem;
    }
    .dialog-animate {
      transform: translateY(0);
      -webkit-transform: translateY(0);
    }
    .btn-disable {
      background-color: #ccc;
    }
    .margin-top {
      margin-top: 1rem;
    }
    .slider-bar1 {
      position: relative;
      width: 100%;
      height: .375rem;
      background: #ccc;
      .slider-progress {
        position: absolute;
        width: 40%;
        animation: sliderMoveWidth 2s ease;
        -webkit-animation: sliderMoveWidth 2s ease;
        height: .375rem;
        left: 0;
        top: 0;
        background-color: #FF4D4D;
      }
      .bar-mark1 {
        position: absolute;
        border: 1px solid #FF4D4D;
        background-color: #FF4D4D;
        border-radius: .2rem;
        top: -1.4rem;
        color: #fff;
        padding: .125rem .25rem;
        margin-left: -1.425rem;
        min-width: 2.5rem;
        text-align: center;
        animation: sliderMoveLeft 2s ease;
        -webkit-animation: sliderMoveWidth 2s ease;
        font-size: .8rem;
      }
      .bar1 {
        -webkit-animation: sliderMoveWidth 2s ease;
        animation: sliderMoveLeft 2s ease;
        width: .7rem;
        height: .7rem;
        top: 0;
        margin-left: -.375rem;
        margin-top: -.2rem;
        content: '';
        display: block;
        border-radius: 999rem;
        position: absolute;
        background-color: #FF4D4D;
      }
      .bar-mark-least {
        position: relative;
        min-width: 2.5rem;
        text-align: center;
        left: 0%;
        animation: sliderMoveLeft 2s ease;
        -webkit-animation: sliderMoveWidth 2s ease;
      }
    }

  }

  .v-modal {
    opacity: .8;
  }

  .mint-msgbox {

    width: 65%

  }

  .mint-msgbox-message, .mint-msgbox-confirm {
    color: #333;
    font-family: 'Microsoft YaHei', arial, helvetica, sans-serif;
  }

  .f-dialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    -webkit-justify-content: center;
    align-items: center;
    justify-content: center;
    display: -webkit-flex;
    -webkit-align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    transform: translateY(-50rem);
  }

  .f-dialog-con {
    width: 76%;
    background: #fff;
    padding-top: 1rem;
    text-align: center;
    border-radius: .5rem;
    font-size: 1rem;
    font-family: "PingFang SC Medium";
    z-index: 999;
  }

  .f-title {
    margin-bottom: 2rem;
    color: #333;
    font-size: 1.1rem;
  }

  .f-tip {
    padding: 0 .5rem;
    font-size: .9rem;
  }

  .f-btn {
    margin-top: 2rem;
    border-top: 1px solid #ccc;
    width: 100%;
  }

  .f-tip .f-msg1 {
    padding-bottom: 0.5rem;
  }

  .f-btn button:first-child {
    border-right: 1px solid #ccc;
  }

  .f-btn button {
    outline: none;
    background: none;
    border: 0;
    width: 49%;
    float: left;
    padding: .8rem 0;
    font-size: 1rem;
  }

  .my-red {
    color: #ff4040;
  }

  .f-btn button:last-child {
    color: #ff4040;
  }

  .f-btn button {
    outline: none;
    background: none;
    border: 0;
    width: 49%;
    float: left;
    padding: .8rem 0;
    font-size: 1rem;
  }

  button {
    -webkit-appearance: button;
    outline: 0;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 0;
    box-shadow: none;
  }

  .active {
    transform: translateY(0);
  }
  .bar-mark-least:before {
    /* background-color: #fff; */
    border-radius: 999rem;
    /* border: .125rem solid #FF4D4D; */
    /* width: .5rem; */
    /* height: .5rem; */
    left: 0;
    top: -1.175rem;
    margin-left: 1.5rem;
  }
  .container .slider-bar1 .bar-mark1{
    font-size:12px;
  }
  .raiseMoney{
    font-size:12px;
    margin-left: 1.5rem;
  }
</style>
