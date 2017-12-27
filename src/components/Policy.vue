<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <policy-body :width="maxWidth"></policy-body>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import PolicyBody from './policy/PolicyBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'policy',
    components: {CommonHeader, PolicyBody, CommonTail},
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
