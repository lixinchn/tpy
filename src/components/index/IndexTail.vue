<template>
  <el-row class="i-t-wrapper" type="flex" justify="space-around">
    <el-col><a href="#" class="i-t-anchor">About us</a></el-col>
    <el-col><a href="#" class="i-t-anchor">Blog</a></el-col>
    <el-col><a href="#" class="i-t-anchor">Contact</a></el-col>
    <el-col><a href="#" class="i-t-anchor">FAQ</a></el-col>
    <el-col><a href="#" class="i-t-anchor">Terms of Service</a></el-col>
    <el-col><a href="#" class="i-t-anchor">Privacy Policy</a></el-col>
    <el-col><a href="#" class="i-t-anchor">@2017 sogou-inc</a></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index-tail',
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
    width: 100%;
    background: #290043;
    position: relative;
    top: -8px;

    .i-t-anchor {
      font-family: 'Avenir Book';
      font-size: 16px;
      color: #fff;
      text-decoration: none;
    }
  }
</style>
