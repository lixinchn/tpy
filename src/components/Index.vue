<template>
  <div class="index">
    <index-header></index-header>
    <index-body></index-body>
    <index-tail></index-tail>
  </div>
</template>

<script>
  import IndexHeader from './index/IndexHeader'
  import IndexBody from './index/IndexBody'
  import IndexTail from './index/IndexTail'


  export default {
    name: 'index',
    components: {IndexHeader, IndexBody, IndexTail},
    data () {
      return {
      }
    },

    methods: {
    },

    created() {
    },

    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
