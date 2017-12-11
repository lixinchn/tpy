<template>
  <div class="slider-wrapper">
    <div class="sliders clearfix" ref="sliders">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['count', 'interval'],
    name: 'image-slider',
    data () {
      return {
        current: 0
      }
    },
    methods: {
      goto(index) {
        if (index === 'next') {
          this.current++
        } else if (index === 'prev') {
          this.current--
        } else {
          this.current = parseInt(index)
        }
        this.current = (this.current) % this.count
        this.$refs.sliders.style.marginLeft = '-' + (this.current * 100) + '%'
      }
    },

    mounted() {
      this.$refs.sliders.style.width = (this.count * 100) + '%'
      setInterval(() => {
        this.goto('next')
      }, this.interval)
    }
  }
</script>

<style lang="scss" scoped>
  .slider-wrapper {
    position: relative;
    overflow-x: hidden;
    width: 100%;
  }
  .slider-wrapper ::after {
    content: '';
    display: block;
    clear: both;
  }
  .slider-wrapper .sliders {
    transition: all 0.5s;
  }
  .slider-wrapper .sliders .slider {
    float: left;
  }
</style>
