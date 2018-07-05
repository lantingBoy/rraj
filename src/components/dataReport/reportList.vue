<template>
  <div class="r-panel">
    <header id="headerNormal" class="header" >
      <nav class="nav">
        <router-link to="/recommend">
          <div class="nav-left">
              <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
          </div>
        </router-link>
        <div class="nav-head">运营月报</div>
      </nav>
    </header>
    <div class="r-content">
      <img src="https://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/APP/dataReport/dr.png" width="100%">
      <div class="r-2017">
        <h2>2017</h2>
        <ul class="report-list">
          <li v-for="item in list" @click="go">人人爱家{{item.year}}年{{item.month}}月运营报告</li>
        </ul>
      </div>
    </div>
    <loading v-show="show"></loading>
  </div>
</template>
<script>
  import {des,passToken} from '../../commonjs/commonjs'
  import loading from '../loading/loading.vue'
  export default{
    components:{
      loading
    },
    data(){
      return{
        show:true,
        list:[{year:2017,month:10},{year:2017,month:9},{year:2017,month:8},{year:2017,month:7},{year:2017,month:6},{year:2017,month:5}]
      }
    },
    created(){
      setTimeout(()=>{
        this.show=false
      },300)
    },
    methods:{
      go(){
        this.$router.push({path:'/reportDetail'})
      }
    }
  }
</script>
<style lang="less" scoped>
  .r-panel{
    width:100%;
    height:100%;
    padding-top:3rem;
    .r-2017{
      h2{
        font-weight: bold;
        margin-bottom:.8rem;
      }
      padding:4% 6%;
      .report-list{
        width:100%;
        li{
          display: block;
          padding:.8rem 1rem;
          background:rgb(221,221,221);
          margin:.5rem 0;
          color: #333333;
          font-size:.8rem;
        }
      }
    }
  }
</style>
