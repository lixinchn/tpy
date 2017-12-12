<template>
  <div class="wrapper">
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
  </div>
</template>

<script>
  import BlogListItem from './BlogListItem'
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'blog-list',
    components: {BlogListItem},
    props: {
    },
    data () {
      return {
        category: 0,
        page: 0,
        blogList: [],
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
          this.blogList = data.data.list
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },

    created() {
      this.getBlogList()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    text-align: left;
  }
</style>
