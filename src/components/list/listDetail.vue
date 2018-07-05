<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="nav-left" @click="back"><a
          class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">立即投资</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="body body-wz">
      <div class="panel panel-red padding-1rem">
        <div class="panel-body">
          <h2 class="text-h2 padding-top-1rem">{{project.projectName}}</h2>
          <div class="padding-top-2rem">
            <span>预期年化：<span>{{project.preYearRate}}%</span></span>
            <span class="padding-left-1rem">项目周期：<span>{{project.days}}天</span></span>
          </div>
          <div class="padding-top-0_5rem">预计还款：<span>{{project.preRepaymentDate}}</span></div>
          <div class="padding-top-0_5rem">剩余可投金额：<span>{{project.residueMoney|filterA}}元</span></div>
        </div>
      </div>
      <!---card list-->
      <div class="current-Account">当前账户余额：{{project.balance}}元</div>
      <div class="list">
        <div class="form-items">
          <label for="rollin-val" class="label-control">投资金额(元)：</label>
          <input type="number" max="522200" min="100" class="form-control" placeholder="100元起投，按倍数增加" id="rollin-val"
                 data-control="rollin-val" value="" v-model="investMoney">
        </div>
        <div class="list-items-min text-gray">
          <span>预期收益：
            <span class="text-red"
                  data-val="profit">{{investMoney*project.preYearRate/(100*365)*project.days |filterB}}</span>元+
            <span class="text-red" data-val="points" v-show="project.days<90">{{parseInt(investMoney*project.days/1000*project.pointsMutiple)}}</span>
            <span class="text-red" data-val="points" v-show="project.days>=90">{{parseInt(investMoney*project.days/1000*project.pointsMutiple)}}</span>
            积分</span>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div @click="hongBao(id,days)">
          <div class="form-items">
            <label for="account-all" class="label-control ">可用红包</label>
            <input type="text" class="form-control read-only" id="red-bag" readonly="">
            <div class="fun-control show text-red"
                 v-show="couponMap.length > 0 && amountScope==undefined || investMoney < amount">
              <span class="text-red text-normal-min btn-allin redbag-name">请选择可用红包</span>
              <i class="icon iconfont icon-arrow-right text-red line-height-1"></i>
            </div>
            <div class="fun-control show text-red" v-show="this.$route.query.amountScope==investMoney"
                 style="padding-right:.5rem;">
              <span class="text-red text-normal-min btn-allin redbag-name">满{{amount}}减{{amountScope}}元</span>
            </div>
            <div class="fun-control show text-red" v-show="!couponMap.length"
                 style="padding-right:.5rem;">
              <span class="text-gray text-normal-min btn-allin redbag-name">暂无可用红包</span>
            </div>
          </div>
        </div>
      </div>
      <!--btn--->
      <div class="btn-control btn-control-bottom btn-control-edge">
        <div class="text-center padding-bottom-0_5rem f-12">到期本金及其收益将还款至您的账户余额</div>
        <a href="javascript:;" class="btn btn-red btn-circle pay-amount" @click="toPay(project)"
           v-show="this.$route.query.amountScope!=investMoney">实际支付￥{{investMoney|filterC}}</a>
        <a href="javascript:;" class="btn btn-red btn-circle pay-amount" @click="toPay(project)"
           v-show="this.$route.query.amountScope==investMoney">实际支付￥{{realPay}}</a>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import {mapMutations} from 'vuex'
  import Loading from '../loading/loading.vue'

  export default {
    components: {Loading},
    data() {
      return {
        project: {}, // 标的基本信息
        investMoney: this.$route.query.amountScope ? this.$route.query.amountScope : '', // 投资额
        id: '',
        days: '',
        amount: '', // 红包页面传入金额
        amountScope: '', // 红包页面传入可减金额
        realPay: this.$route.query.amountScope ? this.$route.query.amountScope - this.$route.query.amount : 0, // 实际支付金额
        showLoading: true,
        couponMap: [] // 红包list
      }
    },
    created() {
      // 取上个页面传过来的参数
      let projectId = this.$route.params.id
      this.id = this.$route.params.id
      this.amount = this.$route.query.amountScope
      this.amountScope = this.$route.query.amount
      console.log(this.amountScope)
      // 发起请求
      this.$fetch.api_data.getWZinvest({token: '', projectId: projectId}).then((res) => {
        this.showLoading = false   // 隐藏loading
        this.project = res.data.data
        this.days = res.data.data.days
        this.couponMap = res.data.data.couponMap
      })
    },
    methods: {
      back() {
        this.$router.push({path: `/list/${this.$route.params.id}`})
      },
      hongBao(id, days) {
        this.$router.push({path: `/listHongbao/${id}`, query: {days: days}})
      },
      toPay(project) {
        if (this.investMoney == '') {
          MessageBox('', '金额不能为空')
          return
        }
        if (this.investMoney < 100) {
          MessageBox('', '100元起投')
          return
        }
        if (this.$route.query.amountScope && this.$route.query.couponId && this.investMoney == this.$route.query.amountScope) {
          this.setRealMoney(this.realPay)
          this.setTotalAmount(this.investMoney)
          this.$router.push({path: '/listTopay', query: {couponId: this.$route.query.couponId}})
        } else {
          this.setTotalAmount(this.investMoney)
          this.setRealMoney(this.investMoney)
          this.$router.push({path: '/listTopay'})
        }
        this.setPay(project)
      },
      ...mapMutations({
        setPay: 'SET_PAY',
        setRealMoney: 'SET_REALMONEY',
        setTotalAmount: 'SET_TOTALAMOUNT'
      })
    },
    filters: {
      filterB: function returnFloat(value) {
        var value = Math.floor(parseFloat(value) * 100) / 100
        var xsd = value.toString().split(".")
        if (xsd.length === 1) {
          value = value.toString() + ".00"
          return value
        }
        if (xsd.length > 1) {
          if (xsd[1].length < 2) {
            value = value.toString() + "0"
          }
          return value
        }
      },
      filterC: function (num) {
        if (num == '') {
          return 0
        } else {
          return num
        }
      }
    }
  }
</script>
<style scoped>
  .current-Account {
    margin-left: 5%;
    padding: .5rem 0;
    font-size: 12px
  }
  .f-12{
    font-size:12px;
  }
</style>
