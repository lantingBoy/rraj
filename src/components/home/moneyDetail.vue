<template>
  <div class="container">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back"><a href="javasript:;" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head">资金明细</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <!--header-->
    <div class="body padding-bottom-0_5rem" v-if="!this.shuju.length">
      <div class="bar text-center padding-2rem text-gray">暂无资金明细</div>
    </div>
    <!---content-->
    <div class="body padding-bottom-0_5rem">
      <div id="tabFD">
        <div class="list-body " v-for="(item,index) in paixu" :key="index">
          <div class="list-head text-black-light">{{item}}</div>
          <div class="list-items-min arrow" v-if='shuju.length > 0' v-for="(listitem, listindex) in shuju[index]" :key="listindex" @click="goApp">
            <div class="items-cell">
              <div class="line-height-1_5">{{listitem.action}}</div>
              <div class="text-tips text-gray">{{listitem.tradeTime}}</div>
            </div>
            <div class="items-cell text-red">{{listitem.money}}.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  export default {
    data () {
      return {
        dataList: [], // 明细列表
        time: '',
        shuju: [],
        paixu: []
      }
    },
    created () {
      var orderNum = 1
      this.$fetch.api_data.getCapitalFlowLogList({token: '', orderNo: orderNum}).then((res) => {
        this.time = res.data.data.createTime
        var shuju = res.data.data
        for (var i = 0; i < shuju.length; i++) {
          this.$set(shuju[i], 'sortBy', this.timeFormat(shuju[i].createTime)) // 通过$set往数组中添加一个属性
        }
        var paixu = []
        var m = 0
        paixu.push(shuju[m].sortBy)
        for (var k = 1; k < shuju.length; k++) {
          if (paixu[m] !== shuju[k].sortBy) {
            paixu.push(shuju[k].sortBy)
            m++
          }
        }
        this.paixu = paixu
        var shujus = []
        for (var n = 0; n < paixu.length; n++) {
          shujus.push([]) // 处理成一个二维数组
        }
        shuju.filter((res) => {
          var getIndex = this.isHasElementOne(paixu, res.sortBy) // 取到不同时间戳的Index
          if (getIndex > -1) {
            shujus[getIndex].push(res) // 相同值的推进数组里
          }
        })
        this.shuju = shujus
      })
    },
    methods: {
      add0 (m) {
        return m < 10 ? '0' + m : m
      },
      timeFormat (timestamp) { // 处理时间
        var time = new Date(timestamp)
        var year = time.getFullYear()
        var month = time.getMonth() + 1
        return year + '年' + this.add0(month) + '月'
      },
      isHasElementOne (arr, value) { // 处理数组
        for (var i = 0, vlen = arr.length; i < vlen; i++) {
          if (arr[i] === value) {
            return i
          }
        }
        return -1
      },
      back () {
        this.$router.back()
      },
      goApp(){
        MessageBox.confirm('请下载APP查看').then(action => {
          if (action === 'confirm') {
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err => {
          if (err === 'cancel') {
          }
        })
      }
    }
  }
</script>
<style scoped>
  .list-head{
    margin-bottom: 0;
  }
</style>
