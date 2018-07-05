<template>

</template>
<script>
  export default {
    data () {
      return {

      }
    },
    created() {
      this.$fetch.api_data.getLimitBank({token: ''}).then((res) => {
        console.log(res)
      })
    }
  }
</script>
<style>

</style>
