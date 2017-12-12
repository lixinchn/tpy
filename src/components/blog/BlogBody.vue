<template>
  <div class="b-b-wrapper">
    <div class="split"></div>
    <div class="content-wrapper" :style="{width: width}">
      <blog-list style="width: 82%; float: left;"></blog-list>
      <blog-tag style="width: 18%; float: left;"></blog-tag>
    </div>
  </div>
</template>

<script>
  import BlogList from './BlogList'
  import BlogTag from './BlogTag'

  export default {
    name: 'blog-body',
    components: {BlogList, BlogTag},
    props: {
      width: {
        type: String,
        default: '100%',
      },
    },
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
  .b-b-wrapper {
    width: 100%;
    .split {
      width: 100%;
      height: 4px;
      background: url(/static/img/blog/split.png) no-repeat;
      background-size: 100% 100%;
    }
    .content-wrapper {
      padding: 0 30px;
      margin: 20px auto 60px auto;
      overflow: auto;
    }
  }
</style>
