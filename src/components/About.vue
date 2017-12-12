<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <about-body :width="maxWidth"></about-body>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import AboutBody from './about/AboutBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'about',
    components: {CommonHeader, AboutBody, CommonTail},
    data () {
      return {
        maxWidth: '1080px',
        top: '0px',
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
