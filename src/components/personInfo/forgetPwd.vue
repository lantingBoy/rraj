<template>
  <div class="container-full">
    <!--header-->
    <header class="header">
      <nav class="nav">
        <div class="nav-left">
          <div class="nav-left"><a href="http://wap.renrenaijia.com/member/index" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        </div>
        <div class="nav-head">找回密码</div>
        <div class="nav-right nav-channel line-height-1_5"></div>
      </nav>
    </header>
    <!--header-->

    <!---content-->
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="panel-body ">
          <div class="form-items">
            <label for="mobile" class="label-control">手机号</label>
            <input type="tel" id="mobile" placeholder="请输入你的手机号" maxlength="11" class="from-control" v-model="form.tel">
          </div>
          <div class="form-items">
            <label for="code" class="label-control">短信验证码</label>
            <input type="text" id="code" placeholder="短信验证码" maxlength="6" class="form-control login-ipt-adapt" v-model="form.code">
       <!--     <div class="form-items-cell pop-code pop-circle-red margin-right-1rem btn-code" @click="getCode" style="width:35%;">点击获取验证码</div>-->
            <button class="form-items-cell pop-code pop-circle-red btn-code margin-right-1rem" @click="getCode" :disabled="sendMsgDisabled" v-if="sendMsgDisabled" ref="btnCode" :class="sendMsgDisabled? 'gray':''" style="width:35%;">{{time+'秒后获取'}}</button>
            <button class="form-items-cell pop-code pop-circle-red btn-code margin-right-1rem" @click="getCode" :disabled="sendMsgDisabled" v-if="!sendMsgDisabled" ref="btnCode" style="width:35%;">点击获取验证码</button>
          </div>
          <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue" onclick="getVoiceCode();">语音验证码</span> </div>
          <div class="padding-1rem margin-left-1rem margin-right-1rem">
            <button class="btn btn-red btn-circle" @click="retrieve">下一步</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {phoneCheck,passwordCheck,des,passToken} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  export default{
      data(){
          return{
            form:{
              tel:'',
              code:''
            },
            time: 60, // 发送验证码倒计时
            sendMsgDisabled: false
          }
      },
    methods:{
      retrieve(){
        if(phoneCheck(this.form.tel) && this.form.code!==''){
          let desPhone=des('88888888',this.form.tel);
          //发送修改请求跳转到重新设置页面
          this.$fetch.api_data.getSetPwd({mobile:desPhone,mobileCode:this.form.code}).then((res)=>{
              console.log(res);
            this.$router.push({path:'/setPassWord',query:{mobile:desPhone}})
          });
        }else if(this.form.code===''){
          MessageBox('', '请输入验证码');
        }
      },
      getCode(){
        let phoneNum=this.form.tel;
        let desPhone=des('88888888',this.form.tel);
        if(phoneCheck(phoneNum)){
          const me=this;
          me.sendMsgDisabled = true;
          let interval = window.setInterval(function() {
            me.time--;
            if (me.time<=0) {
              me.time = 60;
              me.sendMsgDisabled = false;
              window.clearInterval(interval);
            }
          }, 1000);
          //获取重新设置密码所需要的验证码
          this.$fetch.api_data.getLoginCodeData({mobile:desPhone,businessCode:'findLoginPassword'}).then((res)=>{
            MessageBox('', '验证码已发送至您的手机');
          })
        }
      },
      login(){
        let desPhone=des('88888888',this.form.tel);
        let phoneNum=this.form.tel;
        let mobileCode=this.form.code;
        let oTime=new Date().getTime();
        if(phoneCheck(phoneNum) && mobileCode!=''){
          getLoginData(desPhone,mobileCode,'channel',oTime).then((res)=>{
            if(res.data.resCode===1){
              let token=res.data.data.token;
              //将需要存储的东西存储到localStorage
              localStorage.token=token;
              localStorage.avatars='http://oss.aliyuncs.com/kmjr-dev/CDN/app/resource/head/11.png';
              localStorage.isRealName=res.data.data.isRealName;
              localStorage.mobile=phoneNum;
              localStorage.hasPassword=res.data.data.hasPassword;
              localStorage.hasPayPassword=res.data.data.hasPayPassword;
              localStorage.isLogin=true;
              localStorage.payPassword=0;//自定义是否设置交易密码
              if(this.$route.query.page=='listChildren'){
                this.$router.push(`/list/${this.$route.query.pageId}`);
                if(localStorage.isRealName=='true'){
                  this.$router.push({path:'/realName'})
                }
                if(localStorage.payPassword!=1){
                  this.$router.push({path:'/setPaypassword'})
                }
              }
              if(this.$route.query.page=='home'){
                this.$router.push({path:'/home'})
              }else{
                this.$router.push({path:'/recommend'})
              }
            }else if(res.data.resCode===-1){
              MessageBox('', res.data.resMsg);
            }

          })
        }else if(mobileCode==''){
          MessageBox('', '请输入验证码');
        }
      },
    }

  }
</script>
<style scoped="">
  .pop-circle-red{box-shadow:none;border:1px solid #ff4d4d}
  .gray{color:#ccc;border:1px solid #ccc;}
</style>
