<template>
  <div class="container">
    <header class="header ">
      <nav class="nav">
        <div class="nav-left"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray" @click="back()"></a></div>
        <div class="nav-head">个人设置</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <!---->
    <div class="body">
      <!---card list-->
      <div class="list margin-top-0_5rem">
        <div class="list-items" @click="goRealName">
          <div class="items-cell">实名认证</div>
          <div class="items-cell text-black-light">
            <div class="text-tips-min" v-if="userInfo.isVerified==0">未认证</div>
            <div class="text-tips-min" v-if="userInfo.isVerified==1">认证中</div>
            <div class="text-tips-min" v-show="userInfo.isVerified==2">{{userInfo.trueName}}</div>
            <div class="text-tips-min" v-show="userInfo.isVerified==2">{{userInfo.identityNumber}}</div>
          </div>
        </div>
        <div class="list-items">
          <div class="items-cell">绑定手机</div>
          <div class="items-cell text-black-light">{{userInfo.mobile}}</div>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div class="list-items ">
          <div class="items-cell">头像</div>
          <div class="items-cell text-black-light">
            <img :src="userInfo.avatars" class="list-items-avatar"  width="2rem" height="2rem">
          </div>
        </div>
        <div class="list-items arrow" @click="goNickname">
          <div class="items-cell">昵称</div>
          <div class="items-cell text-black-light" v-if="userInfo.nickName==''">未设置</div>
          <div class="items-cell text-black-light" v-if="userInfo.nickName!=''">{{userInfo.nickName}}</div>
        </div>
        <div class="list-items arrow" @click="goAddress">
          <div class="items-cell">收货地址</div>
          <div class="items-cell text-black-light">未设置</div>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div class="list-items arrow" @click="goBankcard">
          <div class="items-cell">银行卡</div>
          <div class="items-cell text-black-light" v-if="userInfo.bankCardNum=='0'">未添加</div>
          <div class="items-cell text-black-light" v-if="userInfo.bankCardNum=='1'">已添加</div>
        </div>
        <div class="list-items arrow" @click="goLoginpwd">
          <div class="items-cell">登录密码</div>
          <div class="items-cell text-black-light" v-if="userInfo.hasPassword==false">未设置</div>
          <div class="items-cell text-black-light" v-if="userInfo.hasPassword==true">修改</div>
        </div>
        <div class="list-items arrow" @click="goPaypwd">
          <div class="items-cell">交易密码</div>
          <div class="items-cell text-black-light" v-if="userInfo.hasPayPassword==false">未设置</div>
          <div class="items-cell text-black-light" v-if="userInfo.hasPayPassword==true">已设置</div>
        </div>
      </div>
      <div class="list margin-top-0_5rem">
        <div class="list-items text-center" style="display:block;" @click="goLogout();">
          <div class="text-red">退出登录</div>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import {des,passToken} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  import Loading from '../loading/loading.vue'

  export default{
      components:{
        Loading
      },
    data(){
      return {
        userInfo:{},
        showLoading:true
      }
    },
    created(){
      this.$fetch.api_data.memberSettingData({token:''}).then((res)=>{
        this.showLoading=false;
        this.userInfo=res.data.data;
      })
    },
    methods:{
      goRealName(){
        if(this.userInfo.isVerified==0){
          this.$router.push({path:'/realName'})
        }else if(this.userInfo.isVerified==1){
          MessageBox('', '实名认证中');
        }else if(this.userInfo.isVerified==2){
          return false
        }
      },
      goNickname(){
          this.$router.push({path:'/nickName'})
      },
      goLoginpwd(){
        if(this.userInfo.hasPassword===true){
          this.$router.push({path:'/resetPassword'})
        }
        else{this.$router.push({path:'/setPassWord',query:{mobile:this.userInfo.mobile}})}
      },
      goLogout(){
        this.$fetch.api_data.logoutData({token:''}).then((res)=>{
          localStorage.removeItem('token');// 移除token
          localStorage.isLogin=false;
          this.$router.push({path:'/recommend'})
        })

      },
      goBankcard(){
        this.$router.push({path:'/bankCard'})
      },
      goAddress(){
        MessageBox('', '请下载APP查看详情');
      },
      goPaypwd(){
        if(this.userInfo.hasPayPassword===false){
          this.$router.push({path:'/setPaypassword'})
        }

      },
      back(){
        this.$router.push({path:'/home'});
      }
    }
  }
</script>
<style>

</style>
