<template>
  <div data-pager-code="0" class="page-con">
    <header id="headerNormal" >
      <nav class="nav">
        <router-link to="/reportList">
          <div class="nav-left">
            <span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span>
          </div>
        </router-link>
        <div class="nav-head">运营月报</div>
      </nav>
    </header>
   <swiper :options="swiperOption" ref="mySwiper" class="swiper-container" :style="{height:inner+'px'}">
        <swiper-slide class="reportPage1">
          <report-page1 :msg="parentMsg"></report-page1>
        </swiper-slide>
        <swiper-slide class="reportPage2">
          <report-page2></report-page2>
        </swiper-slide>
        <swiper-slide class="reportPage3">
          <div class="pager pager02">
            <div class="panel">
              <div class="panel-head">
                <h1 class="tit-idx">02</h1>
                <div class="tit-dsp">
                  <h2>成长，从每一小步开始</h2>
                </div>
              </div>
              <div class="panel-body">
                <div class="box text-center">
                  <div class="sum-tit ">
                    <div class="tit">{{month}}月累计成交额(元)</div>
                    <div class="tit-sub">Turnover</div>
                  </div>
                  <div class="text-DINOT text-h2-max text-center padding-top-1rem padding-bottom-1rem count-scroll cumulative-turnover-month " :data-val="table_data.monthInvestMoney">
                    <span v-for="item in toThousands(table_data.monthInvestMoney)"  :class="parseInt(item)>=0?'num':'num-dot'">
                      <i v-if="item!='.'&&item!=','&&item!='-'">0123456789</i>
                      <i v-else>{{item}}</i>
                    </span>
                  </div>
                </div>
                <div class="chart">
                  <div class="chart-box" id="chart-tot-invest"></div>
                </div>
                <div class="chart-tips">
                  截止{{year}}年{{month}}月比截止{{month==1?year-1:year}}年{{month==1?12:month-1}}月累计成交额增加<span class="text-red text-h4">{{page2.monthInvestMoney}}亿元</span>,
                  增长<span class="text-red text-h4">13.81%</span>。
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="reportPage4">
          <div class="pager pager03">
            <div class="panel">
              <div class="panel-head">
                <h1 class="tit-idx">03</h1>
                <div class="tit-dsp">
                  <h2>世界很大，感激遇见你</h2>
                </div>
              </div>
              <div class="panel-body">
                <div class="box text-center">
                  <div class="sum-tit ">
                    <div class="tit">{{month}}月累计新增用户(人)</div>
                    <div class="tit-sub">Total Customers</div>
                  </div>
                  <div class="text-DINOT text-h2-max text-center padding-top-1rem padding-bottom-1rem count-scroll cumulative-user-month" :data-val="table_data.monthMember">
                    <span v-for="item in toThousands(table_data.monthMember)"  :class="parseInt(item)>=0?'num':'num-dot'">
                        <i v-if="parseInt(item)>=0">0123456789</i>
                        <i v-else>{{item}}</i>
                    </span>
                  </div>
                </div>
                <div class="chart">
                  <div class="chart-box" id="chart-tot-user"></div>
                </div>
                <div class="chart-tips">
                  截止{{year}}年{{month}}月比截止{{month==1?year-1:year}}年{{month==1?12:month-1}}月累计注册用户增加
                  <span class="text-orange text-h4">{{table_data.monthMember}}人</span>，
                  增长<span class="text-orange text-h4">4.29%</span>。
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="reportPage5">
          <div class="pager pager04">
            <div class="panel">
              <div class="panel-head">
                <h1 class="tit-idx">04</h1>
                <div class="tit-dsp">
                  <h2>你们是谁</h2>
                </div>
              </div>
              <div class="panel-body">
                <div class="chart-box" id="chart-age"></div>
                <div class="chart-box" id="chart-sex"></div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pager pager05">
            <div class="panel" v-if="table_data.categoryByProvince">
              <div class="panel-head">
                <h1 class="tit-idx">05</h1>
                <div class="tit-dsp">
                  <h2>你们来自哪里</h2>
                </div>
              </div>
              <div class="panel-body list-head">
                <div class="chart-box" id="chart-area"></div>
                <div class="list-head">投资占比省份TOP5</div>
                <div class="list list-rank ">
                  <div class="list-cell">
                   1
                  </div>
                  <div class="list-cell">{{province['p'+table_data.categoryByProvince[0].type]}}</div>
                  <div class="list-cell">{{table_data.categoryByProvince[0].value}}%</div>
                  <div class="list-cell"> 人均投资：{{fixed2(table_data.categoryByProvince[0].averageInvest)}}元</div>
                </div>
                <div class="list list-rank ">
                  <div class="list-cell">
                    2
                  </div>
                  <div class="list-cell">{{province['p'+table_data.categoryByProvince[1].type]}}</div>
                  <div class="list-cell">{{table_data.categoryByProvince[1].value}}%</div>
                  <div class="list-cell"> 人均投资：{{fixed2(table_data.categoryByProvince[1].averageInvest)}}元</div>
                </div>
                <div class="list list-rank">
                  <div class="list-cell">
                    3
                  </div>
                  <div class="list-cell">{{province['p'+table_data.categoryByProvince[2].type]}}</div>
                  <div class="list-cell">{{table_data.categoryByProvince[2].value}}%</div>
                  <div class="list-cell"> 人均投资：{{fixed2(table_data.categoryByProvince[2].averageInvest)}}元</div>
                </div>
                <div class="list list-rank">
                  <div class="list-cell">4</div>
                  <div class="list-cell">{{province['p'+table_data.categoryByProvince[3].type]}}</div>
                  <div class="list-cell">{{table_data.categoryByProvince[3].value}}%</div>
                  <div class="list-cell"> 人均投资：{{fixed2(table_data.categoryByProvince[3].averageInvest)}}元</div>
                </div>
                <div class="list list-rank">
                  <div class="list-cell">5</div>
                  <div class="list-cell">{{province['p'+table_data.categoryByProvince[4].type]}}</div>
                  <div class="list-cell">{{table_data.categoryByProvince[4].value}}%</div>
                  <div class="list-cell"> 人均投资：{{fixed2(table_data.categoryByProvince[4].averageInvest)}}元</div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="reportPage6">
         <div class="pager pager06">
            <div class="panel"  v-if="table_data.categoryByMaxONE">
              <div class="panel-head">
                <h1 class="tit-idx">06</h1>
                <div class="tit-dsp">
                  <h2>{{month}}月之最盘点</h2>
                </div>
              </div>
              <div class="panel-body padding-top-2rem">
                <div class="box-info">
                  <div>{{table_data.categoryByMaxONE.name}}</div>
                  <div>{{table_data.categoryByMaxONE.mobile}}</div>
                  <div>累计投资总额(元)：{{table_data.categoryByMaxONE.maxValue}}</div>
                </div>

                <div class="box-info hot">
                  <div>{{table_data.categoryByMaxTWO.name}}</div>
                  <div>{{table_data.categoryByMaxTWO.mobile}}</div>
                  <div>累计投标数(次)：{{table_data.categoryByMaxTWO.maxValue}}</div>
                </div>

                <div class="box-info popular">
                  <div>{{table_data.categoryByMaxTHREE.name}}</div>
                  <div>{{table_data.categoryByMaxTHREE.mobile}} </div>
                  <div>邀请人数(位)：{{table_data.categoryByMaxTHREE.maxValue}}</div>
                </div>

                <div class="box-info gold">
                  <div>{{table_data.categoryByMaxFOUR.name}}</div>
                  <div>{{table_data.categoryByMaxFOUR.mobile}}</div>
                  <div>平均每天收益(元)：{{table_data.categoryByMaxFOUR.maxValue}}</div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
       <swiper-slide class="reportPage7">
         <div class="pager pager07" >
           <div class="panel" v-if="table_data.rankingList">
             <div class="panel-head">
               <h1 class="tit-idx">07</h1>
               <div class="tit-dsp">
                 <h2>{{month}}月积分榜单</h2>
               </div>
             </div>
             <div class="panel-body font-lighter" v-if="table_data.rankingList">
               <div class="list-head padding-top-1rem">{{month}}月积分榜单TOP10</div>
               <div class="list-top ">
                 <div class="list-top-cell">
                   <div class="t-box">
                     <div class="index-img">
                       <svg class="icon icon-svg text-h2" aria-hidden="true">
                         <use xlink:href="#icon-dr-medal-"></use>
                       </svg>
                     </div>
                     <div class="index">NO.1</div>
                     <div class="name">{{table_data.rankingList[0].nickName}}</div>
                     <div class="integral">{{table_data.rankingList[0].point}}
                     </div>
                     <div class="gift">iphone8 plus
                     </div>
                   </div>
                 </div>
                 <div class="list-top-cell">
                   <div class="t-box">
                     <div class="index-img">
                       <svg class="icon icon-svg text-h2" aria-hidden="true">
                         <use xlink:href="#icon-dr-medal-2"></use>
                       </svg>

                     </div>
                     <div class="index">NO.2</div>
                     <div class="name">{{table_data.rankingList[1].nickName}}
                     </div>
                     <div class="integral">{{table_data.rankingList[1].point}}
                     </div>
                     <div class="gift">索尼家庭影院</div>
                   </div>
                 </div>
                 <div class="list-top-cell">
                   <div class="t-box">
                     <div class="index-img">
                       <svg class="icon icon-svg text-h2" aria-hidden="true">
                         <use xlink:href="#icon-dr-medal-1"></use>
                       </svg>
                     </div>
                     <div class="index">NO.3</div>
                     <div class="name">{{table_data.rankingList[2].nickName}}
                     </div>
                     <div class="integral">{{table_data.rankingList[2].point}}
                     </div>
                     <div class="gift">联想笔记本</div>
                   </div>
                 </div>
               </div>
               <div class="list list-rank list-tit">
                 <div class="list-cell">排名</div>
                 <div class="list-cell">用户</div>
                 <div class="list-cell">积分</div>
                 <div class="list-cell">奖励</div>
               </div>
               <div class="list list-rank">
                 <div class="list-cell">4</div>
                 <div class="list-cell">{{table_data.rankingList[3].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[3].point}}
                 </div>
                 <div class="list-cell">尼康单反相机
                 </div>
               </div>
               <div class="list list-rank">
                 <div class="list-cell">5</div>
                 <div class="list-cell">{{table_data.rankingList[4].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[4].point}}
                 </div>
                 <div class="list-cell">小米电视
                 </div>
               </div>
               <div class="list list-rank">
                 <div class="list-cell">6</div>
                 <div class="list-cell">{{table_data.rankingList[5].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[5].point}}

                 </div>
                 <div class="list-cell">小米扫地机器人
                 </div>
               </div>
               <div class="list list-rank">
                 <div class="list-cell">7</div>
                 <div class="list-cell">{{table_data.rankingList[6].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[6].point}}
                 </div>
                 <div class="list-cell">雀巢咖啡机
                 </div>
               </div>
               <div class="list list-rank" v-if="table_data.rankingList[7]">
                 <div class="list-cell">8</div>
                 <div class="list-cell">{{table_data.rankingList[7].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[7].point}}
                 </div>
                 <div class="list-cell">kindle阅读器
                 </div>
               </div>
               <div class="list list-rank" v-if="table_data.rankingList[8]">
                 <div class="list-cell">9</div>
                 <div class="list-cell">{{table_data.rankingList[8].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[8].point}}
                 </div>
                 <div class="list-cell">哈曼卡顿音响
                 </div>
               </div>
               <div class="list list-rank" v-if="table_data.rankingList[9]">
                 <div class="list-cell">10</div>
                 <div class="list-cell">{{table_data.rankingList[9].nickName}}
                 </div>
                 <div class="list-cell">{{table_data.rankingList[9].point}}
                 </div>
                 <div class="list-cell">800元京东卡
                 </div>
               </div>
             </div>
           </div>
         </div>
       </swiper-slide>
        <swiper-slide class="reportPage8">
          <div class="pager pager08">
            <div class="panel" v-if="table_data.categoryByMaxSaleFastProject">
              <div class="panel-head">
                <h1 class="tit-idx">08</h1>
                <div class="tit-dsp">
                  <h2>猜你喜欢</h2>
                </div>
              </div>
              <div class="panel-body">
                <div class="chart-box" id="chart-product"></div>

                <div class="list-head padding-top-1rem">{{month}}月理财产品NO.1</div>
                <div class="list">
                  <div class="list-box padding-top-1rem">
                    <div class="pop pop-orange">
                      <div class="crown"><i class="icon iconfont icon-dr-popularity"></i></div>
                      用时<br>
                      {{parseInt(table_data.categoryByMaxSaleFastProject.time/60)}}分<span v-if="table_data.categoryByMaxSaleFastProject.time%60">{{table_data.categoryByMaxSaleFastProject.time%60}}秒</span>
                    </div>
                    <div class="text-center padding-top-1rem text-h4">{{month}}月秒杀产品NO.1</div>
                    <div class="text-center text-gray text-h5 padding-top-1rem">{{table_data.categoryByMaxSaleFastProject.name}}，用时{{parseInt(table_data.categoryByMaxSaleFastProject.time/60)}}分<span v-if="table_data.categoryByMaxSaleFastProject.time%60">{{table_data.categoryByMaxSaleFastProject.time%60}}秒</span></div>
                  </div>

                  <div class="list-box padding-top-1rem">
                    <div class="pop pop-orange">
                      <div class="crown"><i class="icon iconfont icon-dr-popularity"></i> </div>
                      售出<br>
                      {{table_data.categoryByMaxCountSaleProject.count}}个
                    </div>
                    <div class="text-center padding-top-1rem text-h4">{{month}}月畅销产品NO.1</div>
                    <div class="text-center text-h5 text-gray padding-top-1rem">{{table_data.categoryByMaxCountSaleProject.name}}，{{table_data.categoryByMaxCountSaleProject.count}}个</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
     <swiper-slide class="reportPage9">
       <div class="pager pager09">
         <div class="panel" >
           <div class="panel-head">
             <h1 class="tit-idx">09</h1>
             <div class="tit-dsp">
               <h2>定格精彩瞬间</h2>
             </div>
           </div>
           <div class="panel-body">
             <div class="info-items"> {{month}}月共计发放红包：<span class="text-orange">{{toThousands(table_data.couponCount)}}</span>个</div>
             <div class="info-items"> {{month}}月共计发放体验金：<span class="text-orange">{{toThousands(table_data.experienceTicket)}}.00  </span>元</div>
             <div class="info-items"> {{month}}月共计积分兑换奖品：<span class="text-orange">{{toThousands(table_data.pointsExchangeCount)}}</span>份</div>
             <div class="slider-box">
               <div class="slider">
                 <div data-v-1f65349c="" class="slider-items"><img data-v-1f65349c="" src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/page/dataReport/activityList_banner_01.png" width="100%"> <div data-v-1f65349c="" class="slider-info text-h5"><h4 data-v-1f65349c="" class="text-h3-min text-orange">庆生壕礼</h4> <div data-v-1f65349c="" class="text-h4 font-lighter">活动时间：2017/11/1-2017/11/11</div> <div data-v-1f65349c="" class="padding-top-1rem text-gray font-lighter">参与人数：27606人</div> <div data-v-1f65349c="" class=" text-gray font-lighter">总计投资额：494640270元</div></div></div>
                 <div v-for="(item,index) in table_data.activityList" class="slider-items">
                   <img :src="item.img" width="100%">
                   <div class="slider-info text-h5">
                     <h4 class="text-h3-min text-orange">{{item.activityName}}</h4>
                     <div class="text-h4 font-lighter">活动时间：{{item.time}}</div>
                     <div class="padding-top-1rem text-gray font-lighter ">参与人数：{{item.memberCount}}人</div>
                     <div class=" text-gray font-lighter margin-top-_5rem">{{item.productValue}}</div>
                   </div>
                 </div>
                 <div data-v-1f65349c="" class="slider-items"><img data-v-1f65349c="" src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/page/dataReport/activityList_banner_01.png" width="100%"> <div data-v-1f65349c="" class="slider-info text-h5"><h4 data-v-1f65349c="" class="text-h3-min text-orange">庆生壕礼</h4> <div data-v-1f65349c="" class="text-h4 font-lighter">活动时间：2017/11/1-2017/11/11</div> <div data-v-1f65349c="" class="padding-top-1rem text-gray font-lighter">参与人数：27606人</div> <div data-v-1f65349c="" class=" text-gray font-lighter">总计投资额：494640270元</div></div></div>
               </div>
               <ul class="slide-dot">
                 <li class="now"></li>
                 <li></li>
                 <li></li>
               </ul>
             </div>
            <!-- <div class="slider-box" >
               <mt-swipe  class="slider">
                 <mt-swipe-item v-for="(item,index) in table_data.activityList"  style="height:10rem;" >
                   <img :src="item.img" width="100%" >
                   <div class="slider-info text-h5" sty>
                     <h4 class="text-h3-min text-orange">{{item.activityName}}</h4>
                     <div class="text-h4 font-lighter">活动时间：{{item.time}}</div>
                     <div class="padding-top-1rem text-gray font-lighter">参与人数：{{item.memberCount}}人</div>
                     <div class=" text-gray font-lighter">{{item.productValue}}</div>
                   </div>
                 </mt-swipe-item>
               </mt-swipe>
             </div>-->

           </div>
         </div>
       </div>
     </swiper-slide>
     <swiper-slide class="reportPage10">
       <div class="pager pager10" >
         <div class="panel">
           <div class="panel-head">
             <h1 class="tit-idx">10</h1>
             <div class="tit-dsp">
               <h2>沟通，让我们关系更密切</h2>
             </div>
           </div>
           <div class="panel-body">
             <div class="list">
               <div class="list-box padding-top-2rem">
                 <div class="pop pop-orange">
                   <div class="crown"><i class="icon iconfont icon-dr-tel"></i> </div>
                   <span class="text-h6">客服接听家人来电</span><br>
                   <span class="text-h2 text-DINOT">{{table_data.memberCallCount}}</span>位
                 </div>
               </div>

               <div class="list-box padding-top-2rem">
                 <div class="pop pop-yellow">
                   <div class="crown"><i class="icon iconfont icon-dr-service"></i> </div>
                   <span class="text-h6">线上服务家人</span><br>
                   <span class="text-h2 text-DINOT">{{table_data.onlineMember}}</span>人
                 </div>
               </div>

               <div class="list-box padding-top-2rem">
                 <div class="pop pop-blue">
                   <div class="crown"><i class="icon iconfont icon-dr-count"></i> </div>
                   <span class="text-h6">解决问题数量</span><br>
                   <span class="text-h2 text-DINOT">{{table_data.resolveQuestCount}}</span>件
                 </div>
               </div>

               <div class="list-box padding-top-2rem">
                 <div class="pop pop-green">
                   <div class="crown"><i class="icon iconfont icon-dr-time"></i> </div>
                   <span class="text-h6">平均处理问题时间</span><br>
                   <span class="text-h2 text-DINOT">{{parseInt(table_data.resolveQuestTime/60)}}</span>分<span class="text-h2 text-DINOT">{{table_data.resolveQuestTime%60}}</span>秒
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </swiper-slide>
     <swiper-slide class="reportPage11">
       <div class="pager pager-cover">
         <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/cover_back.png" class="cover-sqr">
         <div class="text-center text-h5 app-link">美好生活从这里开始 <span class="icon iconfont icon-dr-right"></span> </div>
         <div class="text-center text-h5 copyright">&copy; 2015-2017 人人爱家金融</div>
       </div>
     </swiper-slide>
        <div class="next" slot="button-next"></div>
    </swiper>
    <div class="circle" style="width:100%;height:3rem;position:fixed;bottom:0;left:0;z-index:999;display:none;"></div>
  </div>
</template>
<script>
  import '../../../static/swiper.min.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import reportPage1 from './reportPage1.vue'
  import reportPage2 from './reportPage2.vue'
  import reportPage3 from './reportPage3.vue'
  export default{
      components:{
        reportPage1,
        reportPage2,
        reportPage3,
        swiper,
        swiperSlide,
      },
    data(){
      return{
        table_data:{
          "categoryByProvince":[
            {type:33 , name:"浙江 " ,averageInvest:78000.78405 ,value:13.39},
            {type:32 , name:"江苏 " ,averageInvest:57487.52148 ,value:9.81},
            {type:37 , name:"山东 " ,averageInvest:51387.45394 ,value:7.45},
            {type:44 , name:"广东 " ,averageInvest:55427.90509 ,value:5.83},
            {type:42 , name:"湖北 " ,averageInvest:48901.29185 ,value:5.61},
            {type:31 , name:"上海 " ,averageInvest:98810.92292 ,value:4.77},
            {type:51 , name:"四川 " ,averageInvest:43006.76766 ,value:4.65},
            {type:34 , name:"安徽 " ,averageInvest:43910.64207 ,value:4.34},
            {type:41 , name:"河南 " ,averageInvest:38388.79401 ,value:4.32},
            {type:13 , name:"河北 " ,averageInvest:49773.7932  ,value:4.32},
            {type:11 , name:"北京 " ,averageInvest:89675.33399 ,value:4.23},
            {type:36 , name:"江西 " ,averageInvest:45773.57707 ,value:3.59},
            {type:35 , name:"福建 " ,averageInvest:49903.3762  ,value:3.51},
            {type:43 , name:"湖南 " ,averageInvest:36547.39634 ,value:3.19},
            {type:61 , name:"陕西 " ,averageInvest:58000.69491 ,value:2.94},
            {type:23 , name:"黑龙江" ,averageInvest:57220.43376 ,value:2.62},
            {type:21 , name:"辽宁 " ,averageInvest:54951.54499 ,value:2.59},
            {type:14 , name:"山西 " ,averageInvest:41450.82658 ,value:2.41},
            {type:12 , name:"天津 " ,averageInvest:82838.82189 ,value:1.81},
            {type:65 , name:"新疆 " ,averageInvest:60484.63177 ,value:1.55},
            {type:22 , name:"吉林 " ,averageInvest:58560.95284 ,value:1.45},
            {type:45 , name:"广西 " ,averageInvest:32985.1182  ,value:1.14},
            {type:62 , name:"甘肃 " ,averageInvest:42812.23395 ,value:1.02},
            {type:15 , name:"内蒙古" ,averageInvest:47717.03262 ,value:0.89},
            {type:52 , name:"贵州 " ,averageInvest:41814.61809 ,value:0.68},
            {type:53 , name:"云南 " ,averageInvest:42436.43984 ,value:0.64},
            {type:50 , name:"重庆 " ,averageInvest:29942.07726 ,value:0.54},
            {type:63 , name:"青海 " ,averageInvest:67077.38264 ,value:0.37},
            {type:64 , name:"宁夏 " ,averageInvest:31067.54033 ,value:0.17},
            {type:46 , name:"海南 " ,averageInvest:38796.20877 ,value:0.15},
            {type:54 , name:"西藏 " ,averageInvest:33450.96429 ,value:0.01},
          ],
          "activityList": [
            {
              "img": "http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/page/dataReport/activityList_banner_01.png",
              "productValue": "总计投资额：494640270元",
              "memberCount": 27606,
              "activityName": "庆生壕礼",
              "time": "2017/11/1-2017/11/11"
            },
            {
              "img": "http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/page/dataReport/activityList_banner_02.png",
              "productValue": "共计发放奖品总价值：571664元",
              "memberCount": 12112,
              "activityName": "一起嗨皮",
              "time": "2017/11/12-2017/11/22"
            },
            {
              "img": "http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/page/dataReport/activityList_banner_03.png",
              "productValue": "共计发放红包总数量：3998个",
              "memberCount": 10386,
              "activityName": "超级红包",
              "time": "2017/11/23-2017/11/30"
            }
          ],
          "categoryByAge": [
            {
              "investMoney": 71004.18,
              "name": "50后",
              "percent": 6.19
            },
            {
              "investMoney": 66009.45,
              "name": "60后",
              "percent":14.67
            },
            {
              "investMoney": 61032.95,
              "name": "70后",
              "percent": 21.81
            },
            {
              "investMoney": 52697.52,
              "name": "80后",
              "percent": 34.70
            },
            {
              "investMoney": 33264.18,
              "name": "90后",
              "percent": 20.51
            }
          ],
          "categoryByMaxCountSaleProject": {
            "name": "稳赚一月",
            "count": 1052
          },
          "categoryByMaxFOUR": {
            "flag": 13,
            "maxValue": 4952.31,
            "name": "叶女士",
            "mobile": "137****1333"
          },
          "categoryByMaxONE": {
            "flag": 10,
            "maxValue": 4594200,
            "name": "叶女士",
            "mobile": "137****1333"
          },
          "categoryByMaxSaleFastProject": {
            "name": "稳赚一月M11554",
            "time": 180
          },
          "categoryByMaxTHREE": {
            "flag": 12,
            "maxValue": 15,
            "name": "白女士",
            "mobile": "139****6003"
          },
          "categoryByMaxTWO": {
            "flag": 11,
            "maxValue": 536,
            "name": "叶女士",
            "mobile": "137****1333"
          },
          "categoryByProduct": [
            {
              "name": "稳赚一月",
              "value": 79.63,
              "type": 2
            },
            {
              "name": "稳赚半年",
              "value": 4.74,
              "type": 5
            },
            {
              "name": "稳赚一年",
              "value": 4.04,
              "type": 8
            },
            {
              "name": "稳赚三月",
              "value": 7.90,
              "type": 4
            },
            {
              "name": "新手标",
              "value": 3.7,
              "type": 1
            }
          ],
          "categoryBySex": [
            {
              "investMoney": "56305.3",
              "name": "女性",
              "percent": "51.57%"
            },
            {
              "investMoney": "51015.54",
              "name": "男性",
              "percent": "48.43%"
            }
          ],
          "couponCount": 527867,//共计发送红包
          "dateTime": 1506787199000,
          "experienceTicket": 347059117,
          "memberCallCount": 9963,//客服接听来电
          "month": 11,
          "monthInvestMoney": 1639493351.19,
          "monthMember": 58902,
          "onlineMember": 8283,//线上服务家人
          "pointsExchangeCount": 30137,
          "rankingList": [
            {
              "avatar": "",
              "nickName": "叶*芳",
              "point": 565173
            },
            {
              "avatar": "",
              "nickName": "覃*莉",
              "point": 527078
            },
            {
              "avatar": "",
              "nickName": "袁*刚",
              "point": 479825
            },
            {
              "avatar": "",
              "nickName": "傅*娜",
              "point": 470507
            },
            {
              "avatar": "",
              "nickName": "林*伟",
              "point": 379172
            },
            {
              "avatar": "",
              "nickName": "包*英",
              "point": 359495
            },
            {
              "avatar": "",
              "nickName": "*威",
              "point": 346851
            },
            {
              "avatar": "",
              "nickName": "于*翰",
              "point": 330468
            },
            {
              "avatar": "",
              "nickName": "郭*雪",
              "point": 297751
            },
            {
              "avatar": "",
              "nickName": "郑*女",
              "point": 268436
            },
            {
              "avatar": "",
              "nickName": "曹*波",
              "point": 265030
            }
          ],
          "resolveQuestCount": 9126,//解决问题数量
          "resolveQuestTime": 90,//平均处理问题时间
          "totalIncome": 214215308.46,//累计用户赚取收益
          "totalInvestMoney": 13508854851.53,//累计成交金额
          "totalMember": 1432195 ,//累计注册用户
          "year": 2017
        } ,
        year:2017,
        month:11,
        activityList:[],//
        page2:{
          totalInvestMoney:11869361500.34,
          monthInvestMoney:"16.39"
        },
        province:{
          p33:'浙江省',
          p32:'江苏省',
          p37:'山东省',
          p44:'广东省',
          p42:'湖北省',
          p51:'四川省',
          p41:'河南省',
          p31:'上海市',
          p13:'河北省',
          p34:'安徽省',
          p11:'北京市',
          p43:'湖南省',
          p36:'江西省',
          p35:'福建省',
          p23:'黑龙江省',
          p61:'陕西省',
          p14:'山西省',
          p21:'辽宁省',
          p12:'天津市',
          p65:'新疆省',
          p22:'吉林省',
          p62:'甘肃省',
          p45:'广西省',
          p15:'内蒙古省',
          p53:'云南省',
          p52:'贵州省',
          p50:'重庆省',
          p63:'青海省',
          p64:'宁夏省',
          p46:'海南省',
          p54:'西藏省',
        },
        province1:{
          p33:'浙江',
          p32:'江苏',
          p37:'山东',
          p44:'广东',
          p42:'湖北',
          p51:'四川',
          p41:'河南',
          p31:'上海',
          p13:'河北',
          p34:'安徽',
          p11:'北京',
          p43:'湖南',
          p36:'江西',
          p35:'福建',
          p23:'黑龙江',
          p61:'陕西',
          p14:'山西',
          p21:'辽宁',
          p12:'天津',
          p65:'新疆',
          p22:'吉林',
          p62:'甘肃',
          p45:'广西',
          p15:'内蒙古',
          p53:'云南',
          p52:'贵州',
          p50:'重庆',
          p63:'青海',
          p64:'宁夏',
          p46:'海南',
          p54:'西藏',
        },
        swiperOption: {
          notNextTick: true,
          direction : 'vertical',
          speed:1000,
          height:window.innerHeight,
          paginationClickable :true,
          nextButton:'.next',
          navigation: {
            nextEl: '.next',
          },
          observeParents:true,
          on: {
            transitionStart: ()=>{
              const that=this;
              that.initPage(that.swiper.activeIndex);
              // 这里模拟一个按钮
              if(that.swiper.activeIndex==11){
                $('.circle').show();
                $('.circle').on('click',function () {
                  that.swiper.slideTo(0, 3000, false);
                })
              }
              if(that.swiper.activeIndex==0){
                $('.circle').hide();
              }
            },
          },
        },
        index:'',
        show:true,
        inner:window.innerHeight,
        reportData:{
        },
        parentMsg:{year:2017,month:'10'},
        page2_data:{
          "totalIncome": 214215308.46,//累计用户赚取收益
          "totalInvestMoney": 13508854851.53,//累计成交金额
        },
        startTouchX:0,
        endTouchX:0,
        distanceX:0,
        isMove:false,
        width:0,
        sliderIndex:1,
        sliders:{
          transitonEnd:function (dom,callback) {
            if(!dom|| typeof dom !='object'){  //如果dom没有或者不是一个对象的时候
              return false
            }
            dom.addEventListener('transitionEnd',function () {
              callback && callback()
            });
            dom.addEventListener('webkitTransitionEnd',function () { //兼容
              callback && callback()
            })
          },
        }
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    methods:{
      toThousands(num){
        var num = (num || 0).toString(), result = '';
        if(num.indexOf(".")>0){
          var numPoint = num.split(".")[1];
          num = num.split(".")[0];
        }
        while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        if (numPoint) {result = result + "." + numPoint; }
        return result;
      },
      fixed2(num){
        return parseFloat(num.toFixed(2))
      },
      initPage(i){
          console.log(i+'我是I');
        switch (i){
          case 0:
              this.nextInit();
            break;
          case 1:
            //this.totalInvestChart();
            this.scrollNum({elem:'.cumulative-turnover'});
            this.scrollNum({elem:'.cumulative-user'});
            this.scrollNum({elem:'.cumulative-profit'});
            break;
          case 2:
            this.scrollNum({elem:'.cumulative-turnover-month'});
            //总览
            this.totalInvestChart();
            break;
          case 3:
            //
            this.scrollNum({elem:'.cumulative-user-month'});
            //注册用户
            this.totalUserChart();
            break;
          case 4:
            //性别
            this.chartSex();
            //年龄
            this.chartAge();
            break;
          case 5:
            //地区
            this.chartArea();
            break;
          case 6:
            break;
          case 7:
            //
            this.modeShow();
            break;
          case 8:
            //产品
            this.chartProduct();
            break;
          case 9:
              this.slider();
            break;
          case 10:
            this.nextColorGray();
            break;
          case 11:
            this.nextColorWhite();
            break;
          default:
            break;
        }
  },
      scrollNum(param){
        var param   = param||{}
        var elem    = param.elem||'.cumulative-turnover';
        var val     = this.toThousands(parseFloat($(elem).attr('data-val')));//基数
        self.setTimeout(function(){
          for(var j=0;j<val.length;j++){
            $(elem).find('.num-dot').addClass('active');
            $(elem).find('span').eq(j).addClass('num-'+val[j]);
          }
        },1000)
      },
      totalInvestChart(){
        var _this = this;
        $('#chart-tot-invest').css({'width':$('body').width()+'px','height':($('body').width()-150)+'px'});
        var totalInvestChart = echarts.init(document.getElementById('chart-tot-invest'));
        //
        var year = this.year;
        var month = this.month;
        var prevYear = this.month == 1 ? this.year-1 : this.year;
        var prevMonth = this.month == 1 ? 12 : this.month - 1;
        console.log(Number(this.table_data.totalInvestMoney).toFixed(2));
        var option = {
          title:{
            text:'单位：亿元',
            textStyle:{
              color:'#333',
              fontWeight:'300',
              fontSize:16
            },
            left:'6%',
            top:'5%'
          },
          tooltip : {
            trigger: 'axis',
            alwaysShowContent:true,
            axisPointer:{
              type:'shadow'
            },
            backgroundColor:'rgba(255,255,255,.5)',
            textStyle:{
              color:'#666'
            },
            formatter:'{b}<br/>累计投资额:{c}亿元'

          },
          legend: {
            data:['投资额']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            show:false,
            left: '8%',
            right: '8%',
            bottom: '1%',
            top:'24%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['截止'+prevYear+'/'+prevMonth,'截止'+year+'/'+month],
              boundaryGap:['20%','20%'],
              axisLabel:{
                textStyle:{
                  color:'#666',
                  fontSize:12,
                  fontWeight:300
                }
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              splitLine:{
                show:false
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              min:0,
              max:150,
              axisLabel:{
                formatter:'{value}.00',
                textStyle:{
                  color:'#666',
                  fontSize:12,
                  fontWeight:300
                }
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:"#e1e1e1"
                }
              }

            }
          ],
          series : [
            {
              name:'投资总额',
              type:'bar',
              stack: '总计',
              barMinHeight:'5',
              barGap:'20%',
              barWidth:'35%',
              barMinHeight:8.5,
              areaStyle: {normal: {}},
              itemStyle:{
                normal:{
                  color:function(params){
                    var colorList = ['rgba(135,187,255,1)','rgba(135,187,255,1)','rgba(135,187,255,1)'];
                    return colorList[params.dataIndex];
                  },
                  borderColor:'#7682a1',
                  borderWidth:0
                }
              },
              label:{
                normal:{
                  show:'true',
                  position:'top',
                  formatter:'{c}亿',
                  textStyle:{
                    fontSize:14,
                    color:'#87bbff'
                  }
                }
              },
              data:[this.fixed2(11869361500.34/100000000),this.fixed2(_this.table_data.totalInvestMoney/100000000)],
              animationDelay:1000,
              yAxisIndex: 0
            }
          ]
        };
        totalInvestChart.setOption(option);
      },
      totalUserChart:function(){
        var _this = this;
        var year = this.year;
        var month = this.month;
        var prevYear = this.month == 1 ? this.year-1 : this.year;
        var prevMonth = this.month == 1 ? 12 : this.month - 1;
        $('#chart-tot-user').css({'width':$('body').width()+'px','height':($('body').width()-150)+'px'});
        var totalInvestChart = echarts.init(document.getElementById('chart-tot-user'));
        //
        var option = {
          title:{
            text:'单位：人',
            textStyle:{
              color:'#333',
              fontWeight:'300',
              fontSize:16
            },
            left:'6%',
            top:'5%'
          },
          tooltip : {
            trigger: 'axis',
            alwaysShowContent:true,
            axisPointer:{
              type:'shadow'
            },
            backgroundColor:'rgba(255,255,255,.5)',
            textStyle:{
              color:'#666'
            },
            formatter:'{b}<br/>累计注册用户数:{c}人'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            show:false,
            left: '8%',
            right: '8%',
            bottom: '1%',
            top:'24%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['截止'+prevYear+'/'+prevMonth,'截止'+year+'/'+month],
              boundaryGap:['20%','20%'],
              axisLabel:{
                textStyle:{
                  color:'#666',
                  fontSize:12,
                  fontWeight:300
                }
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              splitLine:{
                show:false
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              min:0,
              max:1500000,
              axisLabel:{
                formatter:'{value}',
                textStyle:{
                  color:'#666',
                  fontSize:12,
                  fontWeight:300
                }
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              splitLine:{
                show:true,
                lineStyle:{
                  color:"#e1e1e1"
                }
              }

            }
          ],
          series : [
            {
              name:'累计注册用户数',
              type:'bar',
              stack: '总计',
              barMinHeight:'5',
              barGap:'20%',
              barWidth:'35%',
              areaStyle: {normal: {}},
              itemStyle:{
                normal:{
                  color:function(params){
                    var colorList = ['rgba(135,187,255,1)','rgba(135,187,255,1)','rgba(135,187,255,1)'];
                    return colorList[params.dataIndex];
                  },
                  borderColor:'#7682a1',
                  borderWidth:0
                }
              },
              label:{
                normal:{
                  show:'true',
                  position:'top',
                  formatter:'{c}人',
                  textStyle:{
                    fontSize:14,
                    color:'#87bbff'
                  }
                }
              },
              data:[ 1373293, _this.table_data.totalMember],
              animationDelay:1000,
              yAxisIndex: 0
            }
          ]
        };
        //
        totalInvestChart.setOption(option);
      },
      chartSex:function(){
        var _this = this;
        $('#chart-sex').css({'width':$('body').width()+'px','height':($('body').width()-180)+'px'});
        var chartSex = echarts.init(document.getElementById('chart-sex'));
        //
        var option = {
          title : {
            text: _this.month+'月投资者男女比例',
            textStyle:{
              color:'#333',
              fontSize:'16',
              fontWeight:'300'
            },
            top:'20',
            x:'center'
          },
          tooltip : {
            show:false
          },
          legend: {
            x: 'center',
            y:'bottom',
            selectedMode:false,
            itemHeight:0,
            itemWidth:0,
            itemGap:60,
            formatter:function(name){
              if(name=='男性'){
                return '人均投资：' + _this.table_data.categoryBySex[1].investMoney + '元 '
              }else if(name=='女性'){
                return '人均投资：' + _this.table_data.categoryBySex[0].investMoney + '元 '
              }
            },
            data: [
              {icon:'rect', name:'男性'},
              {icon:'rect', name:'女性'}
            ],
            textStyle:{
              color:'#999',
            }
          },
          series : [
            {
              name: '投资用户性别占比',
              type: 'pie',
              radius : ['34%','40%'],
              center: ['25%', '57%'],
              avoidLabelOverlap:false,
              data:[
                {value:parseFloat(_this.table_data.categoryBySex[1].percent), name:'男性'},
                {
                  "name": "女性",
                  "value": parseFloat(_this.table_data.categoryBySex[0].percent),
                  "itemStyle": {
                    "normal": {
                      "label": {
                        "show": false
                      },
                      "labelLine": {
                        "show": false
                      },
                      "color": "#f0f0f0",
                      "borderColor": "#f0f0f0",
                      "borderWidth": 0
                    },
                    "emphasis": {
                      "color": "#f0f0f0",
                      "borderColor": "#f0f0f0",
                      "borderWidth": 0
                    }
                  }
                }
              ],
              label:{
                show:false,
                normal:{
                  show:true,
                  position:'center',
                  formatter:'{b}\n{c}%'
                },
                emphasis:{
                  show:true,
                  textStyle:{
                    color:'#4682fa'
                  },
                  position:'center'
                }

              },
              itemStyle: {
                normal:{
                  borderWidth:0,
                  color:function(params){
                    var colorList = ['#4682fa','#f0f0f0'];
                    return colorList[params.dataIndex];
                  }
                },
                emphasis: {
                  borderColor:'#fff'
                }
              },
              animationDelay:1000
            },
            {
              name: '投资用户性别占比',
              type: 'pie',
              radius : ['34%','40%'],
              center: ['75%', '57%'],
              avoidLabelOverlap:false,
              clockWise:false,
              data:[
                {
                  "name": "男性",
                  "value": parseFloat(_this.table_data.categoryBySex[0].percent),
                  "itemStyle": {
                    "normal": {
                      "label": {
                        "show": false
                      },
                      "labelLine": {
                        "show": false
                      },
                      "color": "#f0f0f0",
                      "borderColor": "#f0f0f0",
                      "borderWidth": 0
                    },
                    "emphasis": {
                      "color": "#f0f0f0",
                      "borderColor": "#f0f0f0",
                      "borderWidth": 0
                    }
                  }
                },
                {value:parseFloat(_this.table_data.categoryBySex[0].percent) , name:'女性'}
              ],
              label:{
                normal:{
                  show:true,
                  position:'center',
                  formatter:'{b}\n{c}%'
                },
                emphasis:{
                  show:true,
                  textStyle:{
                    color:'#fd7566'
                  },
                  position:'center'
                }
              },
              itemStyle: {
                normal:{
                  borderWidth:0,
                  color:function(params){
                    var colorList = ['#f0f0f0','#fd7566'];
                    return colorList[params.dataIndex];
                  }
                },
                emphasis: {
                  borderColor:'#fff'
                }
              },
              animationDelay:1000
            }


          ]
        };
        //
        chartSex.setOption(option);
      },
      chartAge:function(){
        var _this = this;
        $('#chart-age').css({'width':$('body').width()+'px','height':($('body').width()-90)+'px'});
        var chartAge = echarts.init(document.getElementById('chart-age'));
        //
        var option = {
          title:{
            top:0,
            text:_this.month+'月投资者年龄分布',
            textStyle:{
              color:'#333',
              fontSize:'16',
              fontWeight:'300'
            },
            itemGap:235,
            //subtext:'人均投资(元)',
            subtextStyle:{
              color:'#333',
              fontSize:13,
              fontWeight:'300'
            },
            z:100,
            x:'center',
            top:'10'
          },
          tooltip : {
            show:false,
            trigger: 'item',
            formatter: ' {a} <br> {b} '
          },
          legend: {
            orient:'horizontal',
            x: 'center',
            y:'bottom',
            itemHeight:10,
            itemWidth:10,

            data: [
              {icon:'rect',name:'50'},
              {icon:'rect',name:'60'},
              {icon:'rect',name:'70'},
              {icon:'rect',name:'80'},
              {icon:'rect',name:'90'}
            ],
            formatter:function(name){
              switch (name){
                case '50':
                  return name+'后人均投资：'+ _this.table_data.categoryByAge[0].investMoney +'元';
                  //return '人均投资36864.00元';
                  break;
                case '60':
                  return name+'后人均投资：'+ _this.table_data.categoryByAge[1].investMoney +'元 ';
                  //return '人均投资34362.51元';
                  break;
                case '70':
                  return name+'后人均投资：'+ _this.table_data.categoryByAge[2].investMoney +'元 ';
                  //return '人均投资33174.4元';
                  break;
                case '80':
                  return name+'后人均投资：'+ _this.table_data.categoryByAge[3].investMoney +'元 ';
                  //return '人均投资27794.45元';
                  break;
                case '90':
                  return name+'后人均投资：'+ _this.table_data.categoryByAge[4].investMoney +'元 ';
                  //return '人均投资12689.05元';
                  break;
                default:
                  return name+'后';
                  break;
              }
            },
            textStyle:{
              color:'#666',
              fontSize:10,
              fontWeight:'300'
            }
          },
          calculable : true,
          series : [
            {
              name: '投资用户年龄占比',
              type: 'pie',
              radius : ['30%','50%'],
              center: ['50%', '45%'],
              data:[
                {value:_this.table_data.categoryByAge[0].percent, name:'50'},
                {value:_this.table_data.categoryByAge[1].percent, name:'60'},
                {value:_this.table_data.categoryByAge[2].percent, name:'70'},
                {value:_this.table_data.categoryByAge[3].percent, name:'80'},
                {value:_this.table_data.categoryByAge[4].percent, name:'90'}
              ],
              label:{
                normal:{
                  position:'outside',
                  textStyle:{
                    color:'#4682fa'
                  },
                  formatter:'{b}后 {c}%'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine:{
                normal:{
                  position:'inside',
                  length:10,
                  lineStyle:{
                    color:'#4682fa'
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal:{
                  borderWidth:0,
                  color:function(params){
                    var colorList = ['#1c65f7','#4682fa','#5b90fa','#7da7fc','#9cbdff'];
                    return colorList[params.dataIndex];
                  }
                },
                emphasis: {
                  borderColor:'#fff'
                }
              },
              animationDelay:1000
            }
          ]
        };
        //
        chartAge.setOption(option);
      },
      chartArea:function(){
        var _this = this;
        $('#chart-area').css({'width':$('body').width()+'px','height':($('body').width()-100)+'px'});
        var chartArea = echarts.init(document.getElementById('chart-area'));

        function randomData() {
          return Math.round(Math.random()*1000);
        }
        var data = [
          {name:'浙江',value:0.00},
          {name:'江苏',value:0.00},
          {name:'山东',value:0.00},
          {name:'广东',value:0.00},
          {name:'湖北',value:0.00},
          {name:'四川',value:0.00},
          {name:'河南',value:0.00},
          {name:'上海',value:0.00},
          {name:'河北',value:0.00},
          {name:'安徽',value:0.00},
          {name:'北京',value:0.00},
          {name:'湖南',value:0.00},
          {name:'江西',value:0.00},
          {name:'福建',value:0.00},
          {name:'黑龙江',value:0.00},
          {name:'陕西',value:0.00},
          {name:'山西',value:0.00},
          {name:'辽宁',value:0.00},
          {name:'天津',value:0.00},
          {name:'新疆',value:0.00},
          {name:'吉林',value:0.00},
          {name:'甘肃',value:0.00},
          {name:'广西',value:0.00},
          {name:'内蒙古',value:0.00},
          {name:'云南',value:0.00},
          {name:'贵州',value:0.00},
          {name:'重庆',value:0.00},
          {name:'青海',value:0.00},
          {name:'宁夏',value:0.00},
          {name:'海南',value:0.00},
          {name:'西藏',value:0.00},
          {name: '台湾',value: 0.00 },
          {name: '香港',value: 0.00 },
          {name: '澳门',value: 0.00 }
        ];
        var arr = _this.table_data.categoryByProvince;
        for(var i=0;i<arr.length;i++){
          for(var j=0;j<data.length;j++){
            if(data[j].name == _this.province1['p'+arr[i].type]){
              data[j].value = arr[i].value;
            }
          }
        }
        var option = {
          title:{
            text: _this.month+'月全国投资者分布占比',
            textStyle:{
              color:'#333',
              fontSize:'16',
              fontWeight:'300'
            },
            top:'10',
            x:'center',
            z:1
          },
          tooltip: {
            trigger: 'item',
            backgroundColor:'rgba(255,255,255,.5)',
            textStyle:{
              color:'#666'
            },
            position:'top',
            formatter:function(params,ticket,callback){
              if(params.dataIndex==0){
                return '<span style="color:#ff4040">NO. 1</span> <br>'+params.name+' '+params.value+'%';
              }else if(params.dataIndex==1){
                return '<span style="color:#ff4040">NO. 2</span> <br>'+params.name+' '+params.value+'%';
              }else if(params.dataIndex==2){
                return '<span style="color:#ff4040">NO. 3</span> <br>'+params.name+' '+params.value+'%';
              }else{
                return params.name+' '+params.value+'%';
              }
            }
          },
          visualMap: [{
            show:false,
            min: 0,
            max: 20,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            default: 'rgba(0,0,0,0)',
            inRange:{
              color: ['#fdecec', '#fdb0b0','#fe9696','#fd7676'],
              symbolSize: [100, 0]
            }
          }],
          series: [{
            name:_this.month+'月全国投资分布占比',
            type: 'map',
            map: 'china',
            roam:false,
            label: {
              normal: {
                show: false,
                textStyle:{
                  fontSize:5,
                  color:'#fff'
                }
              },
              emphasis: {
                show: true,
                textStyle:{
                  fontSize:5,
                  color:'#fff'
                }
              }
            },
            itemStyle:{
              normal:{
                borderColor:'#fff'
              },
              emphasis:{
                areaColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#ff4040' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#ff4040' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                color:'#fff'
              }
            },
            center: [105.97, 29.71],
            scaleLimit:{
              min:1,
              max:5
            },
            z:3,
            top:80,
            data:data,
            animationDelay:1000
          }]
        };
        chartArea.setOption(option);
      },
      chartProduct:function(){
        var _this = this ;
        var allCount = 0;
        var arr =  this.table_data.categoryByProduct;
        var data1 = [];
        var data2 = [];
        for(var i=0;i<arr.length;i++){
          allCount += arr[i].count;
          data1.push({icon:'rect',name: arr[i].name});
        }
        for(var i=0;i<arr.length;i++){
          data2.push({value:arr[i].value, name:arr[i].name});
        }
        // console.log(data2);
        $('#chart-product').css({'width':$('body').width()+'px','height':($('body').width()-100)+'px'});
        var chartProduct = echarts.init(document.getElementById('chart-product'));
        //
        var option = {
          title:{
            text:_this.month+'月产品投资占比分布',
            textStyle:{
              color:'#333',
              fontSize:'16',
              fontWeight:'300'
            },
            x:'center',
            top:'15'
          },
          tooltip : {
            show:false,
            trigger: 'item',
            formatter: ' {a} <br> {b} '

          },
          legend: {
            x: 'center',
            y:'bottom',
            itemHeight:10,
            itemWidth:10,
            width:400,
            data: data1,
            formatter:function(name){
              return name;
            },
            textStyle:{
              color:'#999',
              fontSize:10,
              fontWeight:'300'
            }
          },
          calculable : true,
          series : [
            {
              name: '投资用户年龄占比',
              type: 'pie',
              radius : ['32%','52%'],
              center: ['50%', '50%'],
              startAngle:70,
              data:data2,
              label:{
                normal:{
                  position:'outside',
                  textStyle:{
                    color:'#4682fa',
                    fontSize:10
                  },
                  formatter:'{b} 占{c}%'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine:{
                normal:{
                  position:'inside',
                  length:10,
                  lineStyle:{
                    color:'#4682fa'
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal:{
                  borderWidth:0,
                  color:function(params){
                    var colorList = ['#1c65f7','#4682fa','#5b90fa','#7da7fc','#9cbdff'];
                    return colorList[params.dataIndex];
                  }
                },
                emphasis: {
                  borderColor:'#fff'
                }
              },
              animationDelay:1000
            }
          ]
        };
        //
        chartProduct.setOption(option);
      },
      modeShow:function(){
        $('.pager.pager07 .index-img').each(function(i,n){
          var $this=$(this);
          self.setTimeout(function(){
            $this.addClass('active');
          },200*i)
        });
      },
      nextColorWhite:function(){
        $('.next').css('color','white');
        $('.next').css({'transform':'rotate(90deg)'});
      },
      nextColorGray:function(){
      },
      nextInit:function () {
        $('.next').css({'transform':'rotate(-90deg)'})
      },
      slider:function () {
        this.start();
        this.move();
        this.end();
        this.sliders.transitonEnd( document.querySelector('.slider'), ()=> {  //监听移动
          if(this.sliderIndex>3){
            this.sliderIndex=1
          }else if(this.sliderIndex<1){
            this.sliderIndex=3
          }
          document.querySelector('.slider').style.transition='none';
          this.setTranslateX(-this.sliderIndex*this.width);
        })
      },
      start:function () {   //开始触摸
        const _this=this;
        document.querySelector('.slider').addEventListener('touchstart',function (e) {
          _this.startTouchX=e.touches[0].clientX;
          _this.width=document.querySelector('.slider-box').offsetWidth;
        })
      },
      move:function() {    //手指开始滑动
        const _this=this;
        document.querySelector('.slider').addEventListener('touchmove', function(e) {
          _this.endTouchX=e.touches[0].clientX;
          _this.distanceX=_this.endTouchX-_this.startTouchX;
          document.querySelector('.slider').style.transition='none';
          _this.setTranslateX(-_this.sliderIndex*_this.width+_this.distanceX); //设置一个回弹效果即图片跟谁手指移动
          _this.isMove=true;
        })
      },
      end:function () {    //手指滑动结束
        const _this=this;
        document.querySelector('.slider').addEventListener('touchend',function (e) {
          if(_this.isMove&&Math.abs(_this.distanceX)>60){  // 如果滑动位移的绝对值大于20即设定为开始滑动翻页
            if(_this.distanceX>0){
              _this.sliderIndex--;
              if(_this.sliderIndex<1){_this.sliderIndex=3}  // 临界点实现无缝轮播
            }else{
              _this.sliderIndex++;
              if(_this.sliderIndex>3){_this.sliderIndex=1}
            }
          }
          _this.addTransition();    //添加滑动的动画
          _this.setTranslateX(-_this.sliderIndex*_this.width); // 设置滑动的位移
          _this.setDot();
          // 单次滑动结束后需要清除单次执行后的状态
          _this.isMove=false;
          _this.distanceX=0;
          _this.startTouchX=0;
          _this.endTouchX=0;
        })
      },
      setTranslateX:function (translateX) {   //设置滑动位移
        document.querySelector('.slider').style.transform = "translateX("+translateX+"px)";
        document.querySelector('.slider').style.webkitTransform = "translateX("+translateX+"px)";
      },
      addTransition:function () {    //设置滑动的动画
        document.querySelector('.slider').style.transition='all 0.5s';
        document.querySelector('.slider').style.webkitTransition='all 0.5s';
      },
      setDot:function () {
        const _this=this;
        let index=_this.sliderIndex;
        const dots=document.querySelectorAll('.slide-dot li');
        for(let i=0;i<dots.length;i++){
          dots[i].className='';    //清除掉所有的激活状态
        }
        dots[index-1].className='now';  //设置对应需要激活的状态
      }
    },
    mounted(){
      this.swiper.slideTo(0, 400, false);
    }
  }
</script>
<style lang="less" scoped>
  .font-lighter{margin-top:.5rem;}
  .pager05{background:#fff}
  .slider-box ul{position: absolute;bottom: 6px;width: 100%;text-align: center;}
  .slider-box ul li{ width: 6px;height: 6px;  border: 1px solid #ff4040;border-radius: 50%;display: inline-block;margin-left: 10px;}
  .slider-box .now{background: #ff4040}
  .slider-box ul li:first-child{margin-left: 0;}
  .mint-swipe-items-wrap{overflow: auto}
  #headerNormal{background:#fff;}
  .t-box .index-img.active{ transform: translate(0,0);-webkit-transform: translate(0,0); opacity: 1}
  .reportPage1{ background-color: #fc563c;}
  .reportPage2{background:#fff}
  .reportPage3,.reportPage4,.reportPage5,.reportPage6,.reportPage7,.reportPage8,.reportPage9,.reportPage10,.reportPage11{background:#fff}
    .next{
      width:27px;
      height:44px;
      position: fixed;
      bottom: 0!important;
      text-align: center;
      z-index: 4;
      color:#fff;
      transform: rotateZ(-90deg);
      right: 50%;
      margin-right: -14px;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    }
  .swiper-button-next{
    bottom: 0!important;
    margin-top:0;
  }
  .swiper-container-vertical>.swiper-wrapper{padding-top:2rem!important;}


  .block p{ margin-top: .25rem}
  .box{}
  .box img{ display: block;}
  .text-add a{ color: white; text-decoration: none}
  .text-center{text-align: center}
  .text-yellow{ color: #ffe86a}
  .font-bold{font-weight: bold}
  .text-red{color:#ff616c}
  .text-orange{ color: #fd6a53}
  .text-blue-dark{color:#a8aebe}
  .text-gray{ color: #999999}
  .text-blue{color:#6daaef}
  .text-violet{color:#aba6f9}
  .text-DINOT{ font-family: DINOT;}
  .text-h1{ font-size: 3rem}
  .text-h2{ font-size: 2rem}
  .text-h2-max{ font-size: 2.5rem}
  .text-h3{ font-size: 1.5rem}
  .text-h3-min{ font-size: 1.25rem}
  .text-h4{ font-size: 1rem}
  .text-h5{ font-size: .875rem}
  .text-h6{ font-size: .75rem}
  .font-lighter{font-weight: 300}
  .clearfix:after{content: '';display: block; height: 0;width: 0;overflow: hidden; clear: both}
  .border-top{ border-top: 1px solid #6b7591}
  .border-right{ border-right: 1px solid #6b7591}
  .padding-1rem{ padding: 1rem}
  .padding-2rem{ padding: 2rem}
  .padding-top-1rem{ padding-top: 1rem}
  .padding-bottom-1rem{ padding-bottom: 1rem}
  .padding-top-2rem{ padding-top: 2rem}
  .padding-bottom-2rem{ padding-bottom: 2rem}
  .text-indent-1rem{text-indent: 1rem}
  .img-block{ display: block}
  .line-height-1{ line-height: 1}
  /*****/
  /*******/
  .container{ transition: all 1s;}

  .container.animation01{ transform: translateY(-100%)}
  .pager{ width: 100%; height: 100%; position: relative; overflow: hidden }
  .pager:before{ content: 'The Show Must Go';display: block; position: absolute; width: 100%; height: 2rem; line-height: 2rem; font-size: 2rem; background-color: transparent; color: #f6f9fe; text-align: center; transform: scale(1.75,1.75); z-index: 0}
  .pager:first-child:before,
  .pager:last-child:before{ content: '';display: none}
  .pager-bottom{ position: absolute; bottom: 0; width: 100%; text-align: center}
  .pager-bottom .logo{ width: 12rem;}
  .pager-bottom .next{ width: 2rem; transition: all .5s;}
  .pager-top{ padding-left: 2rem; padding-top: 2rem}
  .pager-top img{ height: 2rem;}

  .mark-tit{ font-size: 1.25rem; margin-top:1rem; position: relative; padding-bottom: .5rem; }
  .mark-tit:after{ content: '';width: 6%;  display: block; position: absolute; left:47%; bottom:-.125rem; border-top:.15rem solid #67ffb2;border-bottom:.15rem solid #67ffb2; border-radius: 999rem;}

  .box{ background: url(http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/panel_bg.png) left top no-repeat; background-size: 100% 100%; padding: 1rem 0; color: white; margin: 1rem 2rem 0;}
  .box .sum-tit .tit{ color: white; font-size: 1.125rem; font-weight: 300}
  .box .sum-tit .tit-sub{ color: white;font-weight: 300}

  .box-info{ background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_01.png') left top no-repeat; background-size: 100% 100%; color: white; width: 57%; margin: 0 auto; padding:1rem 0 1rem 28%; border-radius: .75rem; box-shadow: 0 0 .5rem #0b87e8}
  .box-info.hot{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_02.png');box-shadow: 0 0 .5rem #f99611;margin: 1.5rem auto 0;}
  .box-info.popular{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_03.png');box-shadow: 0 0 .5rem #fc6731;margin: 1.5rem auto 0;}
  .box-info.gold{ background-image: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page06_panel_04.png');box-shadow: 0 0 .5rem #906afb;margin: 1.5rem auto 0;}
  /****cover***/
  .cover{ }
  .chart-tips{ padding:1rem 2rem 0; font-size: .875rem}
  /****pager01***/
  .panel-head {padding: 1rem 0 .5rem;position: relative;z-index: 2; border-bottom: 1px solid #f1eeee; margin: 0 2rem}
  .panel-head h1{ font-weight: lighter; font-size: 3rem; line-height: 1; float: left; font-weight: 300; color: #fd6a53; position: relative}
  .panel-head h1:before{ content: '';display: block;width: 4rem; height: 4rem; left: 2.425rem; bottom: 0; background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/tit-shade.png') left bottom no-repeat; background-size: 100%; position: absolute; }
  .panel-head:after{ content: '';display: block; height: 0;width: 0; clear: both; overflow: hidden;}
  .panel-head .tit-dsp{ float: left; padding-left: .5rem; margin-top: 2rem;position: relative;z-index: 3;}
  .panel-head h2{  font-size: 1.5rem; line-height: 1.125;color: #5e5e5e; font-weight: 100;}
  .panel-head h3{ font-size: .75rem;line-height: 1.25; color: #7682a1; position: relative;font-weight: 100;}
  table{}
  table td{ padding: .75rem 0}
  .list{ display: flex;display: -webkit-flex; flex-wrap: wrap; -webkit-flex-wrap: wrap}
  .list-col{ flex-shrink: 10; padding: .5rem}
  .list-col:last-child{ flex-shrink: 2; padding-top: 1rem}
  .list-head{ font-size: 1rem; text-align: center; color: #333; padding-bottom: .5rem; font-weight: 300}
  .list-rank{ border-radius: .25rem; background-color: #f9f9f9; color: #666666;  text-align: center }
  .list-rank.list-tit{ background-color: transparent; color: #333}
  .list-cell{ font-size: .875rem;border:0;padding:.2rem 0}
  .list-cell:first-child{ width: 12%}
  .list-cell:nth-child(2){width: 20%}
  .list-cell:nth-child(3){width: 18%}
  .list-cell:last-child{width: 50%}
  .list-box{ width: 50%;text-align: center}
  .pager10 .list-box{ padding-top: 5rem}
  .list-top{ position: relative; height: 14rem; padding-bottom: 1rem}
  .list-top-cell{ position: absolute;width: 26%; height: 8rem; left:37%; top: 0; background: url('http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/dataReport/201704/page07-top-bg.png') left top no-repeat; background-size: 100% 100%; }
  .list-top-cell:nth-child(2){ top: 6.5rem; left: 23%}
  .list-top-cell:last-child{ top: 6.5rem; left:51%}
  .list-top-cell .t-box{ position: relative;}
  .t-box .index-img{ position: absolute; left: 8%; top: .5rem;width: 80%; transform: translate(0,-2rem);-webkit-transform: translate(0,-2rem); transition: all 1.75s;-webkit-transition: all 1.75s; opacity: 0}
  .t-box .index-img.active{ transform: translate(0,0);-webkit-transform: translate(0,0); opacity: 1}
  .t-box .index-img img{width: 30%;}
  .t-box .index{ text-align: right; padding-right: 1.5rem; color: #ff4040; font-size: .875rem;line-height: 1; padding-top: 1.5rem}
  .t-box .name{ text-align: right; padding-right: 1.5rem;font-size: .875rem; color: #a59d9d; line-height: 1}
  .t-box .integral{text-align: center; font-size: 1.45rem; font-weight: bold; color: #fd6a53; line-height: 1.2}
  .t-box .gift{text-align: center; font-size: .875rem; color: #666666; line-height: 1}
  /*.list-top-cell{ border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c; position: relative; z-index: 1; width: 7.75rem; height: 4.5rem;}*/
  /*.list-top-cell:before{ content: '';display: block; z-index: 0; width: 7.75rem; height: 4.5rem; border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c;  position: absolute; left: 0;top: 0; transform: rotate(-60deg) ;}*/
  /*.list-top-cell:after{content: '';display: block; z-index: 0; width: 7.75rem; height: 4.5rem;  border-left: 1px solid #ff4c4c;border-right: 1px solid #ff4c4c; position: absolute; left: 0;top: 0; transform: rotate(60deg)}*/
  .pop{ background:linear-gradient(to right,#ff8774,#fc573d); background:-webkit-linear-gradient(left,#ff8774,#fc573d); border-radius: 999rem; color: #fff; width: 4rem; height: 4rem; text-align: center;border:.25rem solid #ffd5ce ; box-shadow:0 0 .5rem #ffd5ce }
  .pop .icon{ line-height: 1.5; font-size: 2.75rem}
  .pop.pop-orange,
  .pop.pop-yellow,
  .pop.pop-blue,
  .pop.pop-green{box-shadow:0 0 .5rem #fc573d; line-height: 1rem; padding-top: 2rem; height: 3rem; width: 4rem; position: relative; margin: 0 auto; border: 0}
  .pager10 .pop{ height: 4.5rem; padding-top:2.5rem; width: 6rem}
  .pop.pop-orange:after,
  .pop.pop-yellow:after,
  .pop.pop-blue:after,
  .pop.pop-green:after{content:''; display: block;width: 90%; height: 90%; left: 5%; top: 5%; border-radius: 999rem; box-shadow: 0 0 0 .075rem #fff; position: absolute;z-index: 1}

  .pop .crown{ position: absolute; width: 2rem; height: 2rem; left: 1.375rem; top: -.875rem; background-color: white; border-radius: 999rem; box-shadow: 0 0 .25rem #fc573d; z-index: 2}
  .pop .crown .icon{ color: #fc573d; font-size: 1.25rem}
  .pager10 .pop .crown{left: 2.125rem; top: -.875rem;width: 2.5rem; height: 2.5rem;}
  .pager10 .pop .crown .icon{font-size: 1.675rem}
  .pop.pop-yellow{background:linear-gradient(to right,#ffc584,#ffb866); background:-webkit-linear-gradient(left,#ffc584,#ffb866);box-shadow:0 0 .5rem #ffb866; }
  .pop.pop-yellow .crown{ box-shadow: 0 0 .25rem #ffb866;}
  .pop.pop-yellow .crown .icon{ color: #ffb866;}
  .pop.pop-blue{background:linear-gradient(to right,#96cfff,#79c2ff); background:-webkit-linear-gradient(left,#96cfff,#79c2ff);box-shadow:0 0 .5rem #79c2ff; }
  .pop.pop-blue .crown{ box-shadow: 0 0 .25rem #79c2ff;}
  .pop.pop-blue .crown .icon{ color: #79c2ff;}
  .pop.pop-green{background:linear-gradient(to right,#71e8ee,#3cced5); background:-webkit-linear-gradient(left,#71e8ee,#3cced5);box-shadow:0 0 .5rem #3cced5; }
  .pop.pop-green .crown{ box-shadow: 0 0 .25rem #3cced5;}
  .pop.pop-green .crown .icon{ color: #3cced5;}
  .sum-tit,
  .sum-tit-line{ text-align: center;}
  .sum-tit-line{ padding-top: .5rem}
  .sum-tit .tit{ text-align: center;color: #333; font-size: 1.5rem;}
  .sum-tit .tit-sub{ text-align: center;color: #999; font-size: .75rem; }
  .sum-tit-line .tit{ position: relative;font-size: 1rem}
  .sum-tit-line .tit:before{content: '';display: block;width: 60%;position: absolute;left: 20%; border-bottom: 1px solid #6f7998; top: 50% }
  .sum-tit-line .tit span{ background-color: #444b5c; padding:0 .5rem; position: relative;z-index: 2}
  .sum-tit .val{ font-family: 'GLUEKLIN'; font-size: 2.5rem; color:#ff616c; line-height: 1.125 }
  .sum-tit .unit{ font-size: 2rem; color: #fff;}
  .sum-tit-line .val{ font-size: 1.5rem;}
  .sum-tit-line .val.text-blue{ color:#6daaef}
  .sum-tit-line .unit{ font-size: 1.125rem;}
  /****pager09***/
  .info-items{ border-left:.25rem solid #ff3b1c;  line-height:1.25; width: 86%; margin: 1rem auto 0; padding-left: .5rem; font-size: 1rem; font-weight: 300}
  .info-items:first-child{ margin-top: 1rem;}
  /*******/
  /*.slider-box{ padding: 2rem}*/
  .slider-box{overflow: hidden;width:80%;  margin: 2rem auto; position: relative; z-index: 1; min-height: 19rem; box-shadow: 0 0  .25rem #f1eeee;}
  .slider{ width: 1000% ;}
  .slider img{ display: block;}
  .slider-info{ padding: 1rem .5rem .5rem}
  .slider-mark{ position: relative; padding-bottom: .25rem;}
  .slider-mark:after{ content: '';display: block;width: 5rem; left: 0; bottom: 0; border-bottom: 1px solid #ff616c; position: absolute;transform: translate(-50rem,0);-webkit-transform: translate(-50rem,0);transition: all .75s;-webkit-transition: all .75s}
  .slider-items{  float: left ;z-index: 2;  width: 10%; }
  .slider-items.active{ z-index: 2; opacity: 1;transform: translate(0,0);-webkit-transform: translate(0,0);}
  .slider-step{ position: absolute; bottom: 1rem; left: 42%; width: 40%;z-index: 2; }
  .slider-step .point{ background-color: #f1eeee; color: #f1eeee; border-radius: 999px; width: .5rem; height: .5rem; display: inline-block; overflow: hidden; transition: all .5s; margin: 0 .25rem}
  .slider-step .point.active{ background-color:#fd6a53; color: #fd6a53 }
  /****back& cover***/
  .pager-cover,
  .cover{  background-color: #fc563c; text-align: center ; position: relative}
  .cover .tit{ position: absolute; width: 100%; top: 20%; color: white; opacity: 0; transform: translate(1.5rem,0);-webkit-transform: translate(1.5rem,0); transition: all .75s;-webkit-transition: all .75s }
  .cover .tit.active{opacity: 1;transform: translate(0,0);-webkit-transform: translate(0,0);}
  .cover .tit.tit-year{ font-size: 1.25rem }
  .cover .tit.tit-name{ font-size: 3rem; top: 25% }
  .cover .tit.tit-name-sub{ font-size: .875rem;top: 36% }
  .cover .tit.tit-date{ font-size: .875rem;top: inherit; bottom: 20%; box-shadow: 0 0 0 1px white; width: 50%; left: 25% }
  .cover-sqr{ width: 100%; display: block}
  .copyright{  text-align: center; width: 100%; padding-top: 6.5rem;position: absolute; bottom: 15%; color: white; opacity: .5}
  .app-link{  border-radius: 999rem; color: white; font-size: 1.25rem; box-shadow: 0 0 0 1px white; width: 60%; margin: 0 auto; position: absolute; bottom: 20%; left: 20%; padding: .25rem 0}
  .app-link .icon{ display: inline-block; transform: rotate(-90deg)}
  /*****/
  .pager-toggle{ position: fixed; bottom: 0rem;width: 100%;  text-align: center;z-index: 4}
  .pager-toggle .next{  display: inline-block}
  /****/
  .ui-loading {  position: fixed;  top: 0;  left: 0;  z-index: 999;  width: 100%;  height: 100%;}
  .ui-loading-circle {  position: fixed;  width: 30%;  padding:2rem .5%;  left: 35%; color: #fff; text-align: center;  height: auto;  top: 35%;  background-color: rgba(0,0,0,.5);  border-radius: .75em;  }
  .ui-loading-circle img {  display: block;  width: 100%;  border-radius: .75em;}
  .icon-svg {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1.5em; height: 1.5em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.25em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
  }

  .count-scroll{display: inline-flex; display: -webkit-inline-flex; }
  .num,
  .num-dot{font-size: 2rem; width: 1.125rem; height: 2rem; text-align: center; line-height: 1;  display: block; overflow:hidden ; font-family:DINOT; text-align: center}
  .num-dot{ width: .5rem;}
  .num-dot i{ font-family:DINOT;display: block;width: .5rem;  height:2rem;font-style: normal;transform: translateY(2rem);-webkit-transform: translateY(2rem);  }
  .num-dot.active i{transform: translateY(0);-webkit-transform: translateY(0);transition: all 1s;-webkit-transition: all 1s; }
  .num i{display: block; font-style: normal; width: 1.05rem; word-break: break-all;white-space: pre-wrap; height:20rem;font-family:DINOT;transform: translateY(2rem);-webkit-transform: translateY(2rem); }
  .num.num-0 i{ transform: translateY(0);-webkit-transform: translateY(0); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-1 i{ transform: translateY(-2rem);-webkit-transform: translateY(-2rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-2 i{ transform: translateY(-4rem);-webkit-transform: translateY(-4rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-3 i{ transform: translateY(-6rem);-webkit-transform: translateY(-6rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-4 i{ transform: translateY(-4rem);-webkit-transform: translateY(-8rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-5 i{ transform: translateY(-10rem);-webkit-transform: translateY(-10rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-6 i{ transform: translateY(-12rem);-webkit-transform: translateY(-12rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-7 i{ transform: translateY(-14rem);-webkit-transform: translateY(-14rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-8 i{ transform: translateY(-16rem);-webkit-transform: translateY(-16rem); transition: all 1s;-webkit-transition: all 1s;}
  .num.num-9 i{ transform: translateY(-18rem);-webkit-transform: translateY(-18rem); transition: all 1s;-webkit-transition: all 1s;}
</style>
