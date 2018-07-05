<template>
  <div class="active-con">
    <div class="a-item" v-for="item in list" @click="go(item.id)">
      <div class="a-time">{{item.createTime}}</div>
      <div class="a-panel">
        <img :src="item.imgUrl" width="70%">
        <p class="a-item-p p1">{{item.title}}</p>
        <p class="a-item-p p2">{{item.source}}</p>
        <group>
          <cell is-link title="查看详情">
          </cell>
        </group>
      </div>
    </div>
    <loading v-show="!list.length"></loading>
  </div>
</template>
<script>
  import { Group,Cell } from 'vux'
  import loading from '../loading/loading.vue'
  export default{
    components:{
      Cell,
      Group,
      loading
    },
    data(){
      return{
        list:[]
      }
    },
    created(){
      /*let oTime=Number(new Date().getTime());
        let token=passToken(oTime);
      news(token,1,10,1,oTime).then((res)=>{
          console.log(res);
          this.list=res.data.data;
      })*/
      this.$fetch.api_data.getNewsData({token:'',pageNo:1,pageSize:10,type:1}).then((res)=>{
          console.log(2)
        this.list=res.data.data;
      })
    },
    methods:{
        go(id){
          this.$router.push(`/activeDetail/${id}`)
        }
    }
  }
</script>
<style lang="less">
  .active-con{
    padding-top:3rem;
    .a-item{
      padding-top:.5rem;
      .a-time{
        width:38%;
        font-size:.7rem;
        color:#fff;
        padding:.3rem 0;
        margin:0 auto;
        text-align: center;
        background: rgb(221,221,221);
      }
      .a-panel{
        margin-top:.5rem;
        background:#fff;
        padding:1rem 1rem 0 1rem;
        font-family: "PingFang SC Medium";
        .a-item-p{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width:90%;
        }
        .p1{
          font-weight: bold;
          font-size: 1rem;
          color:#333;
        }
        .p2{
          margin-top:.5rem;
          font-size:.9rem;
        }
        .weui-cell{
          padding:10px 0;
          font-size:.9rem;
        }
      }
    }

  }
</style>
