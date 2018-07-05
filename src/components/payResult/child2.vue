<template>
  <div>
    <div class="list-items page-loadmore-listitem" v-for="item in hsaPayProject">
      <div class="items-cell line-height-1_5">
        <div class="">{{item.projectName}}</div>
        <div class="text-tips text-black-light ">投资金额：{{item.investMoney}}元</div>
        <div class="text-tips text-black-light ">预计收益：利息{{item.earNing}}元</div>
        <div class="text-tips text-black-light ">预计还款时间：{{item.repayTime}}</div>
      </div>
      <div class="items-cell" v-show="item.projectStatus==2">
        <span class="pop-pie pie-100 pie-red">
          <span class="pop-pie-left"></span>
          <span class="pop-pie-right"></span>
          <span class="pop-pie-info single" >已还款</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XCircle } from 'vux'
  export default {
    components: {
      XCircle
    },
    name: "child2",
    props: {
      hsaPayProject: {
        type: Array
      }
    },
    data () {
      return {

      }
    },
    methods: {

    },
    created () {
      console.log(this.hsaPayProject)
    }
  }
</script>

<style scoped>
  .pie-red .pop-pie-info, .pop-pie-info, .pop-pie-txt {
    color: #cccccc;
  }
  .pop-pie-left:after, .pop-pie-right:after {
     background-color: #cccccc;
  }
</style>
