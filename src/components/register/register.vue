<template>
  <transition name="slide">
    <div class="container-full">
      <!--header-->
      <header class="header">
        <nav class="nav">
          <div class="nav-left">
            <div class="nav-left" @click="back"><span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span></div>
          </div>
          <div class="nav-head">注册</div>
          <router-link to="/login">
            <div class="nav-right nav-channel line-height-1_5"><a>登录</a></div>
          </router-link>
        </nav>
      </header>
      <!--header-->
      <!---content-->
      <div class="body">
        <!--注册--->
        <div class="panel">
          <div class="panel-body panel-login">
            <div class="text-center padding-top-2rem padding-bottom-1rem"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/comm/logo_login.png" width="50%"></div>
            <div class="form-items-border form-items-full">
              <input type="tel" placeholder="请输入你的手机号" maxlength="11" class="form-items-cell"  v-model="form.tel">
            </div>
            <div class="form-items-border form-items-full">
              <input type="password" placeholder="登录密码(6-16位字母或数字组合)" minlength="6" maxlength="16" class="form-items-cell"  v-model="form.password">
            </div>
            <div class="form-items-border">
              <input type="text" placeholder="短信验证码" maxlength="6" class="form-items-cell"  v-model="form.code">
              <div class="form-items-cell pop-code pop-circle-red btn-code" @click="getCode();">点击获取验证码</div>
            </div>
            <div class="bar text-right text-normal-min">收不到短信？试试<span class="text-blue" onclick="getVoiceCode();">语音验证码</span> </div>
            <div class="padding-top-1rem padding-bottom-1rem">
              <button class="btn btn-red btn-circle" @click="register();">立即注册</button>
            </div>
            <div class="text-center padding-top-2rem padding-bottom-2rem text-normal-min">
              <div class="line-height-1_5 text-gray">注册即代表你同意</div>
              <div class="text-red"><a href="javascript:;" ui-dialog="service-rule" class="text-blue">《用户协议》</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

  import {des,phoneCheck,passwordCheck} from '../../commonjs/commonjs'
  import {getRegisterData} from '../../api/faxian'
  import {MessageBox} from 'mint-ui'
  import axios from 'axios'
  export default{
    data(){
      return{
        form:{
          tel:'',
          password:'',
          code:''
        }
      }
    },
    created(){

    },
    methods:{
      back(){
          this.$router.go(-1)
      },
      getCode(){
       //DES加密
        let key='88888888';
        let desPhone=des(key,this.form.tel);
        let params=new URLSearchParams();
        let oTime=Number(new Date().getTime());
        params.append('mobile',desPhone);
        params.append('businessCode','register');
        if(phoneCheck(this.form.tel)&& passwordCheck(this.form.password)){
          axios.post('/api/member/sendMobileCode',params,oTime).then((res)=>{
              if(res.data.resMsg=="亲~此号码已注册了"){
                MessageBox('','您的号码已经注册成功,请登录')
                this.$router.push({path:'/login'})
              }
              else if(res.data.resMsg=='一分钟只允许获取一次短信，请勿频繁获取'){
                MessageBox('','一分钟内只允许获取一次验证码，请稍后再试')
              }else if(res.data.resCode===1){
                MessageBox('','验证码已发送至您的手机')
              }
          })

        }
      },
      register(){
        if(!this.form.code){
          MessageBox('','验证码不能为空')
        }else if(this.form.code!='888888'){
          MessageBox('','请输入正确的验证码')
        }else if(phoneCheck(this.form.tel)&& passwordCheck(this.form.password)&& this.form.code==='888888'){
          let key='88888888';
          let desPhone=des(key,this.form.tel);
          let desPassword=des(key,this.form.password);
          let oTime=Number(new Date().getTime());
          getRegisterData(desPhone,desPassword,oTime).then((res)=>{
              if(res.data.resCode==1){
                 console.log(res);
                MessageBox('','注册成功');
                  this.$router.push({path:'/login'})
              }
          })
        }
      },
    }
  }
</script>

<style lang="less">
  .container-full{
    position: fixed;
    bottom:0;
    z-index:99;
    .panel{
      padding-top:3rem;
    }
  }
  .slide-enter-active , .slide-leave-active{
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to
    {
    transform: translate3d(100%,0,0);

  }
</style>
