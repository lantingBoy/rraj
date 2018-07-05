<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a  class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">提现</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="body">
      <div class="list margin-top-0_5rem">
        <div class="list-items" data-list="01050000" data-ui="dialog-show">
          <div class="items-cell flex">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/bank/01050000.png" class="ls-bank-icon">
            <span>{{bank.bankName}} <span class="text-gray text-tips">(尾号{{bank.cardNumber}})</span></span>
          </div>
          <div class="items-cell text-tips text-gray">可提现{{bank.availableBalance}}元</div>
        </div>
      </div>
      <!---card list-->
      <div class="list">
        <div class="form-items">
          <label for="withdraw" class="label-control">金额(元)：</label>
          <input type="number" min="100" class="form-control" placeholder="100元起" id="withdraw" data-control="withdrawals-all" value="" v-model="money">
          <div class="all-withdraw" @click="allWithdraw" v-show="msg.totalAmount>=100">全部提现</div>
        </div>
      </div>
      <div class="tip">本周剩余免费提现<span class="color1">{{msg.num}}</span>次，单笔单日最高可提<span class="color1">{{msg.withdrawLimit}}</span>万元</div>
      <div class="bar margin-2rem">
        <div class="">
          <button  class="btn btn-red btn-circle" @click="withdraw" :class="this.money>=100?'':'btn-gray'"  :disabled="this.money>=100? false:true">提现到银行卡</button>
        </div>
        <div class=" padding-top-1rem text-normal-min text-gray">
          <p class="padding-top-0_5rem">8:00~17:00间提现，最快当天到账</p><p class="padding-top-0_5rem">17:00~8:00间提现，最快次日10:00前到账</p>
          <p class="padding-top-0_5rem">注：法定节假日提现到账时间以平台公告为准</p>
        </div>
      </div>
    </div>
    <div class="dialog" ui-dialog-confirm='trade-code' :class="dialogFlag?'show-dialog':''">
      <div class="dialog-box">
        <div class="dialog-header">输入交易密码</div>
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <div class="form-items-border form-items-full">
            <input type="password" placeholder="请输入你的交易密码" maxlength="6" id="code2" class="form-items-cell form-control" v-model="payPassword">
            <div class="clear-control" @click="clearPwd">
              <i class="icon iconfont icon-false-circle "></i>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <a href="javascript:;" class="btn btn-max text-gray" @click="toCancel" ui-dialog-close="trade-code">取消</a>
          <a href="javascript:;" class="btn btn-max text-red" @click="trade">确定</a>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import {des, passToken} from '../../commonjs/commonjs'
  import Loading from  "../loading/loading.vue"
  import {MessageBox} from 'mint-ui'
  export default{
    components: {Loading},
    data () {
      return {
        bank: [],  // 银行卡信息
        money: '', // 提现金额
        showLoading: true,
        cash: this.$route.query.balance, // 可提现的金额
        dialogFlag: false,
        payPassword: '',
        msg: {}
      }
    },
    created () {
      this.$fetch.api_data.getCashDetail({token: ''}).then((res) => {
        console.log(res)
        this.msg = res.data.data
        this.showLoading = false
        this.bank = res.data.data.memberBankCardList[0]
      })
    },
    methods: {
      back () {
        this.$router.back()
      },
      withdraw () { // 发起提现
        if (Number(this.money) > Number(this.bank.availableBalance)) {
          MessageBox({
            title: '提示',
            message: '可提现金额不足',
            showCancelButton: true
          })
        }
        if (Number(this.money) >= 100 && Number(this.money) <= Number(this.bank.availableBalance)) {
          this.dialogFlag = true
        }
      },
      allWithdraw () {
        this.money = this.bank.availableBalance
      },
      toCancel () {
        this.dialogFlag = false
      },
      trade () { // 提现请求
        let password = decodeURIComponent(des('88888888', this.payPassword)) // 加密并且编码
        this.$fetch.api_data.getCash({token: '', bankCardId: this.bank.bankCardId, amount: this.money, pwd: password,validType: 2}).then((res)=>{
          console.log(res)
          if (res.data.resCode === 1) {
            this.$router.push({path: '/money/getCashDetail',query:{order: res.data.data}})
          }
        })
      },
      clearPwd () { // 清除密码
        this.payPassword = ''
      }
    }
  }
</script>
<style>
  .btn-gray{
    background: #ccc;
  }
  .all-withdraw{
    font-size:14px;
    margin-right: 1.2rem;
    color:#f43443;
  }
  .tip{text-align: center;font-size: 12px;padding: .4rem 0 ;background-color: #ffffff}
  .color1{color:#f43443}
  .margin-2rem{margin-top: 1rem}
  .show-dialog{transform:translateY(0);-webkit-transform: translateY(0)}
</style>
