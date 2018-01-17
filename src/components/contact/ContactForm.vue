<template>
  <div class="c-f-wrapper" :style="{width: width}">
    <el-popover
      ref="popvideo"
      placement="bottom-start"
      width="344"
      trigger="click"
      class="popvideo"
      @hide="onVideoPopHide"
      @show="onVideoPopShow"
    >
      <contact-video-form v-on:videoSubmit="onVideoSubmit"></contact-video-form>
    </el-popover>

    <el-popover
      ref="popimage"
      placement="bottom-start"
      width="204"
      trigger="click"
      class="popimage"
      @hide="onImagePopHide"
      @show="onImagePopShow"
    >
      <contact-image-form v-on:imageSubmit="onImageSubmit" v-on:closeConfirmImageForm="onCloseConfirmImageForm"></contact-image-form>
    </el-popover>

    <form v-model="contactForm" ref="contactForm">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.name" placeholder="Name*">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.email" placeholder="Email*">
      <input type="text" style="" class="b-c-input" v-model="contactForm.occupation" placeholder="Occupation">
      <div style="position: relative; width: 910px; margin: 0 auto;">
        <div contenteditable style="margin-bottom: 8px;" :style="autoStyle" class="b-c-input" ref="comment" :placeholder="textAreaPlaceholder"></div>

        <div class="i-v-prev">
          <div style="width: 224px; overflow: hidden; padding-top: 12px;">
            <div v-for="(image, index) in contactForm.images" class="image-textarea-prev">
              <img :src="image" :key="index">
              <div class="c-v-f-close" @click="onRemoveImage(index)"></div>
            </div>
          </div>
          <div class="youtube-video-info" v-show="textareaVideoInfo.title || contactForm.video">
            <div v-show="textareaVideoInfo.title" style="height: 100%;">
              <img :src="textareaVideoInfo.thumbnails ? textareaVideoInfo.thumbnails.default.url : ''" style="width: 48%; height: 100%; display: inline-block;">
              <p style="width: 48%; overflow: hidden; display: inline-block; margin: 0; font-size: 14px; vertical-align: top; margin-top: 5px; height: 60px;">{{textareaVideoInfo.title}}</p>
            </div>
            <div v-show="!textareaVideoInfo.title && contactForm.video" style="padding: 2px; overflow: hidden; height: 100%;">
              <a :href="contactForm.video" target="blank">{{contactForm.video}}</a>
            </div>
            <div class="c-v-f-close" @click="onRemoveVideo"></div>
          </div>
        </div>
      </div>
      <div style="width: 912px; overflow: auto; margin: 0 auto">
        <div class="c-f-icon" v-popover:popimage>
          <img src="/static/img/contact/image-icon.png">
          <span>image</span>
        </div>
        <div class="c-f-icon" v-popover:popvideo>
          <div style="width: 100px; display: inline-block;" ><img src="/static/img/contact/video-icon.png"></div>
          <span style="position: relative; right: 35px;">video</span>
        </div>
        <div :class="[!submitLoading ? 'b-c-btn-normal' : 'b-c-btn-loading', 'b-c-btn']" @click="onSubmit" :style="autoStyleSubmit">
          <div class="b-c-btn-left" :style="{width: submitLoadingWidth + 'px'}" v-show="submitLoading"></div>
          <p style="margin: 0; z-index: 100; position: absolute; left: 0; right: 0;">Submit</p>
        </div>
      </div>
    </form>

    <el-dialog
      title=""
      ref="succDialog"
      :visible.sync="dialogSubmitSucc"
      customClass="dialog-submit-succ">
      <div class="d-s-back">
        <img src="/static/img/contact/contact-succ.png" style="margin-top: 40px;">
        <p style="margin: 16px auto 5px auto;">Your Feedback is Highly</p>
        <p style="margin: 0;">Appreciated!</p>
        <div class="c-i-f-close" @click="onSuccDialogClose"></div>
      </div>
    </el-dialog>

    <el-dialog
      title=""
      ref="dropDialog"
      :visible.sync="dialogDrop"
      customClass="dialog-drop">
      <div class="d-d-back">
        <img src="/static/img/contact/drop-question.png" style="margin-top: 40px;">
        <p>Drop upload images</p>
        <div class="d-d-btn d-d-btn-yes" @click="onDropYes"></div>
        <div class="d-d-btn d-d-btn-no" @click="onDropClose"></div>
        <div class="c-i-f-close" @click="onDropClose"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ContactVideoForm from './ContactVideoForm'
  import ContactImageForm from './ContactImageForm'
  import {createGetParams, paramArrayToString} from '../../utils/params'

  export default {
    name: 'contact-form',
    components: {ContactVideoForm, ContactImageForm},
    props: {
      width: {
        type: String,
        default: '100%',
      },
    },
    data () {
      return {
        dialogSubmitSucc: false,
        dialogDrop: false,
        videoFormManualClose: false,
        imageFormManualClose: false,
        contactForm: {
          name: '',
          email: '',
          occupation: '',
          images: [],
          imagesLocation: [],
          video: '',
        },
        submitLoading: false,
        submitLoadingWidth: 8,
        submitInterval: 0,
        popImageShow: false,
        popVideoShow: false,
      }
    },

    methods: {
      refreshContactForm() {
        this.contactForm = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          occupation: '',
          images: [],
          imagesLocation: [],
          video: '',
        }
        this.$refs.comment.innerHTML = ''
      },

      onSubmit() {
        if (!this.contactForm.name || !this.contactForm.email)
          return

        const data = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          res: this.$refs.comment.innerHTML,
          pics: paramArrayToString(this.contactForm.imagesLocation),
          video: this.contactForm.video,
        }
        this.submitLoading = true
        this.calcSubmitLoadingWidth()

        this.$store.dispatch('CONTACT_Contact', createGetParams(data)).then((data) => {
          this.submitLoadingWidth = 180
          this.submitLoading = false
          this.removeSubmitInterval()
          this.submitLoadingWidth = 8
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
          this.dialogSubmitSucc = true
          this.refreshContactForm()
        })
        
      },
      calcSubmitLoadingWidth() {
        this.submitInterval = setInterval(() => {
          if (Math.random() * 133 < this.submitLoadingWidth)
            return
          if (this.submitLoadingWidth >= 130)
            return
          this.submitLoadingWidth++
        }, 40)
      },
      removeSubmitInterval() {
        clearInterval(this.submitInterval)
      },
      onVideoPopHide() {
        if (this.videoFormManualClose) {
          this.videoFormManualClose = false
          this.popVideoShow = false
          return
        }
        this.$refs.popvideo.doShow()
      },
      onVideoSubmit(url) {
        this.contactForm.video = url
      },
      onRemoveVideo() {
        this.$store.dispatch('CONTACT_RemoveTextareaVideoInfo').then(() => {
          this.contactForm.video = ''
        })
      },
      onImagePopHide() {
        if (this.imageFormManualClose) {
          this.imageFormManualClose = false
          this.popImageShow = false
          return
        }
        this.$refs.popimage.doShow()
      },
      onImageSubmit(imageInfo) {
        this.contactForm.images = imageInfo.imageDataUrlList
        this.contactForm.imagesLocation = imageInfo.imageList
      },
      onRemoveImage(index) {
        this.contactForm.images.splice(index, 1)
        this.contactForm.imagesLocation.splice(index, 1)
      },
      onSuccDialogClose() {
        this.$refs.succDialog.doClose()
        this.$refs.succDialog.hide()
      },
      onDropClose() {
        this.$refs.dropDialog.doClose()
        this.$refs.dropDialog.hide()
      },
      onCloseConfirmImageForm(listLength) {
        listLength === 0 ? this.onDropYes() : this.dialogDrop = true
      },
      onDropYes() {
        this.$store.dispatch('CONTACT_CloseImageForm').then(() => {
          this.onDropClose()
        })
      },
      onImagePopShow() {
        if (this.popVideoShow) {
          this.imageFormManualClose = true
          this.$refs.popimage.doClose()
          return
        }
        this.popImageShow = true
      },
      onVideoPopShow() {
        if (this.popImageShow) {
          this.videoFormManualClose = true
          this.$refs.popvideo.doClose()
          return
        }
        this.popVideoShow = true
      }
    },

    created() {
    },

    computed: {
      ...mapGetters({
        onCloseVideoForm: 'closeVideoForm',
        onCloseImageForm: 'closeImageForm',
      }),
      ...mapGetters([
        'textareaVideoInfo',
      ]),
      autoStyle() {
        let style = {}
        style['min-height'] = '300px'
        // style.height = (this.contactForm.images.length > 0 && this.textareaVideoInfo.title) ? '415px' : '215px'
        
        let paddingTop = 5
        if (this.contactForm.images.length > 0 && this.contactForm.images.length <= 3)
          paddingTop += 120
        else if (this.contactForm.images.length > 3)
          paddingTop += 240

        if (this.textareaVideoInfo.title || this.contactForm.video)
          paddingTop += 100
        style['padding-top'] = paddingTop + 'px'
        return style
      },
      autoStyleSubmit() {
        if (!this.contactForm.name || !this.contactForm.email)
          return {background: '#dbdbdb'}
        return {}
      },
      textAreaPlaceholder() {
        if (this.contactForm.images.length > 0 || this.textareaVideoInfo.title)
          return ''
        return 'Tell us about your story and interests'
      },
    },
    watch: {
      onCloseVideoForm() {
        this.videoFormManualClose = true
        this.$refs.popvideo.doClose()
      },
      onCloseImageForm() {
        this.imageFormManualClose = true
        this.$refs.popimage.doClose()
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
      min-height: 32px;
      font-size: 16px;
      padding: 0 5px;
      margin-bottom: 20px;
      font-family: Helvetica;
      color: #454545;
      text-align: left;
      &::placeholder {
        color: #bcbcbc;
      }
    }

    .b-c-btn {
      width: 133px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      float: right;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }

    .b-c-btn-normal {
      background: #1aa0fc;
      &:hover {
        background: #37b6fc;
      }
      &:active {
        background: #158adc;
      }
    }

    .b-c-btn-loading {
      background: #88d4ff;
    }

    .b-c-btn-left {
      background: #00a2ff;
      height: 100%;
      margin: 0;
      display: inline-block;
      position: absolute;
      left: 0;
      border-radius: 4px;
    }

    .c-f-icon {
      float: left;
      margin-top: 5px;
      position: relative;
      cursor: pointer;

      img {
        vertical-align: middle;
        cursor: pointer;
      }
    }

    .popvideo {
      height: 192px;
    }

    .popimage {
      height: 260px;
    }

    .i-v-prev {
      position: absolute;
      top: 0px;
      left: 10px;
    }

    .youtube-video-info {
      height: 80px;
      border: 1px solid #ccc;
      width: 318px;
      position: relative;
      text-align: left;
      left: -4px;
    }

    .image-textarea-prev {
      width: 58px;
      height: 58px;
      float: left;
      margin-right: 12px;
      margin-bottom: 12px;
      position: relative;
      border: 1px solid #ccc;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .c-v-f-close {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: url(/static/img/contact/close.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &:hover {
        background: url(/static/img/contact/close-hover.png);
        background-size: 100% 100%;
      }
      &:active {
        background: url(/static/img/contact/close-active.png);
        background-size: 100% 100%;
      }
    }

    .c-i-f-close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 16px;
      height: 16px;
      background: url(/static/img/contact/drop-close.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &:hover {
        background: url(/static/img/contact/drop-close-hover.png);
        background-size: 100% 100%;
      }
      &:active {
        background: url(/static/img/contact/drop-close-active.png);
        background-size: 100% 100%;
      }
    }
  }

  .d-s-back {
    width: 100%;
    height: 100%;
    background: url(/static/img/contact/contact-succ-back.png) no-repeat;
    p {
      font-size: 16px;
      font-family: Helvetica;
      color: #fff;
    }
  }

  .d-d-back {
    width: 100%;
    height: 100%;
    background: url(/static/img/contact/drop-back.png) no-repeat;
    background-size: 100% 100%;
    p {
      font-size: 16px;
      font-family: Helvetica;
      color: #fff;
    }
    .d-d-btn {
      width: 87px;
      height: 40px;
      cursor: pointer;
      display: inline-block;
      margin-top: 25px;
    }
    .d-d-btn-yes {
      margin-right: 24px;
      background: url(/static/img/contact/drop-yes.png) no-repeat;
      &:hover {
        background-position: -87px 0;
      }
      &:active {
        background-position: -174px 0;
      }
    }
    .d-d-btn-no {
      background: url(/static/img/contact/drop-no.png) no-repeat;
      &:hover {
        background-position: -87px 0;
      }
      &:active {
        background-position: -174px 0;
      }
    }
  }
</style>
