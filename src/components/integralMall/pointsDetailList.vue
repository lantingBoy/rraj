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
						积分明细
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0">
				</div>
			</nav>
		</div>
		<div class="user-mall-box">
			<div class="new-mall text-center">
				<p class="f36">{{totalPoints}}</p>
				<p class="color-999 f12">我的积分</p>
			</div>
			<div class="flex">
				<div class="flex-1 text-center border-right">
					<p class="mt-5">{{accumulateTotalPoints}}</p>
					<p class="color-999 f12">累计获得</p>
				</div>
				<div class="flex-1 text-center">
					<p class="mt-5">{{accumulateTotalPoints}}</p>
					<p class="color-999 f12">累计使用</p>
				</div>
				<div class="flex-1 text-center  border-left">
					<p class="mt-5">{{accumulateTotalPoints}}</p>
					<p class="color-999 f12">过期积分</p>
				</div>
			</div>
		</div>
		<div class="points-lists">
			<ul>
				<li class="flex flex-align-center" v-for="item in pointsList">
					<div class="flex-1">
						<p class="mt-5">{{item.name}}</p>
						<p class="color-999 f12">{{item.time}}</p>
					</div>
					<div :class="item.value<0?'color-333':'color-ff4040'">
						{{item.value}}
					</div>
				</li>
			</ul>
		</div>
    <loading v-show="showLoading"></loading>
	</div>

</template>
<script>
 import{pointsDetailList} from '../../api/faxian'
 import Loading from "../loading/loading.vue";
export default{
  components: {Loading},
  data(){
      return{
        pointsList:[
        {
        	name:'抽奖积分',
        	time:'2017-05-06',
        	value:10
        },{
        	name:'抽奖积分',
        	time:'2017-05-06',
        	value:-10
        }],//明细列表
        accumulateTotalPoints:null,//总收入
        accumulateUsedPoints:null,//总支出
        expiredPoints:null,//过期积分
        totalPoints:null,//当前可用积分
        pageNo:1,
        total:0,
        showLoading:true
      }
    },
    created(){
      this.getData();
    },
    methods:{
    	getData(){
    		pointsDetailList(this.pageNo).then(({data})=>{
		        console.log(data)
          this.showLoading=false;
		        var allData = data.data;
		        this.pointsList = allData.pointsList;//明细列表
		        this.accumulateTotalPoints = allData.accumulateTotalPoints;//总收入
		        this.accumulateUsedPoints = allData.accumulateUsedPoints;//总支出
		        this.expiredPoints = allData.expiredPoints;//过期积分
		        this.totalPoints = allData.totalPoints;//当前可用积分
		    })
    	},
    	back(){
    		this.$router.back()
    	}
    }
  }
</script>
<style scoped>
	.color-333{
		color:#333;
	}
	.color-ff4040{
		color:#ff4040;
	}
	.user-mall-box{
		padding:0.9rem;
		background:#fff;
	}
	.user-mall-box .flex>div{
		padding:0.2rem 0;
	}
	.new-mall{
		margin-bottom:1rem;
	}
	.border-right{
		border-right:1px solid #eee;
	}
	.border-left{
		border-left:1px solid #eee;
	}
	.points-lists{
		margin-top:10px;
		background:#fff;
	}
	.points-lists li{
		padding:0.8rem 1rem;
		border-bottom:1px solid #eee;
	}
</style>
