<template>
  <div class="ai-wrapper" :style="{height: pageHeight}">
    <div class="ai-c-wrapper" :style="{width: width}">
      <img class="ai-show" src="/static/img/ios/ai.png">
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
        iconList: ['/static/img/ios/ai-icon1.png', '/static/img/ios/ai-icon2.png'],
        descList: ['Intelligent AutoCorrect and Prediction',
                   'Intelligent Word-Learning'],
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
        width: 546px;
        height: 774px;
        margin: 0px 105px 0px 45px;
        display: inline-block;
      }

      .ai-desc {
        position: absolute;
        top: 181px;
        left: 605px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular';
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
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
