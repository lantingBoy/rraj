<template>
  <div>
    <header class="header" >
      <nav class="n-nav">
        <div class="nav-left" @click="back"><span class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></span></div>
        <div class="nav-head1">
          <div class="nav-con">
            <div v-for="(item,index) in tabs" :class="{active:active==index}" @click="tab(index,item.view)">{{item.type}}</div>
          </div>
        </div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <child1 :is="currentView"></child1>
  </div>

</template>
<script>
  import child1 from './allTip.vue'
  import child2 from './activity.vue'
export default{
  data () {
    return {
      active: 0,
      currentView: 'child1',
      tabs: [
        {
          type: '公告',
          view: 'child1'
        }, {
          type: '动态',
          view: 'child2'
        }
      ]
    }
  },
  methods: {
    tab (index, view) {
      this.active = index
      this.currentView = view
    },
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    child1,
    child2
  }
}
</script>
<style lang="less">
  .header{
    .nav-head1{
     height:3rem;
      width:20%;
      padding:0;
      margin:0 auto;
      color:#333;
      font-size:.8rem;
      vertical-align: middle;
      display: flex;
      align-items: center;
      .nav-con{
        display: flex;
        width:100%;
        border:1px solid #ff4040;
        border-radius:.2rem;
        color:#ff4040;
        div{width:50%;padding:.25rem 0;}
      }
      .active{background:rgb(255,64,64);color:#fff}
    }
  }
</style>
