<template>
    <slider animation="normal" :interval="5000" @changeSlide="onSlideChanged" ref="slider">
      <slider-item v-for="(slice, index) in sliceInfo" :key="index">
        <index-slider :img="slice.bgUrl" :title="slice.title" :content="slice.subTitle" style="width: 100%;"></index-slider>
      </slider-item>

      <div class="highlight-tag-wrapper">
        <div v-for="(slice, index) in sliceInfo"
             :key="highlight(index)"
             v-bind:class="[currentIndex === index ? 'chosen' : 'not-chosen', 'highlight-tag']"
             @click="onTagClick(index)"></div>
      </div>
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
        currentIndex: 0,
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
      },
      highlight(index) {
        return 'highlight' + index
      },
      onSlideChanged(changeInfo) {
        this.currentIndex = changeInfo.index
      },
      onTagClick(index) {
        this.$refs.slider.indicatorHandle(index)
      },
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
    .highlight-tag-wrapper {
      left: 0px;
      right: 0px;
      bottom: 60px;
      height: 10px;
      position: absolute;

      .highlight-tag {
        width: 6px;
        height: 6px;
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
      }

      .chosen {
        background: url(/static/img/index/chosen.png) no-repeat;
      }

      .not-chosen {
        background: url(/static/img/index/not-chosen.png) no-repeat;
      }
    }
  }
</style>
