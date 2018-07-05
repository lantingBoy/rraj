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
						签到奖励
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0">
				</div>
			</nav>
		</div>
		<div>
			<ul v-if="lists.length>0" class="sign-lists-box">
				<li class="flex flex-align-center" v-for="item in lists">
					<div class="flex-1">
						<p>{{item.signDays}}</p>
						<p class="f12" style="color:rgba(102,102,102,1);margin-top:0.3rem">{{item.time}}</p>
					</div>
					<div style="color:rgba(255,64,64,1);">
						{{item.giftName}}
					</div>
				</li>
			</ul>
			<div v-else class="not-nums">
				没有签到记录
			</div>
		</div>
	</div>
</template>
<script>
  import{getSignInRecord} from '../../api/faxian'
export default{
    data(){
      return{
      	pageNo:1,
      	lists:[],
      }
    },
    created(){
    	this.getData();
    },
    methods:{
    	getData(){
    		getSignInRecord(this.pageNo).then(({data})=>{
    			console.log(data);
    			this.lists = data.data;
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
    	}
    }
  }
</script>
<style scoped>
	.sign-lists-box li{
		border-bottom:2px solid rgba(218,227,231,1);
		padding:0.7rem 1rem;
		background:#fff;
	}
	.not-nums{
		height:190px;
		/*border-bottom:2px solid rgba(218,227,231,1);*/
		line-height:190px;
		text-align:center;
		color:#999;
		font-size:1.2rem;
	}
</style>
