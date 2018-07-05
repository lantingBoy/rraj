<template>
  <div class="container">
    <div class="body">
      <header class="header " id="header">
        <nav class="nav">
          <router-link to="/list">
            <div class="nav-left"><a  class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
          </router-link>
          <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
          <div class="nav-right"></div>
        </nav>
      </header>
      <div class="panel panel-red padding-1rem">
        <div class="panel-body">
          <h2 class="padding-top-1rem">在投金额(元)</h2>
          <div class="line-height-1_5 text-h1-max">{{userInfo.investedMoney}}</div>
        </div>
      </div>
      <div class="panel border-bottom-solid">
        <div class="panel-body col col-2 text-center">
          <div class="col-cell border-right-solid padding-top-1rem padding-bottom-1rem">
            <div class="text-red text-normal-max">{{userInfo.unCollectedEarning}}</div>
            <div class="padding-top-0_5rem text-gray text-tips">待收收益(元)</div>
          </div>
          <div class="col-cell padding-top-1rem padding-bottom-1rem">
            <div class="text-red text-normal-max">{{userInfo.earning}}</div>
            <div class="padding-top-0_5rem text-gray text-tips">已收收益(元)</div>
          </div>
        </div>
      </div>
      <div class="tabs margin-top-0_5rem">
        <div class="tabs-head">
          <ul>
            <li  v-for="(item,index) in tabs" :class="{active:active==index}" @click="tab(index,item.view)"><a href="javascript:;">{{item.type}}<i class="icon iconfont icon-timer" v-show="index==0"></i> </a></li>
          </ul>
        </div>
        <!--tab-items-01 在投标-->
        <!--tab-items-02 已还款-->
        <!--tab-items-03 未成标-->
        <div class="tabs-items">
          <div class="text-gray text-center padding-2rem">暂无未成标项目</div>
        </div>
      </div>
    </div>

    <child1 :is="currentView" :show="show" :hsaPayProject="hsaPayProject"></child1>
    <child2 class="tabs-items">
      <div class="text-gray text-center padding-2rem">暂无已还款项目</div>
    </child2>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import Loading from '../loading/loading.vue'
  import {des, passToken} from '../../commonjs/commonjs'
  import child1 from './child1'
  import child2 from './child2'
  export default{
    components: {
      Loading,
      child1,
      child2
    },
    data () {
      return {
        active: 0,
        currentView: 'child1',
        tabs: [
          {
            type: '在投标',
            view: 'child1'
          }, {
            type: '已还款',
            view: 'child2'
          }
        ],
        showLoading: true,
        userInfo: {},
        percent1: 0,
        show: [],
        projectInvestResDetail: [],
        list: [],
        hsaPayProject: []
      }
    },
    created () {
      for (let i = 1; i <= 100; i++) {
        this.list.push(i)
      }
      this.$fetch.api_data.detailOrder({pageNo: 1, token: '', pageSize: this.list.length}).then((res) => {
        this.showLoading = false
        this.userInfo = res.data.data
        this.show = res.data.data.projectInvestResDetail
        console.log(this.show)
        for(let i = 0; i < this.show.length; i++) {
          if(this.show[i].repayStatus==4) {
            this.hsaPayProject.push(this.show[i])
          }
        }
        console.log(this.hsaPayProject)
      })
    },
    methods: {
      tab (index, view) { // todo 选项卡
        this.active = index
        this.currentView = view
      }
    }
  }
</script>
<style lang="less">
  #header{
    position:static;
  }
  .items-cell{
    .yellow{
      color:#ccc;
    }
  }
  .vux-circle-demo {
    text-align: center;
  }
  .vux-circle-demo > div {
    margin: 0 auto;
  }
  .loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
  }
  .mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
  }
  .mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }
  .page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
  }
  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
  }
  .page-loadmore-desc:last-of-type,
  .page-loadmore-listitem {
    border-bottom: 1px solid #eee
  }
  .page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
  }
  .page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
  }
  .page-loadmore-wrapper {
    overflow: scroll
  }
  .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
  }
  .mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }
  .page-loadmore-listitem{line-height:normal;
    text-align: left;padding:2rem .5rem}
  .body{width:100%;z-inde:100}
  .container{overflow: hidden;padding-top: 0}
  .mint-loadmore-top{margin-top: -40px}
</style>
