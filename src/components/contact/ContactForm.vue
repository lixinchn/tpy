<template>
  <div class="c-f-wrapper" :style="{width: width}">
    <el-popover
      ref="popvideo"
      placement="bottom-start"
      width="344"
      height="192"
      trigger="click"
      class="popvideo"
      @hide="onVideoPopHide"
    >
      <contact-video-form v-on:videoSubmit="onVideoSubmit"></contact-video-form>
    </el-popover>

    <form v-model="contactForm" ref="contactForm">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.name" placeholder="Name">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.email" placeholder="Email">
      <input type="text" style="" class="b-c-input" v-model="contactForm.occupation" placeholder="Occupation">
      <div style="position: relative; width: 910px; margin: 0 auto;">
        <textarea style="height: 215px; padding-top: 5px; margin-bottom: 8px;" class="b-c-input" v-model="contactForm.comment" placeholder="Tell us about your story and interests"></textarea>
        <div class="youtube-video-info" v-show="textareaVideoInfo.title">
          <img :src="textareaVideoInfo.thumbnails ? textareaVideoInfo.thumbnails.default.url : ''" style="width: 48%; height: 100%; display: inline-block;">
          <p style="width: 48%; height: 100%; overflow: hidden; display: inline-block; margin: 0;">{{textareaVideoInfo.title}}</p>
        </div>
      </div>
      <div style="width: 912px; overflow: auto; margin: 0 auto">
        <div class="c-f-icon">
          <img src="/static/img/contact/image-icon.png">
          <span>image</span>
        </div>
        <div class="c-f-icon">
          <div style="width: 100px; display: inline-block;" v-popover:popvideo><img src="/static/img/contact/video-icon.png"></div>
          <span style="position: relative; right: 35px;">video</span>
        </div>
        <div class="b-c-btn" @click="onSubmit"></div>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ContactVideoForm from './ContactVideoForm'

  export default {
    name: 'contact-form',
    components: {ContactVideoForm},
    props: {
      width: {
        type: String,
        default: '100%',
      },
    },
    data () {
      return {
        videoFormManualClose: false,
        contactForm: {
          name: '',
          email: '',
          occupation: '',
          comment: '',
          images: [],
          video: '',
        }
      }
    },

    methods: {
      onSubmit() {

      },
      onVideoPopHide() {
        if (this.videoFormManualClose) {
          this.videoFormManualClose = false
          return
        }
        this.$refs.popvideo.doShow()
      },
      onVideoSubmit(url) {
        this.contactForm.video = url
      }
    },

    created() {
    },

    computed: {
      ...mapGetters({
        onCloseVideoForm: 'closeVideoForm',
      }),
      ...mapGetters([
        'textareaVideoInfo',
      ]),
    },
    watch: {
      onCloseVideoForm() {
        this.videoFormManualClose = true
        this.$refs.popvideo.doClose()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-f-wrapper {
    margin-bottom: 200px;
    .b-c-input {
      border: 1px solid #ccc;
      border-radius: 2px;
      width: 900px;
      max-width: 900px;
      height: 32px;
      font-size: 16px;
      padding: 0 5px;
      margin-bottom: 20px;
      font-family: Helvetica;
      color: #bcbcbc;
      &::placeholder {
        color: #bcbcbc;
      }
    }

    .b-c-btn {
      width: 133px;
      height: 40px;
      cursor: pointer;
      float: right;
      background: url(/static/img/contact/submit.png) no-repeat;
      &:hover {
        background: url(/static/img/contact/submit-hover.png);
      }
      &:active {
        background: url(/static/img/contact/submit-active.png);
      }
    }

    .c-f-icon {
      float: left;
      margin-right: 80px;
      margin-top: 5px;
      position: relative;

      img {
        vertical-align: middle;
        cursor: pointer;
      }
    }

    .popvideo {
      height: 192px;
    }

    .youtube-video-info {
      height: 80px;
      margin-top: 12px;
      border: 1px solid #ccc;
      width: 318px;
      position: absolute;
      top: 0px;
    }
  }
</style>
