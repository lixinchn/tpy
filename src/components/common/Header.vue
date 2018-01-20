<template>
  <div class="h-container" :style="{width: width}">
    <div class="h-logo-wrapper">
      <img src="/static/img/logo.png" class="v-m-content h-logo" @click="onGoToIndex">
      <img src="/static/img/typany.png" class="v-m-content h-title" @click="onGoToIndex">
    </div>
    <router-link to="/android" class="link h-link h-link-android" style="margin-right: 65px;">Android</router-link>
    <router-link to="/ios" class="link h-link h-link-ios" style="margin-right: 54px;">iOS</router-link>
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

    .h-logo-wrapper {
      display: inline-block;
      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=head_logo&action=click);
        display: none;
      }
    }

    .v-m-content {
      cursor: pointer;
      vertical-align: middle;
    }

    .h-logo {
      margin-left: 37px;
      margin-top: 15px;
    }

    .h-title {
      margin-left: 21px;
      margin-top: 15px;
    }

    .h-link {
      float: right;
      color: #404060;
      line-height: 85px;
    }

    .h-link-android {
      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=head_android&action=click);
        display: none;
      }
    }
    .h-link-ios {
      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=head_ios&action=click);
        display: none;
      }
    }
  }
</style>
