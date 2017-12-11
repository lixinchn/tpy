<template>
  <div class="exp-wrapper" :style="{height: pageHeight}">
    <div class="exp-c-wrapper" :style="{width: width}">
      <div class="exp-desc">
        <p class="title">EXPRESSION</p>
        <desc-image-content v-for="(icon, index) in iconList" :imageSrc="icon" :desc="descList[index]" :key="index" :color="fontColor">
        </desc-image-content>
      </div>
      <img class="exp-show" src="/static/img/android/expression.png">
    </div>
    <div class="bg-component"></div>
  </div>
</template>

<script>
  import DescImageContent from './DescImageContent'
  export default {
    name: 'PageExpression',
    components: {DescImageContent},
    props: {
      width: {type: String},
      pageHeight: {type: String},
    },
    data () {
      return {
        iconList: ['/static/img/android/exp-icon1.png', '/static/img/android/exp-icon2.png'],
        descList: ['Discover the world of pop culture - memes, TV, Movies, Music and more',
                   'Create Your Own Emoji with Build-in Emoji Maker'],
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
  .exp-wrapper {
    width: 100%;
    position: relative;

    .exp-c-wrapper {
      z-index: 10;
      height: 100%;
      text-align: right;
      margin: 0 auto;
      position: relative;

      .exp-show {
        width: 666px;
        height: 869px;
        display: inline-block;
        position: relative;
        left: 150px;
      }

      .exp-desc {
        position: absolute;
        top: 231px;
        left: 20px;
        width: 500px;
        .title {
          font-family: 'Arial MT Regular';
          font-size: 42px;
          color: #6b6b6b;
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
      background: url(/static/img/android/2.png) no-repeat;
    }
  }
</style>
