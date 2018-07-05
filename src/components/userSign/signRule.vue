<template>
	<div  class="pt-3">
		<div class="header">
			<nav class="nav" style="background:#fff;line-height:3rem">
				<div class="nav-left" style="padding-top:0">
					<div @click="back">
						<span class="icon icon-left iconfont text-gray"></span>
					</div>
				</div> 
				<div class="nav-head" style="padding-top:0">
					<a href="javascript:;" style="font-size:18px">
						签到规则
					</a>
				</div> 
				<div class="nav-right" style="font-size:14px;padding-top:0">
				</div>
			</nav>
		</div>
		<div style="padding:0 1rem;background:#fff">
			<h2 class="tit">规则说明</h2>
		    <div class="content">
		        <p>1.用户通过签到可获得积分奖励，积分奖励如下：</p>
		    </div>
		    <div class="">
		        <table cellpadding="0" cellspacing="0" width="100%">
		            <tr>
		                <th width="30%">天数</th>
		                <th width="70%">积分奖励</th>
		            </tr>
		            <tr>
		                <td>第1天</td>
		                <td>+3</td>
		            </tr>
		            <tr>
		                <td>第2天</td>
		                <td>+4</td>
		            </tr>
		            <tr>
		                <td>第3天</td>
		                <td>+5</td>
		            </tr>
		            <tr>
		                <td>第4天</td>
		                <td>+6</td>
		            </tr>
		            <tr>
		                <td>第5天</td>
		                <td>+7</td>
		            </tr>
		            <tr>
		                <td>第6天</td>
		                <td>+8</td>
		            </tr>
		            <tr>
		                <td>第7天</td>
		                <td>+9</td>
		            </tr>
		            <tr>
		                <td>第8天</td>
		                <td>+10</td>
		            </tr>
		            <tr>
		                <td>第9天</td>
		                <td>+15</td>
		            </tr>
		            <tr>
		                <td>连续签到</td>
		                <td>+15</td>
		            </tr>
		        </table>
		    </div>

		    <div class="content">
		        <br>
		        <p>2.签到以自然月为一个循环，若断签或跨月，则需重新计算；</p>
		        <p>3.在一个自然月内任意日期连续签到15天可获得签到礼物一份，每人每月仅限获得1次。</p>
		    </div>
		</div>
	</div>
</template>
<script>
export default{
    data(){
      
    },
    created(){
    	
    },
    methods:{
    	back(){
    		this.$router.back()
    	}
    }
  }
</script>
<style scoped>
	.tit{ font-size: 1rem; padding-bottom: .5rem;  font-weight: 800; padding-top:1rem;}

    table{border-top: 1px solid #dbdbdb; border-left:1px solid #dbdbdb;}
    table tr{}
    table tr th,
    table tr td{ text-align: center; border-bottom: 1px solid #dbdbdb; border-right:1px solid #dbdbdb; padding: .375rem; font-size: .875rem; vertical-align: middle}
    table tr th{ background-color: #F0F0F0; font-weight: 700}
    table tr th img,
    table tr td img{ vertical-align: middle; max-width: 1.5rem; }

    .content{ font-size: .875rem; color: #666; border-bottom: 1px solid #eee; padding-bottom: 1.25rem}
    .content p{ padding-top: .5rem; color: #666;}
    .content p:first-child{ padding-top: 0}
    .content:last-child{ border-bottom: 0}
</style>