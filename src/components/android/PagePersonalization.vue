<template>
  <div class="per-wrapper" :style="{height: pageHeight}">
    <div class="per-c-wrapper" :style="{width: width}">
      <img class="per-show" src="/static/img/android/personalization.png">
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
        iconList: ['/static/img/android/per-icon1.png', '/static/img/android/per-icon2.png'],
        descList: ['DIY Your Own Keyboard with the Favorite Photo, Wallpaper',
                   'Thousands of Colorful Themes to be Chose'],
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
    background: #f9f8fb;

    .per-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: left;
      margin: 0 auto;
      position: relative;

      .per-show {
        width: 542px;
        height: 799px;
        margin: 0px 105px 0px 45px;
        display: inline-block;
      }

      .per-desc {
        position: absolute;
        top: 160px;
        left: 590px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #6b6b6b;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: 24px;
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(/static/img/android/3.png) no-repeat;
    }
  }
</style>
