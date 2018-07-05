<template>
  <div>
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left"><a href="javascript:;" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray" @click="back"></a></div>
          </div>
          <div class="nav-head">登录</div>
          <div class="nav-right nav-channel line-height-1_5"><router-link to="/register">注册</router-link></div></nav>
      </header>
      <!--header-->
      <!---content-->
      <div class="body">
        <!--登录-账号密码方式--->
        <div class="panel">
          <div class="panel-body panel-login">
            <div class="text-center padding-top-2rem padding-bottom-1rem"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/comm/logo_login.png" width="50%"></div>
            <div class="form-items-border form-items-full">
              <input type="tel" placeholder="请输入你的账号(手机号)" maxlength="11" class="form-items-cell" id="mobile" v-model="form.tel">
            </div>
            <div class="form-items-border form-items-full">
              <input type="password" placeholder="登录密码(6-16位字母或数字组合)" minlength="6" maxlength="16" class="form-items-cell" id="pwd" v-model="form.pwd">
            </div>
            <div class="bar text-right text-normal-min">忘记密码？点这里<router-link to="/forgetPwd"><span class="text-blue">找回密码</span></router-link></div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" @click="login">立即登录</button>
            </div>
            <div class="bar text-center text-gray">
              <router-link to="/login">手机号验证码登录</router-link>
            </div>
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
              pwd:''
            }
          }
      },
      methods:{
          back(){
            this.$router.back()
          },
        login(){
          const phoneNum=this.form.tel;
          const desPhone=des('88888888',this.form.tel);
          const desPassword=des('88888888',this.form.pwd);
          if(phoneCheck(this.form.tel) && passwordCheck(this.form.pwd)){
              this.$fetch.api_data.getLoginByPwdData({mobile:desPhone,password:desPassword}).then((res)=>{
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
              })
          }else if(password==''){
            MessageBox('', '请输入密码');
          }
        },
      }
  }
</script>
<style>

</style>
