<template>
  <div class="b-c-wrapper" :style="{width: width}">
    <p class="b-c-title">LEAVE A REPLY</p>
    <div class="b-c-split"></div>
    <p style="margin: 32px 0 30px 0;">Your email address will not be published. Required fields are marked*</p>
    <p class="b-c-label">Comment</p>
    <textarea style="height: 215px;" class="b-c-input"></textarea>
    <p class="b-c-label">Name*</p>
    <input type="text" style="" class="b-c-input">
    <p class="b-c-label">Email*</p>
    <input type="text" style="" class="b-c-input">
    <p class="b-c-label">Facebook</p>
    <input type="text" style="" class="b-c-input">
    <div style="width: 100%; overflow: auto;">
      <div class="b-c-btn"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog-comment',
    components: {},
    props: {
      width: {
        type: String,
        default: '100%',
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
  .b-c-wrapper {
    padding: 10px 56px;
    background: #f9f9f9;
    text-align: left;
    margin: 20px auto 30px auto;
    font-size: 16px;
    font-family: "Avenir Book";

    .b-c-title {
    }

    .b-c-split {
      width: 100%;
      height: 1px;
      background: #e5e5e5;
    }

    .b-c-input {
       border: 1px solid #e7e7e7;
       width: 100%;
       max-width: 100%;
       height: 32px;
       font-size: 16px;
    }

    .b-c-label {
      margin-bottom: 0px;
    }

    .b-c-btn {
      width: 133px;
      height: 40px;
      cursor: pointer;
      margin-top: 30px;
      float: right;
      background: url(/static/img/blog/btn.png) no-repeat;
      &:hover {
        background: url(/static/img/blog/btn-hover.png);
      }
      &:active {
        background: url(/static/img/blog/btn-active.png);
      }
    }
  }
</style>
