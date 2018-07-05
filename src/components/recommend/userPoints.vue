<template>
  <div class="wrap">
    <header class="header" style="color:#333">
      <nav class="n-nav">
        <div class="nav-left" @click="back">
          <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
        </div>
        <div class="nav-head1" style="justify-content: center;-webkit-justify-content: center">
          <div  style="line-height: 3rem;text-align: center;font-size:1rem;">积分龙虎榜</div>
        </div>
      </nav>
    </header>
    <div class="container">
      <div class=""  style="margin-top:3rem;">
        <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/rankingList09/tl12_02.png" width="100%">
        <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/rankingList09/tl9_03.png" width="100%">
      </div>
      <div class="block">
        <div class="table-container-all avatar">
          <div class="list-top" >
            <div class="l-top-cell" v-for="(item,index) in topRank" :class="index==1?'l-top':''">
              <div class="top-cell-cont">
                <img :src="item.avatar" class="top-avatar">
                <div class="top-call">
                  <img  :src="'http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/rankingList09/tl9_list_0'+(index+1)+'.png'" class="rank-num">{{item.nickName}}</div>
                <div>
                  <span class="circle-pop">积分:{{item.point}}</span>
                </div>
                <div class="top-name">
                  <span>null</span>
                </div>
                <div class="top-price">(价值NaN元)</div>
              </div>
            </div>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" class="list-common">
            <tr v-for="(item,index) in rank">
              <td width="15%">{{index+4}}</td>
              <td width="15%">
                <img :src="item.avatar" class="avatar">
              </td>
              <td width="30%">
                <div class="text-left">{{item.nickName}}</div>
                <div class="text-left text-red">积分:{{item.point}}</div>
              </td>
              <td width="40%">
                <div class="text-black">null</div>
                <div class="">(价值NaN元)</div>
              </td>
            </tr>
          </table>
        </div>
        <div class="info-tips">
          * 理财积分统计您的当月新增投资，次月清零。
          <a href="javascript:;" class="btn-history" @click="getMore">历史排行》</a> </div>
      </div>
      <div class=" block-footer">
        <p class="text-center"><br>客服热线：400-667-0571</p>
        <p class="text-center">本活动最终解释权归人人爱家金融所有<br><br></p>
        <p class="text-center copyright">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/comm/poster_logo.png" width="25%">
        </p>
      </div>
      <div class="qa" ui-data="open-dialog" @click="open">
        赚取积分规则
        <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/rankingList09/tp9_question.png" width="100%">
      </div>
      <div class="block-bottom">
        <div class="block-bottom-txt">当前您的积分:<span class="text-red data-point">{{obj.point}}</span>分(金额越大，周期越长，积分越多)</div>
        <a href="javascript:;" class="btn btn-red btn-wide" @click="getMore">赚取更多积分</a>
      </div>
    </div>
    <div class="dialog " style="display: block;" :class="show?'dialog-show':''">
      <div class="dialog-panel">
        <div class="dialog-panel-header" ui-data="close-dialog">
          <span class="dialog-close">×</span>
          <h2 class="text-center dialog-h2" @click="shut"><span>赚取积分规则</span></h2>
        </div>
        <div class="dialog-panel-content">
          <p><span class="info-pop"><span class="index">1</span> 积分获取方式</span></p>
          <p>投资任意一笔稳赚计划即可获得相应积分；</p>
          <p><span class="info-pop"><span class="index">2</span> 积分计算方式</span></p>
          <p>理财积分=(投资金额×项目周期÷1000)×积分加速系数</p>
          <p>相同金额投资稳赚半年获得的积分是投资稳赚一月的6倍</p>
          <div class="example">
            举个例子：<br>
            v3用户投资10000元30天产品，可获得330积分<br>
            v3投资10000元180天产品，可获得1980积分<br>
          </div>
          <p><span class="info-pop"><span class="index">3</span> 如何获得更多积分</span></p>
          <p>理财金额越多，周期越长，等级越高，获得积分就越多；</p>
          <p><span class="info-pop"><span class="index">4</span> 积分说明</span></p>
          <p>本活动按自然月进行，理财积分只统计当月新增投资金额次月清零。</p>
          <p class="remark">注：如遇理财积分分值相同时则按投资时间先后排序。</p>
        </div>
      </div>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>

  import {MessageBox} from 'mint-ui'
  import Loading from '../loading/loading.vue'
  export default{
    components:{
      Loading
    },
    data(){
      return{
        topRank:[],
        rank:[],
        obj:{},
        show:false,
        showLoading:true
      }
    },
    created(){
      let date=new Date();
      let year=date.getFullYear(); //获取当前年份
      let mon=date.getMonth()+1; //获取当前月份
      let time=''+year+mon;
      setTimeout(()=>{
        /*rank(token,time,oTime).then((res)=>{
          if(res.data.resCode===1){
            this.showLoading=false;
            this.obj=res.data.data;
            this.topRank=res.data.data.rankingList.slice(0,3);
            this.rank=res.data.data.rankingList.slice(3);
            let c= this.topRank[1];
            this.topRank[1]= this.topRank[0];
            this.topRank[0]=c;
          }
        })*/
        this.$fetch.api_data.getRankData({token:'',date:time}).then((res)=>{
          this.showLoading=false;
          this.obj=res.data.data;
          this.topRank=res.data.data.rankingList.slice(0,3);
          this.rank=res.data.data.rankingList.slice(3);
          let c= this.topRank[1];
          this.topRank[1]= this.topRank[0];
          this.topRank[0]=c;
        })
      },300)
    }
    ,methods:{
        back(){
          this.$router.back()
        },
      open(){
        this.show=true
      },
      shut(){
        this.show=false
      },getMore(){
        MessageBox.confirm('请下载APP查看').then(action => {
          if(action==='confirm'){
            window.open('http://android.myapp.com/myapp/detail.htm?apkName=cn.com.aijialicai&ADTAG=mobile')
          }
        }).catch(err=>{
          if(err==='cancel'){
          }
        })
      }
    }
  }
</script>
<style scoped>
  .wrap{ background-color: #f75f45;color: white; font-size: 16px;line-height: 1.5; padding-bottom: 7em}
  .text-center{text-align: center;font-size:12px;}
  .text-red{color: #ff4040;}
  .text-black{color: #333}
  .block p{ margin-top: .25em}
  .header{}
  .header img{ display: block}
  .header-txt{ padding: 1em; text-align: center;font-size:20px;color: #ff135f;background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/page/love520/love_03.png') center top no-repeat; background-size:contain}
  .container{width: 100%; overflow: hidden}
  .container table{}
  .container td,
  .container th{text-align: center; white-space: nowrap;word-break: keep-all;background-color: #fff; border-bottom: 1px solid #d8d8d8; padding: .45em 0 }
  .container th{font-weight: normal; background-color: #f5f5f5;}
  .block{margin-top: 6em}
  .margin-top-2em{ margin-top:2em}
  .items .cell:last-child h3{ padding-top:.5em; font-size: 16px;font-weight:normal;color: #36ac94}
  .text-left{text-align: left}

  .info{ text-align: center}
  .info-pop{ border-radius: 999px; font-size: 16px; padding:.125em .5em; background-color: white;color: #f75f45;  white-space: nowrap; word-break: keep-all;}
  .info-tips{color: white;padding: .5em 5% 0;text-align: right;font-size: 12px}

  .table-container-all{ background-color: white;color:#666; border-radius: .5em;margin: 0 3%;  padding-bottom: 1em; box-shadow: 2px -2px  0 rgba(0,0,0,.2); }
  .table-container-all table{overflow: hidden; font-size: 14px;border-top:1px solid #eeeeee}
  .table-container-all table td{border-bottom-color:#eeeeee;color:#666}
  .table-container-all table tr:last-child td{border-bottom-width:0;}
  .table-container-all.avatar table tr td:first-child{ color:#999; font-size: 28px}
  .table-container-all.avatar table tr td:nth-child(2){text-align: left}
  .table-container-all.avatar table tr td:nth-child(3){}
  .table-container-all.avatar table tr td:nth-child(4){ text-align: right;line-height: 1.25em}
  .table-container-all.avatar table tr td div:last-child{font-size: 12px;}
  .table-container-all.avatar table tr td div{line-height: 1.25em}
  .table-container-all.avatar table tr td:nth-child(4) div{ padding-right:5%;width: 95%;overflow: hidden; text-overflow: ellipsis;}
  .table-container-all.top table{ border-color: white;border-left-width: 0; border-bottom-width: 0;}
  .table-container-all.top table td{ border-color: white;border-left:1px solid white}
  .table-container-all table th{border-bottom: 0;background-color: #ffeda4;color:#e49634; font-size: 16px}
  .table-container-all table td.tit{ background-color: #f5f5f5;border-bottom: 1px solid #36ac94}
  .table-container-all.avatar table tr th:nth-child(2){text-align: left}
  .table-container-all.top table th{border-color: white;border-left:1px solid white}

  img.avatar{ height: 36px; width: 36px; border-radius: 999px; border: 2px solid white; vertical-align: middle}
  img.rank-num{ width: 20px;vertical-align: middle }

  @media (max-width: 320px) {
    img.avatar{width: 26px;height: 26px}
    .table-container-all.avatar table tr td div:first-child{font-size: 10px;}
    .table-container-all.avatar table tr td div:last-child{font-size: 10px;}
    .table-container-all table th{font-size: 14px}
    .table-container-all table td{font-size: 12px}
  }

  .block-d{}
  h3.tit{text-align: center;font-weight: normal}

  .block-d h4{font-weight: normal}
  .block-d p{ font-size: 14px; padding-left: 2em; padding-right:2em}
  .copyright{ background-color: #c33f29; margin-left: -1em; margin-right:-1em; padding:.5em 0 }

  .block-bottom{position: fixed;bottom: 0;left: 0;width: 100%; background-color: #fff;border-top: 1px solid #d5d5d5;z-index: 5}
  .block-bottom-txt{color: #333; font-size: 14px; text-align: center; padding-top: .5em}
  .btn{ display: block; width: 80%; margin: .5em auto;background-color: #ff688f;color: #fff;padding: .5em; color: #fff;font-size: 18px;border-radius: 999px;;text-decoration: none; text-align: center}
  .btn.disable{ background-color: #ccc}
  .btn.btn-red{background-color: #f75f45; width: 50%; border-bottom: 2px solid #da1818}
  .btn.btn-wide{ width: 80%}
  .text-integral{font-size: 48px;color: #ff4040; line-height: 1.25}

  .panel{border:2px solid #f7d03f; margin: 1em;text-align: center;border-radius: .5em; padding: 1em 0;font-size: 16px; background-color: #fefad7}
  .timer{color: #ff4040;font-size: 20px; margin-top: .5em}

  .dialog-show{transform:translateY(0);-webkit-transform:translateY(0)}
  .dialog{ position: fixed; left: 0; bottom:0; width: 100%; height: 100%;  z-index: 15; color: #664004;background-color:rgba(0,0,0,.8); }
  .dialog-panel{ position: absolute; z-index: 17;left: 3%; width: 94%; top: 15%; background-color: #f75f45; border-radius: .5em}
  .dialog-panel-header{position: relative;}
  .dialog-panel-header:after{content: ''; display: block;height: 0;width: 0; clear: both}
  .dialog-h2{ color: white; text-align: center; font-size: 18px;  padding-top: .75em;position: relative}
  .dialog-h2 span{ background-color: #f75f45; position: relative;z-index: 3; padding: 0 .5em}
  .dialog-h2:before{content: '';display: block;width: 60%; left: 20%;border-top: 1px solid white; position: absolute; top: 1.5em;z-index: 2}
  .dialog-panel-content{width: 94%; padding:3%;z-index: 2;color: white;font-size: 14px}
  .dialog-panel-content p{ padding-top: .5em;line-height: 1.25em}
  .dialog-panel-content p .index{ background-color:#f75f45;color: white; border-radius: 999px; display: inline-block; width: 18px;height:18px; text-align: center}
  @media (max-width: 340px) {
    .dialog-panel{ top: 2%}
  }
  .dialog-close{ position:absolute; right:1em; top:.5em;width:24px; height: 24px; border-radius: 999px;border: 2px solid white;display: block;color: white; text-align: center; line-height: 24px;font-size: 24px; float: right;}
  .example{ margin: .5em 1em; padding:.5em;border: 1px dashed white}
  .remark{font-size: 12px;}
  .block-normal{padding:2em 5% 5% 1em; background-color: #ffdb49; margin-top: 1em;color:#6a560b; }
  h3.tit{text-align: center;font-weight: normal;color:#6a560b; padding-bottom: .5em; position: relative}
  h3.tit:before{
    content: ''; display:inline-block;height:1px; width:80%; border-radius: 999px;background-color: #6a560b; vertical-align: middle; position: absolute;left: 10%; top: .825em; z-index: 0;
  }
  h3.tit.tit-white:before{background-color: white}
  h3.tit:after{ margin-left: .5em}
  .block-normal p{ margin-top: 1em;line-height: 1.25em; position: relative;padding-left: 1.5em}
  .block-normal p .index{width: 1em; height: 1em; border-radius: 999px; display: inline-block; background-color:#6a560b;color: white; vertical-align: middle;position: absolute;left:0; top:.125em; text-align: center; line-height: 1em }
  .block.block-footer{ font-size: 12px;}
  .list-top:after{content: ''; display: block;height: 0;width: 0; overflow: hidden; clear: both}
  .l-top-cell{width: 33%; float: left; text-align: center; padding: 1em 0;border-radius: .5em; background-color: white;position: relative;z-index: 2}
  .l-top-cell.l-top{margin-top: -2em; z-index: 3;}
  .l-top-cell.l-top:before{content: '';display: block; position: absolute; left: 0; top: 2.1em;height: 5em;width: 0;  box-shadow: 0px 4px 0 4px #eee; transform: rotate(-5deg);z-index: 3}
  .l-top-cell.l-top:after{content: '';display: block; position: absolute; right:0; top: 2.1em;height: 5em;width: 0;  box-shadow: 0px 4px 0 4px #eee; transform: rotate(5deg);z-index: 3}
  .l-top-cell.l-top .top-cell-cont{ position: relative; z-index: 4; background-color: white}
  .l-top-cell.l-top .top-cell-cont:after{ content:'';display: block;height: 48px;width: 50%;background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/pageV2/rankingList09/tp9_list_crown.png') left center no-repeat; background-size: 100% 100%;position: absolute; left: 25%; top:-.5em;}
  .top-avatar{ border-radius: 999px; height: 68px;width: 68px;}
  .l-top-cell.l-top .top-avatar{ height: 76px;width: 76px; margin-top: 1.5em}
  .top-price{ font-size: 12px; white-space: nowrap;word-break: keep-all; line-height: 1.25em }
  .top-name{color: #333333;line-height: 1;padding: .25em 0;font-size: 13px; white-space: nowrap;word-break: keep-all}
  .top-call{font-size: 16px;}
  .circle-pop{border: 1px  solid #ff4040; border-radius: 999px;color: #ff4040; padding:.125em .5em;font-size: 12px; white-space: nowrap;word-break: keep-all}
  @media (max-width: 340px) {
    .top-call{font-size: 12px;}
    .top-name{font-size: 10px}
    .top-price{font-size: 10px;}
    .circle-pop{font-size: 10px;}
    .top-avatar{  height: 48px;width: 48px;}
    .l-top-cell.l-top .top-avatar{ height: 54px;width: 54px;}
  }
  .qa{position: fixed;top: 6em; right: 0; width: 1em; word-break: break-all;border: 2px solid white; border-right: 0;border-radius: .5em 0 0 .5em;  padding: .125em .5em ;font-size: 14px; line-height: 1em;z-index: 5;background-color: #f75f45 }
  .btn-history{color:#0066cc;}

</style>
