<template>
  <div>
    <header id="headerNormal" class="header">
      <nav class="nav">
        <router-link to="/notice">
          <div class="nav-left">
            <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrWebAppV4/page/recommend/ic_rec_notice.png"
                 width="45%">
          </div>
        </router-link>
        <div class="nav-head">
          <a href="javascript:;">
            人人爱家金融
          </a>
        </div>
        <div class="nav-right" @click="goA">
          <img v-bind:src="this.src" width="45%">
        </div>
      </nav>
    </header>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container" style="margin-top:3rem;">
      <swiper-slide v-for="item in banner"><img :src="item.img" width="100%" @click="goA"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="r-list color333 font-type">
      <div class="r-item" v-for="(item,index) in nav" @click="goItem(index,item.action)">
        <img :src="item.img" width="40%">
        <p>{{item.title}}</p>
      </div>
    </div>
    <router-link to="/notice">
      <div class="r-tip">
        <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrWebAppV4/page/recommend/icon_main_notice.png"
             width="5%" style="vertical-align: top">
        <swiper :options="swiperOption1" ref="mySwiper" class="swiper-container"
                style="display: inline-block;height:1rem;width:75%">
          <swiper-slide v-for="item in notice" class="color333 font-type font-size r-tip-con" style="">{{item.body}}
          </swiper-slide>
        </swiper>
        <span class="color999 font-size-1rem" style="margin-left:.4rem;vertical-align: middle;">更多</span>
      </div>
    </router-link>
    <div class="r-bg color333 font-type">
      <div class="r-best"> 精选推荐</div>
    </div>
    <div class="list-body">
      <div class="list-cell" v-for="item in projectList" :class="item.isHot? 'mark-hot-sell' : '' "
           @click="doProject(item.projectId)">
        <div class="list-cell-tit text-h2">
          {{item.name}}
          <span class="pop pop-circle pop-circle-red pop-min">{{item.keywords}}</span>
        </div>
        <div class="col col-8 list-cell-body">
          <div class="col-cell col-cell-3 text-indent-1em">
            <div class="text-red text-h1">10.8<span class="text-normal">%</span><span class="text-normal"
                                                                                      v-show="item.plusRate">+{{item.plusRate}}%</span>
            </div>
            <div class="text-gray text-normal-min padding-top-0_5rem">年化收益</div>
          </div>
          <div class="col-cell col-cell-2">
            <div style="font-size:1.5rem;">{{item.days}}<span class="text-normal">天</span></div>
            <div class="text-gray text-normal-min padding-top-0_2_5rem line-height-1_5">项目周期</div>
          </div>
          <div class="col-cell col-cell-3" style="text-align: right;padding-right:1rem;">
            <x-circle :percent="item.progress" :stroke-width="4" stroke-color="#FF4D4D"
                      style="width:45px;height:45px;text-align: right;display:inline-block">
              <span style="color:#ccc;font-size:.6rem;">{{item.progress}}%</span>
            </x-circle>
          </div>
        </div>
      </div>
    </div>
    <div class="text-tips text-center padding-bottom-5rem">
      <div class="text-gray padding-top-1rem text-size">人人爱家金融累计投资金额(元)</div>
      <div class="text-gray padding-top-1rem text-size-1_3rem">{{recommendObj.totalAmount}}</div>
      <div class="pop pop-circle-green pop-circle text-green margin-top-0_5rem"><i
        class="icon iconfont icon-riskcontrol line-height-1"></i> 恒丰银行资金存管
      </div>
    </div>
    <div class="download" v-show="!click">
      <a href="javascript:;"><img
        src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_download.png"
        width="100%" @click="download"></a>
      <span class="close close-download" @click="closeDownload">×</span>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import '../../../static/swiper.min.css'
  import Loading from 'components/loading/loading'
  import {XCircle} from 'vux'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
        percent1: 0,
        recommendObj: {},
        itemList: [],
        projectList: [],
        banner: [],
        botShow: {},
        res: {},
        click: false,
        showLoading: true,
        nav: [],
        notice: [],
        src: '',
        swiperOption: {
          notNextTick: true,
          speed: 1500,
          paginationClickable: true,
          observeParents: true,
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          }
        },
        swiperOption1: {
          direction: 'vertical',
          notNextTick: true,
          speed: 1000,
          paginationClickable: true,
          observeParents: true,
          loop: true,
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
      this.$fetch.api_data.getRecomendData({token: ''}).then((res) => { //传入一个标识token 在封装的fetch方法中会自行计算token
        this.showLoading = false;  // loading状态
        this.res = res.data;
        console.log(res.data)
        this.recommendObj = res.data.data;
        this.itemList = res.data.data.recommend.data;
        this.projectList = res.data.data.project.data;
        for (var i = 0; i < this.projectList.length; i++) {
          if (this.projectList[i].projectType !== 1) {
            this.projectList.splice(i, 1)
          }
        }
        this.banner = res.data.data.banner;
        this.nav = res.data.data.nav;
        this.botShow = res.data.data.brogueNav;
        this.notice = res.data.data.notice.msgs;
      })
      let Img = ['http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrWebAppV4/page/recommend/icon_gift_1.png',
        'http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrWebAppV4/page/recommend/icon_gift_1.png'
      ]
      this.src = Img[0]
    },
    methods: {
      closeDownload() {
        this.click = true
      },
      download() {
        this.click = false
        window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
      },
      go(item) {
        console.log(item)
        let Action = JSON.parse(decodeURIComponent(item.action)) // 解码是字符串 需要转化为json对象
        console.log(Action)
        if (Action.action == '3002') {
          this.$router.push({path: '/register'})
        } else if (Action.action == '4001') {
          this.$router.push(`/list/${Action.id}`)           // 动态路由跳转
        } else if (Action.action == '8001') {
          this.$router.push({path: '/realName'})
        }
      },
      goItem(index, action) {
        switch (index) {
          case 0:
            this.$router.push({path: '/reportList'});
            break;
          case 1:
            this.$router.push({path: '/invsetFriend'});
            break;
          case 2:
            this.$router.push({path: '/userPoints'});
            break;
          case 3:
            this.$router.push({path: '/insurance'});
            break;
        }
      },
      doProject(id) {
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
          this.$router.push({path: '/login'})
        } else {
          this.$router.push(`/list/${id}`)// 动态路由跳转
        }
      },
      goA() {
        MessageBox.confirm('该活动请下载APP查看').then(action => {
          if (action === 'confirm') {
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err => {
          if (err === 'cancel') {
          }
        })
      }
    },
    components: {
      Loading,
      XCircle
    }
  }
</script>


<style lang="less" scoped>
  .swiper-slide img {
    height: 8rem;
  }

  .slider-box {;
    overflow: hidden;
    width: 100%;
    margin: 3rem auto;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 .25rem #f1eeee;
    margin-bottom: 0
  }

  .slider-info {
    padding: 1rem .5rem .5rem
  }

  .slider-mark {
    position: relative;
    padding-bottom: .25rem;
  }

  .slider-mark:after {
    content: '';
    display: block;
    width: 5rem;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #ff616c;
    position: absolute;
    transform: translate(-50rem, 0);
    -webkit-transform: translate(-50rem, 0);
    transition: all .75s;
    -webkit-transition: all .75s
  }

  .slider-items {
    float: left;
    z-index: 2;
    width: 10%;
  }

  .slider-items.active {
    z-index: 2;
    opacity: 1;
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }

  .slider-step {
    position: absolute;
    bottom: 1rem;
    left: 42%;
    width: 40%;
    z-index: 2;
  }

  .slider-step .point {
    background-color: #f1eeee;
    color: #f1eeee;
    border-radius: 999px;
    width: .5rem;
    height: .5rem;
    display: inline-block;
    overflow: hidden;
    transition: all .5s;
    margin: 0 .25rem
  }

  .slider-step .point.active {
    background-color: #fd6a53;
    color: #fd6a53
  }

  .slider-box ul {
    position: absolute;
    bottom: 6px;
    width: 100%;
    text-align: center;
  }

  .slider-box ul li {
    width: 6px;
    height: 6px;
    border: 1px solid #ff4040;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
  }

  .slider-box .now {
    background: #ff4040
  }

  .slider-box ul li:first-child {
    margin-left: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .col {
    padding: .5rem;
  }

  .mint-swipe-items-wrap {
    height: 10rem;
  }

  .mint-swipe {
    margin-top: 3rem;
    .mint-swipe-item {
      height: 10rem;
      img {
        height: 100%;
      }
    }
  }

  .list-cell-tit, .list-cell {
    border: 0
  }

  .list-cell {
    border-bottom: 1px solid #ccc;
    margin-top: 0
  }

  .color333 {
    color: #333;
  }

  .color999 {
    color: #999;
  }

  .font-size-1rem {
    font-size: .8rem;
  }

  .text-size {
    font-size: .95rem
  }

  .text-size-1_3rem {
    font-size: 1.3rem;
  }

  .font-type {
    font-family: "PingFang SC Regular";
  }

  .font-size {
    font-size: .875rem;
  }

  .padding-bottom-5rem {
    padding-bottom: 5rem;
  }

  .pop-min {
    padding: 0.08rem 0.25rem;
  }

  .text-h1 {
    font-size: 1.4rem !important;
  }

  .r-tip {
    padding: .5rem;
    background: #fff;
    .r-tip-con {
      display: inline-block;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .swiper-slide {
    vertical-align: middle;
    line-height: 20px
  }

  .r-list {
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    text-align: center;
    background: #fff;;
    font-size: .875rem;
    line-height: 1.5;
    padding: .5rem 0;
    border-bottom: 1px solid #ccc
  }

  .r-bg {
    background: #f5f5f5;
    padding-top: .5rem;
    .r-best {
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding: .5rem 1rem;
      font-size: 1.1rem;
    }
  }

  .mint-swipe-indicator.is-active {
    background: #ff4040;
    opacity: 1
  }
</style>
