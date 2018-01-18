<template>
  <div class="c-i-f-wrapper" :style="autoStyle">
    <div style="overflow: auto;">
      <p style="float: left; margin: 0;">Upload local file</p>
      <div class="c-i-f-close" @click="onClose"></div>
    </div>
    <div style="overflow: hidden; margin: 22px 0 10px 0;">
      <img v-for="(image, index) in imageDataUrlList" :src="image" :key="index" class="image-prev" :style="marginRight(index)">
      <el-upload
        action="http://typany.com/api/revpic.php"
        :headers="headerInfo"
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
    },
    data () {
      return {
        url: '',
        isLoading: false,
        imageList: [],
        imageDataUrlList: [],
        headerInfo: {
          // 'Access-Control-Allow-Origin': 'http://typany.com/api/revpic.php',
          // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-File-Name, X-File-Size, X-File-Type',
        },
        uploadBtnShow: true,
      }
    },

    methods: {
      refreshFormData() {
        this.imageList = []
        this.imageDataUrlList = []
      },

      marginRight(index) {
        if ((index + 1) % 3 === 0)
          return {'margin-right': 0}
      },

      onSubmit() {
        if (this.imageList.length === 0)
          return
        
        this.$emit('imageSubmit', {imageList: this.imageList, imageDataUrlList: this.imageDataUrlList})
        this.$store.dispatch('CONTACT_CloseImageForm').then(() => {
          this.imageList = []
          this.imageDataUrlList = []
          this.uploadBtnShow = true
        })
      },

      onClose() {
        this.$emit('closeConfirmImageForm', this.imageList.length)
      },

      onUploadSucc(response) {
        if (response.code) {
          this.$message.error(response.msg)
          return
        }
        this.imageList.push(response.data)
      },

      beforeUpload(file) {
        const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) !== -1
        const isLT2M = file.size / 1024 / 1024 < 2

        if (!isValidType)
          this.$message.error('Only JPG, PNG are allowed.')
        else if (!isLT2M)
          this.$message.error('How do I upload files bigger than 2MB? Sorry, you can\'t.')

        if (isValidType && isLT2M) {
          let reader = new FileReader()
          reader.onload = (e) => {
            if (this.imageDataUrlList.length >= 5)
              this.uploadBtnShow = false
            this.imageDataUrlList.push(e.target.result)
          }
          reader.readAsDataURL(file)
        }
        return isValidType && isLT2M
      },

      autoStyle() {
        let style = {}
        style.height = this.imageList.length >= 3 ? '240px' : '160px'
        style.height = '160px'
        return style
      },
    },

    created() {
    },

    computed: {
      ...mapGetters({
        onCloseImageForm: 'closeImageForm',
      }),
    },

    watch: {
      onCloseImageForm() {
        this.refreshFormData()
      }
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
      margin-bottom: 12px;

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
      margin-bottom: 12px;
    }

    .c-v-f-btn {
      width: 87px;
      height: 40px;
      float: right;
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
