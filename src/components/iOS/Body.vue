<template>
  <div class="a-b-wrapper">
    <page-innovation :width="width" :pageHeight="pageHeight"></page-innovation>
    <page-personalization :width="width" :pageHeight="pageHeight"></page-personalization>
    <page-expression :width="width" :pageHeight="pageHeight"></page-expression>
    <page-a-i :width="width" :pageHeight="pageHeight"></page-a-i>
    <PageAPPStore></PageAPPStore>
  </div>
</template>

<script>
  import PageAI from './PageAI'
  import PageExpression from './PageExpre'
  import PagePersonalization from './PagePersonalization'
  import PageInnovation from './PageInnovation'
  import PageAPPStore from './PageAPPStore'

  export default {
    name: 'ios-body',
    components: {PageAI, PageExpression, PagePersonalization, PageInnovation, PageAPPStore},
    props: {
      width: {
        type: String,
        default: '100%',
      },
      pageHeight: {
        type: String,
        default: '880px',
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
