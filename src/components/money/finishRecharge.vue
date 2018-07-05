<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="nav-left"></div>
        <div class="nav-head">结果详情</div>
        <div class="nav-right" @click="goHome">完成</div>
      </nav>
    </header>
    <!---->
    <div class="body margin-top-0_5rem">
      <div class="list">
        <div class="list-items">
          <div class="group-items-cell">充值金额</div>
          <div class="group-items-cell text-right text-red">{{money}}元</div>
        </div>
        <div class="list-items">
          <div class="group-items-cell text-nowarp">{{this.$route.query.name}}({{this.$route.query.card}})</div>
        </div>
      </div>
      <div class=" margin-top-0_5rem padding-top-1rem ">
        <div class="step-line">
          <div class="step-line-cell action">
            <div class="step-line-tit">发起充值，恒丰存管账户与第三方支付收到指令</div>
            <div class="text-tips text-gray">2018-01-20 15:22:53</div>
          </div><div class="step-line-cell action">
          <div class="step-line-tit">充值结果确认中</div>
          <div class="text-tips text-gray">2018-01-20 15:22:53</div>
        </div><div class="step-line-cell action">
          <div class="step-line-tit">已充值到恒丰个人存管账户</div>
          <div class="text-tips text-gray">2018-01-20 15:22:58</div>
        </div>
        </div>
      </div>
      <!---btn-->
      <div class="bar">
        <div class="padding-2rem">
          <router-link to="/home" class="btn btn-red btn-circle">我的资产</router-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
      data () {
          return {
            money: ''
          }
      },
    created () {
      this.money = this.$route.query.cash
    },
    methods: {
      goHome () {
        this.$router.push({path: '/home'})
      }
    }
  }
</script>
<style lang="less" scoped>
  .nav-right {
    position: absolute;
    top: 0;
    display: inline-block;
    padding-top: 1rem;
    font-size: 15px;
  }
</style>
