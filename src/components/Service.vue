<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <service-body :width="maxWidth"></service-body>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import ServiceBody from './service/ServiceBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'service',
    components: {CommonHeader, ServiceBody, CommonTail},
    data () {
      return {
        maxWidth: '1080px',
        top: '0px',
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
