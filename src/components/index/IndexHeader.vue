<template>
  <div class="h-container">
    <span class="v-m-helper"></span><img src="/static/img/logo.png" class="v-m-content h-logo">
    <span class="v-m-helper"></span><img src="/static/img/typany.png" class="v-m-content h-title">
    <router-link to="/android" class="link h-link" style="margin-right: 65px;">Android</router-link>
    <router-link to="/ios" class="link h-link" style="margin-right: 54px;">iOS</router-link>
  </div>
</template>

<script>
export default {
  name: 'index-header',
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
  .h-container {
    width: 100%;
    height: 85px;
    text-align: left;

    .h-logo {
      margin-left: 37px;
    }

    .h-title {
      margin-left: 21px;
    }

    .h-link {
      float: right;
      color: #404060;
      line-height: 85px;
    }
  }
</style>
