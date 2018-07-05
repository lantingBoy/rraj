<template>
	<div>
		<nav class="nav" style="background:#fff;line-height:3rem">
			<div class="nav-left" style="padding-top:0">
				<div @click="back">
					<span class="icon icon-left iconfont text-gray"></span>
				</div>
			</div>
			<div class="nav-head" style="padding-top:0">
				<a href="javascript:;" style="font-size:18px">
					活动中心
				</a>
			</div>
			<div class="nav-right" style="font-size:14px;padding-top:0" @click="dialogFaxian">
				兑换
			</div>
		</nav>
		<div class="list-box">
			<ul>
				<li v-for="item in activityList">
					<div class="img-box">
						<img :src="item.image" alt="">
						<div v-if="new Date().getTime()>new Date(item.date.split('-')[1]).getTime()" class="is-end">活动已结束</div>
					</div>
					<p style="margin-top:0.3rem;font-size:0.9rem" class="mt-5">{{item.title}}</p>
					<p style="color:#666" class="f12">{{item.date}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
  import{dialogFaxian,activityList} from '../../api/faxian'
export default{
    data(){
      return{
      	pageNo:1,
      	activityList:[],
      }
    },
    created(){
    	this.getData(this.pageNo);
    	console.log(new Date("2017.12.19").getTime())
    },
    methods:{
    	getData(pageNo){
    		activityList(pageNo).then(({data})=>{
    			var indexData = data.data;
    			this.activityList = indexData;
    			console.log(data)
    		})
    	},
    	back(){
    		this.$router.back()
    	},
    	dialogFaxian(){
    		dialogFaxian();
    	}
    }
  }
</script>
<style scoped>
	.list-box{
		margin-top:8px;
	}
	.list-box li{
		padding:0 0.5rem 0.6rem;
		background:#fff;
		margin-bottom:10px;
	}
	.list-box li img{
		width:100%;
	}
	.img-box{
		position:relative;
		font-size:0;
	}
	.is-end{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		line-height:8rem;
		color:#fff;
		background:rgba(0,0,0,0.7);
		text-align:center;
		font-size:1rem;
	}
</style>
