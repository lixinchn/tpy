<template>
  <div class="contact-wrapper" :style="{width: width}">
    <div class="c-banner-wrapper">
      <img v-for="(banner, index) in banners" :key="index" :src="'/static/img/contact/' + banner">
    </div>
    <div class="c-content-wrapper">
      <p style="font-size: 24px; margin-bottom: 40px;">Join our community</p>
      <p style="margin-bottom: 5px;">Is this the begining of a beautiful friendship? If you'd like to become a Typany partner,</p>
      <p>explore what we can do together, let us know in the form below.</p>
    </div>
    <contact-form :width="width"></contact-form>
  </div>
</template>

<script>
  import ContactForm from './ContactForm'

  export default {
    name: 'contact-body',
    components: {ContactForm},
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
    data () {
      return {
        banners: ['contact-banner-1.png', 'contact-banner-2.png', 'contact-banner-3.png']
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
  .contact-wrapper {
    margin: 0 auto;
    .c-banner-wrapper {
      text-align: left;
      &:first-child {
        margin-left: 60px;
      }
      img {
        margin-left: 30px;
      }
    }

    .c-content-wrapper {
      font-family: Helvetica;
      color: #454545;
      margin: 40px auto 38px auto;
      p {
        margin: 0;
        font-size: 18px;
      }
    }
  }
</style>
