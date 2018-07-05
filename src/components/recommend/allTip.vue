<template>
  <div class="tip-con">
    <div  v-for="item in msg" @click="went(item.id)">
      <group style="margin:0;padding:0">
        <cell-box is-link style="margin-top:0!important">
          <img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrWebAppV4/page/recommend/ic_notice.png" width="7%">
          <div class="tip-msg">
            <p>{{item.title}}</p>
            <p>{{item.startTime}}</p>
          </div>
        </cell-box>
      </group>
    </div>
    <loading v-show="!msg.length"></loading>
  </div>
</template>

<script>

  import { Group, CellBox } from 'vux'
  import loading from '../loading/loading.vue'
  export default{
    data () {
      return {
        msg: []
      }
    },
    methods: {
      went (id) {
        this.$router.push(`/alltipDetail/${id}`)
      }
    },
    created () {
        setTimeout (() => {
          /*let oTime=Number(new Date().getTime());
          let token=passToken(oTime);
          notice(token,1,10,1,oTime).then((res)=>{
            console.log(res);
            if(res.data.resCode==1){
              this.msg=res.data.data;
            }
          })*/
          this.$fetch.api_data.getNoticeData({token: '', pageNo: 1, pageSize: 10, type: 1}).then((res) => {
            this.msg = res.data.data
          })
        }, 400)

    },
    components: {
      Group,
      CellBox,
      loading
    }
  }
</script>
<style lang="less" scoped>
  .tip-con{padding-top:3rem;
    .weui-cells:before{
      border:0!important;
    }
    .weui-cells{
      margin-top:0!important;
    }
    .weui-cells{margin-top:0!important;}
    .tip-msg{
      font-size:.9rem;
      padding-left:.6rem;
      color:#333;
      width:90%;
      p:first-child{
        width:92%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:last-child{
        color:#999;
        font-size:.75rem;
      }
    }
  }
</style>
