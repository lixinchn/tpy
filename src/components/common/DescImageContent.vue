<template>
  <div class="desc-wrapper">
    <img :src="imageSrc" :style="autoStyleIcon">
    <p :style="autoStyle">{{desc}}</p>
  </div>
</template>

<script>
  export default {
    name: 'DescImageContent',
    props: {
      imageSrc: {
        type: String,
      },
      desc: {
        type: String,
      },
      color: {
        type: String,
        default: '#fff',
      },
      left: {
        type: String,
        default: '0px',
      },
      iconLeft: {
        type: String,
        default: '0px',
      },
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
      autoStyle() {
        return {
          color: this.color,
          position: 'relative',
          left: this.left,
        }
      },
      autoStyleIcon() {
        return {
          position: 'relative',
          left: this.iconLeft,
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .desc-wrapper {
    width: 100%;

    img {
      vertical-align: top;
      float: left;
      margin-right: 23px;
      height: 43px;
    }

    p {
      font-family: 'Arial MT Regular', Arial;
      font-size: 22px;
      margin: 0 0 31px 0;
      text-align: left;
    }
  }
</style>
