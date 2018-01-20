<template>
  <div style="width: 100%; height: 236px; background: #290043; position: relative;">
    <a href="http://typany.com/api/go.php?id=2" class="bottom-btn"></a>
  </div>
</template>

<script>
export default {
  name: 'PageAppStore',
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
      background-position: -390px 0;
    }

    &:active {
      background-position: -780px 0;
    }

    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=ios_a_bottom&action=click);
      display: none;
    }
  }
</style>
