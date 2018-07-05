<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">银行卡管理</div>
      </nav>
    </header>
    <!---->
    <div class="body">
      <!--暂无绑定银行卡-->
      <div class="panel" id="nocard"  v-show="cardNum==''">
        <div class="panel-body">
          <div class="padding-2rem text-center text-gray" @click="goBindCard">添加银行卡开始理财之旅</div>
        </div>
      </div>
      <!--银行卡-->
      <div class="list margin-top-0_5rem" id="mycard" >
        <div class="list-items flex-end" data-ui="dialog-show" v-for="item in bankMes">
          <div class="items-cell flex">
            <img :src="iconUrl" class="ls-bank-icon">
            <div class="">
              <div>
                <span><span id="bankType">{{item.bankName}}</span> <span class="text-gray text-tips">尾号<span id="cardNum">{{item.cardNumber}}</span></span></span>
              </div>
              <div class="text-tips padding-top-0_5rem" id="cardTips">{{item.tips}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import Loading from "../loading/loading.vue";
  export default{
    components: {Loading},
    data(){
      return {
        bankMes:[],
        iconUrl:'',
        cardNum:'',
        showLoading:true
      }
    },
    created(){
      this.$fetch.api_data.bankData({token:''}).then((res)=>{
        this.showLoading=false;
        this.bankMes=res.data.data;
        this.cardNum=res.data.data[0].cardNumber;
        let url='http://cdn.renrenaijia.com/CDN/app/Public/images/bank/';
        let Url=url+res.data.data[0].code+'.png';
        this.iconUrl=Url;
      })
    },
    methods:{
      goBindCard(){
        if(this.bankMes[0].cardNumber==''){
          this.$router.push({path:'/realName'})
        }
      },
      back(){
        this.$router.back();
      }
    }
  }
</script>
