<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <android-body :width="maxWidth"></android-body>
    <common-tail :width="maxWidth"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import AndroidBody from './android/AndroidBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'android',
    components: {CommonHeader, AndroidBody, CommonTail},
    data () {
      return {
        maxWidth: '1080px',
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
</style>
