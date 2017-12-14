<template>
  <div class="c-f-wrapper" :style="{width: width}">
    <el-popover
      ref="popvideo"
      placement="bottom-start"
      width="344"
      trigger="click"
      class="popvideo"
      @hide="onVideoPopHide"
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
    >
      <contact-image-form v-on:imageSubmit="onImageSubmit" v-on:closeConfirmImageForm="onCloseConfirmImageForm"></contact-image-form>
    </el-popover>

    <form v-model="contactForm" ref="contactForm">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.name" placeholder="Name">
      <input type="text" style="" class="b-c-input" v-model.trim="contactForm.email" placeholder="Email">
      <input type="text" style="" class="b-c-input" v-model="contactForm.occupation" placeholder="Occupation">
      <div style="position: relative; width: 910px; margin: 0 auto;">
        <textarea style="margin-bottom: 8px;" :style="autoStyle" class="b-c-input" v-model="contactForm.comment" :placeholder="textAreaPlaceholder"></textarea>

        <div class="i-v-prev">
          <div style="width: 224px; overflow: hidden; padding-top: 12px;">
            <div v-for="(image, index) in contactForm.images" class="image-textarea-prev">
              <img :src="image" :key="index">
              <div class="c-v-f-close" @click="onRemoveImage(index)"></div>
            </div>
          </div>
          <div class="youtube-video-info" v-show="textareaVideoInfo.title">
            <img :src="textareaVideoInfo.thumbnails ? textareaVideoInfo.thumbnails.default.url : ''" style="width: 48%; height: 100%; display: inline-block;">
            <p style="width: 48%; height: 100%; overflow: hidden; display: inline-block; margin: 0;">{{textareaVideoInfo.title}}</p>
            <div class="c-v-f-close" @click="onRemoveVideo"></div>
          </div>
        </div>
      </div>
      <div style="width: 912px; overflow: auto; margin: 0 auto">
        <div class="c-f-icon">
          <img src="/static/img/contact/image-icon.png" v-popover:popimage>
          <span>image</span>
        </div>
        <div class="c-f-icon">
          <div style="width: 100px; display: inline-block;" v-popover:popvideo><img src="/static/img/contact/video-icon.png"></div>
          <span style="position: relative; right: 35px;">video</span>
        </div>
        <div class="b-c-btn" @click="onSubmit"></div>
      </div>
    </form>

    <el-dialog
      title=""
      ref="succDialog"
      :visible.sync="dialogSubmitSucc"
      customClass="dialog-submit-succ">
      <div class="d-s-back">
        <img src="/static/img/contact/contact-succ.png" style="margin-top: 40px;">
        <p>Your Feedback is Highly</p>
        <p>Appreciated!</p>
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
          comment: '',
          images: [],
          imagesLocation: [],
          video: '',
        }
      }
    },

    methods: {
      refreshContactForm() {
        this.contactForm = {
          name: '',
          email: '',
          occupation: '',
          comment: '',
          images: [],
          imagesLocation: [],
          video: '',
        }
      },

      onSubmit() {
        const data = {
          name: this.contactForm.name,
          email: this.contactForm.email,
          res: this.contactForm.comment,
          pics: paramArrayToString(this.contactForm.imagesLocation),
          video: this.contactForm.video,
        }
        this.$store.dispatch('CONTACT_Contact', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
          this.dialogSubmitSucc = true
          this.refreshContactForm()
        })
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
      },
      onRemoveVideo() {
        this.$store.dispatch('CONTACT_RemoveTextareaVideoInfo').then(() => {
          this.contactForm.video = ''
        })
      },
      onImagePopHide() {
        if (this.imageFormManualClose) {
          this.imageFormManualClose = false
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
      onCloseConfirmImageForm() {
        this.dialogDrop = true
      },
      onDropYes() {
        this.$store.dispatch('CONTACT_CloseImageForm').then(() => {
          this.onDropClose()
        })
      },
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
        style.height = (this.contactForm.images.length > 0 && this.textareaVideoInfo.title) ? '415px' : '215px'
        
        let paddingTop = 5
        if (this.contactForm.images.length > 0 && this.contactForm.images.length <= 3)
          paddingTop += 80
        else if (this.contactForm.images.length > 3)
          paddingTop += 160

        if (this.textareaVideoInfo.title)
          paddingTop += 110
        style['padding-top'] = paddingTop + 'px'
        return style
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
      margin-top: 12px;
      border: 1px solid #ccc;
      width: 318px;
      position: relative;
      text-align: left;
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
        background: url(/static/img/contact/drop-yes-hover.png);
      }
      &:active {
        background: url(/static/img/contact/drop-yes-active.png);
      }
    }
    .d-d-btn-no {
      background: url(/static/img/contact/drop-no.png) no-repeat;
      &:hover {
        background: url(/static/img/contact/drop-no-hover.png);
      }
      &:active {
        background: url(/static/img/contact/drop-no-active.png);
      }
    }
  }
</style>
