<template>
  <div class="container1 pt-3">
    <div class="header">
      <nav class="nav" style="background:#fff">
        <div class="nav-left">
          <div onclick="window.history.go(-1)">
            <span class="icon icon-left iconfont line-height-1_5 text-gray"></span>
          </div>
        </div>
        <div class="nav-head">
          <a href="javascript:;" style="font-size:18px">
            发现
          </a>
        </div>
        <div class="nav-right"></div>
      </nav>
    </div>
    <div class="top">
      <div style="height:150px">
        <mt-swipe :auto="3000">
          <mt-swipe-item class="swiper-item" v-for="itemBanner in bannerDownList">
            <img :src="itemBanner.img" width="100%" @click="dialogFaxian">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="flex">
        <div class="flex-1 text-center" v-for="(item,index) in bannerUpList" @click="routerTo(index)">
          <img style="margin-bottom:5px;width:40%" :src="item.img" alt="">
          <p class="text-center f12">{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="faxian-box">
      <div class="title">
        玩转福利
      </div>
      <div class="fuli-box flex flex-align-center flex-wrap">
        <div class="img-box border-box" v-for="item in welfares" @click="dialogFaxian">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
    <div class="faxian-box">
      <div class="title">
        积分商城
      </div>
      <div class="jifen-box of-hide">
        <div class="flex" :width="listPointsGoods.length*134+14">
          <div class="pd-box" v-for="item in listPointsGoods">
            <div class="pd-img-box">
              <img :src="item.showImg" style="width:90%" alt="">
            </div>
            <p>{{item.name}}</p>
            <p style="margin-top:6px">
              <span style="color:#D9697c">{{item.salesPrice}}</span>积分
            </p>
          </div>
        </div>
      </div>
      <div class="jifen-footer" @click="toMall">
        <p>查看更多</p>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>

</template>
<script>
  import {faxianIndex, dialogFaxian} from '../../api/faxian'
  import loading from '../loading/loading.vue'
  export default {
    components: {
      loading
    },
    data() {
      return {
        bannerDownList: null, // banner
        bannerUpList: null, // 头部标题链接
        listPointsGoods: [], // 首页积分商城列表
        welfares: null, // 玩转福利列表
        showLoading: true
      }
    },
    created() {
      faxianIndex().then(({data}) => {
        this.showLoading = false
        var homeData = data.data
        this.bannerDownList = homeData.bannerDownList
        this.bannerUpList = homeData.bannerUpList
        this.listPointsGoods = homeData.listPointsGoods
        this.welfares = homeData.welfares
      })
    },
    methods: {
      routerTo(index) {
        if (index == 0) {
          this.$router.push({path: '/activityList'})
        } else if (index == 1) {
          this.$router.push({path: '/integralMall'})
        } else if (index == 2) {
          dialogFaxian()
        } else if (index == 3) {
          this.$router.push({path: '/userSign'})
        }
      },
      toMall() {
        this.$router.push({path: '/integralMall'})
      },
      dialogFaxian() {
        dialogFaxian();
      }
    }
  }
</script>
<style scoped>
  .top {
    background: #fff;
    padding: 0.7rem 0;
  }

  .swiper-item {
    width: 90%;
    margin: 0 5%;
  }

  .swiper-item .img {
    width: 90%;
  }

  .faxian-box {
    margin-top: 0.7rem;
    background: #fff;
  }

  .title {
    text-align: center;
    padding: 0.8rem 0;
    border-bottom: 1px solid #fafafa;
  }

  .fuli-box > div {
    width: 50%;
    border-right: 1px solid #fafafa;
    border-bottom: 1px solid #fafafa;
  }

  .fuli-box > div:nth-child(2), .fuli-box > div:nth-child(4) {
    border-right: 1px solid #fff;
  }

  .fuli-box > div img {
    width: 100%;
  }

  .fuli-box .img-box {
    height: 0;
    overflow: hidden;
    padding-bottom: 22%;
  }

  .jifen-box {
    overflow: auto;
    font-size: 0.8rem;
    padding: 1rem 0;
  }

  .pd-box {
    width: 120px;
    margin-left: 1rem;
  }

  .pd-img-box {
    width: 120px;
    height: 120px;
    text-align: center;
    line-height: 216px;
    border: 1px solid #fafafa;
    margin-bottom: 1rem;
  }

  .jifen-footer {
    padding: 0 14px;
  }

  .jifen-footer p {
    padding: 0.8rem 0;
    text-align: center;
    border-top: 2px solid #f7f7f7;
  }
</style>
