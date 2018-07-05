<template>
  <div>
    <div class="ui-loading" id="loading" v-show="show">
      <div class="ui-loading-circle">
        请稍后,正在为您准备数据...
      </div>
    </div>
    <div class="pager cover">
      <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/cover_bg.jpg" width="100%" >
      <div class="tit tit-year" >人人爱家金融{{msg.year}}年</div>
      <div class="tit tit-name" >{{msg.month}}月运营报告</div>
      <div class="tit tit-name-sub">MONTHLY OPERATION REPORT</div>
      <div class="tit tit-date" >数据截止至：{{msg.year}}/{{msg.month}}/{{new Date(msg.year,msg.month,0).getDate()}} 24:00</div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      msg:''
    },
    data(){
      return{
        show:true,
      }
    },
    created(){
      setTimeout(()=>{
        this.show=false;
      },500)
    },
    mounted(){
      this.coverShow();
    },
    methods:{
      coverShow:function(){
        $('.tit').each(function(i,n){
          var $this=$(this);
          self.setTimeout(function(){
            $this.addClass('active');
          },200*i)
        });
      }
    }
  }
</script>
<style lang="less" scoped>
  .cover{background-color: #fc563c;position: relative;width:100%;height:100%;text-align: center}
  .cover .tit{ position: absolute; width: 100%; top: 20%; color: white; opacity: 0; transform: translate(1.5rem,0);-webkit-transform: translate(1.5rem,0); transition: all .75s;-webkit-transition: all .75s }
  .active{opacity: 1!important;transform: translate(0,0)!important;-webkit-transform: translate(0,0)!important;}
  .cover .tit.tit-year{ font-size: 1.25rem }
  .cover .tit.tit-name{ font-size: 2.6rem; top: 25% }
  .cover .tit.tit-name-sub{ font-size: .875rem;top: 36% }
  .cover .tit.tit-date{ font-size: .8rem;top: inherit; bottom: 20%; box-shadow: 0 0 0 1px white; width: 60%; left: 20%;padding:.2rem .1rem; }
  .ui-loading {  position: fixed;  top: 0;  left: 0;  z-index: 999;  width: 100%;  height: 100%;}
  .ui-loading-circle {  position: fixed;  width: 30%;  padding:2rem .5%;  left: 35%; color: #fff; text-align: center;  height: auto;  top: 35%;  background-color: rgba(0,0,0,.5);  border-radius: .75em; font-size:.875rem;line-height:1.5; }
  .ui-loading-circle img {  display: block;  width: 100%;  border-radius: .75em;}
</style>
