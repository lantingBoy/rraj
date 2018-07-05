<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="nav-left nav-channel" @click="back">
          <a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray" ></a>
        </div>
        <div class="nav-head">更多</div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <div class="body">
      <div class="panel margin-top-0_5rem">
        <div class="list-cell-arrow-right">
          <div class=" col col-2" @click="goAbout">
            <div class="col-cell">关于我们</div>
            <div class="col-cell text-gray text-normal-min text-right">让金融美好生活</div>
          </div>
        </div>
        <div class="list-cell-arrow-right">
          <div class=" col col-2" @click="goAbout"><!--ui-dialog="risk-test"-->
            <div class="col-cell">风险测试</div>
            <div class="col-cell text-gray text-normal-min text-right">测测你的风险偏好</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  export default{
      methods:{
          back(){
              this.$router.back();
          },
        goAbout(){
          MessageBox.confirm('请下载APP查看').then(action => {
            if(action==='confirm'){
            }
          }).catch(err=>{
            if(err==='cancel'){
            }
          })
        }
      }
  }
</script>
<style>

</style>
