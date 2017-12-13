<template>
  <div class="c-i-f-wrapper" :style="{height: height}">
    <div style="overflow: auto;">
      <p style="float: left; margin: 0;">Upload local file</p>
      <div class="c-i-f-close" @click="onClose"></div>
    </div>
    <div style="overflow: hidden; margin: 22px 0 20px 0;">
      <img v-for="(image, index) in imageList" :src="image" :key="index" class="image-prev" :style="marginRight(index)">
      <el-upload
        action="http://typany.com/api/revpic.php"
        :on-success="onUploadSucc"
        :before-upload="beforeUpload"
        class="image-upload"
        v-show="uploadBtnShow">
        <img src="/static/img/contact/add.png" class="icon">
        </el-upload>
    </div>
    <div style="overflow: auto;"><div v-bind:class="[imageList.length >= 1 ? 'c-v-f-btn-normal' : 'c-v-f-btn-disabled', 'c-v-f-btn']" @click="onSubmit"></div></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'contact-image-form',
    props: {
      height: {
        type: String,
        default: '240px',
      }
    },
    data () {
      return {
        url: '',
        isLoading: false,
        imageList: ['https://www.sogou.com/web/index/images/logo_440x140.v.1.png', 'https://www.sogou.com/web/index/images/logo_440x140.v.1.png', 'https://www.sogou.com/web/index/images/logo_440x140.v.1.png', 'https://www.sogou.com/web/index/images/logo_440x140.v.1.png'],
      }
    },

    methods: {
      marginRight(index) {
        if ((index + 1) % 3 === 0)
          return {'margin-right': 0}
      },

      onSubmit() {
        if (this.imageList.length === 0)
          return
        
        this.$store.dispatch('CONTACT_CloseImageForm').then(() => {
          this.$store.dispatch('CONTACT_SetTextareaVideoInfo').then(() => {
            this.$emit('videoSubmit', this.url)
          })
        })
      },

      onClose() {
        this.$store.dispatch('CONTACT_CloseImageForm').then(() => {
        })
      },

      onUploadSucc(val) {
        console.log(val)
      },

      beforeUpload(file) {
        const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) !== -1
        const isLT5M = file.size / 1024 / 1024 < 5

        if (!isValidType)
          this.$message.error('Only JPG and PNG image supported')
        else if (!isLT5M)
          this.$message.error('Image size must less than 5MB')
        return isValidType && isLT5M
      },
      onUpload(file) {
        console.log(file)
      }
    },

    created() {
    },

    computed: {
      ...mapGetters([
      ]),
      uploadBtnShow() {
        return this.imageList.length >= 6 ? false : true
      },
    }
  }
</script>

<style lang="scss" scoped>
  .c-i-f-wrapper {
    width: 100%;
    height: 100%;
    font-family: Helvetica;
    font-size: 16px;
    color: #454545;

    .c-i-f-close {
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

    .image-upload {
      width: 58px;
      height: 58px;
      cursor: pointer;
      float: left;

      .icon {
        width: 58px;
        height: 58px;
      }
    }

    .image-prev {
      width: 58px;
      height: 58px;
      float: left;
      margin-right: 15px;
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
