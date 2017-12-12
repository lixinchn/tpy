<template>
  <div class="b-b-wrapper">
    <div class="split"></div>
    <div class="content-wrapper" :style="{width: width}">
      <blog-list style="width: 82%; float: left; min-height: 500px;"></blog-list>
      <blog-tag style="width: 18%; float: left;"></blog-tag>
    </div>
  </div>
</template>

<script>
  import BlogList from './BlogList'
  import BlogTag from './BlogTag'
  import {createGetParams} from '../../utils/params'

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
      getBlogList() {
        const data = {cat: this.category, p: this.page}
        this.$store.dispatch('BLOG_GetBlogList', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },

      getBlogListByTag(tag) {
        const data = {tag: tag}
        this.$store.dispatch('BLOG_SearchByKey', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },
    },

    created() {
      const tag = this.$route.query.tag ? decodeURIComponent(this.$route.query.tag) : ''
      if (tag)
        this.getBlogListByTag(tag)
      else
        this.getBlogList()
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
      margin: 0px auto 60px auto;
      overflow: auto;
    }
  }
</style>
