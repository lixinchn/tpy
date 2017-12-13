<template>
  <div style="width: 100%; background: #290043; position: relative;" :style="{top: top}">
    <el-row class="i-t-wrapper" type="flex" justify="space-around" :style="{width: width}">
      <div><a href="#/about" class="i-t-anchor" style="opacity: 0.45;">About us</a></div>
      <div><a href="#/blog" class="i-t-anchor" style="opacity: 0.45;">Blog</a></div>
      <div><a href="#/contact" class="i-t-anchor" style="opacity: 0.45;">Contact</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.45;">FAQ</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">Terms of Service</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">Privacy Policy</a></div>
      <div><a href="#" class="i-t-anchor" style="opacity: 0.2;">@2017 sogou-inc</a></div>
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
      default: '-8px',
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


    .i-t-anchor {
      font-family: 'Avenir Book';
      font-size: 16px;
      color: #fff;
      text-decoration: none;
    }
  }
</style>
