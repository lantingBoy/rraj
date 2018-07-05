<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="nav-left"></div><!--<a href="http://192.168.10.198:8093/member/index" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a>-->
        <div class="nav-head">提现详情</div>
        <div class="nav-right" @click="finish">完成</div><!--<a href="javascript:;" class="text-normal line-height-1_5" onclick="reload()">刷新</a>-->
      </nav>
    </header>
    <!---->
    <div class="body margin-top-0_5rem">
      <div class="list">
        <div class="list-items">
          <div class="group-items-cell">提现金额</div>
          <div class="group-items-cell text-right text-red">{{cashMoney}}元</div>
        </div>
        <div class="list-items">
          <div class="group-items-cell text-nowarp"><span class="text-tips text-gray">至银行卡：</span> {{name}}</div>
        </div>
      </div>
      <div class=" margin-top-0_5rem padding-top-1rem ">
        <div class="step-line">
          <div class="step-line-cell " v-for="(item,index) in items" :class="index==2?'':'action'">
            <div class="step-line-tit">{{item.key}}</div>
            <div class="text-tips text-gray">{{item.value}}</div>
          </div>
        </div>
      </div>
      <!---btn-->
      <div class="bar">
        <div class="padding-2rem">
          <a href="javascript:;" class="btn btn-red btn-circle" @click="finish">我的资产</a>
        </div>
      </div>
    </div>
    <loading v-show="!this.items.length"></loading>
  </div>
</template>
<script>
  import Loading from 'components/loading/loading'
  export default {
    components: {
      Loading
    },
    data () {
      return {
        cashMoney: '', // 提现金额
        name: '', // 银行卡名字
        number: '', // 银行卡尾号
        items: []
      }
    },
    created () {
      this.$fetch.api_data.getCashOrderInfo({token: '', orderNo: this.$route.query.order}).then((res) => {
        this.cashMoney = res.data.data.amount
        this.name = res.data.data.bankCardInfo
        this.items = res.data.data.item
      })
    },
    methods: {
      finish () {
        this.$router.push({path: '/home'})
      }
    }
  }
</script>
<style scoped>
  .nav-right{
    padding-top: 0;
    line-height: 3rem;
  }
</style>
