<template>
  <div style="padding-bottom:3rem">
    <div class="list-body">
      <div class="list-cell" v-for="item in productList" @click="select(item.projectId)">
        <div class="list-cell-tit text-h2"><span class="list-hot-tit line-height-normal" v-show="item.hotWordsType!=0">热卖</span>
          {{item.projectName}}
          <span class="pop pop-circle pop-circle-red pop-min line-height-normal" v-show="item.tags">{{item.tags}}</span>
          <span class="list-right" v-show="item.couponCount">{{item.couponCount}}</span>
        </div>
        <div class="col col-8 list-cell-body">
          <div class="col-cell col-cell-3 text-indent-1em">
            <div class="text-red text-h1">{{item.preyearrate}}<span class="text-normal">%</span></div>
            <div class="text-gray text-normal-min padding-top-0_5rem">年化收益</div>
          </div>
          <div class="col-cell col-cell-2">
            <div class="text-h2 padding-top-0_5rem">{{item.days}}<span class="text-normal">天</span></div>
            <div class="text-gray text-normal-min padding-top-0_2_5rem line-height-1_5">项目周期</div>
          </div>
          <div class="col-cell col-cell-3" v-show="item.residueMoney!=0">
            <div class="padding-right-1rem text-right list-set-val padding-top-0_5rem">{{item.residueMoney|filterA}}元
            </div>
            <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right">剩余可投</div>
          </div>
          <div class="col-cell col-cell-3" v-show="item.residueMoney==0">
            <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right"
                 style="padding-top:1rem;font-size:16px!important;"> 已售罄
            </div>
          </div>
        </div>
      </div>
    </div>
    <copy-right></copy-right>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
  import copyRight from 'components/comm/copyright'
  import Loading from 'components/loading/loading'

  export default {
    data() {
      return {
        productList: [],
        showLoading: true,
      }
    },
    created() {
      // 传入签名认证调取列表接口
      this.$fetch.api_data.getWZlist({sign: '', token: ''}).then((res) => {
        this.showLoading = false
        this.productList = res.data.data.listProject
      })
    },
    methods: {
      select(id) {
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined || localStorage.isLogin == null) {
          this.$router.push({path: '/login'})
        } else {
          this.$router.push(`/list/${id}`)// 动态路由跳转
        }
      }
    },
    components: {
      copyRight,
      Loading
    }
  }
</script>

<style lang="less" scoped>
  .loading-container {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-hot-tit {
    color: #FFFFFF;
    display: inline-block;
    background-color: #f43443;
    font-size: .6rem;
    padding: .05rem;
    border-radius: .2rem;
  }

  .list-right {
    display: inline-block;
    float: right;
    font-size: .7rem;
    color: #f43443;
  }

  .padding-top-0_5rem {
    padding-top: .5rem;
  }
  .list-cell-tit {
    margin: -.5rem 1rem 0;
    /* padding: .5rem 0; */
    height: 2rem;
    line-height: 2rem;
  }
  .line-height-normal{
    line-height: normal;
  }
</style>
