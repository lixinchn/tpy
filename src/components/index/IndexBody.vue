<template>
    <slider animation="normal">
      <slider-item v-for="(img, index) in imageList" :key="index">
        <img :src="img" style="width: 100%;">
      </slider-item>
    </slider>
</template>

<script>
  import {Slider, SliderItem} from '../module/image-slider'

  export default {
    name: 'index-body',
    components: {Slider, SliderItem},
    data () {
      return {
        imageList: ['/static/img/index-back-1.png', '/static/img/index-back-2.png', '/static/img/index-back-3.png'],
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
  .slider {

  }
</style>
