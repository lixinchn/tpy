<template>
  <div class="exp-wrapper" :style="{height: pageHeight}">
    <div class="exp-c-wrapper" :style="{width: width}">
      <div class="exp-desc">
        <p class="title">EXPRESSION</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index].desc" :key="index" :color="fontColor" :left="descList[index].left">
        </desc-image-content>
      </div>
      <lazy-component>
        <img class="exp-show" v-lazy="expGif">
      </lazy-component>
    </div>
    <div class="bg-component"></div>
  </div>
</template>

<script>
  import DescImageContent from '../common/DescImageContent'
  export default {
    name: 'PageExpression',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: ['/static/img/ios/exp-icon1.png', '/static/img/ios/exp-icon2.png'],
        descList: [{desc: 'Discover the world of pop culture - memes, TV, Movies, Music and more', left: '0px'},
                   {desc: 'Create Your Own Emoji with Build-in Emoji Maker', left: '-8px'}],
        fontColor: '#6b6b6b',
        expGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/expression-ios.gif?t=' + Date.now(),
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
  .exp-wrapper {
    width: 100%;
    position: relative;
    background: #f9f8fb;

    .exp-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: right;
      margin: 0 auto;
      position: relative;

      .exp-show {
        height: 584px;
        width: 488px;
        display: inline-block;
        position: relative;
        left: 70px;
        top: 45px;
      }

      .exp-desc {
        position: absolute;
        top: 231px;
        left: 20px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #6b6b6b;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: -49px;
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: -200px;
      width: 100%;
      height: 100%;
      background: url(/static/img/ios/3.png) no-repeat;
    }
  }
</style>
