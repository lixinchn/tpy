<template>
  <div class="b-c-wrapper" :style="{width: width}">
    <form v-model="commentForm" ref="commentForm">
      <p class="b-c-title">LEAVE A REPLY</p>
      <div class="b-c-split"></div>
      <p style="margin: 32px 0 30px 0;">Your email address will not be published. Required fields are marked*</p>
      <p class="b-c-label">Comment</p>
      <textarea style="height: 215px;" class="b-c-input" v-model="commentForm.comment"></textarea>
      <p class="b-c-label">Name*</p>
      <input type="text" style="" class="b-c-input" :class="{'b-c-input-error': errorHint.name}" v-model.trim="commentForm.name">
      <p class="b-c-label">Email*</p>
      <input type="text" style="" class="b-c-input" :class="{'b-c-input-error': errorHint.email}" v-model.trim="commentForm.email">
      <p class="b-c-label">Facebook</p>
      <input type="text" style="" class="b-c-input" v-model="commentForm.facebook">
      <div style="width: 100%; overflow: auto;">
        <div v-bind:class="autoClass" @click="onSubmit">Post Comment</div>
      </div>
    </form>
  </div>
</template>

<script>
  import {createGetParams} from '../../utils/params'

  export default {
    name: 'blog-comment',
    components: {},
    props: {
      width: {
        type: String,
        default: '100%',
      },
      blogId: {
      }
    },
    data () {
      return {
        commentForm: {
          comment: '',
          name: '',
          email: '',
          facebook: '',
        },
        errorHint: {
          name: false,
          email: false,
        }
      }
    },

    methods: {
      onSubmit() {
        if (!this.needCheck())
          return
        if (!this.emailCheck())
          return
        const data = {
          id: this.blogId,
          name: this.commentForm.name,
          email: this.commentForm.email,
          res: this.commentForm.comment,
          fb: this.commentForm.facebook,
        }
        this.$store.dispatch('BLOG_Comment', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }
          this.$message({
            message: 'Success',
            type: 'success'
          })
          this.clearForm()
        }).catch(err => {
          this.$message.error(err)
        })
      },

      clearForm() {
        Object.keys(this.commentForm).forEach(key => {
          this.commentForm[key] = ''
        })
      },

      needCheck() {
        let canSubmit = true
        Object.keys(this.errorHint).forEach(key => {
          this.errorHint[key] = !this.commentForm[key]
          canSubmit &= !this.errorHint[key]
        })
        return canSubmit
      },

      emailCheck() {
        const canSubmit = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.commentForm.email)
        this.errorHint.email = !canSubmit
        return canSubmit
      },
    },

    created() {

    },

    computed: {
      autoClass() {
        return [this.commentForm.name && this.commentForm.email && this.emailCheck() ? 'b-c-btn-normal' : 'b-c-btn-disabled', 'b-c-btn']
      },
    }
  }
</script>

<style lang="scss" scoped>
  .b-c-wrapper {
    padding: 10px 56px;
    background: #f9f9f9;
    text-align: left;
    margin: 20px auto 30px auto;
    font-size: 16px;
    font-family: Arial, "Avenir Book";

    .b-c-title {
    }

    .b-c-split {
      width: 100%;
      height: 1px;
      background: #e5e5e5;
    }

    .b-c-input {
       border: 1px solid #e7e7e7;
       width: 100%;
       max-width: 100%;
       height: 32px;
       font-size: 16px;
       padding: 0 5px;
    }

    .b-c-input-error {
      border: 1px solid red;
    }

    .b-c-label {
      margin-bottom: 0px;
    }

    .b-c-btn {
      width: 133px;
      height: 40px;
      cursor: pointer;
      line-height: 40px;
      font-family: 'Myriad Pro', Myriad, Helvetica;
      -webkit-user-select: none;
      margin-top: 30px;
      cursor: pointer;
      float: right;
      border-radius: 4px;
      color: #fff;
      text-align: center;
    }

    .b-c-btn-normal {
      background: #1aa0fb;
      &:hover {
        background: #37b6fc;
      }
      &:active {
        background: #1589dc;
      }
    }

    .b-c-btn-disabled {
      background: #dbdbdb;
    }
  }
</style>
