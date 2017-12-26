<template>
    <slider animation="normal" :interval="5000">
      <slider-item v-for="(slice, index) in sliceInfo" :key="index">
        <index-slider :img="slice.bgUrl" :title="slice.title" :content="slice.subTitle" style="width: 100%;"></index-slider>
      </slider-item>
    </slider>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Slider, SliderItem} from '../module/image-slider'
  import IndexSlider from './IndexSlider'

  export default {
    name: 'index-body',
    components: {Slider, SliderItem, IndexSlider},
    data () {
      return {
      }
    },

    methods: {
      getSliceInfo() {
        this.$store.dispatch('INDEX_GetSliceInfo').then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          console.log(data)
        })
      }
    },

    created() {
      this.getSliceInfo()
    },

    computed: {
      ...mapGetters([
        'sliceInfo',
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  .slider {

  }
</style>
