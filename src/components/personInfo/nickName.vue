<template>
  <div class="container-full">
    <!--header-->
    <header class="header ">
      <nav class="nav">
        <div class="nav-left">
          <div class="nav-left" @click="back()"><a  class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        </div>
        <div class="nav-head">昵称</div>
        <div class="nav-right nav-channel line-height-1_5"></div>
      </nav>
    </header>
    <!--header-->
    <!---content-->
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="panel-body ">
          <div class="form-items">
            <label for="nickname" class="label-control padding-right-1rem">昵称</label>
            <input type="text" id="nickname" value="" placeholder="请设置你的昵称" maxlength="20" class="from-control" v-model="form.nickName">
          </div>
          <div class="padding-1rem margin-left-1rem margin-right-1rem">
            <button class="btn btn-red btn-circle" @click="doNickname()">保存</button>
          </div>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import Loading from "../loading/loading.vue";
  export default{
    components: {Loading},
    data(){
      return{
        form:{
          nickName:'',
          showLoading:true
        }
      }
    },
    methods:{
      back(){
        this.$router.back();
      },
      doNickname(){
        const nickName=this.form.nickName;
        if(nickName==''){
          MessageBox('', '昵称不能为空');
        }else{
          this.$fetch.api_data.updateNickNameData({token:'',nickName:nickName}).then((res)=>{
            this.showLoading=false;
            this.$router.push({path:'/personInfo'})
          })
        }
      }
    }
  }
</script>
<style>
  .container-full{
    width:100%;
  }
</style>
