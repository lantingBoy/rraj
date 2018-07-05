<template>
  <div class="t-panel">
    <header class="header" >
      <nav class="n-nav">
        <div class="nav-left" @click="back">
          <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
        </div>
        <div class="nav-head1" style="justify-content: center;-webkit-justify-content: center">
            <div  style="line-height: 3rem;text-align: center;font-size:1rem;">公告</div>
        </div>
      </nav>
    </header>
    <div class="tip-detail">
      <header>
        <div>{{detail.title}}</div>
        <div class="t-time">{{detail.startTime}}</div>
      </header>

      <div class="t-con">
        <p>亲爱的家人：</p>
        <p>&nbsp;&nbsp;{{detail.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return{
        detail:{}
      }
    },
    created(){
        let id=this.$route.params.id;
     /*   console.log(id);
      noticeDetail(id).then((res)=>{
        console.log(res);
        this.detail=res.data.data;
        console.log(this.detail)
      })*/
     this.$fetch.api_data.getNoticeDetailData({id:id}).then((res)=>{
         console.log(3);
       this.detail=res.data.data;
     })
    },
    methods:{
      back(){
        this.$router.back();
      }
    }
  }
</script>
<style lang="less" scoped>
  body{background: #fff}
  .t-panel{
    height:100%;
    background:#fff;
    .header{
      border-bottom:1px solid #ccc
    }
  }
  .tip-detail{
    background: #fff;
    padding-top:3rem;
    width:90%;
    margin:2rem auto;
    header{
      text-align: center;
      font-weight: bold;
      font-size:1.04rem;
      line-height:1.4;
      border-bottom:1px solid #ccc;
      padding-bottom:.5rem;;
    }
    .t-time{
      text-align: center;
      margin-top:1rem;
      font-size:.8rem;
      color: #999999;
      font-weight: normal;
    }
    .t-con{
      margin-top:1rem;
    }

  }
</style>
