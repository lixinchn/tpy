<template>
  <div class="wrapper">
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
    <blog-list-item v-for="blog in blogList" :blog="blog"></blog-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BlogListItem from './BlogListItem'

  export default {
    name: 'blog-list',
    components: {BlogListItem},
    props: {
    },
    data () {
      return {
        category: 0,
        page: 0,
      }
    },

    methods: {
      
    },

    created() {
    },

    computed: {
      ...mapGetters([
        'blogList',
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    text-align: left;
  }
</style>
