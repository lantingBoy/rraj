<template>
  <div class="container-full">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left">
          <div class="nav-left" @click="back"><div  class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></div></div>
        </div>
        <div class="nav-head">设置登录密码</div>
        <div class="nav-right nav-channel line-height-1_5"></div>
      </nav>
    </header>
    <!--header-->
    <!---content-->
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="panel-body ">
          <div class="form-items">
            <label for="loginpwd" class="label-control padding-right-1rem">登录密码</label>
            <input type="password" id="loginpwd" value="" placeholder="请输入6-16位字母或数字" minlength="6" maxlength="16" class="from-control" v-model="form.firstPsw">
          </div>
          <div class="form-items">
            <label for="loginpwd2" class="label-control padding-right-1rem">确认密码</label>
            <input type="password" id="loginpwd2" value="" placeholder="请再输入一次" minlength="6" maxlength="16" class="from-control" v-model="form.secondPsw">
          </div>
          <div class="padding-1rem margin-left-1rem margin-right-1rem">
            <button class="btn btn-red btn-circle" @click="doLoginpwd">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {passwordCheck,passToken,passInfo} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  export default{
    data(){
      return{
        form:{
          firstPsw:'',
          secondPsw:''
        }
      }
    },
    methods:{
      back(){
          this.$router.back();
      },
      doLoginpwd(){
        let mes1= this.form.firstPsw;
        let mes2= this.form.secondPsw;
        let password=passInfo(this.form.secondPsw);
        let token = passToken()
        passwordCheck(mes1);
        passwordCheck(mes2);
        if(mes1!==mes2){
          MessageBox('', '两次输入的密码不一致');
        }
        if(passwordCheck(mes1)&&passwordCheck(mes2)&&mes1===mes2){
            //发出提交修改验证码的请求
            this.$fetch.api_data.setPwd({token:token,password:password}).then((res)=>{
              MessageBox('', '密码设置成功');
              this.$router.push({path:'/home'});
            })
        }

      }
    }
  }
</script>
