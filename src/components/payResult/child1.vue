<template>
  <div class="page-loadmore">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                   @top-status-change="handleTopChange"
                   ref="loadmore">
        <div class="tabs-items" style="display: block">
          <div id="tabA" class="page-loadmore-list">
            <div class="list-items page-loadmore-listitem" v-for="item in show">
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
							    <span class="pop-pie-info single" >募集中</span>
                </span>
              </div>
              <div class="items-cell" v-show="item.projectStatus==9">
                <div style='width:50px;height:50px;'>
                  <x-circle :percent="((item.days-item.payInterval)/item.days)*100" :stroke-width="4" stroke-color="#FF4D4D" v-show="item.projectStatus==9">
                    <span style="color:#FF4D4D;font-size:.6rem;">{{item.payInterval}}天</span>
                    <div style="color:#FF4D4D;font-size:.6rem;">后还款</div>
                  </x-circle>
                </div>
              </div>
              <div class="items-cell" v-show="item.projectStatus==3">
                <div style='width:50px;height:50px;'>
                  <x-circle :percent="0" :stroke-width="4" stroke-color="#FF4D4D" >
                    <span style="color:#FF4D4D;font-size:.6rem;">清算中</span>
                  </x-circle>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'&&allLoaded===false" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'&&allLoaded===false">
            <mt-spinner type="snake"></mt-spinner>
            </span>
          <span v-show="allLoaded===true">暂无数据更新</span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'&&allLoaded===false" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'&&allLoaded===false">
            <mt-spinner type="snake"></mt-spinner>
          </span>
          <span v-show="allLoaded===true">没有更多数据了</span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
  import { XCircle } from 'vux'
  export default {
    components: {
      XCircle
    },
    props: {
      show: {
        type: Array
      }
    },
    data () {
      return {
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        topStatus: ''
      }
    },
    methods: {
      handleBottomChange (status) {
        this.bottomStatus = status
      },
      handleTopChange (status) {
        this.topStatus = status
      },
      loadBottom () {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1]
          if (lastValue <= this.show.length) {
            for (let i = 1; i <= 5; i++) {
              this.list.push(lastValue + i)
            }
            console.log(this.list.length)
            let oTime = Number(new Date().getTime())
            userOrder(1, passToken(oTime), this.list.length, oTime).then((res) => {
              console.log(res)
              this.userInfo = res.data.data
              this.show = res.data.data.projectInvestResDetail
            })
          } else {
            this.allLoaded = true
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500)
      },
      loadTop () {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  }
</script>

<style>
  .page-loadmore{overflow: hidden}
</style>
