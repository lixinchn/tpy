<template>
  <div class="h-container" :style="{width: width}">
    <span class="v-m-helper"></span><img src="/static/img/logo.png" class="v-m-content h-logo" @click="onGoToIndex">
    <span class="v-m-helper"></span><img src="/static/img/typany.png" class="v-m-content h-title" @click="onGoToIndex">
    <router-link to="/android" class="link h-link" style="margin-right: 65px;">Android</router-link>
    <router-link to="/ios" class="link h-link" style="margin-right: 54px;">iOS</router-link>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
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
    onGoToIndex() {
      this.$router.push({name: 'index'})
    }
  },

  created() {
  },

  computed: {
  }
}
</script>

<style lang="scss" scoped>
  .h-container {
    height: 85px;
    text-align: left;
    margin: 0 auto;

    .v-m-content {
      cursor: pointer;
    }

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
