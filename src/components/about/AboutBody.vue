<template>
  <div class="about-wrapper">
    <div style="margin: 0 auto;" :style="{width: width}">
      <div class="content">
        <p class="title">ABOUT TYPANY</p>
        <p style="margin-bottom: 20px;">What would you do if other people suddenly couldn't understand you?</p>
        <p style="margin-bottom: 20px;">What would you do if you couldn't understand other people</p>
        <p style="margin-bottom: 20px;">Indeed the people are one and they all have one language, and this is what they begin to do:</p>
        <p style="margin-bottom: 40px; font-size: 20px;">INSTALL TYPANY TO REMOVE LANGUAGE BARRIERS.</p>
        <p style="margin-bottom: 40px;">Typany is the developer to make your device better than ever with a customized keyboard that suits your style</p>
        <p style="margin-bottom: 40px;">Typany Keyboard designed for efficient typing experience and easier communication for each user. Smart auto-correction, accurate word prediction, countless DIY combination, intelligent calculation during typing...</p>
        <p style="margin-bottom: 20px;">Typany Keyboard creates style community to define your own character to more interpersonal communication</p>
      </div>
    </div>
    <div class="banner">
      <div class="b-content">
        <p style="font-size: 18px; margin: 0 auto 24px auto; left: 50%; top: 100px; transform: translate(-50%, -50%)">We're still striving for more improvement and innovation.</p>
        <p style="font-size: 30px; left: 50%; top: 140px; transform: translate(-50%, -50%)">Typany Keyboard is always here to hear your voice.</p>
      </div>
      <div class="b-bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about-body',
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
    data () {
      return {
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
  .about-wrapper {
    text-align: left;
    width: 100%;
    background-color: rgba(69, 69, 69, 0.03);
    padding: 48px 0px 0px 0px;

    p {
      margin: 0;
      font-family: Helvetica;
      font-size: 18px;
      color: #454545
    }

    .content {
      margin: 0 10px 0 80px;
      width: 750px;
      .title {
        margin: 0 0 58px 0;
        font-size: 24px;
      }
    }

    .banner {
      width: 100%;
      height: 255px;
      background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/about-back1.png) no-repeat;
      background-size: 100% 100%;
      position: relative;

      .b-content {
        font-family: Helvetica;
        p {
          color: #fff;
          position: absolute;
        }
      }
    }

    .b-bg {
      background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/about-back2.png) no-repeat;
      width: 382px;
      height: 255px;
      position: absolute;
      right: 180px;
    }
  }
</style>
