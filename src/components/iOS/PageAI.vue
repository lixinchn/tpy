<template>
  <div class="ai-wrapper" :style="{height: pageHeight}">
    <div class="ai-c-wrapper" :style="{width: width}">
      <lazy-component>
        <img class="ai-show" v-lazy="typingGif">
      </lazy-component>
      <div class="ai-desc">
        <p class="title">A.I TYPING</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index"></desc-image-content>
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
        iconList: ['/static/img/ios/ai-icon3.png', '/static/img/ios/ai-icon1.png', '/static/img/ios/ai-icon2.png'],
        descList: ['Built-in Real-time Translation',
                   'Intelligent Autocorrect and Word Prediction',
                   'Intelligent Word-Learning'],
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/ai-typing-new-ios.gif',
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
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/ios-bg1.png) no-repeat;
    position: relative;

    .ai-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: left;
      margin: 0 auto;
      position: relative;

      .ai-show {
        width: 440px;
        height: 607px;
        margin: 0px 105px 0px 45px;
        display: inline-block;
        position: relative;
        top: 20px;
      }

      .ai-desc {
        position: absolute;
        top: 181px;
        left: 605px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: -72px;
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(/static/img/ios/4.png) no-repeat;
    }
  }
</style>
