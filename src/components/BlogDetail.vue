<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <blog-detail-body :width="maxWidth" :blogId="blogId"></blog-detail-body>
    <blog-comment :width="maxWidth" :blogId="blogId"></blog-comment>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import BlogDetailBody from './blog/BlogDetailBody'
  import BlogComment from './blog/BlogComment'
  import CommonTail from './common/Tail'

  export default {
    name: 'blog',
    components: {CommonHeader, BlogDetailBody, BlogComment, CommonTail},
    data () {
      return {
        maxWidth: '1080px',
        top: '0px',
        blogId: 0,
      }
    },

    methods: {
    },

    created() {
      this.blogId = this.$route.query.id
    },

    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
