<template>
  <div class="container-full">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left">
          <div class="nav-left" @click="back"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        </div>
        <div class="nav-head">修改登录密码</div>
        <div class="nav-right nav-channel line-height-1_5"></div>
      </nav>
    </header>
    <!--header-->
    <!---content-->
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="panel-body ">
          <div class="form-items">
            <label for="oldpwd" class="label-control padding-right-1rem">原密码</label>
            <input type="password" id="oldpwd" value="" placeholder="请输入原密码" minlength="6" maxlength="16" class="from-control" v-model="form.initPsw">
          </div>
          <div class="form-items">
            <label for="newpwd" class="label-control padding-right-1rem">新密码</label>
            <input type="password" id="newpwd" value="" placeholder="请输入6-16位字母或数字" minlength="6" maxlength="16" class="from-control" v-model="form.newPsw">
          </div>
          <div class="form-items">
            <label for="newpwd2" class="label-control padding-right-1rem">确认密码</label>
            <input type="password" id="newpwd2" value="" placeholder="请再输入一次" minlength="6" maxlength="16" class="from-control" v-model="form.renewPsw">
          </div>
          <div class="padding-1rem margin-left-1rem margin-right-1rem">
            <button class="btn btn-red btn-circle" @click="doSubmit">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {des,passToken,passwordCheck,passInfo} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  export default{
    data(){
      return{
        form:{
          initPsw:'',
          newPsw:'',
          renewPsw:''
        }
      }
    },
    methods:{
      back(){
        this.$router.back();
      },
      doSubmit(){
        let initPassword=this.form.initPsw;
        let newPassword=this.form.newPsw;
        let renewpassword=this.form.renewPsw;
        passwordCheck(initPassword);
        passwordCheck(newPassword);
        passwordCheck(renewpassword);
        if(newPassword!==renewpassword){
          MessageBox('', '两次输入的新密码不同');
        }
        if(passwordCheck(initPassword)&&passwordCheck(newPassword)&& passwordCheck(renewpassword)&&newPassword===renewpassword){
            console.log(passInfo(initPassword)+'yuanmima');
            console.log(passInfo(renewpassword)+'xinmima');
          this.$fetch.api_data.resetPasswordData({token:'',newPassword:passInfo(renewpassword),oldPassword:passInfo(initPassword)}).then((res)=>{
            console.log(res);
            MessageBox('', '密码修改成功');
            this.$router.push({path:'/personInfo'})
          });
          /*resetPassword(passToken(token),passInfo(initPassword),passInfo(renewpassword),oTime).then((res)=>{
            console.log(res);
            if(res.data.resCode===-1){
              MessageBox('', res.data.resMsg);
            }else if(res.data.resCode===1){
              MessageBox('', '密码修改成功');
              this.$router.push({path:'/personInfo'})
            }
          })*/
        }
      }
    }
  }
</script>
<style scoped>
  .container-full{width:100%}
</style>
