<template>
  <div>
    <div class="container">
      <header class="header ">
        <nav class="nav">
          <div class="nav-left" @click="back"><a
            class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
          <div class="nav-head">使用红包</div>
          <div class="nav-right line-height-1_5" @click="useRedbag(id)">不使用</div>
        </nav>
      </header>
      <div class="body">
        <div class="list" v-show="couponMap != undefined">
          <div class="list-head">
            <div class="left text-normal-min">你有<span class="text-red" id="hbCount">{{count}}</span>个红包可用</div>
            <div class="right text-right" ui-dialog="explain" @click="dialog"><i
              class="icon iconfont icon-help text-gray"></i> 使用说明
            </div>
          </div>
          <div class="list-body padding-bottom-1rem">
            <div class="list-rb mark-overdue" v-for="item in couponMap" @click="selectItem(item,id)">
              <div class="rb-cell" :class="item.flag?'':'gray'">
                <div>
                  <span class="text-h2-min">￥</span>
                  <span class="text-h1">{{item.amount}}</span>
                </div>
                <div class="text-tips padding-top-0_5rem">满{{item.amountScope}}元抵用</div>
              </div>
              <div class="rb-cell">
                <h5 class="text-normal" :class="item.flag?'':'gray-color'">
                  [新人红包]满{{item.amountScope}}元减{{item.amount}}元</h5>
                <div class="text-gray text-tips padding-top-0_5rem">
                  <span class="text-tips">•</span> 仅限稳赚计划{{item.days}}天及以上期限使用
                </div>
                <div class="text-gray text-tips padding-top-0_5rem">
                  <span class="text-tips">•</span> {{item.endDateTime}}
                </div>
              </div>
              <div class="rb-cell" :class="item.flag?'':'gray-color'">立即使用</div>
            </div>
          </div>
        </div>
        <div class="list" v-show="couponMap==undefined">
          <div class="list-head text-center">您暂无可用红包</div>
        </div>
      </div>
    </div>
    <div class="dialog" ui-dialog-name="explain" :class="!dialogShow?'':'animation'">
      <div class="dialog-box">
        <div class="dialog-header">红包使用说明</div>
        <div class="dialog-body text-normal-min padding-1rem padding-bottom-2rem">
          <p>1、使用红包将直接减扣金额；</p>
          <p class="padding-top-0_5rem">2、每次只能使用一个红包；</p>
          <p class="padding-top-0_5rem">3、满减金额不叠加计算。</p>
        </div>
        <div class="dialog-footer">
          <a class="btn btn-max text-red" ui-dialog-close="explain" @click="dialogHide">我知道了</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
        dialogShow: false,
        couponMap: [], // 红包列表
        count: '', // 红包数量
        id: '',
        none: {}
      }
    },
    created() {
      let projectId = this.$route.params.id
      this.id = this.$route.params.id
      let days = this.$route.query.days
      // 调用红包接口
      this.$fetch.api_data.getHongbao({token: '', projectId: projectId, days: days}).then((res) => {
        console.log(res)
        this.none = res.data.data
        this.couponMap = res.data.data.couponList
        this.count = res.data.data.count
      })
    },
    methods: {
      dialog () {
        this.dialogShow = true
      },
      dialogHide () {
        this.dialogShow = false
      },
      back () {
        this.$router.back()
      },
      selectItem (item, id) { // 红包点击
        if (item.flag) {
          this.$router.push({
            path: `/listDetail/${id}`,
            query: {'amountScope': item.amountScope, 'amount': item.amount, 'couponId': item.couponId}
          })
        } else {
          MessageBox('', '该红包已过期')
        }
      },
      useRedbag(id) {
        this.$router.push({path: `/listDetail/${id}`})
      }
    },
    filters: {
      filterA: function (num) {
        let now = new Date(num) // localStorage.time;
        let year = now.getFullYear()
        let month = now.getMonth()
        let day = now.getDate()
        return year + '年' + month + '月' + day + '日'
      }
    }
  }
</script>
<style>
  .animation {
    transform: translateY(0);
  }

  .list-rb.mark-overdue .rb-cell:first-child {
    background: #fd525b
  }

  .gray {
    background: #ccc !important;
  }

  .gray-color {
    color: #ccc !important;
  }

  .list-rb.mark-overdue .rb-cell:last-child, .list-rb.mark-used .rb-cell:last-child {
    color: #fd525b
  }

  .list-rb.mark-overdue .rb-cell .text-normal {
    color: #333
  }
</style>
