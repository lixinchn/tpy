<template>
  <div class="desc-wrapper">
    <img :src="imageSrc">
    <p :style="{color: color}">{{desc}}</p>
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
  .desc-wrapper {
    width: 100%;

    img {
      width: 56px;
      height: 56px;
      vertical-align: top;
      float: left;
      margin-right: 23px;
    }

    p {
      font-family: 'Arial MT Regular';
      font-size: 22px;
      margin: 0 0 58px 0;
      text-align: left;
    }
  }
</style>
