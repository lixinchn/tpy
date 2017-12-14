<template>
  <div style="width: 100%; height: 236px; background: #290043; position: relative;">
    <a href="http://typany.com/api/go.php?id=1" class="bottom-btn"></a>
    <div style="position: absolute; bottom: 0px; z-index: 100; left: 36px; right: 36px;">
      <div style="background: #fff; opacity: 0.1; width: 100%; height: 3px; "></div>
    </div>
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
    background: url(/static/img/android/bottom-btn.png) no-repeat;
    display: block;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;

    &:hover {
      background: url(/static/img/android/bottom-btn-hover.png) no-repeat;
    }

    &:active {
      background: url(/static/img/android/bottom-btn-active.png) no-repeat;
    }
  }
</style>
