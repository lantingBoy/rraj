<template>
  <div class="container-full">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left" @click="back">
          <div class="nav-left"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        </div>
        <div class="nav-head">设置交易密码</div>
        <div class="nav-right nav-channel line-height-1_5"></div>
      </nav>
    </header>
    <!--header-->
    <!---content-->
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="panel-body ">
          <div class="form-items">
            <label for="paypwd" class="label-control padding-right-1rem">交易密码</label>
            <input type="password" id="paypwd" value="" placeholder="请输入6位交易密码" minlength="6" maxlength="6" class="from-control" v-model="form.initPayPsw">
          </div>
          <div class="form-items">
            <label for="paypwd2" class="label-control padding-right-1rem">确认密码</label>
            <input type="password" id="paypwd2" value="" placeholder="请再输入一次" minlength="6" maxlength="6" class="from-control" v-model="form.initPayPsw1">
          </div>
          <div class="padding-1rem margin-left-1rem margin-right-1rem">
            <button class="btn btn-red btn-circle" @click="doPaypwd">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {des,passToken,payPasswordCheck,passInfo} from '../../commonjs/commonjs'
  import {MessageBox} from 'mint-ui'
  export default{
    data(){
      return{
        form:{
          initPayPsw:'',
          initPayPsw1:''
        }
      }
    },
    methods:{
      doPaypwd(){
        let val1=this.form.initPayPsw;
        let val2=this.form.initPayPsw1;
        let payPassword=passInfo(val2);
        payPasswordCheck(val1);
        payPasswordCheck(val2);
        if(val1!==val2){
          MessageBox('','交易密码输入不一致')
        }
        if(payPasswordCheck(val1)&&payPasswordCheck(val2)&&val1===val2){
          this.$fetch.api_data.setPaypasswordData({token:'',payPassword:payPassword}).then((res)=>{
              console.log(res);
            MessageBox('','密码设置成功');
            localStorage.payPassword=1;
            this.$router.push({path:'/personInfo'})
          });
        }
      },
      back(){
        this.$router.push({path:'/personInfo'})
      }
    }
  }
</script>
<style>
  .container-full{
    width:100%;
  }
</style>
