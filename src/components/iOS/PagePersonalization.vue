<template>
  <div class="per-wrapper" :style="{height: pageHeight}">
    <div class="per-c-wrapper" :style="{width: width}">
      <img class="per-show" src="/static/img/ios/personalization.png">
      <div class="per-desc">
        <p class="title">PERSONALIZATION</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index" :color="fontColor">
        </desc-image-content>
      </div>
    </div>
    <div class="bg-component"></div>
  </div>
</template>

<script>
  import DescImageContent from '../common/DescImageContent'
  export default {
    name: 'PagePersonalization',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: ['/static/img/ios/per-icon1.png', '/static/img/ios/per-icon2.png'],
        descList: ['DIY Your Own Keyboard with the Favorite Photo, Wallpaper',
                   'A Variety of Fine Collected Themes, Be Clarity and Stylish'],
        fontColor: '#6b6b6b',
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
  .per-wrapper {
    width: 100%;
    position: relative;

    .per-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: left;
      margin: 0 auto;
      position: relative;

      .per-show {
        width: 426px;
        height: 523px;
        margin: 30px 105px 0px 25px;
        display: inline-block;
      }

      .per-desc {
        position: absolute;
        top: 160px;
        left: 600px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #6b6b6b;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: 12px;
        }
      }
    }
    .bg-component {
      position: absolute;
      top: -15px;
      left: -125px;
      width: 100%;
      height: 100%;
      background: url(/static/img/ios/2.png) no-repeat;
    }
  }
</style>
