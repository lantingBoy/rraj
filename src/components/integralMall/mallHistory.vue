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
						兑换记录
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0">
				</div>
			</nav>
		</div>
		<div class="total-mall">
			<p>{{totalPoints}}<span style="color:#999;font-size:1rem">积分</span></p>
		</div>
	</div>

</template>
<script>
 import{integralMallIndex,getPointsGoodsByCategory} from '../../api/faxian'
export default{
    data(){
      return{
        totalPoints:null,
      }
    },
    created(){
    	integralMallIndex().then(({data})=>{
	      	console.log(data)
	      	var homeData = data.data;
	      	this.totalPoints = homeData.totalPoints;
	      })
    },
    methods:{
    	back(){
    		this.$router.back()
    	}
    }
  }
</script>
<style scoped>
	.total-mall{
		text-align:center;
		background:#fff;
		font-size:2.6rem;
		height:5.6rem;
		line-height:5.6rem;
	}
</style>
