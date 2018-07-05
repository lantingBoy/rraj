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
					签到有礼
				</a>
			</div>
			<div class="nav-right" style="font-size:14px;padding-top:0">
			</div>
		</nav>
	</div>
</template>
<script>

export default{
    data(){
      return{

      }
    },
    created(){
    	this.getData();
    },
    methods:{
    	getData(){

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

</style>
