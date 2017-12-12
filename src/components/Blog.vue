<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <BlogBody :width="maxWidth"></BlogBody>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import BlogBody from './blog/BlogBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'blog',
    components: {CommonHeader, BlogBody, CommonTail},
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
