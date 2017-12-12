<template>
  <div class="wrapper">
    <p>Opps! But You May Also Like the content without finding the first article!</p>
    <div class="split"></div>
  </div>
</template>

<script>
  export default {
    name: 'blog-no-results',
    components: {},
    props: {
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
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 156px;
    line-height: 156px;
    text-align: center;
    font-family: Helvetica;
    font-size: 16px;
    color: #454545;

    .split {
      width: 96%;
      height: 1px;
      background: #e5e5e5;
    }
  }
</style>
