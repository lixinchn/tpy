<template>
  <div class="ai-wrapper" :style="{height: pageHeight}">
    <div class="ai-c-wrapper" :style="{width: width}">
      <lazy-component>
        <img class="ai-show" v-lazy="typingGif">
      </lazy-component>
      <div class="ai-desc">
        <p class="title">A.I TYPING</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index"></desc-image-content>
        <a href="http://typany.com/api/go.php?id=1" class="ai-btn"></a>
      </div>
    </div>
    <img class="bg-component" src="/static/img/android/1.png" :style="{'max-height': pageHeight}"></img>
  </div>
</template>

<script>
  import DescImageContent from '../common/DescImageContent'
  export default {
    name: 'PageAI',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: ['/static/img/android/ai-icon1.png', '/static/img/android/ai-icon2.png', '/static/img/android/ai-icon3.png'],
        descList: ['Powerful Translator & Smart Voice Input',
                   'Intelligent AutoCorrect and Prediction',
                   'Word/Slang/Phrase Learning that actually works'],
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/ai-typing-android.gif?t=' + Date.now(),
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
  .ai-wrapper {
    width: 100%;
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/android-bg1.png) no-repeat;
    position: relative;

    .ai-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: left;
      margin: 0 auto;
      position: relative;

      .ai-show {
        width: 320px;
        height: 607px;
        margin: 0px 105px 0px 45px;
        display: inline-block;
      }

      .ai-desc {
        position: absolute;
        top: 124px;
        left: 555px;
        width: 515px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: -79px;
        }
        .ai-btn {
          display: block;
          margin: 38px auto 0 auto;
          width: 256px;
          height: 75px;
          position: relative;
          left: -60px;
          background: url(/static/img/android/google-play.png) no-repeat;
          &:hover {
            background-position: -256px 0;
          }
          &:active {
            background-position: -512px 0;
          }
          &:active::after {
            content: url(http://typany.com/api/pingback.php?loc=android_g_top&action=click);
            display: none;
          }
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
    }
  }
</style>
