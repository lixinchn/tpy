<template>
  <div>
    <div class="split"></div>
    <div class="contact-wrapper" :style="{width: width}">
      <div class="c-banner-wrapper">
        <a v-for="(banner, index) in banners" :key="index" :href="banner.href" :class="banner.class">
          <img :src="'/static/img/contact/' + banner.img" style="width: 205px;">
        </a>
      </div>
      <div class="c-content-wrapper">
        <p style="font-size: 24px; margin-bottom: 40px;">Join our community</p>
        <p style="margin-bottom: 5px;">Is this the begining of a beautiful friendship? If you'd like to become a Typany partner and</p>
        <p>explore what we can do together, let us know in the form below.</p>
      </div>
      <contact-form :width="width"></contact-form>
    </div>
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
        banners: [{img: 'contact-banner-1.png', href: 'mailto:typany_bd@sogou-inc.com', class: 'c-b-b'},
                  {img: 'contact-banner-2.png', href: 'mailto:typany_press@sogou-inc.com', class: 'c-b-p'},
                  {img: 'contact-banner-3.png', href: 'mailto:typany_keyboard@sogou-inc.com', class: 'c-h-s'},
                  {img: 'contact-banner-4.png', href: 'https://www.surveymonkey.com/r/B7GNSFZ', class: 'c-c'}]
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
  .split {
    width: 100%;
    height: 4px;
    background: url(/static/img/blog/split.png) no-repeat;
    background-size: 100% 100%;
  }

  .contact-wrapper {
    margin: 30px auto 0 auto;
    .c-banner-wrapper {
      text-align: left;
      &:first-child {
        margin-left: 55px;
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

  .c-b-b {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=contact_b_b&action=click);
      display: none;
    }
  }

  .c-b-p {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=contact_b_p&action=click);
      display: none;
    }
  }

  .c-h-s {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=contact_h_s&action=click);
      display: none;
    }
  }

  .c-c {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=contact_c_c&action=click);
      display: none;
    }
  }
</style>
