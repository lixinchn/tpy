<template>
  <div class="slider-wrapper">
    <img :src="img" style="width: 100%; position: relative; top: 8px;">
    <div class="content-wrapper">
      <p class="i-c-title">{{title}}</p>
      <div class="i-c-content-wrapper">
        <p class="i-c-content">{{content}}</p>
        <a class="i-c-d-fb" href="http://typany.com/api/go.php?id=3"></a>
      </div>
      <a class="i-c-d-button i-c-g-play" href="http://typany.com/api/go.php?id=1"></a>
      <a class="i-c-d-button i-c-a-store" href="http://typany.com/api/go.php?id=2"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-slider',
    props: {
      img: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
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
  .slider-wrapper {
    position: relative;

    .content-wrapper {
      height: 300px;
      width: 800px;
      position: absolute; left: 0; top: 0; right: 0; bottom: 0;
      margin: auto;

      .i-c-title {
        font-size:  51px;
        font-family: 'Avenir Black';
        color: #fff;
        margin: 0px auto 26px auto;
      }

      .i-c-content-wrapper {
        margin-bottom: 50px;
        height: 35px;
        line-height: 35px;

        .i-c-content {
          font-size: 20px;
          font-family: 'Avenir Book';
          color: #fff;
          margin: 0;
          display: inline-block;
        }
      }

      .i-c-d-button {
        width: 170px;
        height: 55px;
        display: inline-block;
        cursor: pointer;
      }

      .i-c-g-play {
        background: url(/static/img/index/google-play.png) no-repeat;

        &:hover {
          background-position: -170px 0;
        }

        &:active {
          background-position: -340px 0;
        }
      }

      .i-c-a-store {
        background: url(/static/img/index/app-store.png) no-repeat;

        &:hover {
          background-position: -170px 0;
        }

        &:active {
          background-position: -340px 0;
        }
      }

      .i-c-d-fb {
        background: url(/static/img/index/fb.png) no-repeat;
        width: 33px;
        height: 33px;
        vertical-align: middle;
        margin-left: 18px;
        display: inline-block;
      }
    }
  }
</style>
