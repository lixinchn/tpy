<template>
  <div class="wrapper">
    <!-- <img :src="blog.thumUrl" class="thumb"> -->
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7YDjHjnP5DURcPrZpcFPO6BI6I4kOiqTvNeCy4NRYFbA--5J" class="thumb">
    <!-- <p class="title">{{blog.title}}</p> -->
    <p class="title">test test test test test test test test test test test test test test test test test test test test test test</p>
    <div class="detail">
      <p>{{blog.pubTime}}</p>
      <img src="/static/img/blog/tag.png" style="vertical-align: middle; margin-left: 10px;">
      <p>{{blog.bucket}}</p>
      <img src="/static/img/blog/comment.png" style="vertical-align: middle; float: right;">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog-list-item',
    components: {},
    props: {
      blog: {
        type: Object,
      }
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
  .wrapper {
    display: inline-block;
    width: 265px;
    height: 264px;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    margin: 0px 25px 30px 0px;
    position: relative;
    cursor: pointer;
    &:hover {
      bottom: 6px;
      box-shadow: 3px 3px 32px #9d9d9d;
    }

    .thumb {
      width: 100%;
      height: 178px;
      border: 0;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    .title {
      display: block;
      display: -webkit-box;
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded";
      font-size: 16px;
      line-height: 18px;
      color: #000;
      text-align: left;
      height: 36px;
      margin: 0px 10px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail {
      text-align: left;
      font-size: 12px;
      margin: 25px 12px 0px 12px;
      height: 20px;
      * {
        display: inline-block;
        margin: 0;
      }
    }
  }
</style>
