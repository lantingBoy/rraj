<template>
	<div class="container1 pt-3">
		<div class="header">
			<nav class="nav" style="background:#fff;line-height:3rem">
				<div class="nav-left" style="padding-top:0">
					<div @click="back">
						<span class="icon icon-left iconfont text-gray"></span>
					</div>
				</div>
				<div class="nav-head" style="padding-top:0">
					<a href="javascript:;" style="font-size:18px">
						积分规则
					</a>
				</div>
				<div class="nav-right" style="font-size:14px;padding-top:0"></div>
			</nav>
		</div>
		<div>
			<ul class="q-lists">
				<li>
					<p class="q-title">Q：积分有什么用？</p>
					<div class="flex q-content">
						<div class="mr-5">A：</div>
						<div style="border-bottom:1px solid #f7f7f7;padding-bottom:1.2rem">
							<p>1.每月通过投资新增的积分可以参与“积分龙虎榜"活动，赢万元大奖。</p>
							<p style="margin-top:0.5rem">2.积分可以在积分商城兑换惊喜礼品，如理财红包、体验金、京东卡等。</p>
						</div>
					</div>
				</li>
				<li>
					<p class="q-title">Q：积分有什么用？</p>
					<div class="flex q-content">
						<div class="mr-5">A：</div>
						<div style="border-bottom:1px solid #f7f7f7;padding-bottom:1.2rem">
							<p>1.投资稳赚计划积分计算公式：</p>
							<p style="margin-top:0.3rem">积分=(投资金额x项目周期÷1000)x积分加速系数</p>
							<p style="margin-top:0.3rem;color:#999;font-size:0.7rem" >(会员等级越高，投资金额越多，周期越长，获得的积分就越多）</p>
							<p style="margin-top:0.5rem">2.分享任意活动页面，每天可领5积分。</p>
							<p style="margin-top:0.5rem">3.邀请好友投资任意一笔稳赚计划得100积分。</p>
							<p style="margin-top:0.5rem">4.其他签到、抽奖、翻牌、参与活动获得额外积分奖励。</p>
						</div>
					</div>
				</li>
				<li>
					<p class="q-title">Q：积分会过期吗？</p>
					<div class="flex q-content">
						<div class="mr-5">A：</div>
						<div style="border-bottom:1px solid #f7f7f7;padding-bottom:1.2rem">
							<p>积分有效期最长一年，最短半年。即上半年获得的积分当年12月31日清空，下半年获得的积分次年6月30日清空。</p>
						</div>
					</div>
				</li>
				<li>
					<p class="q-title">Q：我用积分兑换礼品后会影响龙虎榜排名吗？</p>
					<div class="flex q-content">
						<div class="mr-5">A：</div>
						<div style="padding-bottom:1.2rem">
							<p>不会。积分龙虎榜只统计当月投资新增的积分，积分兑换不会对排名产生任何影响。</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>
<script>
 import{integralMallIndex} from '../../api/faxian'
export default{
    data(){
      return{

      }
    },
    created(){
    },
    methods:{
    	back(){
    		this.$router.back()
    	},
    }
  }
</script>
<style>
	.q-title{
		font-size:1rem;
		color:rgba(51,51,51,1);
	}
	.q-lists{
		padding:1rem;
		background:#fff;
	}
	.q-lists li{
		margin-top:1.2rem;
	}
	.q-content{
		color:#666;
		font-size:0.84rem;
		margin-top:0.5rem;
		line-height:1.2rem;
	}
	.mr-5{
		margin-right:5px;
	}
</style>
