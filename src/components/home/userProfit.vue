<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">资产分析</div>
        <div class="nav-right" style="font-size:90%; padding-top:1.2rem; padding-right:1.3rem;" @click="goMoneyDetail"><a >资金明细</a></div>
      </nav>
    </header>
    <!---->
    <div class="body">
      <!--账户余额-->
      <div class="panel margin-top-0_5rem border-top-solid border-bottom-solid">
        <div class="panel-head  text-black-light">账户余额(元)</div>
        <div class="panel-body padding-left-1rem padding-right-1rem padding-bottom-1rem">
          <table cellspacing="0" cellpadding="0" width="100%">
            <tbody><tr>
              <td width="60%">
                <div class="text-h1" id="balanceAmount">{{amount.balanceAmount|filterB}}</div>
              </td>
              <td width="18%" @click="reCharge">
                <a  class="btn btn-min btn-red btn-circle">充值</a>
              </td>
              <td class="width:4%">&nbsp;</td>
              <td width="18%" @click="getCash">
                <a  class="btn btn-min btn-red-border btn-circle">提现</a>
              </td>
            </tr>
            </tbody></table>
        </div>
      </div>
      <!---总资产-->
      <div class="panel margin-top-0_5rem border-top-solid border-bottom-solid">
        <div class="panel-head text-black-light" @click="amountDialog">总资产(元) <span class="icon iconfont icon-help text-normal-min" ui-dialog="total-assets"></span></div>
        <div class="panel-body">
          <div class="padding-left-1rem padding-right-1rem padding-bottom-1rem border-bottom-solid text-h1" id="totalAmount">{{allMoney|filterB}}</div>
          <div style="display:flex;align-items: center;-webkit-align-items: center;display:-webkit-flex;padding:2rem 0 1rem 15%;width:85%;">
            <div style='width:80px;height:80px;display:inline-block'>
              <x-circle :percent="this.percent" :stroke-width="15" stroke-color="#f1584d">
              </x-circle>
            </div>
            <div class="" style="display:inline-block;margin-left:1rem;line-height:1.5">
              <div class="chart-color"><div class="chart-radius bg-color1"></div>账户余额</div>
              <div class="chart-color"><span class="chart-radius bg-color3"></span>稳赚本金</div>
              <div class="chart-color"><span class="chart-radius bg-color3"></span>处理中资金</div>
            </div>
              <div class="chart-cell text-right">
                <div class="legend-tit">{{this.amount.balanceAmount|filterB}}</div>
                <div class="legend-tit ">{{amount.projectAmount|filterB}}</div>
                <div class="legend-tit ">{{amount.freezeAmount|filterB}}</div>
              </div>
          </div>
        </div>
      </div>
      <!---累计收益-->
      <div class="panel margin-top-0_5rem border-top-solid border-bottom-solid">
        <div class="panel-head text-black-light" @click="profit">累计收益(元) <span class="icon iconfont icon-help text-normal-min" ui-dialog="total-profit"></span></div>
        <div class="panel-body">
          <div class="padding-left-1rem padding-right-1rem padding-bottom-1rem border-bottom-solid text-h1" id="totalEarnings">{{amount.projectEarnings|filterB}}</div>
          <div style="display:flex;align-items: center;-webkit-align-items: center;display:-webkit-flex;padding:2rem 0 1rem 15%;width:85%;">
            <div style='width:80px;height:80px;display:inline-block'>
              <x-circle :percent="this.percent" :stroke-width="15" stroke-color="#99cc99">
              </x-circle>
            </div>
            <div class="" style="display:inline-block;margin-left:1rem;line-height:1.5">
              <div class="chart-color"><span class="chart-radius bg-color2"></span>稳赚已收收益</div>
            </div>
            <div class="chart-cell text-right">
              <div class="legend-tit ">{{amount.productEarnings|filterB}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-top-2rem padding-bottom-2rem text-tips text-center">
        <div class="pop pop-circle-green pop-circle text-green"><i class="icon iconfont icon-riskcontrol line-height-1"></i> 恒丰银行资金存管</div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
  import { XCircle } from 'vux'
  import {MessageBox} from 'mint-ui'
  import Loading from '../loading/loading.vue'

  export default{
      data(){
        return{
          percent:0,
          amount:{},
          allMoney:0,
          showLoading:true
        }
      },
    components:{
      Loading,
      XCircle,
    },
    created(){
      setTimeout(()=>{
        this.percent=100;
      },500);
      this.$fetch.api_data.userProfitData({token:''}).then((res)=>{
        this.showLoading=false
        this.amount=res.data.data;
        console.log(this.amount)
        const d=res.data.data;
        this.allMoney=d.balanceAmount+d.projectAmount+d.freezeAmount+d.aijiabaoAmount;
      });

    },
    methods:{
        back(){
            this.$router.back();
        },
      reCharge(){
        this.$router.push({path:'/reCharge'})
      },
      getCash(){
        this.$router.push({path:'/getCash'})
      },
      goMoneyDetail(){
        this.$router.push({path:'/moneyDetail'});

      },
      amountDialog(){
        MessageBox('提示', '总资产=稳赚本金+账户余额+处理中资金');
      },
      profit(){
        MessageBox('提示', '累计收益=稳赚已收收益');
      }
    }

  }
</script>
<style lang="less" scoped>
  .mint-msgbox-content .mint-msgbox-message{line-height:25px;}
  .chart-radius{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:.1rem;}
  .chart-inline{display:inline-block}
  .chart-color{color:#666;font-size:.875rem;}
  .bg-color1{background:#99cc99}
  .bg-color2{background:#f1584d}
  .bg-color3{background:#60aff1}
</style>
