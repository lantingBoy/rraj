<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">确认支付</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <!---->
    <div class="body">
      <div class="panel panel-red padding-1rem">
        <div class="panel-body col col-2 ">
          <div class="col-cell">待支付金额(元)</div>
          <div class="col-cell text-right">{{realPay}} </div>
        </div>
      </div>
      <!---card list-->
      <div class="list">
        <div class="form-head">选择支付方式</div>
        <div class="form-items">
          <label for="balance" class="label-control">余额<span class="text-red">{{balance}}</span>元<span class="balance-pay-str" style="">，支付
            <span class="text-red balance-pay" ref="amountPay">{{amountPay}}</span>元</span></label>
          <div class="ui-checkbox">
            <input type="checkbox" id="balance" class="raw-checkbox" v-model="flag" checked="">
            <label for="balance" class="emulate-ios-button"></label>
          </div>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div class="form-items form-items-min" data-list="01020000" data-ui="dialog-show">
          <div class="label-control">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/bank/01020000.png" class="ls-bank-icon">
            <div class="ls-bank-cell">
              <div class="line-height-1_5">{{bankName}}<span class="text-gray text-tips">尾号{{num}}</span> </div>
              <div class="text-tips text-gray ">单笔10万/单日50万</div>
            </div>
          </div>
          <div class="form-control text-right text-gray bank-pay">支付<span class="text-red bank-amount">{{bankPay}}</span>元</div>
        </div>
      </div>
      <div class="bar">
        <label class=" text-tips">
          <!--<input type="checkbox"  value="0"  class="ipt-rectangle-black" id="terms" checked disabled>-->
          <!--<label for="terms"></label>-->
          我同意<a href="javascript:;" class="text-blue" ui-dialog="service-rule">《借款及服务协议》</a> <a href="javascript:;" class="text-blue" ui-dialog="service-rule2">《稳赚计划投资协议》</a>
        </label>
      </div>
      <!--btn--->
      <div class="btn-control btn-control-bottom btn-control-edge">
        <div class="text-center line-height-2">到期本金及收益将还款至您的账户余额</div>
        <a href="javascript:;" class="btn btn-red btn-circle" @click="goPay">立即转入</a>
      </div>
    </div>
    <div class="dialog" ui-dialog-confirm="verify-code" :class="dialogFlag?'show-dialog':''">
      <div class="dialog-box">
        <div class="dialog-header">确认付款</div><!--验证手机短信-->
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <div class="padding-left-1rem padding-right-1rem text-center line-height-1_5">已向{{mobile}}发送了支付验证码<br>该验证码3分钟内有效</div>
          <div class="form-items-border">
            <input type="tel" placeholder="短信验证码" id="code" maxlength="6" class="form-items-cell" v-model="code">
            <button class="form-items-cell pop-code pop-circle-red" @click="getCode" :disabled="sendMsgDisabled" ref="time">{{time|filterA}}</button>
          </div>
        </div>
        <div class="dialog-footer">
          <a href="javascript:;" class="btn btn-max text-gray" @click="toCancel" ui-dialog-close="verify-code">取消</a>
          <a href="javascript:;" class="btn btn-max text-red" @click="trade(1)">确定</a>
        </div>
      </div>
    </div>
    <div class="dialog" ui-dialog-confirm='trade-code' :class="dialog1Flag?'show-dialog':''">
      <div class="dialog-box">
        <div class="dialog-header">输入交易密码</div>
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <div class="form-items-border form-items-full">
            <input type="password" placeholder="请输入你的交易密码" maxlength="6" id="code2" class="form-items-cell form-control" v-model="payPassword">
            <div class="clear-control">
              <i class="icon iconfont icon-false-circle "></i>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <a href="javascript:;" class="btn btn-max text-gray" @click="toCancel" ui-dialog-close="trade-code">取消</a>
          <a href="javascript:;" class="btn btn-max text-red" @click="trade(2)">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {des,passToken} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  import {mapGetters} from 'vuex'
  export default{
    computed:{
      ...mapGetters([
        'pay',
        'realMoney',
        'totalAmount'
      ])
    },
    data(){
      return{
        payMsg:{},
        bankName:'',//银行卡名字
        num:'',
        balance:'',//用户当前余额
        flag:true,//是否使用余额支付的开关
        realPay:0,//用户投资的金额
        amountPay:'',//余额中需要支付的金额
        bankPay:'', //银行卡需要支付的金额
        dialogFlag:false, //使用余额支付弹框
        dialog1Flag:false,//使用银行卡支付密码弹框
        time:60,
        mobile:'',
        sendMsgDisabled:true,
        bankCardId:'',
        isUsedBalance:1, //是否使用余额   1为使用 0 为使用
        couponId:'',
        order:'', //订单编号
        code:'',
        payPassword:''
      }
    },
    created(){
      if(!this.realMoney||!this.totalAmount){ //如果用户刷新 就返回上个页面
        this.$router.back(-1);
        return false
      }
      this.realPay=this.realMoney;
      this.payMsg=this.pay;
      this.balance=this.pay.balance;
      this.bankName=this.pay.memberBankCardList[0].bankName;
      this.bankCardId=this.pay.memberBankCardList[0].bankCardId;
      this.num=this.pay.memberBankCardList[0].cardNumber;
      if(this.balance>this.realMoney&&this.flag==true){//使用余额支付并且余额大于投资的金额
        this.amountPay=this.realMoney;// 余额需要支付的金额
        this.bankPay=0 //银行卡需要支付的金额
      }
      if(this.balance<this.realMoney&&this.flag==true){
        this.amountPay=this.balance;
        this.bankPay=this.realMoney-this.amountPay;
      }
    },
    watch:{
      flag(){
        //如果余额大于投资的金额并且使用余额支付
        if(this.balance>this.realMoney&&this.flag==true){
          this.amountPay=this.realMoney;
          this.bankPay=0;
          this.isUsedBalance=1; // 使用余额
        }
        //如果用户余额小于投资金额并且使用余额支付
        if(this.balance<this.realMoney&&this.flag==true){
          this.isUsedBalance=0; //使用银行卡支付
          this.amountPay=this.balance;
          this.bankPay=this.realMoney-this.amountPay;
        }
        //如果不使用余额支付
        if(this.flag==false){
          this.isUsedBalance=0;
          this.amountPay=0;
          this.bankPay=this.realMoney
        }
      }
    },
    methods:{
      back(){
        this.$router.back();
      },
      goPay(){
         if(this.$route.query.couponId){
          this.couponId=this.$route.query.couponId
         }else{
           this.couponId=0
         }
         //创建订单
         this.$fetch.api_data.getCreateOrder({isUsedBalance:this.isUsedBalance,token:'',projectId:this.pay.id,totalAmount:this.totalAmount,bankCardId:this.bankCardId,couponId:this.couponId}).then((res)=>{
           this.order=res.data.data.orderNo;
           if(this.isUsedBalance===1){ //使用余额支付用交易密码支付
             this.dialog1Flag=true
           }else if(this.isUsedBalance===0){ //不使用余额支付 发送验证码支付
             this.dialogFlag=true;
           }
           this.mobile=localStorage.mobile;
           this.countdown();// 倒计时
         })
      },
      toCancel(){
        this.dialogFlag=false;
        this.dialog1Flag=false;
        //取消订单
        this.$fetch.api_data.getCancelOrder({orderNo:this.order,token:''}).then((res)=>{
        })
      },
      getCode(){
        this.$fetch.api_data.getOrderCode({orderNo:this.order,token:''}).then((res)=>{
          this.countdown();//倒计时
        })
      },
      trade(type){
        // validType = ServletRequestUtils.getIntParameter(req, "validType", 1);//1：验证码   2:交易密码   3:指纹
        if(type==1){ //如果是通过验证码支付
          let code=decodeURIComponent(des('88888888',this.code));//加密并且编码
          this.$fetch.api_data.submitOrder({token:'',orderNo:this.order,code:code,validType:type}).then((res)=>{
            this.dialogFlag=false;
            this.dialog1Flag=false;
            this.$router.push({path:'/payResult',query:{order:this.order}})
          });
        }else if(type==2){  //如果是通过支付密码支付
          let password=decodeURIComponent(des('88888888',this.payPassword));//加密并且编码
          this.$fetch.api_data.submitOrder({token:'',orderNo:this.order,code:password,validType:type}).then((res)=>{
            this.dialogFlag=false;
            this.dialog1Flag=false;
            this.$router.push({path:'/payResult',query:{order:this.order}})
          });
        }
      },
      countdown(){
        const me=this;
        me.time=60;
        me.sendMsgDisabled = true;
        let interval = window.setInterval(function() {
          me.time--;
          if (me.time<=0) {
            me.time='重新获取';
            me.sendMsgDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      }
    },filters:{
      filterA:function (str) {
        if(str=='重新获取'){
          return str;
        }else{
          return str+'s'
        }
      }
    }
  }
</script>
<style>
  .btn-gray{
    background:#ccc;
  }
  .show-dialog{transform:translateY(0)}
</style>
