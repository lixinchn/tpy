<template>
  <div class="a-b-wrapper">
    <page-a-i :width="width" :pageHeight="pageHeight"></page-a-i>
    <page-expression :width="width" :pageHeight="pageHeight"></page-expression>
    <page-personalization :width="width" :pageHeight="pageHeight"></page-personalization>
    <page-efficiency :width="width" :pageHeight="pageHeight"></page-efficiency>
    <page-google-play></page-google-play>
  </div>
</template>

<script>
  import PageAI from './PageAI'
  import PageExpression from './PageExpre'
  import PagePersonalization from './PagePersonalization'
  import PageEfficiency from './PageEfficiency'
  import PageGooglePlay from './PageGooglePlay'

  export default {
    name: 'android-body',
    components: {PageAI, PageExpression, PagePersonalization, PageEfficiency, PageGooglePlay},
    props: {
      width: {
        type: String,
        default: '100%',
      },
      pageHeight: {
        type: String,
        default: '660px',
      }
    },
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
  .a-b-wrapper {
    width: 100%;
  }
</style>
