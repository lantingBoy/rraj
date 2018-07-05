<template>
  <div>
    <header class="header" style="border-bottom:1px solid #ccc">
      <nav class="n-nav">
        <div class="nav-left" @click="back">
          <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
        </div>
        <div class="nav-head1" style="justify-content: center;-webkit-justify-content: center">
          <div  style="line-height: 3rem;text-align: center;font-size:1rem;">{{msg.title}}</div>
        </div>
      </nav>
    </header>
    <div class="a-panel">
      <div class="title">{{msg.title}}</div>
      <div class="a-bar">
        <div>{{msg.source}}</div>
        <div>{{msg.createTime}}</div>
      </div>
      <div class="a-con">
        {{msg.content}}
      </div>
    </div>
  </div>
</template>
<script>
 export default{
    data(){
      return{
        msg:{}
      }
    },
   created(){
     let id=this.$route.params.id;
     this.$fetch.api_data.getNewsDetailData({id:id}).then((res)=>{
       this.msg=res.data.data;
     })
     /*activeDetail(id).then((res)=>{
       console.log(res);
       this.msg=res.data.data;
     })*/
   },
   methods:{
     back(){
       this.$router.back();
     }
   }
 }
</script>
<style lang="less" scoped>
  .a-panel{
    background: #fff;
    padding:4rem 5%;
    width:90%;
    font-weight:bold;
    margin:0 auto;
    .a-bar{
      font-size:.8rem;
      width:100%;
      margin-top:.8rem;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      font-weight: normal;
      color:#ccc
    }
  }
</style>
