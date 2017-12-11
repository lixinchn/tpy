<template>
    <slider animation="normal" :interval="300000">
      <slider-item v-for="(img, index) in imageList" :key="index">
        <index-slider :img="img" :title="titleList[index]" :content="contnetList[index]" style="width: 100%;"></index-slider>
      </slider-item>
    </slider>
</template>

<script>
  import {Slider, SliderItem} from '../module/image-slider'
  import IndexSlider from './IndexSlider'

  export default {
    name: 'index-body',
    components: {Slider, SliderItem, IndexSlider},
    data () {
      return {
        imageList: ['/static/img/index/index-back-1.png', '/static/img/index/index-back-2.png', '/static/img/index/index-back-3.png'],
        titleList: ['THE STORY POWERED BY YOU', 'TYPANY CREATORS', 'WHAT IS TYPING'],
        contnetList: ['Express yourself without boundaries but Typany',
                  'Have your own style with infinite creatives',
                  'The A.I. technology on Typany is more than intelligence'],
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
