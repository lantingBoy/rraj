<template>
  <transition name="slide">
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left" @click="back()"><a
              class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
          </div>
          <div class="nav-head">登录</div>
          <div class="nav-right nav-channel line-height-1_5">
            <router-link to="/register">
              注册
            </router-link>
          </div>
        </nav>
      </header>
      <!--header-->
      <!---content-->
      <div class="body">
        <!--登录-短信验证码方式--->
        <div class="panel">
          <div class="panel-body panel-login">
            <div class="text-center padding-top-2rem "><img
              src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/comm/logo_login.png" width="50%">
            </div>
            <div class="form-items-border form-items-full">
              <input type="tel" placeholder="请输入你的手机号" maxlength="11" class="form-items-cell" id="mobile"
                     v-model="form.tel">
            </div>
            <div class="form-items-border">
              <input type="text" placeholder="短信验证码" maxlength="6" class="form-items-cell" id="code"
                     v-model="form.code">
              <button class="form-items-cell pop-code pop-circle-red btn-code" @click="getCode"
                      :disabled="sendMsgDisabled" v-if="sendMsgDisabled" ref="btnCode"
                      :class="sendMsgDisabled? 'codeGray':''">{{time+'秒后获取'}}
              </button>
              <button class="form-items-cell pop-code pop-circle-red btn-code" @click="getCode"
                      :disabled="sendMsgDisabled" v-if="!sendMsgDisabled" ref="btnCode">获取验证码
              </button>
            </div>
            <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue"
                                                                      @click="getVoiceCode">语音验证码</span></div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" @click="login">立即登录</button>
            </div>
            <div class="bar text-center text-gray">
              <a href="javascript:;" @click="loginPwd">账号密码登录</a>
            </div>
            <div class="text-center padding-top-2rem padding-bottom-2rem text-normal-min">
              <div class="line-height-1_5 text-gray">如未注册则自动注册且代表你同意</div>
              <div class="text-red"><div ui-dialog="service-rule" class="text-blue" @click.stop="open">《用户协议》</div></div>
            </div>
          </div>
        </div>
      </div>
      <!--用户协议-->
      <div class="dialog dialog-full show" ui-dialog-name="service-rule" v-show="showDialog">
        <div class="dialog-box">
          <div class="dialog-header" @click="close">
            <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
            <i class="icon iconfont icon-close text-h2" ui-dialog-close="service-rule"></i>
          </div>
          <div class="dialog-body">
            <iframe src="http://192.168.10.198:8091/app/protocol/register.html" width="100%" height="100%"></iframe>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {phoneCheck, passwordCheck, des, passToken} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
        form: {
          tel: "",
          code: ""
        },
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
        showDialog: false
      }
    },
    methods: {
      back() {
        this.$router.back(-1);
      },
      getCode() {
        let phoneNum = this.form.tel;
        let desPhone = des('88888888', this.form.tel);
        if (phoneCheck(phoneNum)) {
          const me = this;
          me.sendMsgDisabled = true;
          let interval = window.setInterval(function () {
            me.time--;
            if (me.time <= 0) {
              me.time = 60;
              me.sendMsgDisabled = false;
              window.clearInterval(interval);
            }
          }, 1000);
          this.$fetch.api_data.getLoginCodeData({mobile: desPhone, businessCode: 'login'}).then((res) => { //验证码接口
            MessageBox('', '验证码已发送至您的手机');
          })
        }
      },
      login() {
        let desPhone = des('88888888', this.form.tel)
        let phoneNum = this.form.tel
        let mobileCode = this.form.code
        if (phoneCheck(phoneNum) && mobileCode != '') {
          this.$fetch.api_data.getLoginData({
            mobile: desPhone,
            mobileCode: mobileCode,
            channel: 'channel'
          }).then((res) => { // 登录请求接口
            const token = res.data.data.token
            // 将需要存储的东西存储到localStorage
            localStorage.token = token
            localStorage.avatars = 'http://oss.aliyuncs.com/kmjr-dev/CDN/app/resource/head/11.png'
            localStorage.isRealName = res.data.data.isRealName
            localStorage.mobile = phoneNum
            localStorage.hasPassword = res.data.data.hasPassword
            localStorage.hasPayPassword = res.data.data.hasPayPassword
            localStorage.isLogin = true
            localStorage.payPassword = 0 // 自定义是否设置交易密码
            if (this.$route.query.page == 'listChildren') {
              this.$router.push(`/list/${this.$route.query.pageId}`);
              if (localStorage.isRealName == 'true') {
                this.$router.push({path: '/realName'})
              }
              if (localStorage.payPassword != 1) {
                this.$router.push({path: '/setPaypassword'})
              }
            }
            if (this.$route.query.page == 'home') {
              this.$router.push({path: '/home'})
            } else {
              this.$router.push({path: '/recommend'})
            }
          })
        } else if (mobileCode == '') {
          MessageBox('', '请输入验证码')
        }
      },
      loginPwd() {
        this.$router.push({path: '/loginBypassword'})
      },
      open() {
        this.showDialog = true
      },
      close() {
        this.showDialog = false
      },
      getVoiceCode() { // 获取语音验证码
        if(this.sendMsgDisabled==true){
          return
        }else if (phoneCheck(this.form.tel)) {
          MessageBox.confirm('', {
            message: '你将会收到来自人人爱家（400-667-0571）的语音验证码',
            title: '语音验证码',
            confirmButtonText: '获取',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {
              // 确定操作
              let desPhone = des('88888888', this.form.tel)
              this.$fetch.api_data.getLoginCodeData({mobile: desPhone, businessCode: 'login', isVoice: true }).then((res) => {
              if(res.data.resCode==1){
                MessageBox('','请注意接听来电')
                const me = this
                me.sendMsgDisabled = true
                let interval = window.setInterval(function () {
                  me.time--
                  if (me.time <= 0) {
                    me.time = 60
                    me.sendMsgDisabled = false
                    window.clearInterval(interval)
                  }
                }, 1000)
              }
            })
          }
          }).catch(err => {
            if (err == 'cancel') {
              // 取消按钮
            }
          })
        }

      }
    }
  }
</script>
<style lang="less">
  .container-full {
    position: fixed;
    bottom: 0;
    z-index: 99;
    .panel {
      padding-top: 3rem;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .pop-circle-red {
    box-shadow: none;
    border: 1px solid #ff4d4d
  }

  .codeGray {
    color: #ccc;
    border: 1px solid #ccc;
  }
  .mint-msgbox-message {
    line-height: 20px;
    margin-top: 24px;
    color:#333333;
  }
  .mint-msgbox-confirm{
    color:#ff4040;
  }
</style>
