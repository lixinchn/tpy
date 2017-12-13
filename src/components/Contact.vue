<template>
  <div class="index">
    <common-header :width="maxWidth"></common-header>
    <contact-body :width="maxWidth"></contact-body>
    <common-tail :width="maxWidth" :top="top"></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/Header'
  import ContactBody from './contact/ContactBody'
  import CommonTail from './common/Tail'


  export default {
    name: 'contact',
    components: {CommonHeader, ContactBody, CommonTail},
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
