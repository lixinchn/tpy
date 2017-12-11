<template>
  <div style="width: 100%; height: 240px; background: #290043; position: relative;">
    <a href="#" class="bottom-btn"></a>
  </div>
</template>

<script>
export default {
  name: 'PageGooglePlay',
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
  .bottom-btn {
    width: 390px;
    height: 127px;
    background: url(/static/img/ios/bottom-btn.png) no-repeat;
    display: block;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;

    &:hover {
      background: url(/static/img/ios/bottom-btn-hover.png) no-repeat;
    }

    &:active {
      background: url(/static/img/ios/bottom-btn-active.png) no-repeat;
    }
  }
</style>
