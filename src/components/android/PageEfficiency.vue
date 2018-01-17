<template>
  <div class="effi-wrapper" :style="{height: pageHeight}">
    <div class="effi-c-wrapper" :style="{width: width}">
      <div class="effi-desc">
        <p class="title">EFFICIENCY</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon.icon" :iconLeft="icon.iconLeft" :desc="descList[index]" :key="index">
        </desc-image-content>
      </div>
      <img class="effi-show" src="/static/img/android/efficiency.png">
    </div>
    <div class="bg-component"></div>
  </div>
</template>

<script>
  import DescImageContent from '../common/DescImageContent'
  export default {
    name: 'PageEfficiency',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: [{icon: '/static/img/android/effi-icon1.png', iconLeft: '0px'},
                   {icon: '/static/img/android/effi-icon2.png', iconLeft: '-3px'}],
        descList: ['Convenient Emoji Prediction, Based on What You\'ve Just Typed',
                   'Simply swipe-to-type with Typany'],
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
  .effi-wrapper {
    width: 100%;
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/android-bg1.png) no-repeat;
    position: relative;

    .effi-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: right;
      margin: 0 auto;
      position: relative;

      .effi-show {
        width: 536px;
        height: 787px;
        margin: 54px 130px 0 0;
        display: inline-block;
        position: relative;
        left: 150px;
      }

      .effi-desc {
        position: absolute;
        top: 231px;
        left: 20px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular', Arial;
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
          position: relative;
          left: -48px;
        }
      }
    }
    .bg-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(/static/img/android/4.png) no-repeat;
    }
  }
</style>
