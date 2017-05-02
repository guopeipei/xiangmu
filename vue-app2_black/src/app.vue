<template>
<div>
  <router-view></router-view>

  <ele-footer></ele-footer>
</div>
</template>

<script>
  import footer from './components/footer/footer.vue'
  export default {
    components: {
      'ele-footer': footer
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">

</style>
