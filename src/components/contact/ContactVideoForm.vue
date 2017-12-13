<template>
  <div class="c-v-f-wrapper">
    <div style="overflow: auto;">
      <p style="float: left; margin: 0;">Video</p>
      <div class="c-v-f-close"></div>
    </div>
    <div style="overflow: auto; margin-top: 20px;">
      <p style="float: left; margin: 0;" class="c-v-f-t">Add links from</p>
      <div class="c-v-f-youtube"></div>
    </div>
    <input v-model="url" class="c-v-f-input" placeholder="URL: http://">
    <div style="text-align: center;" v-show="isLoading"><img src="/static/img/contact/loading.gif"></div>
    <div style="overflow: auto;"><div v-bind:class="[url ? 'c-v-f-btn-normal' : 'c-v-f-btn-disabled', 'c-v-f-btn']" @click="onSubmit"></div></div>

  </div>
</template>

<script>
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'contact-video-form',
    data () {
      return {
        url: '',
        isLoading: false,
      }
    },

    methods: {
      onSubmit() {
        if (!this.url)
          return

        this.isLoading = true
        const data = {url: this.url}
        this.$store.dispatch('CONTACT_GetYoutubeVideoInfo', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          this.isLoading = false
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },

    created() {
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .c-v-f-wrapper {
    width: 100%;
    height: 100%;

    .c-v-f-close {
      float: right;
      width: 16px;
      height: 16px;
      background: url(/static/img/contact/close-pop.png) no-repeat;
      &:hover {
        background: url(/static/img/contact/close-pop-hover.png);
      }
      &:active {
        background: url(/static/img/contact/close-pop-active.png);
      }
    }

    .c-v-f-t {
      font-size: 16px;
      font-family: Helvetica;
      color: #bcbcbc;
    }

    .c-v-f-youtube {
      float: right;
      width: 20px;
      height: 20px;
      background: url(/static/img/contact/youtube.png) no-repeat;
    }

    .c-v-f-input {
      width: calc(100% - 2px);
      height: 26px;
      margin-top: 10px;
      border: 1px solid #ccc;
      &::placeholder {
        color: #bcbcbc;
      }
    }

    .c-v-f-btn {
      width: 87px;
      height: 40px;
      float: right;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .c-v-f-btn-normal {
      cursor: pointer;
      background: url(/static/img/contact/ok.png) no-repeat;
      &:hover {
        background: url(/static/img/contact/ok-hover.png) no-repeat;
      }
      &:active {
        background: url(/static/img/contact/ok-active.png) no-repeat;
      }
    }

    .c-v-f-btn-disabled {
      background: url(/static/img/contact/ok-disabled.png) no-repeat;
    }
  }
</style>
