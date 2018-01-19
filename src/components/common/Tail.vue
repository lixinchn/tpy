<template>
  <div style="width: 100%; background: #290043; position: relative;" :style="{top: top}">
    <el-row class="i-t-wrapper">
      <div class="i-t-d-wrapper i-about"><a href="/about" class="i-t-anchor" style="opacity: 0.45;">About us</a></div>
      <div class="i-t-d-wrapper i-blog"><a href="/blog" class="i-t-anchor" style="opacity: 0.45;">Blog</a></div>
      <div class="i-t-d-wrapper i-contact"><a href="/contact" class="i-t-anchor" style="opacity: 0.45;">Contact</a></div>
    </el-row>
    <div style="width: 100%;"><div class="i-split"></div></div>
    <el-row class="i-t-wrapper">
      <div class="i-t-d-wrapper i-service"><a href="/service" class="i-t-anchor" style="opacity: 0.2;">Terms of Service</a></div>
      <div class="i-v-split"></div>
      <div class="i-t-d-wrapper i-policy"><a href="/policy" class="i-t-anchor" style="opacity: 0.2; margin: 0;">Privacy Policy</a></div>
      <div class="i-v-split"></div>
      <div class="i-t-d-wrapper"><p class="i-t-anchor" style="opacity: 0.2; margin: 0;">Copyright © 2018 TYPANY® All rights reserved.</p></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'common-tail',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    top: {
      type: String,
      default: '0px',
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
  .i-t-wrapper {
    height: 94px;
    line-height: 94px;
    margin: 0 auto;
    text-align: left;
    padding-left: 75px;

    .i-t-d-wrapper {
      display: inline-block;
      margin: 0 25px;
    }

    .i-t-anchor {
      font-family: Arial, "Avenir Book";
      font-size: 16px;
      color: #fff;
      text-decoration: none;
    }

    .i-v-split {
      display: inline-block;
      height: 20px;
      width: 1px;
      background: #581285;
      vertical-align: middle;
    }
  }

  .i-split {
    width: 96%;
    height: 1px;
    background: #581285;
    margin: 0 auto;
  }

  .i-about {
    &:active::after {
      content: url(http://typanyweb.global.ime.sogou.com/web.gif?loc=tail_about&action=click);
      display: none;
    }
  }

  .i-blog {
    &:active::after {
      content: url(http://typanyweb.global.ime.sogou.com/web.gif?loc=tail_blog&action=click);
      display: none;
    }
  }

  .i-contact {
    &:active::after {
      content: url(http://typanyweb.global.ime.sogou.com/web.gif?loc=tail_contact&action=click);
      display: none;
    }
  }

  .i-service {
    &:active::after {
      content: url(http://typanyweb.global.ime.sogou.com/web.gif?loc=tail_service&action=click);
      display: none;
    }
  }

  .i-policy {
    &:active::after {
      content: url(http://typanyweb.global.ime.sogou.com/web.gif?loc=tail_policy&action=click);
      display: none;
    }
  }
</style>
