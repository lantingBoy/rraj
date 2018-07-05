<template>
	<div class="pt-3">
		<div class="header">
			<nav class="nav" style="background:#fff;line-height:3rem">
				<div class="nav-left" style="padding-top:0">
					<div @click="back">
						<span class="icon icon-left iconfont text-gray"></span>
					</div>
				</div>
				<div class="nav-head" style="padding-top:0">
					<a href="javascript:;" style="font-size:18px">
						积分商城
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0">
					<router-link :to="{path:'/integralMall/mallRule'}" >
						积分规则
					</router-link>
				</div>
			</nav>
		</div>
		<div class="total-mall">
			<p>{{totalPoints}}<span style="color:#999;font-size:1rem">积分</span></p>
		</div>
		<div class="flex faxian-box" style="padding:0.8rem 0">
			<div class="flex-1 text-center"  @click="share">
				<p class="mt-5">
					<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <defs>
					        <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
					            <stop stop-color="#FFA374" offset="0%"></stop>
					            <stop stop-color="#FA483F" offset="100%"></stop>
					        </linearGradient>
					        <polygon id="path-2" points="0 17.7561723 0 0.0250366252 19.7702729 0.0250366252 19.7702729 17.7561723"></polygon>
					    </defs>
					    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="Group-20">
					            <rect id="Rectangle-19" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
					            <g id="积分-2-copy" transform="translate(2.000000, 2.000000)">
					                <g id="Clip-2"></g>
					                <path d="M12.8355201,6.77178121 L6.93218033,6.77178121 C6.46646616,6.77178121 6.08877549,6.39422232 6.08877549,5.92837637 C6.08877549,5.46269514 6.46646616,5.08513625 6.93218033,5.08513625 L12.8355201,5.08513625 C13.301366,5.08513625 13.678892,5.46269514 13.678892,5.92837637 C13.678892,6.39422232 13.301366,6.77178121 12.8355201,6.77178121 M19.6135275,4.93237989 L18.1232553,1.33053192 C18.0631345,1.19180925 17.9867069,1.06069639 17.8955868,0.940092335 L17.8955868,0.868441467 L17.8415604,0.868441467 C17.4392943,0.367478361 16.7958859,0.0250366252 16.168422,0.0250366252 L3.59684065,0.0250366252 C2.97013438,0.0250366252 2.3258366,0.366555959 1.92445997,0.868441467 L1.87208071,0.868441467 L1.87208071,0.940882965 C1.77993934,1.06171763 1.70285289,1.19348934 1.64276499,1.33310147 L0.151702183,4.93919907 C-0.143466451,5.65429121 0.00336017865,6.64192019 0.494143919,7.23723184 L8.69307866,17.178518 C8.99664774,17.5454034 9.43017667,17.7561723 9.88221953,17.7561723 L9.88301016,17.7561723 C10.3358436,17.7561723 10.7693726,17.544514 11.072184,17.1777604 L16.1751094,10.988476 L19.2718764,7.23054443 C19.7711594,6.62584404 19.914527,5.65943031 19.6142852,4.93237989" id="Fill-1" fill="url(#linearGradient-1)"></path>
					            </g>
					        </g>
					    </g>
					</svg>
				</p>
				<p class="text-center f12">赚取积分</p>
			</div>
			<div class="flex-1 text-center">
				<router-link :to="{path:'/integralMall/pointsDetailList'}" >
				<p  class="mt-5">
					<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <defs>
					        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-1">
					            <stop stop-color="#FFA072" offset="0%"></stop>
					            <stop stop-color="#FA483F" offset="100%"></stop>
					        </linearGradient>
					    </defs>
					    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="Group-21">
					            <rect id="Rectangle-19-Copy" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
					            <g id="积分明细-copy" transform="translate(2.000000, 0.000000)" fill="url(#linearGradient-1)">
					                <path d="M10.0400284,21.8310935 L9.87024414,21.5993422 L9.87024414,15.4591587 L9.92690372,15.3092706 C10.1520541,14.7026653 11.4741813,13.0257802 14.9615291,13.0257802 C17.1388668,13.0257802 17.7863563,13.3066383 18.6733763,13.7091525 L18.6733763,1.39251693 C18.6734874,0.635184751 18.0462027,0.0212660637 17.2851748,0.0212660637 L1.39406476,0.0212660637 C0.633147933,0.0212660637 0,0.635184751 0,1.39251693 L0,21.4137189 C0,22.171051 0.633147933,22.7851087 1.39406476,22.7851087 L11.4594913,22.7851087 C10.7986388,22.5466327 10.3293007,22.2311841 10.0400284,21.8310935 Z M4.23721437,4.7785315 L14.4422197,4.7785315 C14.9098627,4.7785315 15.28889,5.15669741 15.28889,5.62322893 C15.28889,6.0898716 14.9098627,6.46806529 14.4422197,6.46806529 L4.23721437,6.46806529 C3.76948797,6.46806529 3.39046064,6.0898716 3.39046064,5.62322893 C3.39046064,5.15669741 3.76948797,4.7785315 4.23721437,4.7785315 Z M4.23721437,8.77999309 L12.0003555,8.77999309 C12.4679986,8.77999309 12.8470259,9.158159 12.8470259,9.62469052 C12.8470259,10.0913332 12.4679986,10.4695269 12.0003555,10.4695269 L4.23721437,10.4695269 C3.76948797,10.4695269 3.39046064,10.0913332 3.39046064,9.62469052 C3.39046064,9.158159 3.76948797,8.77999309 4.23721437,8.77999309 Z M8.58169014,14.4709885 L4.23721437,14.4709885 C3.76948797,14.4709885 3.39046064,14.0927948 3.39046064,13.6261521 C3.39046064,13.1596206 3.76948797,12.7814547 4.23721437,12.7814547 L8.58169014,12.7814547 C9.04941654,12.7814547 9.42836051,13.1596206 9.42836051,13.6261521 C9.42836051,14.0927948 9.04941654,14.4709885 8.58169014,14.4709885 Z M15.2271322,22.7525779 C12.6181581,22.7525779 10.5515315,21.8262065 10.5515315,20.5758685 C10.5515315,20.3107646 10.6516463,20.0574654 10.8261769,19.8211945 C11.4754083,20.6999064 13.2196691,21.3305425 15.2756961,21.3305425 C17.3317231,21.3305425 19.0761233,20.6999064 19.7254939,19.8211945 C19.8998852,20.0574654 20,20.3107646 20,20.5758685 C20,21.8262065 17.8362456,22.7525779 15.2271322,22.7525779 Z M15.2756961,20.5757292 C12.6667221,20.5757292 10.5515315,19.56208 10.5515315,18.3117072 C10.5515315,18.0468818 10.6516463,17.7934434 10.8261769,17.5570332 C11.4754083,18.4359192 13.2196691,19.0663812 15.2756961,19.0663812 C17.3317231,19.0663812 19.0761233,18.4359192 19.7254939,17.5570332 C19.8998852,17.7934434 20,18.0468818 20,18.3117072 C20,19.56208 17.8848095,20.5757292 15.2756961,20.5757292 Z M15.2756961,18.3118465 C12.6667221,18.3118465 10.5515315,17.2981973 10.5515315,16.0478593 C10.5515315,14.7974865 12.6667221,13.7838373 15.2756961,13.7838373 C17.8848095,13.7838373 20,14.7974865 20,16.0478593 C20,17.2981973 17.8848095,18.3118465 15.2756961,18.3118465 Z" id="Combined-Shape"></path>
					            </g>
					        </g>
					    </g>
					</svg>
				</p>
				<p class="text-center f12">积分明细</p>
				</router-link>
			</div>
			<div class="flex-1 text-center">
				<router-link :to="{path:'/integralMall/mallHistory'}" >
				<p  class="mt-5">
					<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <defs>
					        <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
					            <stop stop-color="#FFA374" offset="0%"></stop>
					            <stop stop-color="#FA483F" offset="100%"></stop>
					        </linearGradient>
					    </defs>
					    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="Group-22">
					            <rect id="Rectangle-19-Copy-2" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
					            <path d="M20.3333605,0 L3.66663954,0 C2.66666884,0 2,0.666668837 2,1.66663954 L2,23.3334418 L3.16667046,23.3334418 C3.33337023,23.3334418 3.49993978,23.3334418 3.66663954,23.1667421 L6.16668023,20.5001318 L9.16669,23.3334418 L12,20.3334321 L14.83331,23.3334418 L17.5000505,20.3334321 L20.1666607,23.0000423 C20.3333605,23.3334418 20.5000602,23.3334418 20.66676,23.3334418 L22,23.3334418 L22,1.66663954 C22,0.666668837 21.3334614,0 20.3333605,0 Z M14.4906309,9.84167797 L14.4906309,8.06402824 C14.4906309,7.7678208 14.3435022,7.61965921 14.1962585,7.61965921 L9.04376357,7.61965921 C8.74927614,7.61965921 8.60211869,7.7678208 8.60211869,7.91586666 L8.60211869,9.39716427 C8.60211869,9.84167797 8.74927614,9.98972382 9.04376357,9.98972382 L14.1962585,9.98972382 C14.3435022,10.1378854 14.4906309,10.1378854 14.4906309,9.84167797 Z M9.33813599,4.65691931 C9.4853797,4.65691931 9.77975212,4.65691931 9.77975212,4.95327142 C10.0742683,5.39764045 10.3686407,5.6938479 10.5158844,6.13836159 C10.6631282,6.43456904 10.5158844,6.58273062 10.3686407,6.73077648 C10.0742683,6.87893807 9.92702459,6.73077648 9.77975212,6.43456904 C9.77975212,6.28640745 9.63262342,5.99017107 9.4853797,5.84200949 C9.33813599,5.6938479 9.19100729,5.39764045 9.04376357,5.24947887 C9.04376357,5.10143301 9.04376357,4.80510983 9.33813599,4.65691931 Z M15.3740069,15.1744535 L13.7546423,15.1744535 C12.8713813,15.1744535 12.4296502,14.8781304 12.4296502,14.1374092 L12.4296502,11.0266524 L10.6631282,11.0266524 C10.6631282,13.2486422 9.77975212,14.7299688 7.71877141,15.1744535 C7.42437024,15.3224994 7.27712653,15.1744535 7.12988281,15.026292 C7.12988281,14.7299688 7.12988281,14.581894 7.42437024,14.4337324 C9.04376357,13.9893634 9.92702459,12.9524348 9.77975212,11.0266524 L8.60211869,11.0266524 C8.16038754,11.0266524 7.86601513,10.5822544 7.86601513,9.98972382 L7.86601513,7.7678208 C7.86601513,7.17526124 8.16038754,6.87893807 9.04376357,6.87893807 L12.4296502,6.87893807 C12.8713813,6.13836159 13.1657537,5.54580204 13.3129975,4.80510983 C13.3129975,4.65691931 13.6073986,4.65691931 13.9018861,4.65691931 C14.0490148,4.80510983 14.1962585,4.95327142 14.0490148,5.24947887 C13.7546423,5.99017107 13.4601262,6.58273062 13.3129975,6.87893807 L14.1962585,6.87893807 C15.0795195,6.73077648 15.5211356,7.17526124 15.3740069,8.06402824 L15.3740069,9.98972382 C15.3740069,10.730416 15.0795195,11.0266524 14.4906309,11.0266524 L13.3129975,11.0266524 L13.3129975,13.8412018 C13.3129975,14.1374092 13.4601262,14.2855708 13.9018861,14.2855708 L15.0795195,14.2855708 C15.8156231,14.4337324 16.1100242,13.9893634 15.9628668,13.1004806 C15.9628668,12.8042732 16.1100242,12.6561116 16.4045117,12.5080658 C16.6988841,12.5080658 16.8461278,12.6561116 16.8461278,13.1004806 C17.1405002,14.581894 16.5517554,15.3224994 15.3740069,15.1744535 Z" id="Fill-1-Copy" fill="url(#linearGradient-1)"></path>
					        </g>
					    </g>
					</svg>
				</p>
				<p class="text-center f12">兑换记录</p>
				</router-link>
			</div>
			<div class="flex-1 text-center"  @click="share">
				<p  class="mt-5">
					<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <defs>
					        <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
					            <stop stop-color="#FFA374" offset="0%"></stop>
					            <stop stop-color="#FA483F" offset="100%"></stop>
					        </linearGradient>
					    </defs>
					    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="Group-23">
					            <rect id="Rectangle-19-Copy-3" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
					            <path d="M6.25944853,14.5520121 C3.63012889,15.0538616 2,15.8567032 2,17.0610077 C2,18.9348368 6.44442889,20.0717688 12.000056,20.0717688 C17.5555991,20.0717688 22,18.9348368 22,17.0610077 C22,15.823689 20.2595157,14.9864611 17.4452157,14.4846116 C17.0365564,14.4186672 16.6667357,14.6524268 16.5921388,15.0208194 C16.5190819,15.3878959 16.7785472,15.7233863 17.1856664,15.7893307 C19.2960834,16.1577233 20.5562796,16.7598756 20.5562796,17.0610077 C20.5562796,17.1284082 20.4444961,17.2287109 20.1477323,17.4294283 C19.7405011,17.6631599 19.1484015,17.8968075 18.3699495,18.0975249 C16.7039222,18.533402 14.4444233,18.7670496 12.0373545,18.7670496 C9.6301737,18.7670496 7.33337627,18.533402 5.70324738,18.0975249 C4.92619547,17.8968075 4.33409592,17.6631599 3.92546462,17.4294283 C3.5928304,17.2287109 3.48104693,17.1284082 3.48104693,17.0610077 C3.48104693,16.7929178 4.62943165,16.2251238 6.55632436,15.8567032 C6.96344356,15.7893307 7.2229929,15.4222542 7.11109742,15.0538616 C7.07379893,14.685329 6.66667973,14.4517094 6.25944853,14.5520121 Z M12.0358144,0 C7.628712,0 4.86733554,3.1870609 4.86733554,7.16847885 C4.86733554,11.1498968 10.9620267,17.2042932 12.0358144,17.2042932 C13.1097421,17.2042932 19.2042932,11.1498968 19.2042932,7.16847885 C19.2042932,3.1870609 16.4430568,0 12.0358144,0 Z M12.0358144,4.30114332 C13.6187041,4.30114332 14.9032899,5.58572913 14.9032899,7.16847885 C14.9032899,8.75122858 13.6187041,10.0358144 12.0358144,10.0358144 C10.4530647,10.0358144 9.16847885,8.75122858 9.16847885,7.16847885 C9.16847885,5.58572913 10.4530647,4.30114332 12.0358144,4.30114332 Z" id="收货地址-copy" fill="url(#linearGradient-1)"></path>
					        </g>
					    </g>
					</svg>
				</p>
				<p class="text-center f12">收货地址</p>
			</div>
		</div>
		<div class="faxian-box">
			<div class="jifen-box">
				<div class="flex" style="width:560px">
					<div :class="activeClass==index?'pd-box active':'pd-box'" v-for="(item,index) in categoryList" @click="getItems(item.categoryId,index)">
							<span>{{item.categoryName}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="product-box">
			<ul class="flex flex-wrap">
				<li class="border-box" v-for="item in pointsGoodsList">
					<div class="img-box">
						<img v-lazy="item.showImg" alt="">
					</div>
					<p style="font-size:0.85rem">{{item.name}}</p>
					<p  style="font-size:0.85rem;color:#D9697c;margin-top:0.3rem">{{item.salesPrice}}<span>积分</span></p>
				</li>
			</ul>
		</div>
    <loading v-show="showLoading"></loading>
	</div>

</template>
<script>
 import{integralMallIndex,getPointsGoodsByCategory} from '../../api/faxian'
 import {MessageBox} from 'mint-ui'
 import Loading from "../loading/loading.vue";
export default{
  components: {Loading},
  data(){
      return{
        categoryList:[],//分类列表
        pointsGoodsList:null,//展示商品
        totalPoints:null,//用户总积分
        listsWidth:0,
        activeClass:0,
        showLoading:true
      }
    },
    created(){

      integralMallIndex().then(({data})=>{
      	console.log(data)
        this.showLoading=false;
      	var homeData = data.data;
      	this.categoryList = homeData.categoryList;
      	this.pointsGoodsList = homeData.pointsGoodsList;
      	this.totalPoints = homeData.totalPoints;
      	this.listsWidth = homeData.categoryList.length*80;
      })
    },
    methods:{
    	back(){
    		this.$router.back()
    	},
    	getItems(id,index){
    		this.activeClass = index;
    		getPointsGoodsByCategory(id).then(({data})=>{
    			this.pointsGoodsList = data.data;
    		})
    		console.log(id);
    	},
    	share(){
	        MessageBox.confirm('请下载APP查看').then(action => {
	          if(action==='confirm'){
	          }
	        }).catch(err=>{
	          if(err==='cancel'){
	          }
	        })
      	},
    }
  }
</script>
<style scoped>
  .border-box{
    text-align: center;
  }
	.nav-slide{
		overflow:auto;
		height:44px;
	}
	::-webkit-scrollbar{
        display:none;
    }
	.class-item{
		width:80px;
		text-align:center;
	}
	.total-mall{
		text-align:center;
		background:#fff;
		font-size:2.6rem;
		height:5.6rem;
		line-height:5.6rem;
	}
	.top{
		background:#fff;
		padding:0.7rem 0;
	}
	.swiper-item{
		width:90%;
		margin:0 5%;
	}
	.swiper-item .img{
		width:90%;
	}
	.faxian-box{
		margin-top:1rem;
		background:#fff;
	}
	.title{
		text-align:center;
		padding:0.8rem 0;
		border-bottom: 1px solid #fafafa;
	}
	.fuli-box>div{
		width:50%;
		border-right:1px solid #fafafa;
		border-bottom:1px solid #fafafa;
	}
	.fuli-box>div:nth-child(2),.fuli-box>div:nth-child(4){
		border-right:1px solid #fff;
	}
	.fuli-box>div img{
		width:100%;
	}
	.jifen-box{
		overflow:auto;
		font-size:0.8rem;
		padding:1rem 0 0;
		border:1px solid #f7f7f7;
	}
	.pd-box{
		width:80px;
		text-align:center;
	}
	.pd-box span{
		display:inline-block;
		padding-bottom:1rem;
		border-bottom:2px solid #fff;
	}
	.active{
		color:rgba(252,38,50,1);
	}
	.active span{
		border-bottom:2px solid rgba(252,38,50,1);
	}
	.product-box li{
		width:50%;
		padding:0.8rem;
		background:#fff;
		border-right:1px solid #f7f7f7;
		border-bottom:1px solid #f7f7f7;
	}
	.img-box{
		text-align:center;
		line-height: 2;
	}
	.img-box img{
		height:8rem;
	}
</style>
