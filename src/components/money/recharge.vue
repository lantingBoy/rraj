<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a
          class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">充值</div>
        <div  class="nav-right" ></div>
      </nav>
    </header>
    <div class="body">
      <div class="list">
        <div class="form-head text-gray text-tips">账户可用余额{{balance}}元</div>
        <div class="form-items">
          <label for="recharge" class="label-control">充值金额(元)：</label>
          <input type="number" min="100" class="form-control" placeholder="1元起充" id="recharge" value=""
                 v-model="money">
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div class="form-items form-items-min" data-list="01000000" data-ui="dialog-show">
          <div class="label-control">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/bank/01050000.png" class="ls-bank-icon">
            <div class="ls-bank-cell">
              <div class="line-height-1_5">{{bank.bankName}}<span
                class="text-gray text-tips">尾号{{bank.cardNumber}}</span></div>
              <div class="text-tips text-gray ">{{bank.tips}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-gray f-12 tips">
        <p>资金将充值到你的个人恒丰存管账户</p>
        <p>当日充值的资金如未投资，则次日可发起提现</p>
      </div>
      <div class="bar">
        <div class="padding-top-0_5rem">
          <button class="btn btn-red btn-circle" @click="pay" ref="doPay">立即充值
          </button>
        </div>
        <div class=" padding-top-1rem text-normal-min text-gray">
          <p class="padding-top-0_5rem text-center">人人爱家金融采用多重风控与安全技术</p>
          <p class="padding-top-0_5rem text-center">全程监控资金流向，请你放心充值</p>
        </div>
      </div>
    </div>
    <div class="dialog" ui-dialog-confirm="verify-code" :class="flag?'show-dialog':''">
      <div class="dialog-box">
        <div class="dialog-header">确认付款</div><!--验证手机短信-->
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <div class="padding-left-1rem padding-right-1rem text-center line-height-1_5">已向{{mobile}}发送了支付验证码<br>该验证码3分钟内有效
          </div>
          <div class="form-items-border">
            <input type="tel" placeholder="短信验证码" id="code" maxlength="6" class="form-items-cell" v-model="code">
            <button class="form-items-cell pop-code pop-circle-red" @click="getCode" :disabled="sendMsgDisabled"
                    ref="time">{{time|filterA}}
            </button>
          </div>
        </div>
        <div class="dialog-footer">
          <a href="javascript:;" class="btn btn-max text-gray" @click="toCancel" ui-dialog-close="verify-code">取消</a>
          <a href="javascript:;" class="btn btn-max text-red" @click="trade">确定</a>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import Loading from '../loading/loading.vue'
  import {MessageBox} from 'mint-ui'
  import {des} from "../../commonjs/commonjs"

  export default {
    components: {Loading},
    data() {
      return {
        bank: [],
        bankCardId: '',
        money: '',
        flag: false,
        mobile: '',
        orderNo: '',
        code: '',
        time: '',
        sendMsgDisabled: true,
        showLoading: true,
        balance: '' // 账户余额
      }
    },
    created() {
      this.$fetch.api_data.getRechargeInfo({token: ''}).then((res) => {
        this.balance = res.data.data.balance
        this.showLoading = false
        this.bank = res.data.data.memberBankCardList[0]
        this.bankCardId = res.data.data.memberBankCardList[0].bankCardId
      })
    },
    methods: {
      back() {
        this.$router.back()
      },
      toCancel() {
        this.flag = false
      },
      pay() { // 立即充值
        if (this.money >= 1) {
          this.$refs.doPay.style.disabled = false;
          const bankCardId = this.bankCardId;
          this.$fetch.api_data.rechargeData({token: '', bankCardId: bankCardId, amount: this.money}).then((res) => {
            this.flag = true
            let mobile = localStorage.mobile;
            this.mobile = mobile.substr(0, 3) + "****" + mobile.substr(7)
            this.orderNo = res.data.data.orderNo;
            this.timeDown()
          })
        } else {
          MessageBox('提示', '请输入充值金额')
        }
      },
      getCode() { //获取验证码
        this.$fetch.api_data.rechargeCodeData({token: '', orderNo: this.orderNo}).then((res) => {
          this.timeDown()
        })
      },
      trade() { //确定充值
        let orderNo = this.orderNo
        let code = des('88888888', this.code)
        const _this = this
        this.$fetch.api_data.payOrderData({orderNo: orderNo, code: code, validType: 1, token: ''}).then((res) => {
          _this.flag = false
          _this.$router.push({
            path: '/finishRecharge',
            query: {cash: _this.money, card: this.bank.cardNumber, name: this.bank.bankName}
          })
        })
      },
      timeDown() {
        const me = this
        me.time = 60
        me.sendMsgDisabled = true
        let interval = window.setInterval(function () {
          me.time--
          if (me.time <= 0) {
            me.time = '重发'
            me.sendMsgDisabled = false
            window.clearInterval(interval)
          }
        }, 1000)
      }
    },
    filters: {
      filterA: function (str) {
        if (str == '重发') {
          return str
        } else {
          return str + 's'
        }
      }
    }
  }
</script>
<style scoped>
  .btn-gray {
    background: #ccc;
  }

  .f-12 {
    font-size: 12px;
  }

  .tips {
    padding: .6rem 0 0 .6rem;
    line-height: 1.2
  }

  .show-dialog {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
  .nav-right{
    padding-top: 0;
    line-height: 3rem;
  }
</style>
