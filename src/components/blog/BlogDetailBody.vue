<template>
  <div class="wrapper">
    <img class="gallary" :src="thumbSrc" :style="{width: width}">
    <div class="content-wrapper" :style="{width: width}">
      <div style="width: 82%; float: left; min-height: 500px;">
        <div v-html="content" class="blog-content"></div>
      </div>
      <blog-tag style="width: 18%; float: left;"></blog-tag>
    </div>
  </div>
</template>

<script>
  import BlogTag from './BlogTag'
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'blog-detail-body',
    components: {BlogTag},
    props: {
      width: {
        type: String,
        default: '100%',
      },
      blogId: {
        type: String,
      },
      thumbSrc: {
        type: String,
      },
    },
    data () {
      return {
        content: '',
      }
    },

    methods: {
      getBlogInfo() {
        const data = {id: this.blogId}
        this.$store.dispatch('BLOG_GetBlogInfo', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          this.content = decodeURIComponent(data.data)
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },

    created() {
      this.getBlogInfo()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    .gallary {
      height: 445px;
    }
    .content-wrapper {
      padding: 0 30px;
      margin: 20px auto 60px auto;
      overflow: auto;

      .blog-content {
        overflow: hidden;
        margin: 0 128px 0 70px;
      }
    }
  }
</style>
