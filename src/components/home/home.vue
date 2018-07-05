<template>
  <div>
    <header class="header header-red">
      <nav class="nav">
        <div class="nav-left nav-channel" @click="where">
          <img
            :src="myMsg.headURL==''? 'http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/comm/icon-home.png': myMsg.headURL "
            width="28" class="nav-avatar" id="avatar">
        </div>
        <div class="nav-head"></div>
        <div class="nav-right" @click="goAPP">
          <a>
            <i class="icon iconfont icon-information text-white text-h1"></i>
          </a>
        </div>
      </nav>
    </header>
    <div class="panel panel-red padding-bottom-1rem">
      <!--login before-->
      <div class="padding-top-1rem padding-bottom-2rem padding-2rem" v-show="isLogin=='false'||isLogin==undefined">
        <div class="panel-slogan"><span class="panel-slogan-txt">让金融美好生活</span></div>
        <div class="col col-5">
          <div class="col-cell col-cell-1">&nbsp;</div>
          <router-link :to="{path:'/login',query: {page: 'home'}}"
                       class="btn btn-white-border btn-circle btn-login col-cell col-cell-3">
            立即登录
          </router-link>
        </div>
      </div>
      <div class="panel-body text-center" v-show="isLogin=='true'" style="margin-top:2rem">
        <div class="text-h1-normal padding-top-1rem" id="totalAmount">{{myMsg.totalAmount|filterB }}</div>
        <div class="text-normal-min padding-top-0_5rem text-gray-light">
          总资产(元)
        </div>
        <div class="col col-2 padding-top-2rem" @click="gouserProfitPage">
          <div class="col-cell">
            <div class="text-normal-max" id="balance">{{myMsg.balance|filterB}}</div>
            <div class=" text-normal-min text-gray-light" style="padding-top: .5rem">账户余额</div>
          </div>
          <div class="col-cell">
            <div class="text-normal-max" id="totalEarnings">{{myMsg.totalEarnings|filterB }}</div>
            <div class=" text-normal-min text-gray-light" style="padding-top: .5rem">累计收益</div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <!--提现/充值-->
      <div class="panel-body col col-2 text-center bg-white border-bottom-solid text-normal-max">
        <div class="col-cell border-right-solid box-sizing-border" @click="recharge">
          <a class="btn-block">充值</a>
        </div>
        <div class="col-cell" @click="getCash">
          <a class="btn-block">提现</a>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="list bg-white border-top-solid margin-top-0_5rem ">
        <div class="list-head border-bottom-solid" id="itemTitle">{{item.title}}
          <router-link to="/moneyDetail">
            <span class="list-head-zj">资金明细>></span>
          </router-link>
        </div>
        <div class="list-body col-2 col margin-top-0_5rem ">
          <a
            class="col-cell col col-4 padding-top-1rem padding-bottom-1rem border-right-solid border-bottom-solid box-sizing-border"
            @click="projectAction(itemList.action)">
            <div class="col-cell text-indent-1em">
              <img class="icon iconfont icon-ajb text-red text-h1 font-bold" :src="itemList.img" width="50%" style="">
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="aijiabaoTitle">{{itemList.title}}</div>
              <div class="text-tips text-gray line-height-2 padding-top-0_2_5rem" id="aijiabaoVal">
                {{itemList.value}}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="list bg-white border-top-solid margin-top-0_5rem ">
        <div class="list-head border-bottom-solid" id="item2Title">
          更多
        </div>
        <div class="list-body col-2 col margin-top-0_5rem ">
          <a
            class="col-cell col col-4 padding-top-1rem padding-bottom-0_5rem home-cell border-right-solid border-bottom-solid box-sizing-border"
            v-for="moreItem in moreItems" @click="action(moreItem)">
            <div class="col-cell text-indent-1em">
              <img class="icon iconfont icon-reward text-red text-h1 font-bold" :src="moreItem.img" width="45%">
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="rewardTitle">{{moreItem.title}}</div>
              <div class="text-tips text-gray line-height-1_2 padding-right-0_5rem padding-top-0_2_5rem"
                   id="rewardVal">{{moreItem.value}}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="panel margin-top-0_5rem" style="padding-bottom: 3rem;">
      <div class="list-cell-arrow-right" @click="where">
        <div class="col col-2">
          <div class="col-cell">个人设置</div>
          <div class="col-cell text-gray text-normal-min text-right">收货地址，绑卡等</div>
        </div>
      </div>
      <div class="list-cell-arrow-right" ui-dialog="service-rule" @click="goProblem">
        <div class="col col-2">
          <div class="col-cell">帮助与反馈</div>
          <div class="col-cell text-gray text-normal-min text-right">你想了解的问题都在这里</div>
        </div>
      </div>
      <div class="list-cell-arrow-right" @click="goMore">
        <div class="col col-2">
          <div class="col-cell">更多</div>
          <div class="col-cell text-gray text-normal-min text-right">关于我们，风险测试</div>
        </div>
      </div>
    </div>
    <div class="dialog dialog-full " ui-dialog-name="service-rule" v-show="showDialog"
         :class="showDialog?'dialog-show':''">
      <div class="dialog-box">
        <div class="dialog-header" @click="hideDialog">
          <div class="nav-head"><a href="javascript:;"><img
            src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a>
          </div>
          <i class="icon iconfont icon-close text-h2" ui-dialog-close="service-rule"></i>
        </div>
        <div class="dialog-body">
          <iframe src="http://wap.renrenaijia.com/member/faq" width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import Loading from 'components/loading/loading'

  export default {
    data() {
      return {
        token: localStorage.token,
        myMsg: {},
        item: {},
        itemList: [],
        moreItems: [],
        isLogin: localStorage.isLogin,
        showLoading: true,
        showDialog: false,
        balance: ''
      }
    },
    created() {
      this.$fetch.api_data.homeData({token: ''}).then((res) => {
        console.log(res)
        this.showLoading = false;
        this.myMsg = res.data.data;
        this.balance = res.data.data.balance
        this.item = res.data.data.productItem;
        this.itemList = res.data.data.productItem.item[0];
        this.moreItems = res.data.data.moreItem.item;

      })
    },
    components: {
      Loading
    },
    methods: {
      recharge() {
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
          this.$router.push({path: '/login'})
        } else if (localStorage.isRealName == 'false') {
          MessageBox.confirm('', {
            message: '为确保你的资金安全，请先完成实名认证',
            title: '提示',
            confirmButtonText: '前往',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {
              //确定操作
              this.$router.push({path: '/realName'})
            }
          })
          return
        } else {
          this.$router.push({path: '/reCharge'})
        }
      },
      getCash() {
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
          this.$router.push({path: '/login'})
        } else if (localStorage.isRealName == 'false') {
          MessageBox.confirm('', {
            message: '为确保你的资金安全，请先完成实名认证',
            title: '提示',
            confirmButtonText: '前往',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') { // 确定操作
              this.$router.push({path: '/realName'})
            }
          })
          return
        } else {

          this.$router.push({path: '/getCash'})
        }
      },
      where() {
        if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
          this.$router.push({path: '/login', query: {page: 'home'}})
        } else {
          this.$router.push({path: '/personInfo'})
        }
      },
      action(moreItem) {
        let oAction = JSON.parse(decodeURIComponent(moreItem.action));//解码是字符串 需要转化为json对象
        if (oAction.action == 7001) {
          if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
            this.$router.push({path: '/login', query: {page: 'home'}})
          } else {
            this.$router.push({path: '/integralMall'})
          }
        } else {
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
      projectAction(proItem) {
        let oAction = JSON.parse(decodeURIComponent(proItem)) // 解码是字符串 需要转化为json对象
        console.log(oAction)
        if (oAction.action == 5003) {
          if (localStorage.isLogin == 'false' || localStorage.isLogin == undefined) {
            this.$router.push({path: '/login', query: {page: 'home'}})
          } else {
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
        }
      },
      goProblem() {
        this.showLoading = true
        this.showDialog = true
        setTimeout(() => {
          this.showLoading = false
        }, 1500)
      },
      hideDialog() {
        this.showDialog = false;
      },
      goMore() {
        this.$router.push({path: '/about'})
      },
      gouserProfitPage() {
        this.$router.push({path: '/userProfit'})
      },
      goAPP() {
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

<style lang="less">

  .dialog.dialog-full .dialog-body iframe {
    height: 100%
  }

  .dialog-show {
    transform: translateY(0);
    -webkit-transform: translateY(0)
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .icon {
    vertical-align: middle;
    padding-top: .5rem
  }

  .padding-top-0_5rem {
    padding-top: 1.5rem;
  }

  .list-head {
    position: relative;
    .list-head-zj {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      margin-top: -0.5rem;
      color: #fd525b;
      font-size: 0.875rem
    }
  }

</style>


