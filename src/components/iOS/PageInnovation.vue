<template>
  <div class="effi-wrapper" :style="{height: pageHeight}">
    <div class="effi-c-wrapper" :style="{width: width}">
      <div class="effi-desc">
        <p class="title">INNOVATION</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index">
        </desc-image-content>
        <a href="http://typany.com/api/go.php?id=2" class="effi-btn"></a>
      </div>
      <img class="effi-show" src="/static/img/ios/left-hand.png">
    </div>
    <div class="bg-component"></div>
  </div>
</template>

<script>
  import DescImageContent from '../common/DescImageContent'
  export default {
    name: 'PageInnovation',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: ['/static/img/ios/inno-icon1.png', '/static/img/ios/inno-icon2.png', '/static/img/ios/inno-icon3.png'],
        descList: ['First iOS Keyboard Designed for Left-Handed User',
                   'Smart Saver for Password to Save Time and Reduce Frustration',
                   'Revolutionary Clipboard to Make Typing Faster'],
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
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/ios-bg1.png) no-repeat;
    position: relative;

    .effi-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: right;
      margin: 0 auto;
      position: relative;

      .effi-show {
        width: 615px;
        height: 881px;
        margin: 0 30px 0 0;
        display: inline-block;
        position: relative;
        left: 150px;
      }

      .effi-desc {
        position: absolute;
        top: 131px;
        left: 20px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular';
          font-size: 42px;
          color: #fff;
          margin: 0 0 42px 0;
          text-align: center;
        }

        .effi-btn {
          display: block;
          margin: 38px auto 0 auto;
          width: 258px;
          height: 75px;
          background: url(/static/img/ios/ios-btn.png) no-repeat;
          &:hover {
            background: url(/static/img/ios/ios-btn-hover.png);
          }
          &:active {
            background: url(/static/img/ios/ios-btn-active.png);
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
      background: url(/static/img/ios/1.png) no-repeat;
    }
  }
</style>
