<template>
	<div style="padding-top:3rem">
		<div class="header">
			<nav class="nav" style="background:#fff;line-height:3rem">
				<div class="nav-left" style="padding-top:0">
					<div @click="back">
						<span class="icon icon-left iconfont text-gray"></span>
					</div>
				</div>
				<div class="nav-head" style="padding-top:0">
					<a href="javascript:;" style="font-size:18px" @click="dateNow">
						签到有礼
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0">
				</div>
			</nav>
		</div>
		<div class="head">
			<div class="flex flex-align-center" style="padding:0.8rem 1.2rem 0">
				<router-link  class="flex flex-1 flex-align-center" :to="{path:'/userSign/signReward'}" >
					<img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_piz.png" alt="">
					<span  style="color:#fff">签到奖励</span>
				</router-link>
				<router-link  class="flex flex-align-center" :to="{path:'/userSign/signRule'}" >
					<img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_qus.png" alt="">
					<span style="color:#fff">签到规则</span>
				</router-link>
			</div>
			<div>
				<div :class="signIn?'qiandao-ok':'qiandao-btn-box'" @click="userSign">
					<div v-if="signIn" class="text-center">
						<span style="display:inline-block;color:rgba(253,82,91,1);margin-top:24px;padding:0 0.3rem 0.7rem;border-bottom:1px solid rgba(255,64,64,1)">已签到</span>
						<p style="margin-top:0.7rem;color:rgba(255,64,64,1);font-size:1rem">+{{award}}积分</p>
					</div>
					<p v-else class="text-center">签到</p>
				</div>
			</div>
			<div  class="text-center">
				<p v-if="signIn">
					已连续签到<span style="color:rgba(242,226,62,1)">{{continuousDays}}</span>天，明天签到可获得<span style="color:rgba(242,226,62,1)">{{awardTomorrow}}</span>积分
				</p>
				<p v-else>今日未签到，快来签到赚积分吧</p>
			</div>
		</div>
		<div style="background:#fff;padding-bottom:1rem">
			<div class="data-now">
				<p>
					{{new Date(this.now).getFullYear()}}年{{new Date(this.now).getMonth()+1}}月
				</p>
			</div>
			<div class="date-nav">
				<ul  class="flex flex-align-center">
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
			</div>
			<div class="date-box">
				<ul class="flex flex-align-center flex-wrap">
					<li :class="item.days==nowDate&&!item.signIn?'active':''" v-for="item in signInDays">
						<p>{{item.days}}</p>
						<img v-if="item.signIn" src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_ok.png" alt="">
					</li>
				</ul>
			</div>
			<div class="prize-text text-center" style="margin-top:2rem">
				<img style="width:20px;margin-right:1rem;position:relative;top:3px" src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_prize.png" alt="">
				<span>连续签到15天可获得<span style="color:rbga(252,38,50,1)">{{giftName}}</span></span>
			</div>
		</div>
	</div>
</template>
<script>
  import{getSignIn,getAwardBySignIn} from '../../api/faxian'
export default{
    data(){
      return{
      	signInDays:[],//日历列表
      	signIn:false,//是否签到
      	getGift:false,//是否已获得礼物
      	giftName:null,//礼物名称
      	continuousDays:0,//连续签到天数
      	awardTomorrow:0,//明日可获得积分
      	awardDay:0,//还需多少天获得礼物
      	award:0,//当天可获得签到积分
      	now:0,
      	nowDate:1,
      }
    },
    created(){
    	this.getData();
    },
    methods:{
    	getData(){
    		getSignIn().then(({data})=>{
    			var indexData = data.data;
    			this.now = indexData.now;
    			this.signInDays = indexData.signInDays;
    			this.signIn = indexData.signIn;
    			this.getGift = indexData.getGift;
    			this.giftName = indexData.giftName;
    			this.continuousDays = indexData.continuousDays;
    			this.awardTomorrow = indexData.awardTomorrow;
    			this.awardDay = indexData.awardDay;
    			this.award = indexData.award;
    			this.dateNow();
    			this.nowDate = new Date(this.now).getDate();
    		})
    	},
    	back(){
    		this.$router.back()
    	},
    	dialogFaxian(){
    		dialogFaxian();
    	},
    	dateNow(){
    		var date = new Date();
    		date.setDate(1);
    		var weekday = [0,1,2,3,4,5,6];
    		var firstDate = weekday[date.getDay()];
    		for(var i=0;i<firstDate;i++){
    			this.signInDays.unshift({days:null,signIn:false})
    		}
    	},
    	userSign(){
    		getAwardBySignIn().then(({data})=>{
    			console.log(data);
    			this.getData();
    		})
    	}
    }
  }
</script>
<style scoped>
	.head{
		height:190px;
		background:url("http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_bg.png") no-repeat;
		background-size:100% 100%;
		color:#fff;
	}
	.head .flex img{
		height:1rem;
		margin-right:0.4rem;
	}
	.qiandao-btn-box{
		width:7.1rem;
		height:7.1rem;
		margin:0.5rem auto;
		line-height:7.1rem;
		text-align:center;
		background: url("http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV4/app/member/wapImages/qiandao_btn.png") no-repeat;
		background-size:100% 100%;
		font-size:1.2rem;
	}
	.qiandao-ok{
		width:7.1rem;
		height:7.1rem;
		margin:0.5rem auto;
		text-align:center;
		font-size:1.2rem;
		box-sizing:border-box;
	    -moz-box-sizing:border-box; /* Firefox */
	    -webkit-box-sizing:border-box; /* Safari */
	    border-radius:100%;
	    background:#fff;
	    border:5px solid #fd9096;
	}
	.data-now{
		padding:1rem 5% 0;
		text-align:center;
		color:rgba(255,64,64,1);
	}
	.data-now p{
		padding-bottom:0.9rem;
		border-bottom:2px solid #eee;
	}
	.date-nav ul{
		padding:0 1%;
		margin-top:1.2rem;
	}
	.date-nav ul li{
		width:14%;
		text-align:center;
		font-size:1.2rem;
		color:#999;
	}
	.date-box ul{
		padding:0rem 1%;
	}
	.date-box ul li{
		width:14%;
		text-align:center;
		position:relative;
		margin-top:1.2rem;
		font-size:1.2rem;
	}
	.date-box ul li p{
		display:inline-block;
		width:2.4rem;
		height:2.4rem;
		line-height:2.4rem;
		border-radius:50%;
	}
	.date-box ul li img{
		position:absolute;
		bottom:-10px;
		left:50%;
		margin-left:-8px;
	}
	li.active p{
		background:rgba(255,64,64,1);
		color:#fff;
	}
</style>
