<template>
  <div class="c-v-f-wrapper">
    <div style="overflow: auto;">
      <p style="float: left; margin: 0; font-family: Helvetica; font-size: 14px;">Video</p>
      <div class="c-v-f-close" @click="onClose"></div>
    </div>
    <div style="overflow: auto; margin-top: 20px;">
      <p style="float: left; margin: 0; font-size: 18px;" class="c-v-f-t">Add links from</p>
      <div class="c-v-f-youtube"></div>
    </div>
    <input v-model="url" class="c-v-f-input" placeholder="URL: http://" @input="onGetYoutubeInfo">
    <div style="text-align: center;" v-show="isLoading"><img src="/static/img/contact/loading.gif"></div>
    <div style="height: 80px; margin-top: 12px; border: 1px solid #ccc;" v-show="youtubeVideoInfo.title">
      <img :src="youtubeVideoInfo.thumbnails ? youtubeVideoInfo.thumbnails.default.url : ''" style="width: 48%; height: 100%; display: inline-block;">
      <p style="width: 48%; height: 100%; overflow: hidden; display: inline-block; margin: 0;">{{youtubeVideoInfo.title}}</p>
    </div>
    <div style="overflow: auto;"><div v-bind:class="[url ? 'c-v-f-btn-normal' : 'c-v-f-btn-disabled', 'c-v-f-btn']" @click="onSubmit"></div></div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'contact-video-form',
    data () {
      return {
        url: '',
        isLoading: false,
        pause: false,
      }
    },

    methods: {
      onGetYoutubeInfo() {
        if (this.pause)
          return
        this.getYoutubeInfo()
        setTimeout(() => {
          this.pause = false
        }, 500)
        this.pause = true
      },

      getYoutubeInfo() {
        if (!this.url)
          return

        this.isLoading = true
        const data = {url: this.url}
        this.$store.dispatch('CONTACT_GetYoutubeVideoInfo', createGetParams(data)).then((data) => {
          this.isLoading = false
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },

      onSubmit() {
        if (!this.youtubeVideoInfo.title && !this.url)
          return
        
        this.$store.dispatch('CONTACT_SetTextareaVideoInfo').then(() => {
          this.$store.dispatch('CONTACT_CloseVideoForm').then(() => {
            this.$emit('videoSubmit', this.url)
            this.url = ''
          })
        })
      },

      onClose() {
        this.$store.dispatch('CONTACT_CloseVideoForm').then(() => {
          this.url = ''
        })
      },
    },

    created() {
    },

    computed: {
      ...mapGetters([
        'youtubeVideoInfo',
      ]),
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
      background-size: 100% 100%;
      cursor: pointer;
      &:hover {
        background: url(/static/img/contact/close-pop-hover.png);
        background-size: 100% 100%;
      }
      &:active {
        background: url(/static/img/contact/close-pop-active.png);
        background-size: 100% 100%;
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
      margin-top: 6px;
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
      background-position: -87px 0;
      &:hover {
        background-position: -174px 0;
      }
      &:active {
        background-position: -261px 0;
      }
    }

    .c-v-f-btn-disabled {
      background: url(/static/img/contact/ok.png) no-repeat;
    }
  }
</style>
