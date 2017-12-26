<template>
  <div class="ai-wrapper" :style="{height: pageHeight}">
    <div class="ai-c-wrapper" :style="{width: width}">
      <img class="ai-show" src="/static/img/android/ai.png">
      <div class="ai-desc">
        <p class="title">A.I TYPING</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index"></desc-image-content>
        <a href="http://typany.com/api/go.php?id=1" class="ai-btn"></a>
      </div>
    </div>
    <div class="bg-component"></div>
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
        descList: ['Smart Voice Input & Power Translator',
                   'Intelligent AutoCorrect and Prediction',
                   'Word/Slang/Phrase Learning that actually works'],
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
        width: 405px;
        height: 808px;
        margin: 0px 105px 0px 45px;
        display: inline-block;
      }

      .ai-desc {
        position: absolute;
        top: 231px;
        left: 555px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular';
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
        }
        .ai-btn {
          display: block;
          margin: 38px auto 0 auto;
          width: 258px;
          height: 75px;
          background: url(/static/img/android/google-play.png) no-repeat;
          &:hover {
            background: url(/static/img/android/google-play-hover.png);
          }
          &:active {
            background: url(/static/img/android/google-play-active.png);
          }
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(/static/img/android/1.png) no-repeat;
    }
  }
</style>
