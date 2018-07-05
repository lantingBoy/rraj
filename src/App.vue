<template>
  <div id="app" >
    <router-view></router-view>
    <NavNormal v-show="$route.meta.show"></NavNormal>
  </div>
</template>

<script>
	import HeaderNormal from 'components/comm/HeaderNormal'
	import NavNormal from 'components/comm/NavNormal'
	export default{
	  components: { NavNormal, HeaderNormal}
	}


</script>
