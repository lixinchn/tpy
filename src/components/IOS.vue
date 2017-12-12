<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <IOSBody :width="maxWidth"></IOSBody>
    <common-tail :width="maxWidth"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import IOSBody from './iOS/Body'
  import CommonTail from './common/Tail'


  export default {
    name: 'ios',
    components: {CommonHeader, IOSBody, CommonTail},
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
