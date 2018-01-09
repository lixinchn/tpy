<template>
  <div class="b-b-wrapper">
    <div class="split"></div>
    <div class="content-wrapper" :style="{width: width}">
      <blog-list style="width: 82%; float: left; min-height: 500px;"></blog-list>
      <blog-tag style="width: 18%; float: left;"></blog-tag>
    </div>
    <div style="text-align: center; margin: 20px auto;" v-show="pending"><img src="/static/img/blog/loading.png" class="blog-loading"></div>
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
        page: 1,
        keyPage: 1,
        category: 0,
        noMoreBlog: false,
        pending: true,
        tag: '',
      }
    },

    methods: {
      getBlogList() {
        this.category = this.$route.query.category || 0
        const data = {cat: this.category, p: this.page}
        this.$store.dispatch('BLOG_GetBlogList', {data: createGetParams(data), p: this.page}).then((data) => {
          this.pending = false
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
          if (data.data.endFlag)
            this.noMoreBlog = true
        }).catch(err => {
          this.$message.error(err)
        })
      },

      getBlogListByTag(tag) {
        const data = {tag: tag, p: this.keyPage}
        this.$store.dispatch('BLOG_SearchByKey', {data: createGetParams(data), p: this.keyPage}).then((data) => {
          this.pending = false
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
          if (data.data.endFlag)
            this.noMoreBlog = true
        }).catch(err => {
          this.$message.error(err)
        })
      },

      handleScroll(e) {
        if (!this.noMoreBlog && !this.pending && (window.scrollY + document.body.offsetHeight) / document.body.scrollHeight >= 0.95) {
          this.pending = true

          if (this.tag) {
            ++this.keyPage
            this.getBlogListByTag(this.tag)
          } else {
            ++this.page
            this.getBlogList()
          }
        }
      },
    },

    created() {
      this.tag = this.$route.query.tag ? decodeURIComponent(this.$route.query.tag) : ''
      this.tag ? this.getBlogListByTag(this.tag) : this.getBlogList()
      window.addEventListener('scroll', this.handleScroll)
    },

    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  @-webkit-keyframes changehovertree{0%{-webkit-transform:rotate(0)} 50%{-webkit-transform:rotate(180deg)} 100%{-webkit-transform:rotate(360deg)}}
  @keyframes changehovertree{0%{transform:rotate(0)}  50%{transform:rotate(180deg)} 100%{transform:rotate(360deg)}}
  .blog-loading {
    width: 40px;
    animation:changehovertree 1s linear infinite;
  }

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
