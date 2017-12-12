<template>
  <div class="wrapper" style="">
    <div class="search">
      <input type="text" v-model="searchKey" v-on:keyup.enter="onSearch(searchKey)">
      <img src="/static/img/blog/search.png" @click="onSearch(searchKey)">
    </div>

    <div class="tag-list">
      <li v-for="tag in tagList" @click="onSearch(tag.title)">{{tag.title}}</li>
    </div>
  </div>
</template>

<script>
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'blog-tag',
    components: {},
    props: {
    },
    data () {
      return {
        tagList: [],
        searchKey: '',
      }
    },

    methods: {
      getBlogTag() {
        const data = {cat: this.category, p: this.page}
        this.$store.dispatch('BLOG_GetBlogCategory', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          this.tagList = data.data.list
        }).catch(err => {
          this.$message.error(err)
        })
      },

      onSearch(searchKeyText) {
        const searchKey = searchKeyText.trim()
        if (!searchKey)
          return
        // 如果当前页面不是 blog list 页面，就带着参数跳回去
        if (this.$route.path !== '/blog') {
          this.$router.push({path: '/blog', query: {tag: searchKey}})
          return
        }
        const data = {tag: searchKey}
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
      this.getBlogTag()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background: #f6f6f6;

    .search {
      position: relative;
      border-radius: 2px;
      padding: 5px 5px 10px 5px;
      margin-bottom: 10px;
      input {
        width: 176px;
        height: 32px;
        border: 1px solid #f1f1f1;
        padding: 0;
      }

      img {
        position: absolute;
        right: 15px;
        width: 18px;
        height: 18px;
        margin-top: 8px;
        cursor: pointer;
      }
    }

    .tag-list {
      text-align: left;
      padding-left: 10px;
      font-size: 12px;
      font-family: "ArialMT";
      
      li {
        cursor: pointer;
        margin-bottom: 12px;
        list-style: circle;
      }

      &:last-child {
        margin-bottom: 50px;
      }
    }
  }
</style>
