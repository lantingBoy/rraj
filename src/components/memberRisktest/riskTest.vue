<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container" :style="{height:inner+'px'}">
        <swiper-slide :style=""><div class="pager pager-question pager01" >
          <div class="tit"><span class="tit-index">1</span>/10</div>
          <div class="content">
            <div class="question">您现在的年龄：</div>
            <ul class="list "  >
              <li class="next" v-for="(item,index) in testData.page1" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
        </div>
          <div class="back"><span class="next ">下一题</span></div>
        </swiper-slide>
        <swiper-slide>
          <div class="pager pager-question pager02" >
          <div class="tit"><span class="tit-index">2</span>/10</div>
            <div class="content">
              <div class="question">您的健康状况如何：</div>
              <ul>
                <li class="next" v-for="(item,index) in testData.page2" @click="select(index,$event)" ref="li">{{item}}</li>
              </ul>
            </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next">下一题</span></div>
        </div>
        </swiper-slide>
        <swiper-slide>
          <div class="pager pager-question pager03" >
          <div class="tit"><span class="tit-index">3</span>/10</div>
          <div class="content">
            <div class="question">是否有过投资股票、基金或债券的经历？</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page3" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class="back"><span class="margin-right prev">上一题</span><span class="next">下一题</span></div>
        </div></swiper-slide>
      <swiper-slide>
        <div class="pager pager-question pager04" >
        <div class="tit"><span class="tit-index">4</span>/10</div>
        <div class="content">
          <div class="question">您目前投资的主要目的是？</div>
          <ul>
            <li class="next" v-for="(item,index) in testData.page4" @click="select(index,$event)" ref="li">{{item}}</li>
          </ul>
        </div>
        <div class="back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
      </div>
      </swiper-slide>
        <swiper-slide> <div class="pager pager-question pager05" >
          <div class="tit"><span class="tit-index">5</span>/10</div>
          <div class="content">
            <div class="question">您投资的总额占您个人（或家庭）总资产（含房产等）的：</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page5" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right prev ">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
        <swiper-slide><div class="pager pager-question pager06" >
          <div class="tit"><span class="tit-index">6</span>/10</div>
          <div class="content">
            <div class="question">您预期的投资期限是：</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page6" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
        <swiper-slide><div class="pager pager-question pager07" >
          <div class="tit"><span class="tit-index">7</span>/10</div>
          <div class="content">
            <div class="question">在您投资60天后，价格下跌20%。假设所有基本面均未改变，您会怎么做？</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page7" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
        <swiper-slide> <div class="pager pager-question pager08" >
          <div class="tit"><span class="tit-index">8</span>/10</div>
          <div class="content">
            <div class="question">您有没有想过如果有一天您的财务状况发生很大的变化，比如说突然有一笔很大的开支，这笔开支可能会动用您10%的个人资产甚至更多：</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page8" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
        <swiper-slide> <div class="pager pager-question pager09" >
          <div class="tit"><span class="tit-index">9</span>/10</div>
          <div class="content">
            <div class="question">9.您对您目前的财务状况满意吗？</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page8" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
        <swiper-slide> <div class="pager pager-question pager10" >
          <div class="tit"><span class="tit-index">10</span>/10</div>
          <div class="content">
            <div class="question">10.当您退休后，您计划做什么：</div>
            <ul>
              <li class="next" v-for="(item,index) in testData.page8" @click="select(index,$event)" ref="li">{{item}}</li>
            </ul>
          </div>
          <div class=" back"><span class="margin-right  prev">上一题</span><span class="next ">下一题</span></div>
        </div></swiper-slide>
      <swiper-slide> <div class="pager pager-result" >
        <div class="type-box" v-if="!showType">
          <h1  style="text-align: center;font-size:1.4rem">请您选择选项完成测评</h1>
        </div>
        <div class="type-box" v-if="showType">
          <div class="type-tit">您的风险承受类型</div>
          <div class="type-key"><span class="question-result">{{memberType}}</span> <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV2/icon/dot.png" width="10%"></div>
          <div class="type-dsp">{{memberTypeDes}}</div>
          <div class="type-submit">
            <div class="btn" @click="finish">完成</div>
          </div>
        </div>
        <div class="re-test" ><span>重测</span></div>
      </div></swiper-slide>
    </swiper>
    <input type="hidden" id="scoreLevel" value="0">
    <input type="hidden" id="scoreTotal" value="5">
  </div>
</template>
<script>
  import '../../../static/swiper.min.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {passToken} from '../../commonjs/commonjs'
  export default{
    components:{
      swiper,
      swiperSlide,
    },
    data(){
          return{
            inner:window.innerHeight,
            testData:{ // 评测选项的数据
              page1:[
                'A.60岁以上','B.46-60岁','C.36-45岁','D.26-35岁','E.25岁以下'
              ],
              page2:[
                'A.一直都不是很好，要经常吃药和去医院','B.有点不好，不过目前还没什么大问题， 我担心当我老了的时候会变得恶劣','C.至少现在还行，不过我家里人有病史','D.还行，没大毛病','E.非常好'
              ],
              page3:[
                 'A.没有','B.有，少于３年','C.有，３～５年','D.有，超过５年'
              ],
              page4:[
                'A.确保资产的安全性，同时获得固定收益','B.希望投资能获得一定的增值，同时获得波动适度的年回报','C.倾向于长期的成长，较少关心短期的回报和波动','D.只关心长期的高回报，能够接受短期的资产价值波动'
              ],
              page5:[
                'A.低于10%','B.10%-25%','C.25%-40%','D.40%-55%'
              ],
              page6:[
                'A.少于1年','B.1-3年','C.3-5年','D.5-10年','E.10年以上'
              ],
              page7:[
                'A.为避免更大的担忧，全部卖掉再试试其他的','B.卖掉一部分，其余等着看看','C.什么也不做，静等收回投资','D.再买入。它曾是好的投资，现在也是便宜的投资'
              ],
              page8:[
                'A.没想过，我感觉这种大变化不会在我身上发生','B.经常想，我很担心整个生活都将变得一团糟，可是我又有什么办法呢？','C.想过一两次，感觉挺可怕的','D.曾经想过一两次，但是我还年轻，无所谓的'
              ],
              page9:[
                'A.不太好，常常要借钱','B.刚刚好，我要特别小心打理','C.我做得还行，一直按照我人生的规划在顺利进行','D.特别好，现在想买什么就买什么'
              ],
              page10:[
                'A.节俭地生活，避免把钱花光','B.继续工作挣钱，因为我的养老金估计不够用','C.享受人生，周游世界','D.努力花钱，直到去见上帝之前还要给上帝带上一件最奢侈的礼物'
              ]
            },
            resultDsp:[
              '您不接受任何风险。您的回报很可能只相当于当时的利率，未必能够赶上物价上升。',
              '稳定是您的重要考虑因素，希望投资在保证本金安全的基础上能有一些增值收入。希望投资有一定的收益，但常常因回避风险而最终不会采取任何行动在有充分信息的情况下才愿意投资一下。',
              '您乐意接受中低程度的投资风险，来换取中长期超过银行存款的回报潜力，以达到资金保值的目的，但投资可能跌至低于您的本金。',
              '您专注于投资的长期增值，常常会为提高投资收益而采取一些行动，并愿意为此承受较大的风险。',
              '您乐意接受较高程度的投资风险，去换取较高的回报潜力。但投资可能跌至远低于您的本金或完全损失本金。'
            ],
            resultKey:[
              '非常保守型',
              '温和保守型',
              '中庸稳健型',
              '温和积极型 ',
              '非常进取型'
            ],
            score:[],  //保存分数的数组
            activeIndex:0, //当前激活页码
            sum:0,    //分数总和
            showType:false,
            memberType:'',// 用户类型
            memberTypeDes:'', //用户类型的描述
            swiperOption: {
              notNextTick: true,
              direction : 'horizontal',
              speed:1000,
              height:window.innerHeight,
              paginationClickable :true,
              nextButton:'.next',
              prevButton:'.prev',
              navigation: {
                nextEl: '.next',
                prevEl: '.prev',
              },
              observeParents:true,
              on: {
                transitionStart: ()=>{
                  const that=this;
                  that.activeIndex=that.swiper.activeIndex;// 导出当前swiper的页码
                    $('.re-test').click(function () {
                      that.sum=0; // 将之前的分数总和清空 数组清空 激活页码清空
                      that.activeIndex=0;
                      that.score.splice(0,that.score.length);
                      that.swiper.slideTo(0, 2000, false);
                    })
                },
              },
            },
          }
      },
    methods:{
      select(index,$event){  // $event 是当前操作对象
        this.score.push(index); // 自定义一个数组用来保存分数
        console.log(this.score);
        if(this.activeIndex===9&&this.score.length===10){  //判断是否显示 并且对分数进行求和以判断用户是什么类型的
          console.log('完成测试');
          for(var j=1;j<this.score.length+1;j++){    // 求和
           this.sum+=this.score[j-1]
          }
          this.sum=this.sum+this.score.length;    // A 1分 B 2分 C 3分 D 4分 E 5分 所以index要加1分 共八项加8
          this.showType=true;     // 控制 用户类型的显隐
          console.log(this.sum);
          if(this.sum>=10&&this.sum<=15){
            var setType=0;
          }else if(this.sum>=16&&this.sum<=20){
            var setType=1;
          }else if(this.sum>=21&&this.sum<=30){
            var setType=2;
          }else if(this.sum>=31&&this.sum<=38){
            var setType=3;
          }else{
            var setType=4;
          }
          this.memberType=this.resultKey[setType]; // 用户类型
          this.memberTypeDes=this.resultDsp[setType]; // 用户类型描述
        }
        for (var i = 0; i < this.$refs.li.length; i++) {  // 控制选择项的激活样式
          this.$refs.li[i].style = 'background:white'
        }
        $event.target.style = 'background:lightBlue';   // 设置目标对象的颜色
      },
      finish(){
        let key=new Date().getTime();
        let token=passToken(key);
        riskTest(token,key,this.memberType).then((res)=>{
          if(res.data.resCode===1){
            this.$router.back();
          }
        })
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    }
  }
</script>

<style scoped>

  @keyframes fadeIn {
    from { opacity: 0;}
  }
  *{padding: 0;margin: 0;font-family: 'Microsoft YaHei', arial, helvetica, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale}
  body{ background-color: #FFFFFF;color: #333; font-size: 16px;line-height: 1.5; animation: fadeIn 1s; opacity: 1; }/*padding-bottom: 6rem*/
  html,body{display: block;width: 100%; height: 100%;}
  .text-center{text-align: center}
  .block p{ margin-top: .25em}
  .box{}
  .box img{ display: block}

  .container{ z-index: 0;position: relative; height: 100%;width: 100%;}
  /*@-webkit-keyframes toggleLeft{*/
  /*from{transform: translateX(0); - opacity: 1}*/
  /*}*/
  .pager{ position: absolute;  left: 0; top: 0;width: 100%; height: 100%; background-color: #FFFFFF; transform: translateX(0); -webkit-transform: translateX(0); transition: all .5s;-webkit-transition: all .5s;  z-index: 0}
  /*.pager.ago{ transform: translateX(-100%); -webkit-transform: translateX(-100%);}*/
  .tit{  color: #666; padding-left: 1rem; padding-top: 1rem }
  .tit-index{ font-size: 2.5rem; color: #FF4040}

  .content{padding:0 1rem;}
  li{ list-style: none; border-top: 1px solid #E6E6E6;padding: 1.5rem .125rem; color: #666; line-height: 1.25}
  li.selected{ background-color: #fff8f8 }
  li:last-child{border-bottom: 1px solid #E6E6E6;}
  .question{ font-size: 1.25rem; padding-bottom: 1rem; line-height: 1.25}
  .back,.re-test{ text-align: center; padding-top: 2rem; z-index: 99; color: #66BCF0; position: absolute; width: 100%; bottom: 2rem}
  /*.pager01{z-index: 10}*/
  /*.pager02{z-index: 9}*/
  /*.pager03{z-index: 8}*/
  .pager04{z-index: 7}
  .pager05{z-index: 6}
  .pager06{z-index: 5}
  .pager07{z-index: 4}
  .pager08{z-index: 3}
  .pager09{z-index: 2}
  .pager10{z-index: 1}
  .pager-result{}
  .type-box{ padding: 3rem}
  .question-result{ font-size: 2.25rem; color: #ff4040; line-height: 1}
  .type-tit{ font-size: .875rem;color: #666;}
  .type-key{ padding: 1rem 0 2rem;  }
  .type-dsp{ color: #666;}
  .type-submit{ padding-top: 5rem}

  .btn{ vertical-align: middle; text-align: center; background:#FF4040;text-decoration: none;color: white; width: 100%; display: block; margin: .5em auto 0; padding: .75em 0;  line-height: 1;  border-radius: 999em; font-size: 1.25rem }
  .margin-right{margin-right:2rem}
  .liActive{background: red}
</style>
