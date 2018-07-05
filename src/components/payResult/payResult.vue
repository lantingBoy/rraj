<template>
  <div>
    <div class="container">
      <header class="header">
        <nav class="nav">
          <router-link to="/home">
            <div class="nav-left"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a>
            </div>
          </router-link>
          <div class="nav-head">结果详情</div>
          <router-link to="list" class="nav-right">完成</router-link>
        </nav>
      </header>
      <div class="body">
        <div class="panel panel-red padding-1rem">
          <div class="panel-body text-white text-center padding-top-2rem padding-bottom-2rem">
            <div class="text-h2"><i class="icon iconfont icon-right-circle text-h2"></i> {{result.title}}</div>
            <div class="text-normal padding-top-1rem">{{result.message}}</div>
          </div>
        </div>
        <div class="list">
          <div class="list-items " v-for="item in result.item">
            <div class="items-cell">{{item.key}}</div>
            <div class="items-cell text-black-light">{{item.value}}</div>
          </div>
        </div>
      </div>
      <!---btn-->
      <div class="bar">
        <div class="padding-2rem" style="padding-bottom:0;">
          <a class="btn btn-red btn-circle" @click="goUserInfo">查看我的稳赚</a>
        </div>
        <router-link to="/list">
          <div class="padding-1rem text-center">
            <a class="text-normal text-blue">继续投资</a>
          </div>
        </router-link>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>

</template>
<script>
  import Loading from '../loading/loading.vue'
  import {MessageBox} from 'mint-ui'
  export default {
    components: {Loading},
    data() {
      return {
        result: {},
        showLoading: true
      }
    },
    methods: {
      goUserInfo() {
        // this.$router.push({path: '/userProject'})
        MessageBox.confirm('请下载APP查看').then(action => {
          if (action === 'confirm') {
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err => {
          if (err === 'cancel') {
          }
        })
      }
    },
    created() {
      let orderNo = this.$route.query.order;
      //稳赚订单完成的结果详情页面
      this.$fetch.api_data.resultOrder({token: '', orderNo: orderNo}).then((res) => {
        this.showLoading = false
        this.result = res.data.data
        if (res.data.data == null || '') {
          this.$router.push({path: '/home'})
        }
      })
    }
  }
</script>
<style scoped>
  .nav-head,.nav-right,.nav-left{padding-top: 0}
  .nav{line-height: 3rem}
</style>
